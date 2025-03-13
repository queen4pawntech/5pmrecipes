import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(req: Request): Promise<NextResponse> {
    if (process.env.NODE_ENV === "production") {
        return NextResponse.json({ message: "Not available in production" }, { status: 403 });
    }
    const { searchParams } = new URL(req.url);
    const searchTerm = searchParams.get("query");
    try {
        const response = await axios.get(
            `https://trackapi.nutritionix.com/v2/search/instant/?query=${searchTerm}`, 
        {
            headers: {
                'Content-Type': 'application/json',
                'x-app-id': process.env.NUTRITIONIX_API_ID || "",
                'x-app-key': process.env.NUTRITIONIX_API_KEY || ""
            }
        });
        return NextResponse.json(response.data, { status: 200 });
    } catch (error: unknown) {
        console.error("Error fetching data:", error);
        
        const errorMessage = error instanceof Error 
            ? error.message 
            : "Unknown error occurred";
            
        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
};