import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mdtawqbuvdnyinfznrfk.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1kdGF3cWJ1dmRueWluZnpucmZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQwMzM3MTYsImV4cCI6MjA1OTYwOTcxNn0.y_PGo0e65hvo0wTikMlSIV3d5cP5kQYYHRWbDcrEu9w';

export const supabase = createClient(supabaseUrl, supabaseKey);
