import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})

  export class ProveedoresComponent {

      listProductos: Producto[] = [];


      constructor(private _productoService: ProductoService,
        private toastr: ToastrService) {}

      ngOnInit(): void{

        this.obtenerProductos();
      }
      
      eliminarProducto(id: any){
        this._productoService.eliminarProducto(id).subscribe(data =>{
          this.toastr.error('El producto fue eliminado con exito','Producto Eliminado');
          this.obtenerProductos();
        })
        
      }
      
      obtenerProductos(){

      this._productoService.getProductos().subscribe(data =>{

        console.log(data);
        this.listProductos = data;
      }, error =>{
        
        console.log(error);
      }) 
      
    }

   





    
  }

