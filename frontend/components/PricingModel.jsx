"use client";
import React, {useState} from 'react'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import PricingSection from './PricingSection';


const PricingModel = ({ subscriptionTier = "free",children}) => {
    const [isOpen,setIsOpen] = useState(false);

    const canOpen = subscriptionTier === "free";

  return (
    <Dialog>
        <DialogTrigger>{children}</DialogTrigger>
        <DialogContent className="p-8 pt-4 sm:max-w-4xl">
            <DialogTitle />
            <PricingSection />
        </DialogContent>
    </Dialog>
  )
}

export default PricingModel
