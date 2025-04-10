import { createClient } from "@supabase/supabase-js"
const supabase = createClient("https://ulexkqzqynzfhijbdiqm.supabase.co", 
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVsZXhrcXpxeW56ZmhpamJkaXFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQxMDk3NjAsImV4cCI6MjA1OTY4NTc2MH0.U6B-fEgDE-rDt6Jcy42ePofTjbLAstnOJTSWEiDdT1g")
export default supabase