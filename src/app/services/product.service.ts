import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { XmlParser } from '@angular/compiler';


export interface Product {
  // Define aquí las propiedades que tiene cada producto
  id: number;
  name: string;
  description: string;
  price: number;
}

const baseUrl = 'api/products/';
const wsKey = '9QMR8FP6SFCICN2RN5U4ZNM16M5HQ4AR';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  readAll(): Observable<any> {
    return this.httpClient.get<any>(`${baseUrl}/?ws_key=${wsKey}&display=full`);
  }

  readOne(Id: any): Observable<any> {
    return this.httpClient.get<any>(`${baseUrl}/${Id}?ws_key=${wsKey}`);
  }

  create(product:Product): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/xml' });
    const xml = `
    <prestashop>
    <product>
      <name><language id="1" ><![CDATA[${product.name}]]></language></name>
      <description><language id="1"><![CDATA[${product.description}]]></language></description>
      <price><![CDATA[${product.price}]]></price>
    </product>
    </prestashop>
  `;
    return this.httpClient.post<any>(`${baseUrl}?ws_key=${wsKey}`, xml, { headers });
  }
  Delete(Id: number): Observable<any> {
    return this.httpClient.delete<any>(`${baseUrl}/${Id}?ws_key=${wsKey}`);
  }
  Update(product:Product): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/xml' });
    const xml = `
    <prestashop>
    <product>
      <id>${product.id}</id>
      <name>${product.name}</name>
      <description>${product.description}</description>
      <price>${product.price}</price>
      <id_default_image>NONE</id_default_image>
    </product>
  </prestashop>
  `;
    return this.httpClient.patch<any>(`${baseUrl}${product.id}?ws_key=${wsKey}`, xml, { headers });
  }
}