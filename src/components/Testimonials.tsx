import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Grace Uwimana',
      program: 'Karate Student',
      rating: 5,
      text: 'KESA has transformed my life completely. The discipline I learned in karate has helped me in every aspect of my life. Master John is an exceptional instructor who truly cares about each student.',
      duration: '2 Years'
    },
    {
      id: 2,
      name: 'David Mugisha',
      program: 'Kung Fu & Personal Training',
      rating: 5,
      text: 'The combination of Kung Fu and personal training has given me incredible strength and flexibility. Sifu Chen and the team provide world-class instruction in a supportive environment.',
      duration: '1.5 Years'
    },
    {
      id: 3,
      name: 'Alice Nzeyimana',
      program: 'Aerobics Classes',
      rating: 5,
      text: 'Sarah\'s aerobics classes are absolutely amazing! I\'ve lost 15kg and gained so much confidence. The energy in every session is infectious and motivating.',
      duration: '8 Months'
    },
    {
      id: 4,
      name: 'Jean-Claude Nkusi',
      program: 'Family Karate',
      rating: 5,
      text: 'My whole family trains at KESA. It\'s wonderful to see my kids learning discipline and respect while staying fit. The family karate program is perfect for busy parents.',
      duration: '1 Year'
    },
    {
      id: 5,
      name: 'Marie Umutesi',
      program: 'Teen Martial Arts',
      rating: 5,
      text: 'As a teenager, KESA has given me confidence and self-defense skills. The instructors understand young people and create a fun yet disciplined learning environment.',
      duration: '10 Months'
    },
    {
      id: 6,
      name: 'Patrick Habimana',
      program: 'Advanced Kung Fu',
      rating: 5,
      text: 'The level of instruction at KESA is exceptional. I\'ve trained at other schools, but the depth of knowledge and traditional techniques taught here are unmatched.',
      duration: '3 Years'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={`${i < rating ? 'text-accent fill-accent' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 to-muted/60">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our Students Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our community of martial artists 
            and fitness enthusiasts have to say about their KESA experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="group hover:shadow-elite transition-all duration-300 hover:-translate-y-1 animate-fade-in border-0 shadow-card bg-card/50 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    {renderStars(testimonial.rating)}
                  </div>
                  <Quote className="text-muted-foreground group-hover:text-primary transition-colors" size={24} />
                </div>

                <p className="text-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                <div className="border-t border-border pt-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.program}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-primary">
                        {testimonial.duration}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Training
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 text-muted-foreground mb-4">
            <div className="flex items-center space-x-1">
              {renderStars(5)}
            </div>
            <span className="font-semibold">4.9/5 Average Rating</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Based on 150+ student reviews and testimonials
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;