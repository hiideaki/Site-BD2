import { Component, OnInit } from '@angular/core';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { EditPlanoComponent } from '../edit-plano/edit-plano.component';

@Component({
  selector: 'app-consultar-plano',
  templateUrl: './consultar-plano.component.html',
  styleUrls: ['./consultar-plano.component.scss']
})
export class ConsultarPlanoComponent implements OnInit {



  lista = [
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

  public listaView: any;
  public columnsToDisplay: any;
  
  constructor(public dialog: MatDialog) { 
    this.columnsToDisplay = ["nome", "valor", "descricao", "actions"];
    this.listaView = new MatTableDataSource(this.lista)
    
  }

  openDialog(item): void {
    const dialogRef = this.dialog.open(EditPlanoComponent, {
      data: item
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        let aux = this.lista.find((item) => item.nome === result.dados.nome)
          
        if(result.salvar) {
          let props = Object.getOwnPropertyDescriptors(aux);
          for(let prop in props) {
            aux[prop] = result.dados[prop];        
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
