import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './core/app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaterialModule } from './core/material.module';
import { ListAlumnoComponent } from './components/Alumnos/list-alumno/list-alumno.component';
import { MensajeConfirmacionComponent } from './components/shared/mensaje-confirmacion/mensaje-confirmacion.component';
import { AddEditAlumnoComponent } from './components/Alumnos/add-edit-alumno/add-edit-alumno.component';
import { LoginComponent } from './components/login/login.component';
import { AddEditUsuarioComponent } from './components/Usuarios/add-edit-usuario/add-edit-usuario.component';
import { ListUsuarioComponent } from './components/Usuarios/list-usuario/list-usuario.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { AddEditCursoComponent } from './components/Cursos/add-edit-curso/add-edit-curso.component';
import { ListCursoComponent } from './components/Cursos/list-curso/list-curso.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListAlumnoComponent,
    MensajeConfirmacionComponent,
    AddEditAlumnoComponent,
    LoginComponent,
    AddEditUsuarioComponent,
    ListUsuarioComponent,
    SideNavComponent,
    AddEditCursoComponent,
    ListCursoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
