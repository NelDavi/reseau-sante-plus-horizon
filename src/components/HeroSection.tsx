
import { Button } from '@/components/ui/button';
import { Shield, Users, Heart } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-green opacity-95"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white rounded-full"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-white rounded-full"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-white rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-white rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-white animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Réseau Santé +
              <span className="block text-health-green-200">
                Partout à vos côtés
              </span>
            </h1>
            
            <p className="text-xl text-health-green-100 mb-8 leading-relaxed">
              Un réseau de santé gabonaise innovante, alliant proximité et modernité, 
              avec pour ambition de démocratiser l'accès aux soins de qualité sur 
              l'ensemble du territoire national.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-white text-health-green-600 hover:bg-health-green-50">
                Découvrir notre mission
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-health-green-600">
                Devenir partenaire
              </Button>
            </div>

            {/* Values highlight */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Proximité</h3>
                  <p className="text-health-green-200 text-sm">À vos côtés</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Innovation</h3>
                  <p className="text-health-green-200 text-sm">Technologie moderne</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right content - Image placeholder */}
          <div className="relative animate-slide-in">
            <div className="relative z-10 bg-white rounded-2xl p-8 shadow-2xl">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-health-green-500 to-forest-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Déjà plus de 50 entreprises partenaires
                </h3>
                <p className="text-gray-600 mb-6">
                  Rejoignez le réseau qui prend soin de vos employés
                </p>
                <Button className="gradient-green text-white">
                  Nous contacter
                </Button>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-health-green-200 rounded-full opacity-60"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-forest-green-300 rounded-full opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
