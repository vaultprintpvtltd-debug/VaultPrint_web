'use client'

import React, { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import { submitFranchiseApplication } from '@/actions/submitFranchiseApplication'
import { FormField } from '@/components/ui/FormField'
import { Button } from '@/components/ui/Button'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Send, CheckCircle2 } from 'lucide-react'

const kioskCountOptions = [
  { value: '1', label: '1' },
  { value: '2-5', label: '2–5' },
  { value: '6-10', label: '6–10' },
  { value: '10+', label: '10+' },
]

const venueRelationshipOptions = [
  { value: 'yes', label: 'Yes' },
  { value: 'no', label: 'No' },
  { value: 'working-on-it', label: 'Working on it' },
]

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button
      type="submit"
      variant="primary"
      size="lg"
      disabled={pending}
      isLoading={pending}
      rightIcon={!pending ? <Send size={18} /> : undefined}
      className="w-full sm:w-auto mt-4"
    >
      {pending ? 'Submitting Application...' : 'Submit Franchise Application'}
    </Button>
  )
}

export default function FranchiseApplicationForm() {
  const [state, formAction] = useActionState(submitFranchiseApplication, null)

  if (state?.success) {
    return (
      <section id="application" className="py-24 bg-white scroll-mt-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-navy-50 border border-navy-100 rounded-3xl p-10 sm:p-14 text-center shadow-lg shadow-navy-950/5">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm ring-1 ring-navy-100">
              <CheckCircle2 size={40} className="text-teal-500" />
            </div>
            <h3 className="text-3xl font-bold text-navy-950 mb-4 tracking-tight">
              Application Received!
            </h3>
            <p className="text-navy-700 font-medium leading-relaxed max-w-lg mx-auto text-lg">
              Thank you for your interest in becoming a VaultPrint franchise partner. Our team is reviewing your application and will contact you within 48 hours to schedule a consultation call.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="application" className="py-24 bg-white scroll-mt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Apply now"
          title="Start your franchise journey"
          description="Fill out the application below. We review all applications and will get back to you within 48 hours."
          align="center"
          className="mb-16"
        />

        <div className="bg-white rounded-2xl ring-1 ring-navy-100 p-8 sm:p-12 shadow shadow-navy-950/5">
          {state?.error && (
            <div className="mb-8 p-5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm font-semibold flex items-center gap-3">
              <span className="text-xl">⚠️</span> {state.error}
            </div>
          )}

          <form action={formAction} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <FormField
                id="full_name"
                name="full_name"
                label="Full name"
                placeholder="Your full name"
                required
              />
              <FormField
                id="city"
                name="city"
                label="City you want to operate in"
                placeholder="e.g. Pune"
                required
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <FormField
                id="kiosk_count"
                name="kiosk_count"
                label="Number of kiosks interested in"
                as="select"
                options={kioskCountOptions}
                required
                defaultValue=""
              />
              <FormField
                id="occupation"
                name="occupation"
                label="Current occupation"
                placeholder="e.g. Business Owner, Student"
                required
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <FormField
                id="phone"
                name="phone"
                label="Phone number"
                type="tel"
                placeholder="+91 98765 43210"
                required
              />
              <FormField
                id="email"
                name="email"
                label="Email address"
                type="email"
                placeholder="you@email.com"
                required
              />
            </div>

            <FormField
              id="has_venue_relationships"
              name="has_venue_relationships"
              label="Do you have existing venue relationships?"
              as="select"
              options={venueRelationshipOptions}
              required
              defaultValue=""
            />

            <FormField
              id="motivation"
              name="motivation"
              label="Why do you want to partner with VaultPrint?"
              as="textarea"
              placeholder="Tell us a bit about your background and why this opportunity interests you... (min 50 characters)"
              required
              minLength={50}
              rows={5}
            />

            <div className="pt-4 flex justify-center">
              <SubmitButton />
            </div>
            <p className="text-center text-xs font-medium text-navy-400 mt-4">
              Your data is secure. We never share your information with third parties.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
