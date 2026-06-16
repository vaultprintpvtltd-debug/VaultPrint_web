'use server'
import { z } from 'zod'
import { createServerSupabaseClient } from '@/lib/supabase'

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  subject: z.string(),
  message: z.string().min(20),
})

export async function submitContactMessage(formData: FormData) {
  const raw = Object.fromEntries(formData)
  const parsed = schema.safeParse(raw)

  if (!parsed.success) {
    return { success: false, error: 'Please fill in all required fields correctly.' }
  }

  const supabase = createServerSupabaseClient()
  const { error } = await supabase.from('contact_messages').insert(parsed.data)

  if (error) {
    return { success: false, error: 'Something went wrong. Please try again.' }
  }

  // TODO: send admin notification + auto-reply via AWS SES

  return { success: true }
}
