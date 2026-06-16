'use server'
import { z } from 'zod'
import { createServerSupabaseClient } from '@/lib/supabase'

const schema = z.object({
  email: z.string().email(),
})

export async function submitWaitlist(formData: FormData) {
  const raw = Object.fromEntries(formData)
  const parsed = schema.safeParse(raw)

  if (!parsed.success) {
    return { success: false, error: 'Please enter a valid email address.' }
  }

  const supabase = createServerSupabaseClient()
  const { error } = await supabase.from('waitlist').insert(parsed.data)

  if (error) {
    // Handle unique constraint (duplicate email)
    if (error.code === '23505') {
      return { success: true } // Silently succeed — already on waitlist
    }
    return { success: false, error: 'Something went wrong. Please try again.' }
  }

  return { success: true }
}
