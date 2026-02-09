import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/layout/Layout";

const upcomingEvents = [
  {
    title: "Tech Summit 2025",
    description: "Annual technology summit featuring industry leaders, workshops, and networking opportunities.",
    date: "March 15-16, 2025",
    time: "9:00 AM - 6:00 PM",
    location: "KEC Main Auditorium",
    attendees: "500+",
    type: "Conference",
  },
  {
    title: "Hackathon: Code for Change",
    description: "24-hour coding competition to solve real-world problems with innovative tech solutions.",
    date: "April 5-6, 2025",
    time: "Starts 10:00 AM",
    location: "IT Block, KEC",
    attendees: "200+",
    type: "Hackathon",
  },
  {
    title: "AI & Machine Learning Workshop",
    description: "Hands-on workshop on building AI models with Python and TensorFlow.",
    date: "April 20, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "GUVI Learning Center",
    attendees: "100",
    type: "Workshop",
  },
];

const pastEvents = [
  {
    title: "Campus Recruitment Drive 2024",
    description: "Major recruitment drive with 50+ companies participating.",
    date: "December 10-15, 2024",
    attendees: "1,200+",
    type: "Placement",
  },
  {
    title: "Web Development Bootcamp",
    description: "5-day intensive bootcamp on modern web technologies.",
    date: "November 25-29, 2024",
    attendees: "150",
    type: "Workshop",
  },
  {
    title: "Industry Connect Seminar",
    description: "Expert talks from tech leaders at Google, Microsoft, and Amazon.",
    date: "October 18, 2024",
    attendees: "400+",
    type: "Seminar",
  },
  {
    title: "Data Science Symposium",
    description: "Exploring the latest trends in data science and analytics.",
    date: "September 5, 2024",
    attendees: "300+",
    type: "Conference",
  },
];

const Events = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary/80 py-16 md:py-24 text-primary-foreground">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Events</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Stay updated with workshops, seminars, hackathons, and other exciting events
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12">
            <Badge className="mb-4 bg-secondary text-secondary-foreground">Coming Soon</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Events</h2>
            <p className="text-muted-foreground max-w-2xl">
              Don't miss out on these exciting upcoming events and opportunities.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <Card key={event.title} className="flex flex-col">
                <CardHeader>
                  <Badge variant="outline" className="w-fit mb-2">{event.type}</Badge>
                  <CardTitle>{event.title}</CardTitle>
                  <CardDescription>{event.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary" />
                      <span>{event.attendees} expected</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    Register Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="mb-12">
            <Badge className="mb-4" variant="outline">Archive</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Past Events</h2>
            <p className="text-muted-foreground max-w-2xl">
              Take a look at some of our successful past events.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pastEvents.map((event) => (
              <Card key={event.title}>
                <CardHeader>
                  <Badge variant="secondary" className="w-fit mb-2">{event.type}</Badge>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                  <CardDescription>{event.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span>{event.attendees} attended</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Events;
