import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
import userRoutes from './routes/userRoutes.js'
import paymentRoutes from './routes/paymentRoutes.js';
import roomsRoutes from './routes/roomsRoutes.js';
import notificationRoutes from './routes/notificationRoutes.js';

dotenv.config();
const app = express();

// Validasi jika Supabase URL atau Key tidak tersedia
if (!process.env.SUPABASE_URL || !process.env.SUPABASE_KEY) {
  throw new Error('Missing SUPABASE_URL or SUPABASE_KEY in environment variables');
}


const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);
console.log('Supabase initialized:', supabase);


app.use("/",(req,res) => {
res.send ("server berjalan");
}

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
