'use client'

import React, { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import { submitVenueEnquiry } from '@/actions/submitVenueEnquiry'
import { FormField } from '@/components/ui/FormField'
import { Button } from '@/components/ui/Button'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Send, CheckCircle2, MessageCircle } from 'lucide-react'

const venueTypes = [
  { value: 'college', label: 'College' },
  { value: 'hostel', label: 'Hostel / PG' },
  { value: 'government', label: 'Government Office' },
  { value: 'coworking', label: 'Co-working Space' },
  { value: 'mall', label: 'Shopping Mall' },
  { value: 'other', label: 'Other' },
]

const footfallOptions = [
  { value: 'under-100', label: 'Under 100' },
  { value: '100-500', label: '100–500' },
  { value: '500-2000', label: '500–2000' },
  { value: 'above-2000', label: 'Above 2000' },
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
      className="w-full sm:w-auto"
    >
      {pending ? 'Submitting...' : 'Request a Consultation'}
    </Button>
  )
}

export default function VenueEnquiryForm() {
  const [state, formAction] = useActionState(submitVenueEnquiry, null)

  if (state?.success) {
    return (
      <section id="enquiry" className="py-24 bg-white scroll-mt-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-teal-50 border border-teal-200 rounded-3xl p-10 sm:p-14 text-center">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={32} className="text-teal-600" />
            </div>
            <h3 className="text-2xl font-bold text-navy-900 mb-3">
              Thank you for reaching out!
            </h3>
            <p className="text-navy-700 font-medium leading-relaxed max-w-md mx-auto">
              We&apos;ve received your enquiry and will respond within 24 hours with a personalised proposal for your venue.
            </p>
            <p className="text-navy-500 text-sm mt-4">
              For urgent enquiries, WhatsApp us at{' '}
              <a href="https://wa.me/919999999999" className="underline font-semibold text-teal-600 hover:text-teal-700 transition-colors">
                +91 99999 99999
              </a>
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="enquiry" className="py-24 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 items-start">

          {/* Left column — context */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <SectionHeader
              eyebrow="Get started"
              title="Request a free consultation"
              description="Tell us about your venue and we'll send you a customised proposal within 48 hours. No commitment, no cost."
              align="left"
            />

            <div className="hidden lg:block space-y-6 mt-4">
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-cream-50 border border-cream-200">
                <div className="w-10 h-10 rounded-xl bg-navy-50 ring-1 ring-navy-100 flex items-center justify-center shrink-0">
                  <MessageCircle size={18} className="text-navy-700" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-navy-900 mb-1">Prefer WhatsApp?</h4>
                  <p className="text-sm text-navy-500">
                    Message us at{' '}
                    <a href="https://wa.me/919999999999" className="text-navy-700 font-semibold hover:underline">
                      +91 99999 99999
                    </a>
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-cream-50 border border-cream-200">
                <p className="text-sm text-navy-500 leading-relaxed">
                  <span className="font-semibold text-navy-900">What happens next?</span>
                  <br />
                  We&apos;ll review your venue details, assess feasibility based on footfall and infrastructure, and send you a tailored proposal — typically within 48 hours.
                </p>
              </div>
            </div>
          </div>

          {/* Right column — form */}
          <div className="lg:col-span-7">
            <div className="bg-white ring-1 ring-navy-100 rounded-3xl p-8 sm:p-10 shadow-lg shadow-navy-950/5">
              {state?.error && (
                <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm font-medium">
                  {state.error}
                </div>
              )}

              <form action={formAction} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <FormField
                    id="name"
                    name="name"
                    label="Your name"
                    placeholder="Full name"
                    required
                  />
                  <FormField
                    id="organisation"
                    name="organisation"
                    label="Organisation name"
                    placeholder="e.g. BIT Mesra"
                    required
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <FormField
                    id="designation"
                    name="designation"
                    label="Your designation / role"
                    placeholder="e.g. Dean, Admin Head"
                    required
                  />
                  <FormField
                    id="city"
                    name="city"
                    label="City"
                    placeholder="e.g. Ranchi"
                    required
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <FormField
                    id="venue_type"
                    name="venue_type"
                    label="Venue type"
                    as="select"
                    options={venueTypes}
                    required
                    defaultValue=""
                  />
                  <FormField
                    id="daily_footfall"
                    name="daily_footfall"
                    label="Estimated daily footfall"
                    as="select"
                    options={footfallOptions}
                    required
                    defaultValue=""
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
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
                    placeholder="you@organisation.com"
                    required
                  />
                </div>

                <FormField
                  id="message"
                  name="message"
                  label="Anything else?"
                  as="textarea"
                  placeholder="Tell us about your venue, expected usage, or any questions you have..."
                />

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
                  <SubmitButton />
                  <p className="text-xs text-navy-400 font-medium">
                    We typically respond within 24 hours.
                  </p>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
