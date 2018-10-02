<?php
class persona
{
    public $id;
    public $nombre;
    public $mail;
    public $sexo;
    public $password;
    public $foto;

  	public function __toString()
    {
      return $this->id." ".$this->nombre." ".$this->mail." ".$this->sexo." ".$this->password." ".$this->foto;
    }

    public function expose() {
      return get_object_vars($this);
    }

}


?>