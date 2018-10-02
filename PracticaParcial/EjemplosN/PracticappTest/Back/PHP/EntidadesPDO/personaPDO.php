<?php

include_once $_SERVER['DOCUMENT_ROOT']."/PHP/Entidades/persona.php";
include_once $_SERVER['DOCUMENT_ROOT']."/PHP/SQL/AccesoDatos.php";

abstract class personaPDO{

	public static function traerpersonas()
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta
		(
			 "
				SELECT * FROM personas AS emp
			 "
		);
		$consulta->execute();			
		return $consulta->fetchAll(PDO::FETCH_CLASS, "persona");		
	}

	public static function traerpersonaPorId($id)
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta = $objetoAccesoDato->RetornarConsulta
		("
			SELECT * FROM personas WHERE id=:id
		");
		$consulta->bindValue(':id', $id, PDO::PARAM_INT);	
		$consulta->execute();			
		return $consulta->fetchAll(PDO::FETCH_CLASS, "persona");		
	}

	public static function altapersona($persona)
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
		$returnValue = 1;

		$consulta = $objetoAccesoDato->RetornarConsulta
		(
			"
				INSERT INTO personas(nombre, mail, sexo, password, foto)
				VALUES(:nombre,:mail,:sexo,:password,:foto)
			"
		);

		$consulta->bindValue(':nombre',$persona->nombre, PDO::PARAM_STR);
		$consulta->bindValue(':mail', $persona->mail, PDO::PARAM_STR);
		$consulta->bindValue(':sexo', $persona->sexo, PDO::PARAM_STR);
		$consulta->bindValue(':password', $persona->password, PDO::PARAM_STR);
		$consulta->bindValue(':foto', $persona->foto, PDO::PARAM_STR);	

		try{

			$returnValue = $consulta->execute();

		} catch (Exception $e){

			$returnValue = 0;

		}

		return $returnValue;
	}

	public static function bajapersona($id)
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 

		$consulta = $objetoAccesoDato->RetornarConsulta
		(
			"
				DELETE FROM personas WHERE id=:id
			"
		);
		$consulta->bindValue(':id', $id, PDO::PARAM_INT);

		try{

			$consulta->execute();
			$returnValue = $consulta->rowCount();

		} catch (Exception $e){

			$returnValue = 0;

		}

		return $returnValue;
	}

	public static function modificarpersona($persona)
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
		$returnValue = 1;

		$consulta = $objetoAccesoDato->RetornarConsulta
		(
			"
				UPDATE personas
				SET 
					nombre=:nombre, 
					mail=:mail, 
					sexo=:sexo, 
					password=:password, 
					foto=:foto
				WHERE id=:id
			"
		);

		$consulta->bindValue(':nombre',$persona->nombre, PDO::PARAM_STR);
		$consulta->bindValue(':mail', $persona->mail, PDO::PARAM_STR);
		$consulta->bindValue(':sexo', $persona->sexo, PDO::PARAM_STR);
		$consulta->bindValue(':password', $persona->password, PDO::PARAM_STR);
		$consulta->bindValue(':foto', $persona->foto, PDO::PARAM_STR);	
		$consulta->bindValue(':id', $persona->id, PDO::PARAM_INT);	

		try{

			$consulta->execute();
			$returnValue = $consulta->rowCount();

		} catch (Exception $e){

			$returnValue = 0;

		}

		return $returnValue;
	}

	public static function traerpersonaPormailYPassword($mail,$password)
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta = $objetoAccesoDato->RetornarConsulta
		("
			SELECT id FROM personas WHERE mail=:mail AND password=:password
		");
		$consulta->bindValue(':mail', $mail, PDO::PARAM_STR);
		$consulta->bindValue(':password', $password, PDO::PARAM_STR);	
		$consulta->execute();			
		$queryResponse = $consulta->fetch(PDO::FETCH_ASSOC);
		return $queryResponse["id"];		
	}

	public static function traerIdpersonaPormail($mail)
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta = $objetoAccesoDato->RetornarConsulta
		("
			SELECT id FROM personas WHERE mail=:mail
		");
		$consulta->bindValue(':mail', $mail, PDO::PARAM_STR);
		$consulta->execute();			
		$queryResponse = $consulta->fetch(PDO::FETCH_ASSOC);
		return $queryResponse["id"];		
	}
	

	/* ============================================================================================================== */

	public static function personaValidation($mail, $password)
	{
		$returnValue = 0;

		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();
		$consulta =$objetoAccesoDato->RetornarConsulta
		(
			 "
				SELECT id FROM personas WHERE mail=:mail AND password=:password
			 "
		);
		$consulta->bindValue(':mail', $mail, PDO::PARAM_STR);
		$consulta->bindValue(':password', $password, PDO::PARAM_STR);	
		$consulta->execute();

		return $consulta->rowCount();
	}


}

?>