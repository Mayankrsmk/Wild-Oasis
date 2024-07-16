import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://zzzlhcabnndncoxgwydq.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp6emxoY2Fibm5kbmNveGd3eWRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk4ODMxMjMsImV4cCI6MjAyNTQ1OTEyM30.qf8vCgNMU_1f8a6yAs4UzFTJzqk_xmrLKrhLRhuMxnE"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase