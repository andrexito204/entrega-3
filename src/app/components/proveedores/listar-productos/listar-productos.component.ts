import { Component, OnInit } from '@angular/core';
import { LastValueFromConfig } from 'rxjs/internal/lastValueFrom';
import { FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms"
import { Injectable } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent{

  productoForm: FormGroup;

  
  
  constructor(private fb:FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private productoService: ProductoService) {
    
    
    this.productoForm = this.fb.group({

      producto: ['', Validators.required],
      categoria: ['', Validators.required],
      ubicacion: ['', Validators.required],
      precio: ['', Validators.required],
    })
  }

    agregarProducto(){

      console.log(this.productoForm)
      console.log(this.productoForm.get('producto')?.value)
      
      const PRODUCTO: Producto = {

        nombre: this.productoForm.get('producto')?.value,
        categoria: this.productoForm.get('categoria')?.value,
        ubicacion: this.productoForm.get('ubicacion')?.value,
        precio: this.productoForm.get('precio')?.value,
      }
    
      console.log(PRODUCTO);
      this.productoService.guardarProducto(PRODUCTO).subscribe(data =>{

      this.toastr.info('El producto fue registrado con exito!', 'Producto registrado');
      this.router.navigate(['/Proveedores']);
      }, error =>{
        console.log(error);
        this.productoForm.reset();
      })
      
      
    }  


  }

