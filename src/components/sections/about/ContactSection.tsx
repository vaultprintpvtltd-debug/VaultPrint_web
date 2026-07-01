'use client'

import React, { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import { motion, type Variants } from 'framer-motion'
import { submitContactMessage } from '@/actions/submitContactMessage'
import { FormField } from '@/components/ui/FormField'
import { Send, CheckCircle2, Mail, MessageCircle, MapPin } from 'lucide-react'

type ActionState = { success: boolean; error?: string } | null

const subjects = [
  { value: 'kiosk-rental', label: 'Kiosk Rental' },
  { value: 'franchise', label: 'Franchise' },
  { value: 'advertising', label: 'Advertising' },
  { value: 'support', label: 'Technical Support' },
  { value: 'press', label: 'Press & Media' },
  { value: 'other', label: 'Other' },
]

const channels = [
  {
    icon: <Mail size={18} />,
    label: 'Email',
    value: 'hello@vaultprintpvtltd.online',
    href: 'mailto:hello@vaultprintpvtltd.online',
  },
  {
    icon: <MessageCircle size={18} />,
    label: 'WhatsApp',
    value: '+91 99999 99999 · replies within 2 hours',
    href: 'https://wa.me/919999999999',
  },
  {
    icon: <MapPin size={18} />,
    label: 'Location',
    value: 'Jharkhand, India',
  },
]

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="flex justify-center items-center gap-2 bg-vault-blue text-white px-6 py-3.5 rounded-xl font-bold hover:bg-vault-indigo transition-colors hover:scale-[1.02] active:scale-95 duration-200 w-full sm:w-auto disabled:opacity-50 disabled:hover:scale-100"
    >
      {pending ? 'Sending…' : 'Send Message'} {!pending && <Send size={18} />}
    </button>
  )
}

export default function ContactSection() {
  const [state, formAction] = useActionState<ActionState, FormData>(
    async (_prev, formData) => submitContactMessage(formData),
    null
  )

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  return (
    <section id="contact" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left — context + channels */}
        <motion.div 
          className="lg:col-span-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <span className="pill mb-6 border-vault-deep text-vault-deep">Get in touch</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-vault-deep mb-4">
              Talk to the VaultPrint team
            </h2>
            <p className="text-vault-deep/70 text-lg mb-8 leading-relaxed">
              Questions about a kiosk, a franchise, advertising, or support? Send us a note and we&apos;ll get back to you.
            </p>
          </motion.div>

          <motion.div className="space-y-4" variants={containerVariants}>
            {channels.map((channel, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-vault-deep/5 hover:border-vault-blue transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-vault-frost text-vault-blue flex items-center justify-center shrink-0 group-hover:bg-vault-blue group-hover:text-white transition-colors duration-300">
                  {channel.icon}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-vault-deep mb-0.5">{channel.label}</h4>
                  {channel.href ? (
                    <a
                      href={channel.href}
                      className="text-sm text-vault-deep/70 hover:text-vault-blue font-medium transition-colors"
                    >
                      {channel.value}
                    </a>
                  ) : (
                    <p className="text-sm text-vault-deep/70 font-medium">{channel.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — form */}
        <motion.div 
          className="lg:col-span-7"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {state?.success ? (
            <div className="card bg-white rounded-3xl p-10 sm:p-14 text-center">
              <motion.div 
                className="w-20 h-20 bg-vault-mist rounded-2xl flex items-center justify-center mx-auto mb-8"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", bounce: 0.5 }}
              >
                <CheckCircle2 size={40} className="text-vault-blue" />
              </motion.div>
              <h3 className="text-2xl font-display font-bold text-vault-deep mb-4">Message sent!</h3>
              <p className="text-vault-deep/70 font-medium leading-relaxed max-w-md mx-auto text-lg">
                Thanks for reaching out. We&rsquo;ve received your message and will get back
                to you shortly.
              </p>
            </div>
          ) : (
            <div className="card bg-white rounded-3xl p-8 sm:p-12">
              {state?.error && (
                <div className="mb-6 p-4 rounded-xl bg-vault-warning/10 border border-vault-warning/20 text-vault-warning text-sm font-bold">
                  {state.error}
                </div>
              )}

              <form action={formAction} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <FormField id="name" name="name" label="Name" placeholder="Full name" required />
                  <FormField
                    id="email"
                    name="email"
                    label="Email"
                    type="email"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <FormField
                    id="phone"
                    name="phone"
                    label="Phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                  />
                  <FormField
                    id="subject"
                    name="subject"
                    label="Subject"
                    as="select"
                    options={subjects}
                    required
                    defaultValue=""
                  />
                </div>

                <FormField
                  id="message"
                  name="message"
                  label="Message"
                  as="textarea"
                  rows={5}
                  placeholder="How can we help? (at least 20 characters)"
                  required
                />

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4 border-t border-vault-mist/30">
                  <SubmitButton />
                  <p className="text-sm text-vault-deep/50 font-medium">
                    We typically reply within one business day.
                  </p>
                </div>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
