import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss']
})
export class CadastroUsuarioComponent implements OnInit {

  model = new Usuario();

  public planos = [];
  public submitted = false;

  constructor(private router: Router) { 
    console.log(this.model)
    this.planos = [
      {
        nome: "Black",
        valor: "180",
        descricao: "Todo dia 10"
      },
      {
        nome: "Prata",
        valor: "70",
        descricao: "Todo dia 20"
      }
    ]
  }

  onSubmit() {
    this.submitted = true;
    if(this.model.ocupacao === "Treinador") {
      this.model.plano = "";
    }
    this.router.navigate(['consultar-usuario']);
  }

  ngOnInit() {
  }

}
