/ use supabase
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xxxxxxxxxxxxxxx.supabase.co'
const supabaseKey =
	'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'

// set up client
const supabase = createClient(supabaseUrl, supabaseKey)

// expose supabase client
export default function useSupabase() {
	return { supabase }
}
