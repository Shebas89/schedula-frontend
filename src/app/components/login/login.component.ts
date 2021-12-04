import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //Atributos
  public formaUsuarios: FormGroup = new FormGroup({});


  //Constructor
  constructor(private usuariosService: UsuariosService, private formBuilder: FormBuilder, private router: Router) { }


  //Metodo al iniciar componente
  ngOnInit(): void {
    this.buildUsuarios();
  }


  //Metodo para crear grupo de inputs del formulario registro
  private buildUsuarios(){
    this.formaUsuarios = this.formBuilder.group({
      email: ['', [Validators.requiredTrue, Validators.email, Validators.maxLength(30)]],
      password: ['', [Validators.requiredTrue, Validators.maxLength(10)]]
    });
  }


  //Metodo para validar usuario: llamar peticion HTTP
  public validarUsuario(){
    console.log("test pase");
    console.log(this.formaUsuarios.value);
    this.usuariosService.validarUsuario(this.formaUsuarios.value).then(response =>{
      //Backend retorna mensaje correct e id, incorrect o not found
      alert(response);
      console.log(response);
      if(response.message == 'correct'){
        sessionStorage.setItem('idUsuario', (response.id).toString());
        this.router.navigate(['/']);
      }else{
        alert('Correo electrónico o contraseña incorrecto');
        this.buildUsuarios();
      }
    }).catch(error =>{
      console.log(error);
    })
  }

}
