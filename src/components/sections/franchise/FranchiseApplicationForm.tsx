'use client'

import React, { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import { motion } from 'framer-motion'
import { submitFranchiseApplication } from '@/actions/submitFranchiseApplication'
import { FormField } from '@/components/ui/FormField'
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
    <button
      type="submit"
      disabled={pending}
      className="flex justify-center items-center gap-2 bg-vault-blue text-white px-8 py-4 rounded-xl font-bold hover:bg-vault-indigo transition-colors hover:scale-[1.02] active:scale-95 duration-200 w-full sm:w-auto mt-4 disabled:opacity-50 disabled:hover:scale-100"
    >
      {pending ? 'Submitting Application...' : 'Submit Franchise Application'} {!pending && <Send size={20} />}
    </button>
  )
}

export default function FranchiseApplicationForm() {
  const [state, formAction] = useActionState(submitFranchiseApplication, null)

  if (state?.success) {
    return (
      <section id="application" className="py-20 lg:py-28 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
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
            <CheckCircle2 size={40} className="text-vault-blue" />
          </motion.div>
          <h3 className="text-3xl font-display font-bold text-vault-deep mb-4 tracking-tight">
            Application Received!
          </h3>
          <p className="text-vault-deep/70 font-medium leading-relaxed max-w-lg mx-auto text-lg">
            Thank you for your interest in becoming a VaultPrint franchise partner. Our team is reviewing your application and will contact you within 48 hours to schedule a consultation call.
          </p>
        </motion.div>
      </section>
    )
  }

  return (
    <section id="application" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto scroll-mt-24">
      <motion.div 
        className="flex flex-col items-center text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="pill mb-8 border-vault-deep text-vault-deep">Apply now</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-vault-deep mb-4">
          Start your franchise journey
        </h2>
        <p className="text-vault-deep/70 text-lg max-w-2xl">
          Fill out the application below. We review all applications and will get back to you within 48 hours.
        </p>
      </motion.div>

      <motion.div 
        className="card bg-white p-8 sm:p-12 lg:p-16 border-none shadow-xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {state?.error && (
          <div className="mb-8 p-5 rounded-xl bg-vault-warning/10 border border-vault-warning/20 text-vault-warning text-sm font-bold flex items-center gap-3">
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

          <div className="pt-6 mt-6 border-t border-vault-deep/10 flex flex-col items-center">
            <SubmitButton />
            <p className="text-center text-sm font-bold text-vault-deep/40 mt-4">
              Your data is secure. We never share your information with third parties.
            </p>
          </div>
        </form>
      </motion.div>
    </section>
  )
}
