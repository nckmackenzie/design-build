'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import clsx from 'clsx';
import { Input } from '@/components/input';
import { Textarea } from '@/components/textarea';
import { Button } from '@/components/button';

const formSchema = z.object({
  firstName: z
    .string({ required_error: 'First name is required' })
    .trim()
    .min(1, 'First name is required')
    .toLowerCase(),
  lastName: z
    .string({ required_error: 'Last name is required' })
    .trim()
    .min(1, 'Last name is required')
    .toLowerCase(),
  email: z
    .string({ required_error: 'Email is required' })
    .trim()
    .min(1, 'Email is required')
    .email('Invalid email')
    .toLowerCase(),
  contact: z
    .string({ required_error: 'Contact is required' })
    .trim()
    .min(1, 'Contact is required')
    .max(10, 'Invalid contact'),
  message: z
    .string({ required_error: 'Message is required' })
    .trim()
    .min(1, 'Message is required'),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    defaultValues: {
      contact: '',
      email: '',
      firstName: '',
      lastName: '',
      message: '',
    },
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: FormValues) {
    console.log(values);
  }

  return (
    <div className="space-y-4">
      <form
        className="grid sm:grid-cols-12 gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormControl className=" sm:col-span-6">
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            First Name
          </label>
          <div className="grid gap-1">
            <Input placeholder="First Name" {...register('firstName')} />
            {errors.firstName?.message && (
              <p className="text-sm text-rose-500 font-medium">
                {errors.firstName.message}
              </p>
            )}
          </div>
        </FormControl>
        <FormControl className=" sm:col-span-6">
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Last Name
          </label>
          <div className="grid gap-1">
            <Input placeholder="Last Name" {...register('lastName')} />
            {errors.lastName?.message && (
              <p className="text-sm text-rose-500 font-medium">
                {errors.lastName.message}
              </p>
            )}
          </div>
        </FormControl>
        <FormControl className="col-span-full">
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Email
          </label>
          <div className="grid gap-1">
            <Input placeholder="smith@example.com" {...register('email')} />
            {errors.email?.message && (
              <p className="text-sm text-rose-500 font-medium">
                {errors.email.message}
              </p>
            )}
          </div>
        </FormControl>
        <FormControl className="col-span-full">
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Contact
          </label>
          <div className="grid gap-1">
            <Input
              placeholder="0700000000"
              {...register('contact')}
              maxLength={10}
            />
            {errors.contact?.message && (
              <p className="text-sm text-rose-500 font-medium">
                {errors.contact.message}
              </p>
            )}
          </div>
        </FormControl>
        <FormControl className="col-span-full">
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Message
          </label>
          <div className="grid gap-1">
            <Textarea
              placeholder="Your message"
              {...register('message')}
              className="resize-none"
            />
            {errors.contact?.message && (
              <p className="text-sm text-rose-500 font-medium">
                {errors.contact.message}
              </p>
            )}
          </div>
        </FormControl>
        <div className="col-span-full">
          <Button
            type="submit"
            className="w-full sm:w-max"
            disabled={isSubmitting}
          >
            Send Message
          </Button>
        </div>
      </form>
    </div>
  );
}

function FormControl({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={clsx('space-y-1', className)}>{children}</div>;
}
