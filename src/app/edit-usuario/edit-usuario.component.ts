import { Component, OnInit, Input, Inject } from '@angular/core';
import { Usuario } from '../model/usuario';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-edit-usuario',
  templateUrl: './edit-usuario.component.html',
  styleUrls: ['./edit-usuario.component.scss']
})

export class EditUsuarioComponent implements OnInit {
  
  planos: any;

  constructor(public dialogRef: MatDialogRef<EditUsuarioComponent>, @Inject(MAT_DIALOG_DATA) public model: Usuario) { 
    console.log(model)
    
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

  ngOnInit() {

  }

  onSubmit() {
    this.dialogRef.close();

  }

  delete() {
    this.dialogRef.close();
    
  }

}
