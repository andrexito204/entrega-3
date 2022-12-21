import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbComponent } from './components/navb/navb.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ProveedoresComponent } from './components/proveedores/proveedores.component';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListarProductosComponent } from './components/proveedores/listar-productos/listar-productos.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbComponent,
    InicioComponent,
    ClientesComponent,
    ProveedoresComponent,
    ListarProductosComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component:InicioComponent},
      {path: 'Clientes', component:ClientesComponent},
      {path: 'Proveedores', component:ProveedoresComponent},
      {path: "listar-productos", component:ListarProductosComponent},
      {path: "editar-producto/id", component:ProveedoresComponent},
      {path: '**', redirectTo:'/', pathMatch:'full'},
      
    ]),
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
