import { Component, OnInit } from '@angular/core';
import { Producto } from './producto';
import { ProductoService } from './producto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'microservicios';

  public productos: Producto[] = [];

  constructor(private productoService: ProductoService) {}

  ngOnInit() {
    this.getProductos();
  }

  public getProductos(): void {
    this.productoService.getProductos().subscribe(
      (response: Producto[]) => {
        this.productos = response;
        console.log(this.productos);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  public getProductosById(productoId: number): void {
    this.productoService.getProductosById(productoId).subscribe(
      (response: Producto) => {
        console.log(response);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
