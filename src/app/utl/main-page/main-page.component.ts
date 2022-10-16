import { Component, OnInit } from '@angular/core';

interface AlumnoUtl{
  nombre:string;
  edad:number;
}


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent{
  regAlum:Alumnosutl[]=[
    {
      nombre:'Sara',
	    edad: 22,
    },
    {
      nombre:'Alejandro',
	    edad: 21,
    },
    {
      nombre:'Liliana',
	    edad: 15,
    },
    {
      nombre:'Litzy',
	    edad: 21,
    },
  ]

  resAlumno:regAlum={
    nombre:'',
    edad:0
  }

  agregar(){
    this.alumnosutl.push(this.resAlumno);
    this.resAlumno={
      nombre:'',
      edad:0
    }
  }
}
