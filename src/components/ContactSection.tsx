
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gradient mb-6">
            Contactez-nous
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Notre équipe est à votre disposition pour répondre à toutes vos questions 
            et vous accompagner dans votre adhésion au Réseau Santé +.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-slide-in">
            <div className="bg-gradient-green-light rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Envoyez-nous un message
              </h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom *
                    </label>
                    <Input placeholder="Votre nom" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Prénom *
                    </label>
                    <Input placeholder="Votre prénom" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <Input type="email" placeholder="votre.email@exemple.com" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Entreprise
                  </label>
                  <Input placeholder="Nom de votre entreprise" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone
                  </label>
                  <Input placeholder="+241 XX XX XX XX" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea 
                    placeholder="Décrivez votre projet ou posez vos questions..."
                    rows={4}
                  />
                </div>

                <Button className="w-full gradient-green text-white">
                  Envoyer le message
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 gradient-green rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">
                    Téléphone
                  </h4>
                  <p className="text-gray-600">+241 76364087</p>
                  <p className="text-sm text-gray-500">
                    Lundi - Vendredi : 8h00 - 18h00
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 gradient-green rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">
                    WhatsApp
                  </h4>
                  <p className="text-gray-600">+241 76364087</p>
                  <p className="text-sm text-gray-500">
                    Réponse rapide 7j/7
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 gradient-green rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">
                    Email
                  </h4>
                  <p className="text-gray-600">Réseausanté+infos@gmail.com</p>
                  <p className="text-sm text-gray-500">
                    Réponse sous 24h
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 gradient-green rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">
                    Adresse
                  </h4>
                  <p className="text-gray-600">
                    Nombakele descente saint Germain<br />
                    Libreville, Gabon
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-green rounded-xl p-8 text-white text-center">
              <h4 className="text-xl font-bold mb-4">
                Besoin d'un devis personnalisé ?
              </h4>
              <p className="text-health-green-100 mb-6">
                Obtenez une estimation gratuite adaptée aux besoins de votre entreprise.
              </p>
              <Button className="bg-white text-health-green-600 hover:bg-health-green-50">
                Demander un devis
              </Button>
            </div>

            {/* Quick Response Promise */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                🔁 Engagement de réactivité
              </h4>
              <p className="text-gray-600 text-sm">
                Nous nous engageons à vous répondre sous 48 heures ouvrées maximum. 
                Votre projet mérite toute notre attention.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
