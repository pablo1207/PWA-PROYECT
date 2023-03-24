import { Component, OnInit  } from '@angular/core';
import { ProductService, Product } from 'src/app/services/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  product: Product = {
    id:0,
    name: '',
    description: '',
    price: 0
  };
  constructor(private productService: ProductService) { }
  ngOnInit(): void { }

  updateProduct(): void {
    this.productService.Update(this.product)
      .subscribe(
        response => console.log('UPDATE OKEY'),
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
