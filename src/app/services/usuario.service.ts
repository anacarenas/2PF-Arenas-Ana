import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, filter, from, map, Subject } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})


export class UsuarioService {

  public rolActual:number=2;
  constructor() { }
  listUsuario:Usuario[]=[
    {usuario: "Jose", contraseña: "Ramirez", rolCode:1},
    {usuario: "Maria ", contraseña: "Guzman",rolCode:2},
    {usuario: "Juana ", contraseña: "Rojas", rolCode:1},
  ];

  editUsuario(Usuario: Usuario, idUsuario: number){
    this.listUsuario[idUsuario].usuario = Usuario.usuario;
    this.listUsuario[idUsuario].contraseña = Usuario.contraseña;
    this.listUsuario[idUsuario].rolCode = Usuario.rolCode;
  }

  usuarioSelected$ = new Subject<Usuario | null>();
  usuarios$ = new BehaviorSubject<Usuario[]>(this.listUsuario);


  addUsuario(usuario:Usuario){
    this.listUsuario.push(usuario)
    this.usuarios$.next(this.listUsuario)
  }

  getUsuarios(){
    return this.usuarios$.asObservable()
  }

  getUsuarioSelect(){
    return this.usuarioSelected$.asObservable()
  }

  selectUsuarioByIndex(index?: number){
    this.usuarioSelected$.next(index !== undefined ? this.listUsuario[index] : null)
  }

  deleteUsuarioByIndex(index?: number){
    this.listUsuario = this.listUsuario.filter((_, i) => index != i)
    this.usuarios$.next(this.listUsuario)
  }

  searchUsuariosByName(name: string){
    return from(this.listUsuario).pipe(
      filter((usuario)=>(usuario.usuario + ' ' + usuario.contraseña).toLowerCase().includes(name.toLowerCase())),
      map((usuario) => {
      return usuario}),
      catchError((error) => {throw new Error(error)})
    )
  }

  obtenerUsuario(index:number):Promise<Usuario>{
    return new Promise((resolve, rejects)=>{
      const usuario = this.listUsuario[index];
      if(usuario){
        return resolve(usuario)
      }
      rejects({mensaje: 'error al cargar el usuario'})
    })
    
  }
}
