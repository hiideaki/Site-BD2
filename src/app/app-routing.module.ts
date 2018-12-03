import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { CadastroPlanoComponent } from './cadastro-plano/cadastro-plano.component';
import { ConsultarUsuarioComponent } from './consultar-usuario/consultar-usuario.component';
import { ConsultarPlanoComponent } from './consultar-plano/consultar-plano.component';

const routes: Routes = [
  { path: '', component: CadastroUsuarioComponent },
  { path: 'cadastro-usuario', component: CadastroUsuarioComponent },
  { path: 'cadastro-plano', component: CadastroPlanoComponent },
  { path: 'consultar-usuario', component: ConsultarUsuarioComponent },
  { path: 'consultar-plano', component: ConsultarPlanoComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
