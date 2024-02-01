import { TCategory, TProduct } from "./Types"
import { getCategories, getProductsByCategoryId } from "./Config";
import axios from 'axios';

// GET All Categories
export const fetchCategories = async () => {
    console.log('Fetching Catagories Data...')
    const response = await axios.get<TCategory[]>(getCategories);
    const categories: TCategory[] = response.data
    return categories
}

// GET Products by Category Name
export const fetchProductsByCategory = async (categoryId:string) => {
    console.log('Fetching Products By Category Data...')
    const response = await axios.get<TProduct[]>(getProductsByCategoryId + categoryId);
    const products: TProduct[] = response.data
    return products
}