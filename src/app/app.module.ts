import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {
  NgxMaskDirective,
  NgxMaskPipe,
  provideEnvironmentNgxMask,
  provideNgxMask,
} from 'ngx-mask';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { LoginComponent } from './components/login/login.component';
import { AutenticacaoLayoutComponent } from './layouts/autenticacao-layout/autenticacao-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AutenticacaoLayoutComponent,
    CadastroComponent,
  ],
  imports: [
    NgxMaskDirective,
    NgxMaskPipe,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [provideNgxMask()],
  bootstrap: [AppComponent],
})
export class AppModule {}
