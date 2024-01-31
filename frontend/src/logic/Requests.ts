import { TCategory } from "./Types"
import { getCategories } from "./Config";
import axios from 'axios';

// GET All Categories
export const fetchCategories = async () => {
    console.log('Fetching Catagories Data...')
    const response = await axios.get<TCategory[]>(getCategories);
    const categories: TCategory[] = response.data
    return categories
}