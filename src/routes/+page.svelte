<script lang="ts">
import { signIn, signOut } from '$lib/auth'
import { supabase } from '$lib/db'
import { onMount } from 'svelte'
import type { AuthChangeEvent, Session } from '@supabase/supabase-js'

onMount(() => {
  supabase.auth.onAuthStateChange(( event: AuthChangeEvent, session: Session | null ) => {
    console.log(event, session)
  })
})

</script>
<button style="margin-top: 12px;" on:click={() => { signIn('github') }}>OAuth Login</button>
<button style="margin-top: 12px;" on:click={() => { signOut() }}>OAuth Logout</button>