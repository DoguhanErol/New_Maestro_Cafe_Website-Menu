export type TCategory = {
    categoryId: number;
    categoryName: string;
}
export type TProduct = {
    id: number;
    category: TCategory;
    name:string;
    content?:string;
    price:number;
}