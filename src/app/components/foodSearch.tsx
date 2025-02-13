"use client";

import { useState } from "react";
import axios from "axios";

export default function FoodSearch() {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState<any[]>([]);

    const searchFood = async () => {
        try {
            // Call your internal api/nutritionix/search endpoint with the search term as a query parameter
            const response = await axios.get(`/api/nutritionix/search?query=${searchTerm}`);
            console.log(response.data);
            // Update state with the results received
            setSearchResults([...response.data.branded, ...response.data.common]);
            console.log("searchResults", searchResults);
        } catch (error: any) {
            console.error("Error fetching data:", error);
        }
    };
    
    return (
        <div>
            <input
                className="text-black"
                type="text"
                value={searchTerm}
                onChange={(e) => {
                    setSearchTerm(e.target.value);
                    if (e.target.value.length > 0) {
                        searchFood();
                    } else {
                        setSearchResults([]);
                    }
                }}
            />
            <div>
                {searchResults.length > 0 ? (
                    <ul>
                        {searchResults.map((result: any, index: number) => (
                            <li key={index}>{result.food_name}</li>
                        ))}
                    </ul>
                ) : (
                    <p>No Results</p>
                )}
            </div>
        </div>
    );
}