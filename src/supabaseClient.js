import { createClient } from '@supabase/supabase-js';
import process from 'process';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;
console.log("Supabase URL:", process.env.REACT_APP_SUPABASE_URL);
console.log("Supabase Anon Key:", process.env.REACT_APP_SUPABASE_ANON_KEY);

if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Supabase URL and Anon Key are required!');
  
}


const supabase = createClient(supabaseUrl, supabaseAnonKey);



export default supabase;