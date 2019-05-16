import { Component, OnInit } from '@angular/core';
import { CommerceProductService } from '../service/commerce-product.service';
import { Product } from '../service/product';

@Component({
  selector: 'app-basic-pagination-scroll',
  templateUrl: './basic-pagination-scroll.component.html',
  styleUrls: ['./basic-pagination-scroll.component.scss']
})
export class BasicPaginationScrollComponent implements OnInit {
  visibleProducts: Product[];
  currentOffset: number = 0;
  currentLimit: number = 5;
  currentTotal: number = 100; // For now, always assume 100

  private getProducts(offset, limit) {
    this.commerceProductService.getProductsByOffSet(offset, limit)
      .subscribe(products => {
        this.visibleProducts = products;
        this.currentOffset = offset;
        this.currentLimit = limit;
      });
  }

  public getPrevious(): void {
    this.getProducts(this.currentOffset - this.currentLimit, this.currentLimit);
  }

  public getNext(): void {
    this.getProducts(this.currentOffset + this.currentLimit, this.currentLimit);
  }

  constructor(private commerceProductService: CommerceProductService) {
  }

  ngOnInit() {
    this.getProducts(this.currentOffset, this.currentLimit);
  }
}