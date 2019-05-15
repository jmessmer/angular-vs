import { Component, OnInit } from '@angular/core';
import { CommerceProductService } from '../service/commerce-product.service';
import { Product } from '../service/product';

@Component({
  selector: 'app-basic-scroll',
  templateUrl: './basic-scroll.component.html',
  styleUrls: ['./basic-scroll.component.scss']
})
export class BasicScrollComponent implements OnInit {
  products: Product[];

  constructor(private commerceProductService: CommerceProductService) { }

  getProducts(): void {
    this.products = this.commerceProductService.getProducts(100);
  }

  ngOnInit() {
    this.getProducts();
  }

}