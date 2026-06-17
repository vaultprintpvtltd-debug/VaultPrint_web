'use server'
import { z } from 'zod'
import { createServerSupabaseClient } from '@/lib/supabase'

const schema = z.object({
  brand_name: z.string().min(2),
  campaign_type: z.string(),
  target_locations: z.string().min(2),
  target_audience: z.string(),
  budget_range: z.string(),
  contact_name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
})

export type AdEnquiryState = {
  success?: boolean
  error?: string
}

export async function submitAdvertisingEnquiry(prevState: AdEnquiryState | null, formData: FormData) {
  const raw = Object.fromEntries(formData)
  const parsed = schema.safeParse(raw)

  if (!parsed.success) {
    return { success: false, error: 'Please fill in all required fields correctly.' }
  }

  const supabase = createServerSupabaseClient()
  const { error } = await supabase.from('ad_enquiries').insert(parsed.data)

  if (error) {
    return { success: false, error: 'Something went wrong. Please try again.' }
  }

  // TODO: send admin notification via AWS SES

  return { success: true }
}
