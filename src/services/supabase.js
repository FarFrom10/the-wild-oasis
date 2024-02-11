import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://hulxkdihgtsiuabcgvpd.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh1bHhrZGloZ3RzaXVhYmNndnBkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM1NzI0MzEsImV4cCI6MjAxOTE0ODQzMX0.EfBC723fWj6M8XFwQbBFAgR67hmmY0OEOy0laNdytvw'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
