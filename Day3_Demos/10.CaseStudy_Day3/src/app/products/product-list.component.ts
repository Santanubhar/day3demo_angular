import { Component, Input} from '@angular/core';
@Component({
    selector: 'products',
    templateUrl: 'app/products/product-list.component.html',
    styleUrls: ['app/products/product-list.component.css']
})
export class ProductListComponent {
        pageTitle: string = 'mCart';
    imageWidth: number = 80;
    imageHeight: number = 120;
    imageMargin: number = 12;
    products: any = [
     {
            "productId": 1,
            "productName": "Apple iPad Mini 2",
            "productCode": "TAB-120",
            "description": "16GB, White",
            "price": 19442,
            "imageUrl": "app/products/imgs/apple_ipad_mini.jpg",
            "manufacturer": "Apple",
            "ostype": "iOS",
            "rating": 4
        },
        {
            "productId": 2,
            "productName": "Apple iPad Air2",
            "productCode": "TAB-124",
            "description": "64GB, Black",
            "price": 44119,
            "imageUrl": "app/products/imgs/ipad_air.jpg",
            "manufacturer": "Apple",
            "ostype": "iOS",
            "rating": 3
        },
        {
            "productId": 3,
            "productName": "Samsung Galaxy J",
            "productCode": "TAB-125",
            "description": "8GB, Gold",
            "price": 13400,
            "imageUrl": "app/products/imgs/samsung_tab.jpg",
            "manufacturer": "Samsung",
            "ostype": "Android",
            "rating": 4
        },
        {
            "productId": 4,
            "productName": "Micromax Canvas P290",
            "productCode": "TAB-126",
            "description": "8GB, Black",
            "price": 3350,
            "imageUrl": "app/products/imgs/tablet.jpg",
            "manufacturer": "Micromax",
            "ostype": "Android",
            "rating": 3
        }
    ];
    
    mobiles: any[] = [
        {
            "productId": 1,
            "productName": "Samsung Galaxy Note 7",
            "productCode": "MOB-120",
            "description": "64GB, Coral Blue",
            "price": 60569,
            "imageUrl": "app/products/imgs/samsung_note7_coralblue.jpg",
            "manufacturer": "Samsung",
            "ostype": "Android",
            "rating": 4
        },
        {
            "productId": 2,
            "productName": "Samsung Galaxy Note 7",
            "productCode": "MOB-124",
            "description": "64GB, Gold",
            "price": 60200,
            "imageUrl": "app/products/imgs/samsung_note7_gold.jpg",
            "manufacturer": "Samsung",
            "ostype": "Android",
            "rating": 4
        },
        {
            "productId": 3,
            "productName": "Lumia 640XL",
            "productCode": "MOB-125",
            "description": "8GB, Black",
            "price": 14990,
            "imageUrl": "app/products/imgs/lumia_640xl.jpg",
            "manufacturer": "Microsoft",
            "ostype": "Windows",
            "rating": 4.3
        },
        {
            "productId": 4,
            "productName": "iPhone 6",
            "productCode": "MOB-126",
            "description": "16GB, Gold",
            "price": 40501,
            "imageUrl": "app/products/imgs/iphone_gold.jpg",
            "manufacturer": "Apple",
            "ostype": "iOS",
            "rating": 4.2
        },
        {
            "productId": 5,
            "productName": "Lumia 950 XL",
            "productCode": "MOB-127",
            "description": "32GB, Black",
            "price": 51950,
            "imageUrl": "app/products/imgs/lumia_950xl.jpg",
            "manufacturer": "Microsoft",
            "ostype": "Windows",
            "rating": 4.3
        },
        {
            "productId": 6,
            "productName": "Samsung Galaxy S6 Edge",
            "productCode": "MOB-128",
            "description": "32GB, Gold",
            "price": 34900,
            "imageUrl": "app/products/imgs/samsung_edge_gold.jpg",
            "manufacturer": "Samsung",
            "ostype": "Android",
            "rating": 4
        },
        {
            "productId": 7,
            "productName": "Samsung Galaxy S6 Edge",
            "productCode": "MOB-129",
            "description": "32GB, Black",
            "price": 34890,
            "imageUrl": "app/products/imgs/samsung_edge_black.jpg",
            "manufacturer": "Samsung",
            "ostype": "Android",
            "rating": 3.5
        },
        {
            "productId": 8,
            "productName": "Samsung Galaxy S6 Edge",
            "productCode": "MOB-130",
            "description": "32GB, Silver",
            "price": 53499,
            "imageUrl": "app/products/imgs/samsung_edge_silver.jpg",
            "manufacturer": "Samsung",
            "ostype": "Android",
            "rating": 4.5
        }
    ];
    tablets: any[] = [
        {
            "productId": 1,
            "productName": "Apple iPad Mini 2",
            "productCode": "TAB-120",
            "description": "16GB, White",
            "price": 19442,
            "imageUrl": "app/products/imgs/apple_ipad_mini.jpg",
            "manufacturer": "Apple",
            "ostype": "iOS",
            "rating": 4
        },
        {
            "productId": 2,
            "productName": "Apple iPad Air2",
            "productCode": "TAB-124",
            "description": "64GB, Black",
            "price": 44119,
            "imageUrl": "app/products/imgs/ipad_air.jpg",
            "manufacturer": "Apple",
            "ostype": "iOS",
            "rating": 3
        },
        {
            "productId": 3,
            "productName": "Samsung Galaxy J",
            "productCode": "TAB-125",
            "description": "8GB, Gold",
            "price": 13400,
            "imageUrl": "app/products/imgs/samsung_tab.jpg",
            "manufacturer": "Samsung",
            "ostype": "Android",
            "rating": 4
        },
        {
            "productId": 4,
            "productName": "Micromax Canvas P290",
            "productCode": "TAB-126",
            "description": "8GB, Black",
            "price": 3350,
            "imageUrl": "app/products/imgs/tablet.jpg",
            "manufacturer": "Micromax",
            "ostype": "Android",
            "rating": 3
        }
    ];

    listFilter: string;

   tempProducts:any =this.products;
    searchtext() {
       // this.tempProducts = this.products;
        
        if (this.listFilter.length > 0)
            this.products = this.products.filter((product: any) =>
                product.productName.toLowerCase().indexOf(this.listFilter) != -1)
        else
            this.products = this.tempProducts;

    }
    
   tabselect(producttype:string){
       this.products = [];
        if(producttype === "mobile")
            this.products = this.mobiles;
         else if (producttype === "tablet")
            this.products = this.tablets;   
   }
}

