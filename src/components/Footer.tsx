
import { Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    services: [
      'Couverture collective',
      'Garanties essentielles',
      'Réseau de partenaires',
      'Service client dédié'
    ],
    company: [
      'Qui sommes-nous ?',
      'Notre mission',
      'Nos valeurs',
      'Devenir partenaire'
    ],
    support: [
      'FAQ',
      'Contact',
      'Demande de devis',
      'Espace entreprise'
    ]
  };

  return (
    <footer className="bg-trust-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Company info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-medical-blue-600 to-accent-teal-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">R+</span>
                </div>
                <span className="text-xl font-bold">Réseau Santé +</span>
              </div>
              
              <p className="text-trust-blue-300 mb-6 leading-relaxed">
                Un réseau de santé gabonaise innovante, alliant proximité et modernité 
                pour démocratiser l'accès aux soins de qualité.
              </p>

              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-medical-blue-600 rounded-full flex items-center justify-center hover:bg-medical-blue-700 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-medical-blue-600 rounded-full flex items-center justify-center hover:bg-medical-blue-700 transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Nos Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-trust-blue-300 hover:text-medical-blue-400 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Entreprise</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-trust-blue-300 hover:text-medical-blue-400 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Support</h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-trust-blue-300 hover:text-medical-blue-400 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <h4 className="text-sm font-semibold text-trust-blue-400 mb-3">CONTACT DIRECT</h4>
                <div className="space-y-2 text-sm">
                  <p className="text-trust-blue-300">+241 76364087</p>
                  <p className="text-trust-blue-300">Réseausanté+infos@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-trust-blue-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-trust-blue-400 text-sm">
              © 2024 Réseau Santé +. Tous droits réservés.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-trust-blue-400 hover:text-medical-blue-400 transition-colors">
                Mentions légales
              </a>
              <a href="#" className="text-trust-blue-400 hover:text-medical-blue-400 transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="text-trust-blue-400 hover:text-medical-blue-400 transition-colors">
                FAQ
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
