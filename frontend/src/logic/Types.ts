export type TCategory = {
    categoryId: string;
}
export type TProduct = {
    id: number;
    category: TCategory;
    name:string;
    content?:string;
    price:number;
}