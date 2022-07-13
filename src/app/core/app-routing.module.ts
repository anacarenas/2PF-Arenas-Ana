import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAlumnoComponent } from '../components/Alumnos/list-alumno/list-alumno.component';
import { AddEditAlumnoComponent } from '../components/Alumnos/add-edit-alumno/add-edit-alumno.component';
import { LoginComponent } from '../components/login/login.component';
import { AddEditCursoComponent } from '../components/Cursos/add-edit-curso/add-edit-curso.component';
import { ListCursoComponent } from '../components/Cursos/list-curso/list-curso.component';
import { AddEditUsuarioComponent } from '../components/Usuarios/add-edit-usuario/add-edit-usuario.component';
import { ListUsuarioComponent } from '../components/Usuarios/list-usuario/list-usuario.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'addAlumno', component: AddEditAlumnoComponent },
  { path: 'editAlumno/:id', component: AddEditAlumnoComponent },
  {path: 'listAlumnos',component: ListAlumnoComponent},
  { path: 'addCurso', component: AddEditCursoComponent },
  { path: 'editCurso/:id', component: AddEditCursoComponent },
  {path: 'listCursos',component: ListCursoComponent},
  { path: 'addUsuario', component: AddEditUsuarioComponent },
  { path: 'editUsuario/:id', component: AddEditUsuarioComponent },
  {path: 'listUsuarios',component: ListUsuarioComponent},
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
