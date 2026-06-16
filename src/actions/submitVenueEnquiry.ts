'use server'

import { supabase } from '@/lib/supabase'
import { z } from 'zod'

const venueSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  organisation: z.string().min(1, 'Organisation name is required'),
  designation: z.string().min(1, 'Designation is required'),
  city: z.string().min(1, 'City is required'),
  venue_type: z.string().min(1, 'Venue type is required'),
  daily_footfall: z.string().min(1, 'Daily footfall is required'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  email: z.string().email('Invalid email address'),
  message: z.string().optional(),
})

export async function submitVenueEnquiry(prevState: any, formData: FormData) {
  try {
    const rawData = {
      name: formData.get('name') as string,
      organisation: formData.get('organisation') as string,
      designation: formData.get('designation') as string,
      city: formData.get('city') as string,
      venue_type: formData.get('venue_type') as string,
      daily_footfall: formData.get('daily_footfall') as string,
      phone: formData.get('phone') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    }

    const validated = venueSchema.parse(rawData)

    const { error } = await supabase
      .from('contact_enquiries')
      .insert([
        {
          name: validated.name,
          organisation: validated.organisation,
          designation: validated.designation,
          city: validated.city,
          venue_type: validated.venue_type,
          daily_footfall: validated.daily_footfall,
          phone: validated.phone,
          email: validated.email,
          message: validated.message || null,
        },
      ])

    if (error) {
      console.error('Supabase error inserting venue enquiry:', error)
      return { success: false, error: 'Database submission failed. Please try again.' }
    }

    return { success: true, error: null }
  } catch (err: any) {
    if (err instanceof z.ZodError) {
      return { success: false, error: err.errors[0].message }
    }
    console.error('Unexpected error in submitVenueEnquiry:', err)
    return { success: false, error: 'Something went wrong. Please try again.' }
  }
}
