import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
    const { ingredients, preferences } = await req.json();
    if (!ingredients || ingredients.length === 0) {
        return NextResponse.json({ message: "No ingredients provided" }, { status: 400 });
    }
    try {

    // Generate recipe with OpenAI
    const prompt = `Create a recipe using the following ingredients: ${ingredients.join(", ")}.
    ${preferences ? `Consider these preferences: ${preferences}.` : ""}
    Provide a recipe title, list of ingredients, and step-by-step instructions.`;

    const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
        // max_tokens: 500,
    });
    console.log(response);

    if (!response.choices[0]?.message?.content) {
        return NextResponse.json({ message: "No recipe generated" }, { status: 500 });
    }

    const recipe = response.choices[0]?.message?.content.trim();
    console.log(recipe);
    return NextResponse.json({ recipe }, { status: 200 });

    } catch (error) {
        console.error("Error generating recipe:", error);
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
};
