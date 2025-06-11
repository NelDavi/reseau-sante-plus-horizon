
import { Building2, Heart, Pill, TestTube } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PartnersSection = () => {
  const insurancePartners = [
    { name: "AXA", description: "Leader mondial de l'assurance" },
    { name: "SANLAM", description: "Groupe d'assurance africain de référence" },
    { name: "OGAR", description: "Assureur gabonais de confiance" }
  ];

  const healthCategories = [
    {
      icon: Building2,
      title: "Cliniques",
      description: "Réseau de cliniques modernes à travers le Gabon"
    },
    {
      icon: Heart,
      title: "Hôpitaux partenaires",
      description: "Établissements hospitaliers de qualité"
    },
    {
      icon: Pill,
      title: "Pharmacies",
      description: "Pharmacies agréées dans tout le pays"
    },
    {
      icon: TestTube,
      title: "Laboratoires",
      description: "Laboratoires d'analyses médicales certifiés"
    }
  ];

  return (
    <section id="partenaires" className="py-20 bg-gradient-green-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gradient mb-6">
            Nos Partenaires
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Un réseau solide de partenaires d'assurance et de santé 
            pour vous garantir les meilleurs soins.
          </p>
        </div>

        {/* Insurance Partners */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Nos Partenaires d'Assurance
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {insurancePartners.map((partner, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg text-center animate-slide-in">
                <div className="w-20 h-20 gradient-green rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-lg">{partner.name[0]}</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {partner.name}
                </h4>
                <p className="text-gray-600">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Health Partners */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Nos Partenaires Santé
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {healthCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center animate-fade-in">
                <div className="w-16 h-16 gradient-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {category.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Become a Partner */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Pourquoi devenir partenaire ?
              </h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-health-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    <strong>Visibilité accrue :</strong> Présence continue sur nos supports digitaux, 
                    renforçant votre notoriété auprès d'un public élargi.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-health-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    <strong>Nouvelle patientèle :</strong> Accès privilégié aux entreprises affiliées 
                    à Réseau santé +, dynamisant votre activité.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-health-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    <strong>Projet innovant :</strong> Intégrez un réseau moderne de la santé, 
                    basé sur la digitalisation et la proximité.
                  </p>
                </div>
              </div>

              <Button className="gradient-green text-white">
                Devenir partenaire
              </Button>
            </div>

            <div className="relative">
              <div className="bg-gradient-green rounded-xl p-8 text-white text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-4">
                  Rejoignez notre réseau
                </h4>
                <p className="text-health-green-100 mb-6">
                  Un projet solidaire ancré dans une vision moderne de la santé, 
                  visant à améliorer l'accès aux soins sur tout le territoire gabonais.
                </p>
                <div className="text-2xl font-bold">50+</div>
                <div className="text-health-green-200">Partenaires déjà engagés</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
