import { Component, OnInit } from '@angular/core';

import { MatTableDataSource, MatDialog } from '@angular/material';
import { EditUsuarioComponent } from '../edit-usuario/edit-usuario.component';


@Component({
  selector: 'app-consultar-usuario',
  templateUrl: './consultar-usuario.component.html',
  styleUrls: ['./consultar-usuario.component.scss']
})
export class ConsultarUsuarioComponent implements OnInit {


  lista = [
    {
      nome: "Marcelo Hideaki Iwata Kito",
      ocupacao: "Aluno",
      email: "hideaki09@hotmail.com",
      telefone: "(11) 94128-3644",
      cidade: "Bauru",
      bairro: "Jardim Marambá",
      rua: "Rua Doutor Gonzaga Machado",
      numero: "7-108",
      complemento: "Cond. Camélias, Bloco 9, Apto. 21",
      plano: "Mensal"
    },
    {
      nome: "Vitor de Souza Cruzeiro",
      ocupacao: "Aluno",
      email: "vitor.cruzeiro@me.com",
      telefone: "(11) 45666-3344",
      cidade: "Macatuba",
      bairro: "Catedral Central",
      rua: "Alameda das Perdizes",
      numero: "422",
      complemento: "",
      plano: "Semanal"
    },
    {
      nome: "Paulo Eduardo Manzone Maia",
      ocupacao: "Aluno",
      email: "paulinhued@hotmail.com",
      telefone: "(11) 12345-6789",
      cidade: "Bauru",
      bairro: "Jardim Marambá",
      rua: "Rua Doutor Gonzaga Machado",
      numero: "7-108",
      complemento: "Cond. Camélias, Bloco 9, Apto. 21",
      plano: "Trimestral"
    },
    {
      nome: "Raul Tragante",
      ocupacao: "Treinador",
      email: "raul.tragante@hotmail.com",
      telefone: "(11) 12121-2121",
      cidade: "Bauru",
      bairro: "Jardim Marambá",
      rua: "Rua Doutor Gonzaga Machado",
      numero: "7-108",
      complemento: "Cond. Camélias, Bloco 8, Apto. 11",
      plano: ""
    },
  ]

  public listaView: any;
  public columnsToDisplay: any;

  constructor(public dialog: MatDialog) { 
    this.columnsToDisplay = ["nome", "email", "ocupacao", "actions"];
    this.listaView = new MatTableDataSource(this.lista)
  }
  

  openDialog(item): void {
    const dialogRef = this.dialog.open(EditUsuarioComponent, {
      data: item
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Diálogo fechado');
    });
  }

  ngOnInit() {
  }


  applyFilter(filterValue: string) {
    this.listaView.filter = filterValue.trim().toLowerCase();
    console.log(filterValue.trim().toLowerCase())
  }
}
