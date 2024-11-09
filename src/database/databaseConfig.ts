import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

const databaseCrenditals = {
    url: process.env.DATABASE_URL as string,
    token: process.env.DATABASE_TOKEN as string
}

const database = createClient(databaseCrenditals.url, databaseCrenditals.token);

export default database;