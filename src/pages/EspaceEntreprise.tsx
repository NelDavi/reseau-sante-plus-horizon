
import { useState } from 'react';
import { Building2, Users, Shield, CheckCircle, Clock, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const EspaceEntreprise = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    employeeCount: '',
    contactName: '',
    email: '',
    phone: '',
    coverageLevel: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique de soumission du formulaire
    console.log('Données du formulaire:', formData);
    // Ici vous pourriez envoyer les données à un service
  };

  const advantages = [
    {
      icon: Building2,
      title: "Renforcement de votre marque employeur",
      description: "Valorisez votre entreprise en offrant une couverture santé de qualité à vos employés."
    },
    {
      icon: Users,
      title: "Fidélisation des collaborateurs",
      description: "Un employé bien couvert est un employé rassuré et plus motivé au quotidien."
    },
    {
      icon: Shield,
      title: "Réduction de l'absentéisme",
      description: "Des soins accessibles favorisent la prévention et le suivi médical régulier."
    }
  ];

  const subscriptionSteps = [
    {
      number: "01",
      title: "Prise de contact",
      description: "Contactez-nous par formulaire ou appel direct pour exprimer votre intérêt."
    },
    {
      number: "02", 
      title: "Évaluation des besoins",
      description: "Nous analysons ensemble le nombre d'employés et le niveau de couverture souhaité."
    },
    {
      number: "03",
      title: "Transmission des documents",
      description: "Fournissez le registre de commerce, la liste du personnel et les pièces d'identité."
    },
    {
      number: "04",
      title: "Signature et activation",
      description: "Signature du contrat et activation immédiate de la couverture santé."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-green text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Espace Entreprise
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Offrez à vos employés une couverture santé de qualité. 
              Découvrez nos solutions adaptées aux PME gabonaises.
            </p>
          </div>
        </div>
      </section>

      {/* Avantages RH */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gradient mb-4">
              Pourquoi offrir un réseau santé à vos employés ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un investissement social et stratégique pour la croissance de votre entreprise.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-16 h-16 gradient-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <advantage.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">
                    {advantage.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    {advantage.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Processus de souscription */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gradient mb-4">
              Modalités de souscription
            </h2>
            <p className="text-xl text-gray-600">
              Un processus simple et sécurisé, adapté à votre organisation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {subscriptionSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 gradient-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {step.description}
                  </p>
                </div>
                
                {index < subscriptionSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full">
                    <div className="w-full h-0.5 bg-health-green-300"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulaire de devis */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gradient mb-4">
              Demander un devis personnalisé
            </h2>
            <p className="text-xl text-gray-600">
              Obtenez une estimation gratuite adaptée aux besoins de votre entreprise.
            </p>
          </div>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-center text-2xl">
                Formulaire de demande de devis
              </CardTitle>
              <div className="flex items-center justify-center gap-2 text-health-green-600">
                <Clock className="h-4 w-4" />
                <span className="text-sm font-medium">Réponse sous 48 heures ouvrées</span>
              </div>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom de l'entreprise *
                    </label>
                    <Input
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      placeholder="Nom de votre entreprise"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre d'employés à couvrir *
                    </label>
                    <select
                      name="employeeCount"
                      value={formData.employeeCount}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-input rounded-md bg-background"
                      required
                    >
                      <option value="">Sélectionner</option>
                      <option value="1-10">1 à 10 employés</option>
                      <option value="11-25">11 à 25 employés</option>
                      <option value="26-50">26 à 50 employés</option>
                      <option value="51-100">51 à 100 employés</option>
                      <option value="100+">Plus de 100 employés</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom du contact *
                    </label>
                    <Input
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleInputChange}
                      placeholder="Votre nom et prénom"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="votre.email@entreprise.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone *
                    </label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+241 XX XX XX XX"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Niveau de couverture souhaité
                    </label>
                    <select
                      name="coverageLevel"
                      value={formData.coverageLevel}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-input rounded-md bg-background"
                    >
                      <option value="">Sélectionner</option>
                      <option value="essentiel">Essentiel</option>
                      <option value="confort">Confort</option>
                      <option value="premium">Premium</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message complémentaire
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Décrivez vos besoins spécifiques ou posez vos questions..."
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full gradient-green text-white text-lg py-3">
                  Envoyer ma demande de devis
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact rapide */}
      <section className="py-16 bg-gradient-green text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Besoin d'informations immédiates ?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Notre équipe commerciale est à votre disposition pour répondre à toutes vos questions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-health-green-600 hover:bg-gray-100">
              <Phone className="h-4 w-4 mr-2" />
              Appeler : +241 76364087
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-health-green-600">
              <Mail className="h-4 w-4 mr-2" />
              Email : Réseausanté+infos@gmail.com
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EspaceEntreprise;
