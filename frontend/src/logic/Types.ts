type Category = {
    categoryId: number;
    categoryName: string;
}
type Product = {
    id: number;
    category: Category;
    name:string;
    content?:string;
    price:number;
}