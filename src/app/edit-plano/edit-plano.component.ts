import { Component, OnInit, Inject } from '@angular/core';
import { Plano } from '../model/plano';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-edit-plano',
  templateUrl: './edit-plano.component.html',
  styleUrls: ['./edit-plano.component.scss']
})
export class EditPlanoComponent implements OnInit {

  model: any;

  constructor(public dialogRef: MatDialogRef<EditPlanoComponent>, @Inject(MAT_DIALOG_DATA) public plano: Plano) { 

    this.model = Object.assign({}, plano);
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
