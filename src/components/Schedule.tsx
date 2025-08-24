import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, MapPin, User } from 'lucide-react';

const Schedule = () => {
  const weekSchedule = [
    {
      day: 'Monday',
      classes: [
        { time: '06:00 - 07:00', program: 'Morning Aerobics', instructor: 'Sarah K.', level: 'All Levels' },
        { time: '18:00 - 19:00', program: 'Karate Basics', instructor: 'Master John', level: 'Beginner' },
        { time: '19:30 - 20:30', program: 'Kung Fu Advanced', instructor: 'Sifu Chen', level: 'Advanced' },
      ]
    },
    {
      day: 'Tuesday',
      classes: [
        { time: '06:30 - 07:30', program: 'Personal Training', instructor: 'Various', level: 'Individual' },
        { time: '17:30 - 18:30', program: 'Kids Karate', instructor: 'Master John', level: 'Kids 6-12' },
        { time: '19:00 - 20:00', program: 'Aerobics Plus', instructor: 'Sarah K.', level: 'Intermediate' },
      ]
    },
    {
      day: 'Wednesday',
      classes: [
        { time: '06:00 - 07:00', program: 'Morning Aerobics', instructor: 'Sarah K.', level: 'All Levels' },
        { time: '18:00 - 19:15', program: 'Karate Intermediate', instructor: 'Master John', level: 'Intermediate' },
        { time: '19:30 - 21:00', program: 'Kung Fu Forms', instructor: 'Sifu Chen', level: 'All Levels' },
      ]
    },
    {
      day: 'Thursday',
      classes: [
        { time: '17:00 - 18:00', program: 'Teen Martial Arts', instructor: 'Master John', level: 'Teens 13-17' },
        { time: '18:30 - 19:30', program: 'Combat Fitness', instructor: 'Sarah K.', level: 'Advanced' },
        { time: '20:00 - 21:00', program: 'Karate Sparring', instructor: 'Master John', level: 'Advanced' },
      ]
    },
    {
      day: 'Friday',
      classes: [
        { time: '06:00 - 07:00', program: 'Morning Aerobics', instructor: 'Sarah K.', level: 'All Levels' },
        { time: '18:00 - 19:00', program: 'Mixed Martial Arts', instructor: 'Various', level: 'Intermediate+' },
        { time: '19:30 - 20:30', program: 'Kung Fu Weapons', instructor: 'Sifu Chen', level: 'Advanced' },
      ]
    },
    {
      day: 'Saturday',
      classes: [
        { time: '08:00 - 09:00', program: 'Family Karate', instructor: 'Master John', level: 'Family' },
        { time: '09:30 - 10:30', program: 'Weekend Aerobics', instructor: 'Sarah K.', level: 'All Levels' },
        { time: '11:00 - 12:30', program: 'Open Training', instructor: 'Self-Guided', level: 'Members Only' },
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    if (level.includes('Beginner') || level.includes('Kids')) return 'bg-green-100 text-green-800';
    if (level.includes('Intermediate')) return 'bg-yellow-100 text-yellow-800';
    if (level.includes('Advanced')) return 'bg-red-100 text-red-800';
    if (level.includes('Family')) return 'bg-purple-100 text-purple-800';
    return 'bg-blue-100 text-blue-800';
  };

  return (
    <section id="schedule" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Weekly Schedule
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join us for regular training sessions throughout the week. 
            All classes are held at our main facility in Kicukiro Market.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
          {weekSchedule.map((day, index) => (
            <Card 
              key={day.day} 
              className="animate-fade-in shadow-card hover:shadow-elite transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="bg-gradient-to-r from-primary to-primary-hover text-white">
                <CardTitle className="text-2xl font-bold text-center">
                  {day.day}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-0">
                  {day.classes.map((classItem, idx) => (
                    <div 
                      key={idx} 
                      className="p-4 border-b border-border last:border-b-0 hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock size={16} className="mr-2" />
                          {classItem.time}
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(classItem.level)}`}>
                          {classItem.level}
                        </span>
                      </div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {classItem.program}
                      </h4>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <User size={14} className="mr-2" />
                        {classItem.instructor}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center space-y-4">
          <div className="flex items-center justify-center text-muted-foreground mb-4">
            <MapPin size={20} className="mr-2" />
            <span>KK15RD, Kicukiro Market, 5th Floor, Kigali</span>
          </div>
          <Button size="lg" className="bg-gradient-hero text-white hover:opacity-90 px-8">
            Book Your Class
          </Button>
          <p className="text-sm text-muted-foreground">
            Contact us to reserve your spot or arrange a trial session
          </p>
        </div>
      </div>
    </section>
  );
};

export default Schedule;