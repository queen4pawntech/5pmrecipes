import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
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
        console.log(response.data);
        return NextResponse.json(response.data, { status: 200 });
    } catch (error: any) {
        console.error("Error fetching data:", error);
        return NextResponse.json({ error: "Error fetching data" }, { status: 500 });
    }
};