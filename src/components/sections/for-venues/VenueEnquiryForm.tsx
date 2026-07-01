'use client'

import React, { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import { motion, type Variants } from 'framer-motion'
import { submitVenueEnquiry } from '@/actions/submitVenueEnquiry'
import { FormField } from '@/components/ui/FormField'
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
    <button
      type="submit"
      disabled={pending}
      className="flex justify-center items-center gap-2 bg-vault-blue text-white px-8 py-4 rounded-xl font-bold hover:bg-vault-indigo transition-colors hover:scale-[1.02] active:scale-95 duration-200 w-full sm:w-auto disabled:opacity-50 disabled:hover:scale-100"
    >
      {pending ? 'Submitting...' : 'Request a Consultation'} {!pending && <Send size={20} />}
    </button>
  )
}

export default function VenueEnquiryForm() {
  const [state, formAction] = useActionState(submitVenueEnquiry, null)

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  if (state?.success) {
    return (
      <section id="enquiry" className="py-20 lg:py-28 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
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
          <h3 className="text-3xl font-display font-bold text-vault-deep mb-4">
            Thank you for reaching out!
          </h3>
          <p className="text-vault-deep/70 font-medium leading-relaxed max-w-md mx-auto text-lg mb-8">
            We&apos;ve received your enquiry and will respond within 24 hours with a personalised proposal for your venue.
          </p>
          <p className="text-vault-deep/50 text-sm font-bold bg-vault-frost p-4 rounded-xl border border-vault-deep/5">
            For urgent enquiries, WhatsApp us at{' '}
            <a href="https://wa.me/919999999999" className="text-vault-blue hover:text-vault-indigo transition-colors ml-1">
              +91 99999 99999
            </a>
          </p>
        </motion.div>
      </section>
    )
  }

  return (
    <section id="enquiry" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
      <div className="grid lg:grid-cols-12 gap-16 items-start">

        {/* Left column — context */}
        <motion.div 
          className="lg:col-span-5 flex flex-col gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <span className="pill mb-6 border-vault-deep text-vault-deep">Get started</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-vault-deep mb-4">
              Request a free consultation
            </h2>
            <p className="text-vault-deep/70 text-lg leading-relaxed">
              Tell us about your venue and we&apos;ll send you a customised proposal within 48 hours. No commitment, no cost.
            </p>
          </motion.div>

          <motion.div className="hidden lg:block space-y-6 mt-8" variants={containerVariants}>
            <motion.div variants={itemVariants} className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-vault-deep/5 hover:border-vault-blue transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-vault-mist border border-vault-blue/10 flex items-center justify-center shrink-0 group-hover:bg-vault-blue group-hover:text-white transition-colors duration-300 text-vault-blue">
                <MessageCircle size={24} />
              </div>
              <div>
                <h4 className="text-lg font-display font-bold text-vault-deep mb-1">Prefer WhatsApp?</h4>
                <p className="text-vault-deep/70 font-medium">
                  Message us at{' '}
                  <a href="https://wa.me/919999999999" className="text-vault-blue hover:text-vault-indigo transition-colors ml-1 font-bold">
                    +91 99999 99999
                  </a>
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="p-6 rounded-2xl bg-white border border-vault-deep/5 hover:border-vault-blue transition-colors">
              <p className="text-vault-deep/70 font-medium leading-relaxed">
                <span className="font-display font-bold text-vault-deep block text-lg mb-2">What happens next?</span>
                We&apos;ll review your venue details, assess feasibility based on footfall and infrastructure, and send you a tailored proposal — typically within 48 hours.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right column — form */}
        <motion.div 
          className="lg:col-span-7"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="card bg-white p-8 sm:p-10 lg:p-12">
            {state?.error && (
              <div className="mb-6 p-4 rounded-xl bg-vault-warning/10 border border-vault-warning/20 text-vault-warning text-sm font-bold">
                {state.error}
              </div>
            )}

            <form action={formAction} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
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

              <div className="grid sm:grid-cols-2 gap-6">
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

              <div className="grid sm:grid-cols-2 gap-6">
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

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-6 mt-6 border-t border-vault-deep/10">
                <SubmitButton />
                <p className="text-sm text-vault-deep/50 font-bold">
                  We typically respond within 24 hours.
                </p>
              </div>
            </form>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
