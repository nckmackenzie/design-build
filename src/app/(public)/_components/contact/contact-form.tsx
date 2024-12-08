'use client';
import React, { useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import clsx from 'clsx';
import toast from 'react-hot-toast';

import { Input } from '@/components/input';
import { Textarea } from '@/components/textarea';
import { Button } from '@/components/button';

import { formSchema, FormValues } from '../../_utils/schema';
import { homeContactAction } from '../../_actions';

export default function ContactForm({
  onHandleClose,
}: {
  onHandleClose?: () => void;
}) {
  const [isPending, startTransition] = useTransition();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
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
    startTransition(() => {
      homeContactAction(values).then(data => {
        if (data?.error) {
          toast.error(data.error);
          return;
        }
        toast.success('Message sent successfully');
        reset();
        if (onHandleClose) {
          onHandleClose();
        }
      });
    });
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
            <Input
              placeholder="First Name"
              {...register('firstName')}
              disabled={isPending}
            />
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
            <Input
              placeholder="Last Name"
              {...register('lastName')}
              disabled={isPending}
            />
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
            <Input
              placeholder="smith@example.com"
              {...register('email')}
              disabled={isPending}
            />
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
              disabled={isPending}
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
              disabled={isPending}
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
            disabled={isPending}
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
