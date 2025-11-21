import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  loading = false;
  error = '' 

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.loading = true;
    this.productService.getAll().subscribe({
      next: (res) => {
        this.products = res.products;
        this.loading = false
      },
      error: (err) => {
        this.error = err.message;
        this.loading = false
      }
    })
  }

  deleteProduct(id: number) {
    if(!id) return;
    this.productService.delete(id).subscribe({
      next: () => {
        this.load()
      },
      error: (err) => {
        this.error = err.message;
      }
    })
  }
}
