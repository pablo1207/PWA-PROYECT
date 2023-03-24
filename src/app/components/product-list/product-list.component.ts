import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Observable } from 'rxjs';
import { Location } from '@angular/common'; // Importa Location

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any;
  constructor(private productService: ProductService, private location: Location) { }

  async ngOnInit(): Promise<void> {
    this.productService.readAll().subscribe(async data => {
      this.products = data.products
      console.log(data.products)
    });
    console.log('okey');
  }
  
  // async GetArray(arrayproducts: any): Promise<any> {
  //   var productDetails: any = [];
  //   for (let item of arrayproducts) {
  //     var id: number = parseInt(item.id);
  //     var detail = await this.readArray(id).toPromise();
  //     productDetails.push(detail);
  //   }
  //   return productDetails;
  // }
  
  // readArray(id: any): Observable<any> {
  //   return this.productService.readOne(id);
  // }
  delete(product:number){
    console.log(product);
    this.productService.Delete(product).subscribe(data => {
      console.log('DELETE')
    });
  }

}