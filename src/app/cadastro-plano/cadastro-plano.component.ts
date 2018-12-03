import { Component, OnInit } from '@angular/core';
import { Plano } from '../model/plano';

@Component({
  selector: 'app-cadastro-plano',
  templateUrl: './cadastro-plano.component.html',
  styleUrls: ['./cadastro-plano.component.scss']
})
export class CadastroPlanoComponent implements OnInit {

  model = new Plano();

  constructor() { 

  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.model)
  }

}
