'use server'

import { supabase } from '@/lib/supabase'
import { z } from 'zod'

const adSchema = z.object({
  brand_name: z.string().min(1, 'Brand or company name is required'),
  campaign_type: z.string().min(1, 'Please select a campaign type'),
  target_locations: z.string().min(1, 'Target locations are required'),
  target_audience: z.string().min(1, 'Please select a target audience'),
  budget_range: z.string().min(1, 'Please select a budget range'),
  contact_name: z.string().min(1, 'Contact name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
})

export async function submitAdvertisingEnquiry(prevState: any, formData: FormData) {
  try {
    const rawData = {
      brand_name: formData.get('brand_name') as string,
      campaign_type: formData.get('campaign_type') as string,
      target_locations: formData.get('target_locations') as string,
      target_audience: formData.get('target_audience') as string,
      budget_range: formData.get('budget_range') as string,
      contact_name: formData.get('contact_name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
    }

    const validated = adSchema.parse(rawData)

    const { error } = await supabase
      .from('ad_enquiries')
      .insert([
        {
          brand_name: validated.brand_name,
          campaign_type: validated.campaign_type,
          target_locations: validated.target_locations,
          target_audience: validated.target_audience,
          budget_range: validated.budget_range,
          contact_name: validated.contact_name,
          email: validated.email,
          phone: validated.phone,
        },
      ])

    if (error) {
      console.error('Supabase error inserting ad enquiry:', error)
      return { success: false, error: 'Database submission failed. Please try again.' }
    }

    return { success: true, error: null }
  } catch (err: any) {
    if (err instanceof z.ZodError) {
      return { success: false, error: err.errors[0].message }
    }
    console.error('Unexpected error in submitAdvertisingEnquiry:', err)
    return { success: false, error: 'Something went wrong. Please try again.' }
  }
}
