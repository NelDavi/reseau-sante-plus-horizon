
import { useState } from 'react';
import { toast } from '@/hooks/use-toast';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
}

interface QuoteFormData {
  companyName: string;
  employeeCount: string;
  contactName: string;
  email: string;
  phone: string;
  coverageLevel: string;
  message: string;
}

export const useContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitContactForm = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulation d'envoi
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Contact form data:', data);
      
      toast({
        title: "Message envoyé !",
        description: "Nous vous répondrons sous 24 heures.",
      });
      
      return { success: true };
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
      });
      
      return { success: false };
    } finally {
      setIsSubmitting(false);
    }
  };

  const submitQuoteForm = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulation d'envoi
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Quote form data:', data);
      
      toast({
        title: "Demande de devis envoyée !",
        description: "Nous vous répondrons sous 48 heures ouvrées.",
      });
      
      return { success: true };
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
      });
      
      return { success: false };
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isSubmitting,
    submitContactForm,
    submitQuoteForm
  };
};
