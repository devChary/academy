import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { CommonHttpService } from '../../shared/commonHttp.service';
import { CartValueService } from '../../shared/cart-value.service';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})

export class CoursesComponent implements OnInit {
  courses: any;
  categoryData: any;
  
  constructor(
    private route: ActivatedRoute,
    private categoriesService: CategoriesService,
    private cartValueService: CartValueService,
    
  ) { }

  ngOnInit() {
      
    if(this.categoriesService.categoriesData == null || this.categoriesService.categoriesData == undefined) {

      this.categoriesService.getCategories()
      .subscribe((res: any) => {
        this.categoriesService.storeCategoriesData(res);
        const id = +this.route.snapshot.paramMap.get('id');
        this.categoryData = this.categoriesService.getCategoryDataById(id);
        this.courses = this.categoryData.courses;
        console.log(this.courses);
        
      }, (error: any) => {
        console.log(error);
      })
    } else {

        const id = +this.route.snapshot.paramMap.get('id');
        this.categoryData = this.categoriesService.getCategoryDataById(id);
        this.courses = this.categoryData.courses;
        console.log(this.courses);
    }
  }

  // Adding Course

  btnAddCart(course: any) {
    let a = this.cartValueService.addCartData(course);
    console.log(a);
  }

  buyNow(course: any) {
    var cartData = this.cartValueService.getCartData();
    console.log('cartData',cartData);

    if(cartData) {
      
    }
    // Checking condition to add Items in Cart
    if(cartData.length == 0) {
      this.cartValueService.addCartData(course);
      console.log(cartData);
        
    }
  }
}
