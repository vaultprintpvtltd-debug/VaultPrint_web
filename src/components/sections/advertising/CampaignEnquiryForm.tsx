'use client'

import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import { motion } from 'framer-motion'
import { FormField } from '@/components/ui/FormField'
import { submitAdvertisingEnquiry } from '@/actions/submitAdvertisingEnquiry'
import { CheckCircle2, ArrowRight } from 'lucide-react'

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      disabled={pending}
      className="flex justify-center items-center gap-2 bg-vault-blue text-white px-8 py-4 rounded-xl font-bold hover:bg-vault-indigo transition-colors hover:scale-[1.02] active:scale-95 duration-200 w-full sm:w-auto disabled:opacity-50 disabled:hover:scale-100"
    >
      {pending ? 'Submitting...' : 'Submit Advertising Enquiry'} {!pending && <ArrowRight size={20} />}
    </button>
  )
}

export default function CampaignEnquiryForm() {
  const [state, action] = useActionState(submitAdvertisingEnquiry, null)

  if (state?.success) {
    return (
      <section id="enquiry" className="py-20 lg:py-28 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="card bg-white p-10 sm:p-14 text-center border-vault-blue/20"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="w-20 h-20 bg-vault-mist rounded-2xl flex items-center justify-center mx-auto mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
          >
            <CheckCircle2 className="w-10 h-10 text-vault-blue" />
          </motion.div>
          <h3 className="text-3xl font-display font-bold text-vault-deep mb-4">Request Received!</h3>
          <p className="text-vault-deep/70 max-w-md mx-auto leading-relaxed text-lg font-medium">
            Thank you for your interest in advertising with VaultPrint. Our partnerships team will review your requirements and contact you within 24 hours.
          </p>
        </motion.div>
      </section>
    )
  }

  return (
    <section id="enquiry" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <motion.div 
        className="flex flex-col items-center text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="pill mb-8 border-vault-deep text-vault-deep">Get Started</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-vault-deep mb-4">
          Start Your Campaign
        </h2>
        <p className="text-vault-deep/70 text-lg max-w-2xl">
          Fill out the form below to connect with our advertising team.
        </p>
      </motion.div>

      <motion.div 
        className="card bg-white p-6 md:p-10 lg:p-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <form action={action} className="space-y-6">

          {state?.error && (
            <div className="p-4 bg-vault-warning/10 border border-vault-warning/20 text-vault-warning rounded-xl text-sm font-bold mb-6">
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

          <div className="pt-6 mt-6 border-t border-vault-deep/10">
            <h4 className="text-sm font-bold text-vault-deep/40 uppercase tracking-wider mb-6">Contact Person</h4>
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

          <div className="pt-8 flex justify-center">
            <SubmitButton />
          </div>
        </form>
      </motion.div>
    </section>
  )
}
