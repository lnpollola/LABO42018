<?php

include_once $_SERVER['DOCUMENT_ROOT']."/PHP/Entidades/persona.php";
include_once $_SERVER['DOCUMENT_ROOT']."/PHP/Interfaces/IApiUsable.php";
include_once $_SERVER['DOCUMENT_ROOT']."/PHP/EntidadesPDO/personaPDO.php";

class personaAPI extends persona implements IApiUsable{

    /**
    * @api {get} /personas TraerTodos
    * @apiVersion 0.1.0
    * @apiName TraerTodos
    * @apiGroup personaAPI
    * @apiDescription Trae informacion de todos los personas
    * @apiParam {String} [CSV] Opcional, se coloca este parametro si se quiere guardar el resultado de la busqueda en un archivo CSV. El valor que se pasa en este parametro sera el nombre del archivo guardado en API/PHP/Busquedas
    * @apiParam {String} [PDF] Opcional, se coloca este parametro si se quiere guardar el resultado de la busqueda en un archivo PDF. El valor que se pasa en este parametro sera el nombre del archivo guardado en API/PHP/Busquedas
    *
    * @apiExample Como usarlo:
    *   ->get('[/]', \personaAPI::class . ':TraerTodos')
    * @apiSuccess {Object[]} personas Trae un array de personas con todos los datos de los mismos
    */
    public function TraerTodos($request, $response, $args)
    {
        $personas = personaPDO::traerpersonas();
        $response = $response->withJson($personas, 200, JSON_UNESCAPED_UNICODE);  
        return $response;
    }

    /**
    * @api {get} /personas TraerUno
    * @apiVersion 0.1.0
    * @apiName TraerUno
    * @apiGroup personaAPI
    * @apiDescription Trae informacion de un persona, buscado por id
    *
    * @apiParam {Number} id Id del persona a buscar
    *
    * @apiExample Como usarlo:
    *   ->get('/{id}', \personaAPI::class . ':traerUno')
    * @apiSuccess {Object[]} persona Informacion del persona encontrado
    */
    public function TraerUno($request, $response, $args)
    {
        $id = $args['id'];
        $persona = personaPDO::traerpersonaPorId($id);
        $response = $response->withJson($persona, 200);  
        return $response;
    }

    /**
    * @api {post} /personas CargarUno
    * @apiVersion 0.1.0
    * @apiName CargarUno
    * @apiGroup personaAPI
    * @apiDescription (Admin) Da de alta un nuevo persona
    *
    * @apiParam {String} email  Email del persona
    * @apiParam {String} password Password del persona
    * @apiParam {String="dia","tarde","noche"} turno Turno del persona
    * @apiParam {String="femenino","masculino"} sexo Sexo del persona
    * @apiParam {String="user","admin"} perfil Perfil del persona
    *
    * @apiExample Como usarlo:
    *   ->post('[/]', \vehiculoAPI::class . ':CargarUno')
    * @apiSuccessExample {json} Alta exitosa:
    *     HTTP/1.1 200 OK
    *     {
    *       "Estado" => "Ok",
    *       "Mensaje" => "persona dado de alta con exito"
    *     }
    * @apiErrorExample Datos incorrectos o faltantes:
    *     {
    *       "Estado" => "Error",
    *       "Mensaje" => "Hay parametros faltantes"
    *     }
    */
    public function CargarUno($request, $response, $args)
    { 
        $ArrayDeParametros = $request->getParsedBody();

        $persona = new persona();
        $persona->nombre = $ArrayDeParametros['nombre'];
        $persona->mail = $ArrayDeParametros['mail'];
        $persona->sexo = $ArrayDeParametros['sexo'];
        $persona->password = $ArrayDeParametros['password'];
        $persona->foto = $ArrayDeParametros['foto'];

        if(personaPDO::altapersona($persona) != 1){
            $newBody = [
                "Estado" => "Error",
                "Mensaje" => "No se pudo dar de alta el persona"
            ];

            $response->getBody()->write(json_encode($newBody));
        }
        else{
            $newBody = [
                "Estado" => "Ok",
                "Mensaje" => "persona dado de alta con exito"
            ];

            $response->getBody()->write(json_encode($newBody));
        }

        return $response;
    }

    /**
    * @api {delete} /personas BorrarUno
    * @apiVersion 0.1.0
    * @apiName BorrarUno
    * @apiGroup personaAPI
    * @apiDescription (Admin) Da de baja un persona
    *
    * @apiParam {Number} id  Id del persona a dar de baja
    *
    * @apiExample Como usarlo:
    *   ->delete('[/]', \personaAPI::class . ':BorrarUno')
    * @apiSuccessExample {json} Baja exitosa:
    *     HTTP/1.1 200 OK
    *     {
    *       "Estado" => "Ok",
    *       "Mensaje" => "persona dado de baja con exito"
    *     }
    * @apiErrorExample Datos incorrectos o faltantes:
    *     {
    *       "Estado" => "Error",
    *       "Mensaje" => "Hay parametros faltantes"
    *     }
    * @apiErrorExample No se encontro el id:
    *     {
    *       "Estado" => "Error",
    *       "Mensaje" => "No se pudo dar de baja el persona"
    *     }
    */
    public function BorrarUno($request, $response, $args)
    {
        $ArrayDeParametros = $request->getParsedBody();
        $id = $ArrayDeParametros['id'];

        if(personaPDO::bajapersona($id) != 1){
            $newBody = [
                "Estado" => "Error",
                "Mensaje" => "No se pudo dar de baja el persona"
            ];

            $response->getBody()->write(json_encode($newBody));
        }
        else{
            $newBody = [
                "Estado" => "Ok",
                "Mensaje" => "persona dado de baja con exito"
            ];

            $response->getBody()->write(json_encode($newBody));
        }

        return $response;
    }

    /**
    * @api {put} /personas ModificarUno
    * @apiVersion 0.1.0
    * @apiName ModificarUno
    * @apiGroup personaAPI
    * @apiDescription (Admin) Modifica un persona
    *
    * @apiParam {Number} id Id del persona a modificar
    * @apiParam {String} email  Email del persona
    * @apiParam {String} password Password del persona
    * @apiParam {String="dia","tarde","noche"} turno Turno del persona
    * @apiParam {String="femenino","masculino"} sexo Sexo del persona
    * @apiParam {String="user","admin"} perfil Perfil del persona
    *
    * @apiExample Como usarlo:
    *   ->put('[/]', \personaAPI::class . ':ModificarUno')
    * @apiSuccessExample {json} Modificacion exitosa:
    *     HTTP/1.1 200 OK
    *     {
    *       "Estado" => "Ok",
    *       "Mensaje" => "persona modificado con exito"
    *     }
    * @apiErrorExample Datos incorrectos o faltantes:
    *     {
    *       "Estado" => "Error",
    *       "Mensaje" => "Hay parametros faltantes"
    *     }
    * @apiErrorExample No se encontro el id:
    *     {
    *       "Estado" => "Error",
    *       "Mensaje" => "No se pudo modificar el persona"
    *     }
    */
    public function ModificarUno($request, $response, $args)
    { 
        $ArrayDeParametros = $request->getParsedBody();

        $persona = new persona();
        $persona->nombre = $ArrayDeParametros['nombre'];
        $persona->mail = $ArrayDeParametros['mail'];
        $persona->sexo = $ArrayDeParametros['sexo'];
        $persona->password = $ArrayDeParametros['password'];
        $persona->foto = $ArrayDeParametros['foto'];
        $persona->id = $ArrayDeParametros['id'];

        if(personaPDO::modificarpersona($persona) != 1){
            $newBody = [
                "Estado" => "Error",
                "Mensaje" => "No se pudo modificar el persona"
            ];

            $response->getBody()->write(json_encode($newBody));
        }
        else{
            $newBody = [
                "Estado" => "Ok",
                "Mensaje" => "persona modificado con exito"
            ];

            $response->getBody()->write(json_encode($newBody));
        }

        return $response;
    }

}


?>