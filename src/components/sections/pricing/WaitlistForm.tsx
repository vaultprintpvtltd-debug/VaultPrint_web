'use client'

import React, { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import { motion } from 'framer-motion'
import { submitWaitlist } from '@/actions/submitWaitlist'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

type ActionState = { success: boolean; error?: string } | null

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="flex justify-center items-center gap-2 bg-vault-cyan text-vault-deep px-6 py-3.5 rounded-xl font-bold hover:bg-vault-skybright transition-colors hover:scale-[1.02] active:scale-95 duration-200 w-full sm:w-auto shrink-0 disabled:opacity-50 disabled:hover:scale-100"
    >
      {pending ? 'Joining…' : 'Join the waitlist'} {!pending && <ArrowRight size={18} />}
    </button>
  )
}

export default function WaitlistForm() {
  const [state, formAction] = useActionState<ActionState, FormData>(
    async (_prev, formData) => submitWaitlist(formData),
    null
  )

  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <motion.div 
        className="card bg-vault-deep overflow-hidden p-8 sm:p-12 lg:p-16 text-center border-none relative"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute -top-24 right-0 h-96 w-96 rounded-full bg-vault-cyan/20 blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4 text-balance">
            Regular printer? Monthly passes coming soon.
          </h2>
          <p className="text-white/70 max-w-xl mx-auto mb-10 text-lg">
            A VaultPrint monthly pass will let you print at a reduced per-page rate. Join
            the waitlist to be first to know.
          </p>

          {state?.success ? (
            <motion.div 
              className="inline-flex items-center gap-3 rounded-xl bg-white/10 px-6 py-4 text-white font-medium border border-white/20 backdrop-blur-md"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", bounce: 0.5 }}
            >
              <CheckCircle2 size={24} className="text-vault-cyan" />
              You&rsquo;re on the list — we&rsquo;ll be in touch.
            </motion.div>
          ) : (
            <form
              action={formAction}
              className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
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
                className="w-full rounded-xl border border-white/20 bg-white/10 px-5 py-4 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-vault-cyan/50 focus:border-vault-cyan transition backdrop-blur-sm"
              />
              <SubmitButton />
            </form>
          )}

          {state?.error && (
            <p className="mt-5 text-sm text-vault-warning font-bold">{state.error}</p>
          )}
        </div>
      </motion.div>
    </section>
  )
}
