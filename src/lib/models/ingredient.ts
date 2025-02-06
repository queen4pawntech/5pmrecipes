export interface Ingredient {
    name: string;
    price: number;
    //caculate based on volume, weight, or count
    //can display what serving size is in grams or volume
    servingSize: number;
    category: string;
}

