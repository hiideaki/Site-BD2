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
  model: any;

  constructor(public dialogRef: MatDialogRef<EditUsuarioComponent>, @Inject(MAT_DIALOG_DATA) public user: Usuario) { 

    this.model = Object.assign({}, user);

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

  ngOnInit() {

  }

  onSubmit() {
    this.dialogRef.close({salvar: true, dados: this.model});
  }

  delete() {
    this.dialogRef.close({salvar: false, dados: this.model});
    
  }

}
