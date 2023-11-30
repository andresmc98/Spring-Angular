import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Producto } from './producto';
import { HttpClient } from "@angular/common/http";
import { environment } from "./environment/environment";

@Injectable({
    providedIn: 'root'
})
export class ProductoService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) {}

    public getProductos(): Observable<Producto[]> {
        return this.http.get<Producto[]>(`${this.apiServerUrl}/productos/listar`);
    }

    public getProductosById(productoId: number): Observable<Producto> {
        return this.http.get<Producto>(`${this.apiServerUrl}/productos/ver/${productoId}`);
    }

    public addProductos(producto: Producto): Observable<Producto> {
        return this.http.post<Producto>(`${this.apiServerUrl}/productos/add`, producto);
    }
}
