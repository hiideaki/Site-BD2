import { Component, OnInit } from '@angular/core';
import { Plano } from '../model/plano';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-plano',
  templateUrl: './cadastro-plano.component.html',
  styleUrls: ['./cadastro-plano.component.scss']
})
export class CadastroPlanoComponent implements OnInit {

  model = new Plano();

  constructor(private router: Router) { 

  }

  ngOnInit() {
  }

  onSubmit() {
    this.router.navigate(['consultar-plano']);
  }

}
