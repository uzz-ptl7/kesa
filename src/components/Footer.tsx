import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  const quickLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Programs', href: '#programs' },
    { label: 'Schedule', href: '#schedule' },
    { label: 'Membership', href: '#membership' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  const programs = [
    { label: 'Karate Classes', href: '#programs' },
    { label: 'Kung Fu Training', href: '#programs' },
    { label: 'Aerobics Sessions', href: '#programs' },
    { label: 'Personal Training', href: '#programs' },
    { label: 'Kids Programs', href: '#programs' },
    { label: 'Family Classes', href: '#programs' },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* CTA Section */}
      <div className="bg-gradient-hero text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join Kigali's premier martial arts and fitness academy today. 
            Start with a free trial session and discover your potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 px-8">
              Book Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8">
              Call Now: +250 788 123 456
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">K</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">KESA</h3>
                  <p className="text-sm text-muted-foreground">Elite Sports Academy</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Transforming lives through martial arts and fitness training. 
                Building discipline, strength, and character in the heart of Kigali.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Programs</h4>
              <ul className="space-y-3">
                {programs.map((program) => (
                  <li key={program.label}>
                    <a 
                      href={program.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {program.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="text-primary mt-1 flex-shrink-0" size={18} />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground text-sm">
                      KK15RD, Kicukiro Market<br />
                      5th Floor, Kigali, Rwanda
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-primary flex-shrink-0" size={18} />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground text-sm">+250 788 123 456</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-primary flex-shrink-0" size={18} />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground text-sm">info@kesarwanda.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="text-primary mt-1 flex-shrink-0" size={18} />
                  <div>
                    <p className="font-medium">Hours</p>
                    <p className="text-muted-foreground text-sm">
                      Mon-Fri: 6:00 AM - 9:00 PM<br />
                      Sat: 8:00 AM - 6:00 PM<br />
                      Sun: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2024 Kigali Elite Sports Academy. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;