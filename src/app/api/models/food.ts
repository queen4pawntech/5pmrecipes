export interface Food {
    brand_name: string;
    brand_name_item_name: string;
    brand_type: number;
    food_name: string;
    location: string;
    nf_calories: number;
    nix_brand_id: string;
    nix_item_id: string;
    photo: {
        thumb: string;
    }
    region: number;
    serving_qty: number;
    serving_unit: string;
}