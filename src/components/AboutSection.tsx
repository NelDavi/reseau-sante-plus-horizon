
import { Target, Eye, Heart, Shield } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="qui-sommes-nous" className="py-20 bg-gradient-green-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gradient mb-6">
            Qui sommes-nous ?
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Née d'une initiative de trois courtiers gabonais, Réseau Santé + repose sur 
            la mise en place d'un réseau de partenaires santé engagés et accessibles.
          </p>
        </div>

        {/* Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-slide-in">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Notre Histoire
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Née d'une initiative de trois courtiers gabonais, elle repose sur la mise en place 
              d'un réseau de partenaires santé engagés et accessibles, intégrant les nouvelles 
              technologies pour offrir une expérience fluide, humaine et adaptée aux réalités 
              des entreprises moyennes.
            </p>
            <p className="text-gray-700 leading-relaxed">
              À la croisée de la digitalisation des services de santé, Réseau Santé + incarne 
              une assurance de confiance, proche de ses adhérents et tournée vers l'avenir.
            </p>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-center">
                <div className="w-20 h-20 gradient-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-10 w-10 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  3 Courtiers Fondateurs
                </h4>
                <p className="text-gray-600">
                  Une expertise reconnue au service de votre santé
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Mission */}
          <div className="bg-white rounded-xl p-8 shadow-lg text-center animate-fade-in">
            <div className="w-16 h-16 gradient-green rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Notre Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              Offrir un réseau de partenaire santé, accessible et humaine grâce à un réseau 
              de partenaires engagé et une technologie de proximité.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-xl p-8 shadow-lg text-center animate-fade-in">
            <div className="w-16 h-16 gradient-green rounded-full flex items-center justify-center mx-auto mb-6">
              <Eye className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Notre Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              Proposer un réseau santé moderne et efficace, disponible partout au Gabon, 
              devenir l'acteur référent de réseau de partenaire de santé au Gabon puis en Afrique.
            </p>
          </div>

          {/* Values */}
          <div className="bg-white rounded-xl p-8 shadow-lg text-center animate-fade-in">
            <div className="w-16 h-16 gradient-green rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Nos Valeurs</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-health-green-500 rounded-full"></div>
                <span className="text-gray-700 font-medium">Proximité</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-forest-green-600 rounded-full"></div>
                <span className="text-gray-700 font-medium">Innovation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
