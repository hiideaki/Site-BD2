import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss']
})
export class CadastroUsuarioComponent implements OnInit {

  model = new Usuario();

  public planos = [];
  public submitted = false;

  constructor() { 
    console.log(this.model)
    this.planos = [
      {
        nome: "Semanal",
        valor: "R$ 20,00",
        descricao: "08/12/2018"
      },
      {
        nome: "Mensal",
        valor: "R$ 75,00",
        descricao: "01/01/2019"
      },
      {
        nome: "Trimestral",
        valor: "R$ 200,00",
        descricao: "01/03/2019"
      },
      {
        nome: "Anual",
        valor: "R$ 600,00",
        descricao: "01/12/2019"
      }
    ]
  }

  onSubmit() {
    this.submitted = true;
    if(this.model.ocupacao === "Treinador") {
      this.model.plano = "";
    }
    console.log(this.model)
  }

  ngOnInit() {
  }

}
