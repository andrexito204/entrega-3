import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { ListarProductosComponent } from './components/proveedores/listar-productos/listar-productos.component';
import { ProveedoresComponent } from './components/proveedores/proveedores.component';

//componentes

/*
const routes: Routes = [

{path: "",component:ListarProductosComponent},
{path: "crear-producto",component:ProveedoresComponent},

{path: "editar-producto/id", component:ProveedoresComponent},
];
*/


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
