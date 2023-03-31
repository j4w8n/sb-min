import { supabase } from '$lib/db'
import type { Provider } from '@supabase/supabase-js'

export const signIn = async (provider: Provider) => {
  try {
    const { error } = await supabase.auth.signInWithOAuth({ 
      provider
    })
    if (error) console.error(error)
  } catch (err) {
    console.error(err)
  }
}

export const signOut = async () => {
  try {
    const { error } = await supabase.auth.signOut()
    if (error) console.error('sign out error', error)
  } catch (err) {
    console.error('sign out catch error', err)
  }
}