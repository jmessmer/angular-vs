import { Component, OnInit } from '@angular/core';
import { CommerceProductService } from '../service/commerce-product.service';
import { Product } from '../service/product';

@Component({
  selector: 'app-basic-virtual-scroll',
  templateUrl: './basic-virtual-scroll.component.html',
  styleUrls: ['./basic-virtual-scroll.component.scss'],
  providers: [ CommerceProductService ]
})
export class BasicVirtualScrollComponent implements OnInit {
  products: Product[];

  constructor(private commerceProductService: CommerceProductService) { }

  getProducts(): void {
    this.products = this.commerceProductService.getProducts(100);
  }

  ngOnInit() {
    this.getProducts();
  }

}