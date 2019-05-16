import { Component, OnInit } from '@angular/core';
import { CommerceProductService } from '../service/commerce-product.service';
import { Product } from '../service/product';

@Component({
  selector: 'app-advanced-scroll',
  templateUrl: './advanced-scroll.component.html',
  styleUrls: ['./advanced-scroll.component.scss']
})
export class AdvancedScrollComponent implements OnInit {

  private products: Product[];

  constructor(private commerceProductService: CommerceProductService) { }

  getProducts(): void {
    this.products = this.commerceProductService.getProducts(100000);
  }

  ngOnInit() {
    this.getProducts();
  }

}