import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, Award, Star } from 'lucide-react';

const Teams = () => {
  const instructors = [
    {
      name: "Master Jean Claude Uwimana",
      role: "Head Instructor & Founder",
      specialties: ["Karate", "Kung Fu", "Self Defense"],
      experience: "15+ Years",
      achievements: "5x National Champion, International Referee",
      description: "Master Jean Claude brings over 15 years of martial arts excellence to KESA. His passion for discipline and technique has shaped hundreds of students.",
      image: "/placeholder.svg",
      certifications: ["Black Belt 5th Dan", "International Instructor", "Youth Development Specialist"],
      phone: "+250 788 123 456",
      email: "jeanclaude@kesarwanda.com"
    },
    {
      name: "Coach Sarah Mukamana",
      role: "Aerobics & Fitness Instructor",
      specialties: ["Aerobics", "Fitness Training", "Nutrition"],
      experience: "8+ Years",
      achievements: "Certified Fitness Trainer, Nutrition Specialist",
      description: "Coach Sarah specializes in high-energy aerobics and personalized fitness programs. Her motivational approach helps students achieve their health goals.",
      image: "/placeholder.svg",
      certifications: ["ACSM Certified", "Nutrition Coach", "Group Fitness Instructor"],
      phone: "+250 788 123 457",
      email: "sarah@kesarwanda.com"
    },
    {
      name: "Sensei David Nkurunziza",
      role: "Karate Instructor",
      specialties: ["Traditional Karate", "Competition Training", "Youth Programs"],
      experience: "12+ Years",
      achievements: "3x Regional Champion, Youth Development Award",
      description: "Sensei David focuses on traditional karate values while preparing students for modern competition. His patient teaching style is perfect for all ages.",
      image: "/placeholder.svg",
      certifications: ["Black Belt 4th Dan", "Youth Instructor", "Competition Judge"],
      phone: "+250 788 123 458",
      email: "david@kesarwanda.com"
    },
    {
      name: "Coach Lisa Uwamahoro",
      role: "Personal Training Specialist",
      specialties: ["Personal Training", "Strength & Conditioning", "Rehabilitation"],
      experience: "6+ Years",
      achievements: "Certified Personal Trainer, Sports Rehabilitation",
      description: "Coach Lisa provides individualized training programs tailored to each client's specific goals and physical capabilities.",
      image: "/placeholder.svg",
      certifications: ["NASM Certified", "Corrective Exercise Specialist", "Sports Nutrition"],
      phone: "+250 788 123 459",
      email: "lisa@kesarwanda.com"
    }
  ];

  const supportStaff = [
    {
      name: "Emmanuel Habimana",
      role: "Operations Manager",
      description: "Handles daily operations, scheduling, and member services.",
      phone: "+250 788 123 460",
      email: "emmanuel@kesarwanda.com"
    },
    {
      name: "Grace Uwimana",
      role: "Front Desk Coordinator",
      description: "First point of contact for new members and visitor inquiries.",
      phone: "+250 788 123 461",
      email: "grace@kesarwanda.com"
    }
  ];

  return (
    <section id="teams" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Meet Our <span className="text-primary">Expert Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our world-class instructors and dedicated staff are committed to helping you achieve 
            your martial arts and fitness goals through expert guidance and personalized attention.
          </p>
        </div>

        {/* Instructors Grid */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Our Instructors
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {instructors.map((instructor, index) => (
              <div 
                key={instructor.name}
                className="bg-card rounded-xl p-6 shadow-card hover:shadow-elite transition-all duration-300 animate-fade-in border border-border"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Profile Image */}
                  <div className="lg:w-1/3">
                    <div className="w-32 h-32 lg:w-full lg:h-48 bg-muted rounded-lg flex items-center justify-center mx-auto lg:mx-0">
                      <div className="text-6xl text-muted-foreground">👤</div>
                    </div>
                  </div>
                  
                  {/* Profile Info */}
                  <div className="lg:w-2/3">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-xl font-bold text-foreground mb-1">
                          {instructor.name}
                        </h4>
                        <p className="text-primary font-semibold mb-2">
                          {instructor.role}
                        </p>
                      </div>
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        {instructor.experience}
                      </Badge>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {instructor.description}
                    </p>

                    {/* Specialties */}
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-foreground mb-2">Specialties:</p>
                      <div className="flex flex-wrap gap-2">
                        {instructor.specialties.map((specialty) => (
                          <Badge key={specialty} variant="outline" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Award size={16} className="text-accent" />
                        <span>{instructor.achievements}</span>
                      </div>
                    </div>

                    {/* Contact */}
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-2 text-xs"
                      >
                        <Mail size={14} />
                        Contact
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-2 text-xs"
                      >
                        <Phone size={14} />
                        Book Session
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Support Staff */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Support Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {supportStaff.map((staff, index) => (
              <div 
                key={staff.name}
                className="bg-card rounded-lg p-6 shadow-card hover:shadow-elite transition-all duration-300 animate-fade-in border border-border"
                style={{ animationDelay: `${(instructors.length + index) * 0.2}s` }}
              >
                <div className="text-center">
                  <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-3xl text-muted-foreground">👤</div>
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-1">
                    {staff.name}
                  </h4>
                  <p className="text-primary font-semibold mb-3">
                    {staff.role}
                  </p>
                  <p className="text-muted-foreground text-sm mb-4">
                    {staff.description}
                  </p>
                  <div className="flex justify-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2 text-xs"
                    >
                      <Mail size={12} />
                      Email
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2 text-xs"
                    >
                      <Phone size={12} />
                      Call
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-hero rounded-xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Train with Our Expert Team?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Our experienced instructors are here to guide you on your martial arts journey. 
              Book a consultation or trial session today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-white text-primary hover:bg-white/90"
              >
                Book Consultation
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white bg-black hover:bg-white hover:text-primary"
              >
                Schedule Trial
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teams;