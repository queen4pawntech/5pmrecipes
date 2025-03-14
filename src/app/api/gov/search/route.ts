import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    if (process.env.NODE_ENV === "production") {
        return NextResponse.json({ message: "Not available in production" }, { status: 403 });
    }
    const { searchParams } = new URL(req.url);
    const searchTerm = searchParams.get("query");
    try {
        const response = await axios.post('https://api.nal.usda.gov/fdc/v1/foods/search', 
            {
                query: searchTerm,
                dataType: ['Foundation', 'Branded'] // optional - filter by data type
            },
            {
                params: {
                api_key: process.env.GOV_API_KEY // API key goes in the URL params, not the body
                },
                headers: {
                'Content-Type': 'application/json'
                }
            }
        )
        return NextResponse.json(response.data, { status: 200 });
    } catch (error: any) {
        console.error("Error fetching data:", error);
        return NextResponse.json({ error: "Error fetching data" }, { status: 500 });
    }
};