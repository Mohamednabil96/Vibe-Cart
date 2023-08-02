import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

// import { Iproduct } from 'src/app/models/iproduct';
// import { productsList } from 'src/app/models/productsList';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit{

  constructor(private productServices: ProductService) {}

  ngOnInit(): void {
  this.productServices.getAllProducts().subscribe({
    next: (response) => {
      this.products =response;
    },
    error: (error) => {
      console.log(error);
    }
  });
  }

  products: any;

  deleteProduct(index: number) {
    const productId = this.products[index].id;
    this.productServices.deleteProduct(productId).subscribe({
      next: () => {
        this.products.splice(index, 1);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}