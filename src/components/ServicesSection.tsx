
import { CheckCircle, Users, Clock, Shield, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  const features = [
    "Couverture collective adaptée au nombre d'employés",
    "Garanties essentielles : consultations, hospitalisation, médicaments",
    "Flexibilité dans le choix du niveau de couverture",
    "Maternité et prévention incluses"
  ];

  const advantages = [
    {
      icon: Users,
      title: "Large réseau de partenaires",
      description: "Accès direct à un large réseau de structures médicales partenaires sur l'ensemble du territoire."
    },
    {
      icon: CheckCircle,
      title: "Tarifs négociés",
      description: "Tarifs négociés pour les prestations médicales (consultations, analyses, soins spécialisés, etc.)."
    },
    {
      icon: Clock,
      title: "Suivi facilité",
      description: "Historique de soins, remboursements, et assistance via notre plateforme digitale."
    },
    {
      icon: Shield,
      title: "Service client dédié",
      description: "Service client réactif et dédié aux entreprises."
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Souscription de l'entreprise",
      description: "L'entreprise choisit une offre et signe un contrat Réseau santé +"
    },
    {
      number: "02",
      title: "Enregistrement des salariés",
      description: "Chaque employé reçoit sa carte Réseau Santé+ avec un identifiant personnel"
    },
    {
      number: "03",
      title: "Accès aux soins",
      description: "Les employés se rendent dans les structures partenaires avec leur carte"
    },
    {
      number: "04",
      title: "Suivi et assistance",
      description: "La plateforme permet un accès facile aux remboursements et à l'assistance"
    }
  ];

  return (
    <section id="nos-offres" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gradient mb-6">
            Nos Offres et Services
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Des offres santé conçues pour les entreprises moyennes, 
            modulables et adaptées à vos besoins spécifiques.
          </p>
        </div>

        {/* Main offer */}
        <div className="bg-gradient-green-light rounded-2xl p-8 md:p-12 mb-16 animate-slide-in">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Couverture Collective Adaptée
              </h3>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                Réseau santé + propose une gamme d'offres santé modulables, 
                spécialement pensées pour répondre aux besoins des entreprises moyennes.
              </p>
              
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-health-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <p className="text-health-green-700 font-semibold text-lg">
                Offrir une couverture santé accessible et fiable n'a jamais été aussi simple.
              </p>
            </div>

            <div className="relative">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 gradient-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-10 w-10 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">
                    Couverture Complète
                  </h4>
                </div>
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Consultations</span>
                    <CheckCircle className="h-4 w-4 text-health-green-600" />
                  </div>
                  <div className="flex justify-between">
                    <span>Hospitalisation</span>
                    <CheckCircle className="h-4 w-4 text-health-green-600" />
                  </div>
                  <div className="flex justify-between">
                    <span>Médicaments</span>
                    <CheckCircle className="h-4 w-4 text-health-green-600" />
                  </div>
                  <div className="flex justify-between">
                    <span>Maternité</span>
                    <CheckCircle className="h-4 w-4 text-health-green-600" />
                  </div>
                  <div className="flex justify-between">
                    <span>Prévention</span>
                    <CheckCircle className="h-4 w-4 text-health-green-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Advantages */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Avantages d'adhérer au Réseau Santé+
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center animate-fade-in">
                <div className="w-16 h-16 gradient-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <advantage.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {advantage.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-lg text-health-green-700 font-semibold">
              Une approche humaine, moderne et proche de vos préoccupations.
            </p>
          </div>
        </div>

        {/* How it works */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Comment ça fonctionne ?
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 gradient-green rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                    {step.number}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {step.description}
                  </p>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 transform translate-x-1/2">
                    <ArrowRight className="h-6 w-6 text-health-green-400" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="gradient-green text-white text-lg px-8 py-3">
              Découvrir nos offres
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
