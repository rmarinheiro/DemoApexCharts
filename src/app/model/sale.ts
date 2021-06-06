import { seller } from "./seller"

export class Sale {
    
    id: number;
    visited: number;
    deals: number;
    amount: number;
    date: string;
    seller: seller
}