'use server'
import { z } from 'zod'
import { createServerSupabaseClient } from '@/lib/supabase'

const schema = z.object({
  full_name: z.string().min(2),
  city: z.string().min(2),
  kiosk_count: z.string(),
  occupation: z.string().min(2),
  has_venue_relationships: z.string(),
  phone: z.string().min(10),
  email: z.string().email(),
  motivation: z.string().min(50),
})

export async function submitFranchiseApplication(formData: FormData) {
  const raw = Object.fromEntries(formData)
  const parsed = schema.safeParse(raw)

  if (!parsed.success) {
    return { success: false, error: 'Please fill in all required fields correctly.' }
  }

  const supabase = createServerSupabaseClient()
  const { error } = await supabase.from('franchise_applications').insert(parsed.data)

  if (error) {
    return { success: false, error: 'Something went wrong. Please try again.' }
  }

  // TODO: send admin notification + auto-reply via AWS SES

  return { success: true }
}
