export interface CartItem {
    id: number;
    title: string;
    price: number;
    quantity:number;    
    imgURL: string; 
  }
  
  export interface ISneakers {
    color: string;
    compound: string;
    country: string;
    description: string;
    gender: string;
    id: number;
    imgUrl: string;
    inStock: number;
    oldPrice: number;
    price: number;
    sizes: number[];
    stars: number;
    title: string;
    vendorСode: string;
  }
  
  export interface IProductsState {
    products: ISneakers[];
    status: "idle" | "fulfilled" | "pending" | "rejected";
  }
  