import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI;
const options = {};

let client;
let clientPromise: Promise<MongoClient>;

if (!process.env.MONGO_URI) {
    throw new Error("Please add your Mongo URI to .env.local");
}

if (process.env.NODE_ENV === "development") {
    // In development, use a global variable so connection stays alive between module reloads.
    if (!(global as any).mongoClientPromise) {
        client = new MongoClient(uri!, options);
        (global as any).mongoClientPromise = client.connect();
    }
    clientPromise = (global as any).mongoClientPromise;
} else {
    // In production, a new connection is fine because modules don't reload.
    client = new MongoClient(uri!, options);
    clientPromise = client.connect();
}

export default clientPromise;