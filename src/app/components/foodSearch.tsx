"use client";

import { useState } from "react";
import axios from "axios";

export default function FoodSearch() {

    const [searchTerm, setSearchTerm] = useState("");

    const searchFood = async () => {
        try {
            const response = await axios.get(`https://trackapi.nutritionix.com/v2/search/instant/?query=${searchTerm}`, {
                headers: {
                'Content-Type': 'application/json',
                'x-app-id': process.env.NUTRITIONIX_API_ID || "",
                'x-app-key': process.env.NUTRITIONIX_API_KEY || ""
                }
            });
            console.log(response.data);
            } catch (error: any) {
            console.error("Error fetching data:", error);
            }
        };
    
    return (
        <div>
            <input className="text-black" type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            <button onClick={() => searchFood()}>Search</button>
        </div>
    );
}