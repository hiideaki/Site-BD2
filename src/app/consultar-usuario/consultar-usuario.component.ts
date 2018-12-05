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
      cpf: "11",
      email: "hideaki09@hotmail.com",
      telefone: "(11) 94128-3644",
      cidade: "Bauru",
      bairro: "Jardim Marambá",
      rua: "Rua Doutor Gonzaga Machado",
      numero: "7-108",
      complemento: "Cond. Camélias, Bloco 9, Apto. 21",
      plano: "Black"
    },
    {
      nome: "Bruno Belluzo",
      ocupacao: "Aluno",
      cpf: "10",
      email: "bruno@email.com",
      telefone: "1234-5678",
      cidade: "Bauru",
      bairro: "Centro",
      rua: "Rua Rodrigues Alves",
      numero: "4-21",
      complemento: "",
      plano: "Prata"
    },
    {
      nome: "Rafael Takagi",
      ocupacao: "Treinador",
      cpf: "1",
      email: "rafael@email.com",
      telefone: "9658-7458",
      cidade: "Bauru",
      bairro: "Centro",
      rua: "Duque",
      numero: "7-108",
      complemento: ""
    }
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
      if(result) {
        let aux = this.lista.find((item) => item.cpf === result.dados.cpf)
          
        if(result.salvar) {
          let props = Object.getOwnPropertyDescriptors(aux);
          for(let prop in props) {
            aux[prop] = result[prop];        
          }
        } else {
          this.lista.splice(this.lista.indexOf(aux), 1);
          this.listaView = new MatTableDataSource(this.lista)
        }
      }


      
    });
  }

  ngOnInit() {
  }


  applyFilter(filterValue: string) {
    this.listaView.filter = filterValue.trim().toLowerCase();
    console.log(filterValue.trim().toLowerCase())
  }
}
