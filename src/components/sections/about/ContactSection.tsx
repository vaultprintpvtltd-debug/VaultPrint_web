'use client'

import React, { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import { submitContactMessage } from '@/actions/submitContactMessage'
import { FormField } from '@/components/ui/FormField'
import { Button } from '@/components/ui/Button'
import { SectionHeader } from '@/components/ui/SectionHeader'
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
    <Button
      type="submit"
      variant="primary"
      size="lg"
      disabled={pending}
      isLoading={pending}
      rightIcon={!pending ? <Send size={18} /> : undefined}
      className="w-full sm:w-auto"
    >
      {pending ? 'Sending…' : 'Send Message'}
    </Button>
  )
}

export default function ContactSection() {
  const [state, formAction] = useActionState<ActionState, FormData>(
    async (_prev, formData) => submitContactMessage(formData),
    null
  )

  return (
    <section id="contact" className="py-24 bg-cream-50 border-t border-cream-200 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left — context + channels */}
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Get in touch"
              title="Talk to the VaultPrint team"
              description="Questions about a kiosk, a franchise, advertising, or support? Send us a note and we'll get back to you."
              align="left"
            />

            <div className="mt-8 space-y-4">
              {channels.map((channel, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white ring-1 ring-navy-100"
                >
                  <div className="w-10 h-10 rounded-xl bg-navy-50 text-navy-700 flex items-center justify-center shrink-0 ring-1 ring-navy-100">
                    {channel.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-navy-900 mb-0.5">{channel.label}</h4>
                    {channel.href ? (
                      <a
                        href={channel.href}
                        className="text-sm text-navy-600 hover:text-navy-800 font-medium transition-colors"
                      >
                        {channel.value}
                      </a>
                    ) : (
                      <p className="text-sm text-navy-600 font-medium">{channel.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-7">
            {state?.success ? (
              <div className="bg-white ring-1 ring-navy-100 rounded-3xl p-10 sm:p-14 text-center shadow-sm">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={32} className="text-teal-600" />
                </div>
                <h3 className="text-2xl font-bold text-navy-950 mb-3">Message sent!</h3>
                <p className="text-navy-500 font-medium leading-relaxed max-w-md mx-auto">
                  Thanks for reaching out. We&rsquo;ve received your message and will get back
                  to you shortly.
                </p>
              </div>
            ) : (
              <div className="bg-white ring-1 ring-navy-100 rounded-3xl p-8 sm:p-10 shadow-lg shadow-navy-950/5">
                {state?.error && (
                  <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm font-medium">
                    {state.error}
                  </div>
                )}

                <form action={formAction} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
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

                  <div className="grid sm:grid-cols-2 gap-5">
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

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
                    <SubmitButton />
                    <p className="text-xs text-navy-400 font-medium">
                      We typically reply within one business day.
                    </p>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
