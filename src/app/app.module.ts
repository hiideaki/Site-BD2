import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule }   from '@angular/forms';

import { MatInputModule, MatTableModule, MatSelectModule, MatButtonModule, MatDialogModule, MatMenuModule } from '@angular/material';
import { OverlayModule } from '@angular/cdk/overlay';

import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { CadastroPlanoComponent } from './cadastro-plano/cadastro-plano.component';
import { ConsultarPlanoComponent } from './consultar-plano/consultar-plano.component';
import { ConsultarUsuarioComponent } from './consultar-usuario/consultar-usuario.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditUsuarioComponent } from './edit-usuario/edit-usuario.component';
import { EditPlanoComponent } from './edit-plano/edit-plano.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroUsuarioComponent,
    CadastroPlanoComponent,
    ConsultarPlanoComponent,
    ConsultarUsuarioComponent,
    EditUsuarioComponent,
    EditPlanoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatInputModule,
    MatTableModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogModule,
    MatMenuModule,
    BrowserAnimationsModule,
    OverlayModule,
  ],
  entryComponents: [
    EditUsuarioComponent,
    EditPlanoComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
