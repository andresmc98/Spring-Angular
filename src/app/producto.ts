export interface Producto {
    id: number;
    nombre: string;
    precio: number;
    createAt: Date;
    port: number;
    imagen?: string;
}