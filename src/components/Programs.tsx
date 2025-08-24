import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Zap, Shield, Target, Clock, Users } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      id: 1,
      title: 'Karate',
      description: 'Traditional martial art focusing on discipline, respect, and powerful techniques',
      icon: Shield,
      features: ['Traditional Kata', 'Kumite Sparring', 'Belt Progression', 'Self-Defense'],
      duration: '60 mins',
      level: 'All Levels',
      color: 'from-primary to-primary-hover'
    },
    {
      id: 2,
      title: 'Kung Fu',
      description: 'Ancient Chinese martial art emphasizing fluid movements and inner strength',
      icon: Target,
      features: ['Animal Forms', 'Weapon Training', 'Meditation', 'Flexibility'],
      duration: '75 mins',
      level: 'Intermediate+',
      color: 'from-accent to-yellow-500'
    },
    {
      id: 3,
      title: 'Aerobics',
      description: 'High-energy fitness classes that improve cardiovascular health and stamina',
      icon: Heart,
      features: ['Cardio Workouts', 'Dance Fitness', 'Weight Loss', 'Group Energy'],
      duration: '45 mins',
      level: 'All Levels',
      color: 'from-pink-500 to-red-500'
    },
    {
      id: 4,
      title: 'Personal Training',
      description: 'One-on-one customized training sessions tailored to your specific goals',
      icon: Zap,
      features: ['Custom Programs', '1-on-1 Coaching', 'Nutrition Guidance', 'Progress Tracking'],
      duration: '60 mins',
      level: 'Personalized',
      color: 'from-secondary to-gray-800'
    }
  ];

  return (
    <section id="programs" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Programs
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our diverse range of martial arts and fitness programs, 
            each designed to help you achieve your personal goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <Card 
              key={program.id} 
              className="group hover:shadow-elite transition-all duration-300 hover:-translate-y-2 animate-fade-in border-0 shadow-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className={`w-16 h-16 bg-gradient-to-r ${program.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <program.icon className="text-white" size={32} />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {program.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {program.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {program.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-border">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock size={16} className="mr-1" />
                    {program.duration}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users size={16} className="mr-1" />
                    {program.level}
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-white transition-colors"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-gradient-hero text-white hover:opacity-90 px-8">
            View All Programs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Programs;