import { AlertasService } from './../service/alertas.service';
import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  user: Usuario = new Usuario()
  senha: string

  constructor(
    private authService: AuthService,
    private router: Router,
    private alerta: AlertasService
  ) { }

  ngOnInit() {
  }

  conferirSenha(event: any) {
    this.senha = event.target.value
  }


  cadastrar() {
    if( this.senha === this.user.senha){
      this.authService.cadastrar(this.user).subscribe((resp: Usuario) => {
        this.user = resp
        this.router.navigate(['/login'])
        alert('Usuário cadastrado com sucesso!')
    })
    }else{
      alert('Sua senhas não conferem ')
    }
    
  }
}