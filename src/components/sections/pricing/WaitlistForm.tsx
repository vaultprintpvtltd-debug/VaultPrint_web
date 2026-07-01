'use client'

import React, { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import { submitWaitlist } from '@/actions/submitWaitlist'
import { Button } from '@/components/ui/Button'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

type ActionState = { success: boolean; error?: string } | null

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button
      type="submit"
      variant="teal"
      size="lg"
      disabled={pending}
      isLoading={pending}
      rightIcon={!pending ? <ArrowRight size={18} /> : undefined}
      className="w-full sm:w-auto shrink-0"
    >
      {pending ? 'Joining…' : 'Join the waitlist'}
    </Button>
  )
}

export default function WaitlistForm() {
  const [state, formAction] = useActionState<ActionState, FormData>(
    async (_prev, formData) => submitWaitlist(formData),
    null
  )

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-navy-800 to-navy-950 px-6 py-12 sm:px-12 sm:py-16 text-center ring-1 ring-white/10">
          <div className="absolute -top-24 right-0 h-96 w-lg rounded-full bg-teal-500/15 blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-balance">
              Regular printer? Monthly passes coming soon.
            </h2>
            <p className="text-navy-200 max-w-xl mx-auto mb-8 text-pretty">
              A VaultPrint monthly pass will let you print at a reduced per-page rate. Join
              the waitlist to be first to know.
            </p>

            {state?.success ? (
              <div className="inline-flex items-center gap-2.5 rounded-xl bg-white/10 px-5 py-3.5 text-white font-medium ring-1 ring-white/15">
                <CheckCircle2 size={20} className="text-teal-300" />
                You&rsquo;re on the list — we&rsquo;ll be in touch.
              </div>
            ) : (
              <form
                action={formAction}
                className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
              >
                <label htmlFor="waitlist-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="waitlist-email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder-navy-300 focus:outline-none focus:ring-2 focus:ring-teal-400/50 focus:border-teal-400 transition"
                />
                <SubmitButton />
              </form>
            )}

            {state?.error && (
              <p className="mt-4 text-sm text-red-300 font-medium">{state.error}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
