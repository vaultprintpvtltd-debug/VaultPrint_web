'use server'

import { supabase } from '@/lib/supabase'
import { z } from 'zod'

const franchiseSchema = z.object({
  full_name: z.string().min(1, 'Full name is required'),
  city: z.string().min(1, 'City is required'),
  kiosk_count: z.string().min(1, 'Please select a kiosk count range'),
  occupation: z.string().min(1, 'Current occupation is required'),
  has_venue_relationships: z.string().min(1, 'Please select your relationship status'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  email: z.string().email('Invalid email address'),
  motivation: z.string().min(50, 'Motivation message must be at least 50 characters long'),
})

export async function submitFranchiseApplication(prevState: any, formData: FormData) {
  try {
    const rawData = {
      full_name: formData.get('full_name') as string,
      city: formData.get('city') as string,
      kiosk_count: formData.get('kiosk_count') as string,
      occupation: formData.get('occupation') as string,
      has_venue_relationships: formData.get('has_venue_relationships') as string,
      phone: formData.get('phone') as string,
      email: formData.get('email') as string,
      motivation: formData.get('motivation') as string,
    }

    const validated = franchiseSchema.parse(rawData)

    const { error } = await supabase
      .from('franchise_applications')
      .insert([
        {
          full_name: validated.full_name,
          city: validated.city,
          kiosk_count: validated.kiosk_count,
          occupation: validated.occupation,
          has_venue_relationships: validated.has_venue_relationships,
          phone: validated.phone,
          email: validated.email,
          motivation: validated.motivation,
        },
      ])

    if (error) {
      console.error('Supabase error inserting franchise application:', error)
      return { success: false, error: 'Database submission failed. Please try again.' }
    }

    return { success: true, error: null }
  } catch (err: any) {
    if (err instanceof z.ZodError) {
      return { success: false, error: err.errors[0].message }
    }
    console.error('Unexpected error in submitFranchiseApplication:', err)
    return { success: false, error: 'Something went wrong. Please try again.' }
  }
}
