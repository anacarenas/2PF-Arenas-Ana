import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  ngOnInit(): void {

  }

  adminNav = [
    {name:"Cerrar Sesion" , route: "", icon:"logout"},
    {name:"Usuarios" , route: "/listUsuarios", icon:"settings_accessibility"},
    {name:"Alumnos" , route: "/listAlumnos", icon:"emoji_people"},
    {name:"Cursos" , route: "/listCursos", icon:"browse_activity"},
  ]
  userNav = [
    {name:"Cerrar Sesion" , route: "", icon:"logout"},
    {name:"Alumnos" , route: "/listAlumnos", icon:"emoji_people"},
    {name:"Cursos" , route: "/listCursos", icon:"browse_activity"},
  ]
  noneNav = [
    {name:"Iniciar Sesion" , route: "", icon:"login"},
  ]

  constructor(private usuarioService:UsuarioService) {
    console.log(this.isAdmin);
  }
  isNone=this.usuarioService.rolActual==0;

  isUser=this.usuarioService.rolActual==1;

  isAdmin =this.usuarioService.rolActual==2;

}
