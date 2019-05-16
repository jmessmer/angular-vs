import { Component, OnInit } from '@angular/core';
import { CommerceProductService } from '../service/commerce-product.service';
import { Product } from '../service/product';

@Component({
  selector: 'app-basic-infinite-scroll',
  templateUrl: './basic-infinite-scroll.component.html',
  styleUrls: ['./basic-infinite-scroll.component.scss'],
  providers: [ CommerceProductService ]
})
export class BasicInfiniteScrollComponent implements OnInit {
  products: Product[];
  infiniteProducts: Product[] = [];
  sum: number = 20;
  total: number = 100;

  constructor(private commerceProductService: CommerceProductService) { }

  getProducts(): void {
    this.products = this.commerceProductService.getProducts(this.total);
  }
  
  appendItems(startIndex, endIndex) {
    for (let i = startIndex; i < endIndex; ++i) {
      this.infiniteProducts.push(this.products[i]);
    }
  }

  onScrollDown() {
    if (this.sum != this.total) {
      let start = this.sum;
      this.sum += 10;
      this.appendItems(start, this.sum);
    }
  }

  ngOnInit() {
    this.getProducts();
    this.appendItems(0, this.sum);
  }

}