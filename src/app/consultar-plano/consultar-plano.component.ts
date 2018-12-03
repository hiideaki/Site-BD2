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
