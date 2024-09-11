import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: 'products.page.html',
  styleUrls: ['products.page.scss'],
})
export class ProductsPage {
  products = [
    { name: 'Producto 1', description: 'Descripción 1', price: 0, image: 'assets/img/d26d92d3649555f.png' },
    { name: 'Producto 2', description: 'Descripción 2', price: 0, image: 'assets/img/d26d92d3649555f.png' },
    { name: 'Producto 3', description: 'Descripción 3', price: 0, image: 'assets/img/d26d92d3649555f.png' }
  ];
}

