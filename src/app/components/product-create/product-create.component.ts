import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from 'src/app/services/product.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  product: Product = {
    id:0,
    name: '',
    description: '',
    price: 0
  };
  constructor(private productService: ProductService) { }
  ngOnInit(): void { }

  createProduct(): void {
    this.productService.create(this.product)
      .subscribe(
        response => console.log('CREATED OKEY'),
        error => console.log(error)
      );
      this.clearForm();
  }
  clearForm(): void {
    this.product = {
      id: 0,
      name: '',
      description: '',
      price: 0
    };
  }
}
