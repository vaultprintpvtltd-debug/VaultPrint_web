'use client'

import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import { FormField } from '@/components/ui/FormField'
import { submitAdvertisingEnquiry } from '@/actions/submitAdvertisingEnquiry'
import { CheckCircle2, ArrowRight } from 'lucide-react'

function SubmitButton() {
  const { pending } = useFormStatus()
  
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-brand-blue rounded-full hover:bg-blue-700 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
    >
      {pending ? 'Submitting...' : (
        <>Submit Advertising Enquiry <ArrowRight className="ml-2 w-5 h-5" /></>
      )}
    </button>
  )
}

export default function CampaignEnquiryForm() {
  const [state, action] = useActionState(submitAdvertisingEnquiry, null)

  if (state?.success) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center animate-fade-in-up">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-green-900 mb-2">Request Received!</h3>
        <p className="text-green-800 max-w-md mx-auto">
          Thank you for your interest in advertising with VaultPrint. Our partnerships team will review your requirements and contact you within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <section id="enquiry" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Start Your Campaign
          </h2>
          <p className="text-lg text-gray-600">
            Fill out the form below to connect with our advertising team.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-6 md:p-10 rounded-3xl shadow-xl shadow-brand-navy/5 border border-gray-100">
            <form action={action} className="space-y-6">
              
              {state?.error && (
                <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl text-sm font-medium">
                  {state.error}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  id="brand_name"
                  name="brand_name"
                  label="Brand or Company Name"
                  placeholder="e.g. Acme Corp"
                  required
                />
                
                <FormField
                  id="campaign_type"
                  name="campaign_type"
                  label="Campaign Type"
                  as="select"
                  defaultValue=""
                  required
                  options={[
                    { value: 'Brand awareness', label: 'Brand awareness' },
                    { value: 'Lead generation', label: 'Lead generation' },
                    { value: 'Offer promotion', label: 'Offer promotion' },
                    { value: 'App download', label: 'App download' },
                    { value: 'Other', label: 'Other' },
                  ]}
                />
              </div>

              <FormField
                id="target_locations"
                name="target_locations"
                label="Target City or Locations"
                placeholder="e.g. Bengaluru, Delhi NCR, or specific colleges"
                required
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  id="target_audience"
                  name="target_audience"
                  label="Target Audience"
                  as="select"
                  defaultValue=""
                  required
                  options={[
                    { value: 'College students', label: 'College students' },
                    { value: 'Office professionals', label: 'Office professionals' },
                    { value: 'Both', label: 'Both' },
                  ]}
                />

                <FormField
                  id="budget_range"
                  name="budget_range"
                  label="Monthly Budget Range"
                  as="select"
                  defaultValue=""
                  required
                  options={[
                    { value: 'Under ₹5,000', label: 'Under ₹5,000' },
                    { value: '₹5,000–₹20,000', label: '₹5,000–₹20,000' },
                    { value: '₹20,000–₹1 lakh', label: '₹20,000–₹1 lakh' },
                    { value: 'Above ₹1 lakh', label: 'Above ₹1 lakh' },
                  ]}
                />
              </div>

              <div className="pt-4 border-t border-gray-100">
                <h4 className="text-sm font-bold text-brand-navy uppercase tracking-wider mb-4">Contact Person</h4>
                <div className="grid grid-cols-1 gap-6">
                  <FormField
                    id="contact_name"
                    name="contact_name"
                    label="Name"
                    placeholder="Your full name"
                    required
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      id="email"
                      name="email"
                      type="email"
                      label="Email Address"
                      placeholder="you@company.com"
                      required
                    />
                    <FormField
                      id="phone"
                      name="phone"
                      type="tel"
                      label="Phone Number"
                      placeholder="+91"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="pt-6 flex justify-center">
                <SubmitButton />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
