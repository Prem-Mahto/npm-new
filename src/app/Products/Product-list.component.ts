import { Component, OnInit } from "@angular/core";
import { IProduct } from "./IProduct";
import { NgModel } from "@angular/forms";

@Component({
    selector:'pm-products',
    templateUrl:'./Product-list.component.html',
    styleUrls:['./Product-list.component.css']
})
export class ProductListComponent implements OnInit{
    pageTitle:string='Product List';
    showImage:boolean=false;
    imageWidth:number=40;
    imageMargin: number=2;
    private _searchText:string = '';

    get searchText():string{
        return this._searchText
    }
    set searchText(value:string){
        this._searchText=value;
        //console.log(this._searchText);
        this.filteredProducts = this.performFilter(value);
    }

    filteredProducts:IProduct[]=[];
    products:IProduct[]=[
        {
            "productId": 1,
            "productName": "Leaf Rake",
            "productCode": "GDN-0011",
          "releaseDate": "March 19, 2021",
          "description": "Leaf rake with 48-inch wooden handle.",
          "price": 19.95,
          "starRating": 3.2,
          "imageUrl": "assets/images/leaf_rake.png"
        },
        {
          "productId": 2,
          "productName": "Garden Cart",
          "productCode": "GDN-0023",
          "releaseDate": "March 18, 2021",
          "description": "15 gallon capacity rolling garden cart",
          "price": 32.99,
          "starRating": 4.2,
          "imageUrl": "assets/images/garden_cart.png"
        },
        {
            "productId": 5,
          "productName": "Hammer",
          "productCode": "TBX-0048",
          "releaseDate": "May 21, 2021",
          "description": "Curved claw steel hammer",
          "price": 8.9,
          "starRating": 4.8,
          "imageUrl": "assets/images/hammer.png"
        },
        {
            "productId": 8,
          "productName": "Saw",
          "productCode": "TBX-0022",
          "releaseDate": "May 15, 2021",
          "description": "15-inch steel blade hand saw",
          "price": 11.55,
          "starRating": 3.7,
          "imageUrl": "assets/images/saw.png"
        },
        {
            "productId": 10,
            "productName": "Video Game Controller",
            "productCode": "GMG-0042",
            "releaseDate": "October 15, 2020",
          "description": "Standard two-button video game controller",
          "price": 35.95,
          "starRating": 4.6,
          "imageUrl": "assets/images/xbox-controller.png"
        }
    ];
    ngOnInit(): void {
        this.searchText = 'cart';
        //console.log("In onInit");
    }
      toggleImage():void{
        this.showImage=!this.showImage;
    }
    performFilter(filterBy:string):IProduct[]{
        filterBy=filterBy.toLocaleLowerCase();
        return this.products.filter((product:IProduct)=>
            product.productName.toLocaleLowerCase().includes(filterBy)
        );
    }
}