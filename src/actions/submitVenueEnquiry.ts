'use server'
import { z } from 'zod'
import { createServerSupabaseClient } from '@/lib/supabase'

const schema = z.object({
  name: z.string().min(2),
  organisation: z.string().min(2),
  designation: z.string().min(2),
  city: z.string().min(2),
  venue_type: z.string(),
  daily_footfall: z.string(),
  phone: z.string().min(10),
  email: z.string().email(),
  message: z.string().optional(),
})

export async function submitVenueEnquiry(
  prevState: { success: boolean; error?: string } | null,
  formData: FormData
) {
  const raw = Object.fromEntries(formData)
  const parsed = schema.safeParse(raw)

  if (!parsed.success) {
    return { success: false, error: 'Please fill in all required fields correctly.' }
  }

  const supabase = createServerSupabaseClient()
  const { error } = await supabase.from('contact_enquiries').insert(parsed.data)

  if (error) {
    return { success: false, error: 'Something went wrong. Please try again.' }
  }

  // TODO: send admin notification + auto-reply via AWS SES

  return { success: true }
}
