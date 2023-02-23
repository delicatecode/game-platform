/* app */
import supabase from '../lib/supabase/client';


export default class ExampleRepository {
  constructor () {}

  async get (id: string) {
    const data = await supabase
      .from("Example")
      .select()
      .match({ id })
      .single()
    return data;
  }
}