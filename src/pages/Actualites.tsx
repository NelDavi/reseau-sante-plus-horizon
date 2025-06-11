
import { useState } from 'react';
import { Calendar, User, Clock, ArrowRight, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Actualites = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const articles = [
    {
      id: 1,
      title: "L'hypertension artérielle : un enjeu de santé publique au Gabon",
      excerpt: "Découvrez les causes, les symptômes et les moyens de prévention de l'hypertension, première cause de morbidité au Gabon.",
      category: "prévention",
      author: "Dr. Marie Nzengue",
      date: "2024-06-10",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Nutrition et bien-être : les bases d'une alimentation équilibrée",
      excerpt: "Comment adopter une alimentation saine adaptée aux habitudes alimentaires gabonaises pour préserver sa santé.",
      category: "nutrition",
      author: "Nutritionniste Sylvie Mbadinga",
      date: "2024-06-08",
      readTime: "7 min",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Santé mentale en entreprise : briser les tabous",
      excerpt: "L'importance du bien-être psychologique au travail et les ressources disponibles pour les employés.",
      category: "bien-être",
      author: "Psychologue Jean-Claude Obame",
      date: "2024-06-05",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=400&fit=crop"
    },
    {
      id: 4,
      title: "Prévention du diabète : agir avant qu'il ne soit trop tard",
      excerpt: "Les facteurs de risque du diabète de type 2 et les mesures préventives à adopter au quotidien.",
      category: "prévention",
      author: "Dr. Paul Ndong",
      date: "2024-06-03",
      readTime: "4 min",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=400&fit=crop"
    }
  ];

  const categories = [
    { id: 'all', name: 'Tous les articles' },
    { id: 'prévention', name: 'Prévention' },
    { id: 'nutrition', name: 'Nutrition' },
    { id: 'bien-être', name: 'Bien-être' }
  ];

  const filteredArticles = selectedCategory === 'all' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-green text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Actualités Santé
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Restez informés sur les enjeux de santé publique, 
              découvrez nos conseils de prévention et suivez l'actualité 
              du Réseau Santé +.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={selectedCategory === category.id ? "gradient-green text-white" : ""}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video bg-gray-200 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <CardHeader>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                    <span className="bg-health-green-100 text-health-green-700 px-2 py-1 rounded-full text-xs font-medium">
                      {article.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {article.readTime}
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl hover:text-health-green-600 transition-colors cursor-pointer">
                    {article.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <User className="h-4 w-4" />
                      <span>{article.author}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(article.date).toLocaleDateString('fr-FR')}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-4">
                    <Button variant="ghost" className="text-health-green-600 hover:text-health-green-700 p-0">
                      Lire la suite <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                    
                    <Button variant="ghost" size="sm">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-green text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Restez informés
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Abonnez-vous à notre newsletter pour recevoir nos derniers articles 
            et conseils santé directement dans votre boîte mail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
            />
            <Button className="bg-white text-health-green-600 hover:bg-gray-100">
              S'abonner
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Actualites;
