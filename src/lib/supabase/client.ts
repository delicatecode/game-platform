/* supabase */
import { createClient } from "@supabase/supabase-js"

/* app */
import { environment as env } from "../../environment"


export default createClient(
  env.supabase.url,
  env.supabase.anonKey,
);
