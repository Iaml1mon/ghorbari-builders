import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Award, 
  Users, 
  CheckCircle, 
  Star,
  ArrowRight,
  Phone,
  MessageCircle,
  Target,
  Heart,
  Shield
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const AboutPage = () => {
  const { t } = useLanguage();

<<<<<<< HEAD
  const valueIcons = [Shield, Heart, Target];
=======
  const values = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "We never compromise on quality. Every project is built to last with the finest materials and craftsmanship."
    },
    {
      icon: Heart,
      title: "Customer Satisfaction",
      description: "Your satisfaction is our priority. We work closely with you throughout the entire construction process."
    },
    {
      icon: Target,
      title: "On-Time Delivery",
      description: "We respect your time and budget. Our projects are completed on schedule without compromising quality."
    }
  ];

  const achievements = [
    { number: "10+", label: "Years Experience" },
    { number: "20+", label: "Projects Completed" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" }
  ];
>>>>>>> cd76d7d89ef093c840d8c6ddc4dc670b6ee42459

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
<<<<<<< HEAD
                  {t.about.title} {t.hero.name}
=======
                  About {t.hero.name}
>>>>>>> cd76d7d89ef093c840d8c6ddc4dc670b6ee42459
                </h1>
                <h2 className="text-xl md:text-2xl text-orange-600 font-semibold">
                  {t.hero.title}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {t.hero.bio}
                </p>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4">
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  <Award className="w-4 h-4 mr-2" />
                  {t.trust.experience}
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  {t.trust.projects}
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  <Users className="w-4 h-4 mr-2" />
                  {t.trust.clients}
                </Badge>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-orange-600 hover:bg-orange-700 text-lg px-8 py-3"
                  asChild
                >
                  <Link to="/quote">
                    {t.hero.cta}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="text-lg px-8 py-3"
<<<<<<< HEAD
                  onClick={() => window.open('tel:+8801716718020')}
=======
                  onClick={() => window.open('tel:+8801XXXXXXXXX')}
>>>>>>> cd76d7d89ef093c840d8c6ddc4dc670b6ee42459
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {t.hero.call}
                </Button>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
<<<<<<< HEAD
              <img src="/assets/md_asraful_photo_optimized.png" alt="Md Asraful" className="w-full h-full object-cover rounded-2xl shadow-2xl" />
=======
              <img src="/src/assets/md_asraful_photo.jpg" alt="Md Asraful" className="w-full h-full object-cover rounded-2xl shadow-2xl" />
>>>>>>> cd76d7d89ef093c840d8c6ddc4dc670b6ee42459
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                {t.trust.quality}
              </div>
              <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                Trusted Builder
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<<<<<<< HEAD
            {t.about.achievements.map((achievement, index) => (
=======
            {achievements.map((achievement, index) => (
>>>>>>> cd76d7d89ef093c840d8c6ddc4dc670b6ee42459
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {achievement.number}
                </div>
                <div className="text-orange-100 font-medium">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
<<<<<<< HEAD
              {t.about.values.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t.about.values.subtitle}
=======
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and ensure we deliver exceptional results for every client.
>>>>>>> cd76d7d89ef093c840d8c6ddc4dc670b6ee42459
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<<<<<<< HEAD
            {t.about.values.items.map((value, index) => {
              const IconComponent = valueIcons[index];
=======
            {values.map((value, index) => {
              const IconComponent = value.icon;
>>>>>>> cd76d7d89ef093c840d8c6ddc4dc670b6ee42459
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-200">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition-colors">
                      <IconComponent className="w-8 h-8 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
<<<<<<< HEAD
                {t.about.experience.title}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t.about.experience.description}
              </p>
              <div className="space-y-4">
                {t.about.experience.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
=======
                A Decade of Excellence in Construction
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Since starting my journey in the construction industry, I have been dedicated to creating homes that families can be proud of. Every project is a testament to our commitment to quality, innovation, and customer satisfaction.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Licensed & Insured</h4>
                    <p className="text-gray-600">Fully licensed contractor with comprehensive insurance coverage</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Local Expertise</h4>
                    <p className="text-gray-600">Deep understanding of local building codes and regulations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Quality Materials</h4>
                    <p className="text-gray-600">We source only the finest materials from trusted suppliers</p>
                  </div>
                </div>
>>>>>>> cd76d7d89ef093c840d8c6ddc4dc670b6ee42459
              </div>
            </div>

            {/* Image */}
            <div className="relative">
<<<<<<< HEAD
              <img src="/assets/construction-site.jpg" alt="Construction Site" className="w-full h-full object-cover rounded-2xl shadow-2xl" />
=======
              <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl overflow-hidden shadow-2xl">
                <div className="w-full h-full flex items-center justify-center text-gray-500 text-lg">
                  Construction Site Photo
                </div>
              </div>
>>>>>>> cd76d7d89ef093c840d8c6ddc4dc670b6ee42459
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.testimonials.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about our work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.testimonials.items.map((testimonial, index) => (
              <Card key={index} className="border-2 hover:border-orange-200 transition-colors">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-orange-600 font-semibold">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-500">Satisfied Client</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
<<<<<<< HEAD
            {t.about.cta.title}
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            {t.about.cta.subtitle}
=======
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Let's discuss your construction needs and create something amazing together.
>>>>>>> cd76d7d89ef093c840d8c6ddc4dc670b6ee42459
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg px-8 py-3"
              asChild
            >
              <Link to="/quote">
                {t.hero.cta}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-orange-600"
<<<<<<< HEAD
              onClick={() => window.open('https://wa.me/8801716718020?text=Hello, I would like to know more about your services', '_blank')}
=======
              onClick={() => window.open('https://wa.me/8801XXXXXXXXX?text=Hello, I would like to know more about your services', '_blank')}
>>>>>>> cd76d7d89ef093c840d8c6ddc4dc670b6ee42459
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              {t.hero.whatsapp}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

