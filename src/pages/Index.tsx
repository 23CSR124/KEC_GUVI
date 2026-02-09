import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Code2, Users, Briefcase, BookOpen, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";

const stats = [
  { label: "Students Placed", value: "5000+", icon: Users },
  { label: "Partner Companies", value: "200+", icon: Briefcase },
  { label: "Courses Offered", value: "50+", icon: BookOpen },
  { label: "Events Annually", value: "30+", icon: Calendar },
];

const features = [
  {
    title: "World-Class Education",
    description: "Kongu Engineering College provides top-tier engineering education with state-of-the-art facilities.",
    icon: GraduationCap,
  },
  {
    title: "Industry-Ready Skills",
    description: "GUVI's tech courses ensure students are equipped with the latest industry-demanded skills.",
    icon: Code2,
  },
  {
    title: "Career Opportunities",
    description: "Strong placement support with connections to top tech companies and startups.",
    icon: Briefcase,
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-secondary py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-10" />
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center text-primary-foreground">
            <div className="mb-6 flex items-center justify-center gap-4">
              <GraduationCap className="h-12 w-12 md:h-16 md:w-16" />
              <span className="text-2xl font-bold">×</span>
              <Code2 className="h-10 w-10 md:h-14 md:w-14" />
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
              Kongu Engineering College & GUVI
            </h1>
            <p className="mb-8 text-lg md:text-xl opacity-90">
              Empowering the next generation of tech leaders through world-class education, industry partnerships, and cutting-edge skill development programs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" variant="secondary" className="text-secondary-foreground">
                <Link to="/courses">
                  Explore Courses <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/placements">View Placements</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                <div className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">About Our Partnership</h2>
              <p className="text-muted-foreground mb-4">
                Kongu Engineering College, established in 1984, is one of the premier autonomous engineering institutions in Tamil Nadu, known for its academic excellence and research contributions.
              </p>
              <p className="text-muted-foreground mb-6">
                GUVI is an IIT-M & IIM-A incubated ed-tech company revolutionizing tech education through vernacular learning and industry-aligned curricula.
              </p>
              <Button asChild>
                <Link to="/about">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary/10 rounded-lg p-6 text-center">
                <GraduationCap className="h-12 w-12 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold">KEC</h3>
                <p className="text-sm text-muted-foreground">Established 1984</p>
              </div>
              <div className="bg-secondary/10 rounded-lg p-6 text-center">
                <Code2 className="h-12 w-12 mx-auto mb-3 text-secondary" />
                <h3 className="font-semibold">GUVI</h3>
                <p className="text-sm text-muted-foreground">IIT-M Incubated</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience the best of both worlds with our unique collaboration that brings together academic excellence and industry expertise.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="text-center">
                <CardHeader>
                  <feature.icon className="h-12 w-12 mx-auto mb-2 text-primary" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have transformed their careers through our programs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Get In Touch</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/events">Upcoming Events</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
