'use client';
import React from 'react';

import { Button } from '@/components/button';
import { Dialog, DialogContent, DialogTitle } from '@/components/dialog';
import ContactForm from '../contact/contact-form';

export default function Actions() {
  const [isOpen, setIsOpen] = React.useState(false);

  function handleClose() {
    setIsOpen(false);
  }
  return (
    <>
      <div className="flex flex-col md:flex-row gap-4">
        <Button size="lg" variant="gore">
          Start your project today
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="border-secondary transition-colors hover:bg-secondary/20 hover:text-white"
          onClick={() => setIsOpen(true)}
        >
          Get a free consultation
        </Button>
      </div>
      <Consultation isOpen={isOpen} onHandleClose={handleClose} />
    </>
  );
}

interface ConsultationProps {
  isOpen: boolean;
  onHandleClose: () => void;
}

function Consultation({ isOpen, onHandleClose }: ConsultationProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onHandleClose}>
      <DialogContent className="bg-white max-w-2xl">
        <DialogTitle>Get a free consultation</DialogTitle>
        <ContactForm />
      </DialogContent>
    </Dialog>
  );
}
