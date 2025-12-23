'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import clsx from 'clsx';

const formSchema = z.object({
  name: z.string().min(2, 'Please share your full name'),
  phone: z.string().min(8, 'Include your country/area code'),
  message: z.string().min(10, 'Share a short context so we can prepare')
});

type FormValues = z.infer<typeof formSchema>;

type ContactFormProps = {
  variant?: 'default' | 'compact';
};

const ContactForm = ({ variant = 'default' }: ContactFormProps) => {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (values: FormValues) => {
    setStatus('idle');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });

      if (!response.ok) throw new Error('Unable to send');
      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={clsx(
        'space-y-4',
        variant === 'compact' && 'sm:grid sm:grid-cols-3 sm:items-end sm:gap-4 sm:space-y-0'
      )}
    >
      <div>
        <label htmlFor="name" className="text-sm font-semibold text-brand-navy">
          Full Name
        </label>
        <input
          id="name"
          type="text"
          {...register('name')}
          className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm shadow-sm focus:border-brand-light focus:outline-none focus:ring-2 focus:ring-brand-light/30"
          placeholder="Your name"
        />
        {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
      </div>
      <div>
        <label htmlFor="phone" className="text-sm font-semibold text-brand-navy">
          Phone / WhatsApp
        </label>
        <input
          id="phone"
          type="tel"
          {...register('phone')}
          className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm shadow-sm focus:border-brand-light focus:outline-none focus:ring-2 focus:ring-brand-light/30"
          placeholder="+91-XXXXXXXXXX"
        />
        {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>}
      </div>
      <div className={clsx(variant === 'compact' && 'sm:col-span-3')}>
        <label htmlFor="message" className="text-sm font-semibold text-brand-navy">
          Message
        </label>
        <textarea
          id="message"
          rows={variant === 'compact' ? 2 : 4}
          {...register('message')}
          className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm shadow-sm focus:border-brand-light focus:outline-none focus:ring-2 focus:ring-brand-light/30"
          placeholder="Preferred time for a call, goals, etc."
        />
        {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>}
      </div>
      <div className={clsx(variant === 'compact' && 'sm:col-span-3')}>
        <button
          type="submit"
          className="w-full rounded-xl bg-brand-teal px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-gold hover:text-brand-navy disabled:cursor-not-allowed disabled:opacity-70"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending…' : 'Submit enquiry'}
        </button>
        <p className="mt-2 text-xs text-slate-500" aria-live="polite">
          {status === 'success' && 'Thank you! We will call you within 1 business day.'}
          {status === 'error' && 'Something went wrong. Please retry or reach us via phone/WhatsApp.'}
        </p>
      </div>
    </form>
  );
};

export default ContactForm;
