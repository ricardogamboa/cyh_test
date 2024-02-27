import dotenv from 'dotenv';

dotenv.config();

export const DB_URL = process.env.DB_URL;
export const API_URL = process.env.API_URL;
export const PORT = process.env.PORT;
