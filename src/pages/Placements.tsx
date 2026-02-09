import { Link } from "react-router-dom";
import { TrendingUp, Building2, Users, IndianRupee, MapPin, Briefcase, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/layout/Layout";

const stats = [
  { label: "Students Placed (2024)", value: "95%", icon: TrendingUp },
  { label: "Recruiting Companies", value: "200+", icon: Building2 },
  { label: "Total Placements", value: "5,000+", icon: Users },
  { label: "Highest Package", value: "₹42 LPA", icon: IndianRupee },
];

const topCompanies = [
  "Google", "Microsoft", "Amazon", "TCS", "Infosys", "Wipro", 
  "Cognizant", "Accenture", "Zoho", "Freshworks", "HCL", "Tech Mahindra"
];

const jobListings = [
  {
    title: "Software Engineer",
    company: "TCS",
    location: "Chennai, Tamil Nadu",
    type: "Full-time",
    experience: "0-2 years",
    package: "₹4.5 - 6 LPA",
    skills: ["Java", "Spring Boot", "SQL"],
  },
  {
    title: "Data Analyst",
    company: "Infosys",
    location: "Bangalore, Karnataka",
    type: "Full-time",
    experience: "0-1 years",
    package: "₹4 - 5.5 LPA",
    skills: ["Python", "SQL", "Tableau"],
  },
  {
    title: "Frontend Developer",
    company: "Zoho Corporation",
    location: "Chennai, Tamil Nadu",
    type: "Full-time",
    experience: "1-3 years",
    package: "₹6 - 10 LPA",
    skills: ["React", "JavaScript", "CSS"],
  },
  {
    title: "Machine Learning Engineer",
    company: "Freshworks",
    location: "Chennai, Tamil Nadu",
    type: "Full-time",
    experience: "2-4 years",
    package: "₹12 - 18 LPA",
    skills: ["Python", "TensorFlow", "ML Ops"],
  },
  {
    title: "DevOps Engineer",
    company: "Cognizant",
    location: "Coimbatore, Tamil Nadu",
    type: "Full-time",
    experience: "1-3 years",
    package: "₹5 - 8 LPA",
    skills: ["AWS", "Docker", "Kubernetes"],
  },
  {
    title: "Business Analyst Intern",
    company: "Accenture",
    location: "Hyderabad, Telangana",
    type: "Internship",
    experience: "Final Year Students",
    package: "₹25,000/month",
    skills: ["Excel", "SQL", "Communication"],
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Software Engineer at Google",
    batch: "2023",
    quote: "The placement support at KEC was exceptional. The training programs helped me crack interviews at top tech companies.",
  },
  {
    name: "Rajesh Kumar",
    role: "Data Scientist at Microsoft",
    batch: "2022",
    quote: "GUVI's courses combined with KEC's academics gave me the perfect blend of theoretical and practical knowledge.",
  },
];

const Placements = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary/80 py-16 md:py-24 text-primary-foreground">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Placements & Careers</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Discover exciting career opportunities and our outstanding placement record
          </p>
        </div>
      </section>

      {/* Stats */}
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

      {/* Top Recruiters */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Top Recruiters</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Leading companies from across the globe recruit from our campus
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {topCompanies.map((company) => (
              <Badge key={company} variant="outline" className="text-base px-6 py-2">
                {company}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="mb-12">
            <Badge className="mb-4 bg-secondary text-secondary-foreground">Open Positions</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Current Job Openings</h2>
            <p className="text-muted-foreground max-w-2xl">
              Explore current opportunities from our partner companies
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobListings.map((job, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <Badge variant={job.type === "Internship" ? "secondary" : "default"}>
                      {job.type}
                    </Badge>
                    <span className="text-sm font-semibold text-primary">{job.package}</span>
                  </div>
                  <CardTitle className="text-lg">{job.title}</CardTitle>
                  <CardDescription className="font-medium">{job.company}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="space-y-2 text-sm mb-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Briefcase className="h-4 w-4" />
                      <span>{job.experience}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear from our alumni who are now working at top tech companies
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name}>
                <CardContent className="pt-6">
                  <p className="italic text-muted-foreground mb-4">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-sm text-primary">Batch of {testimonial.batch}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Career?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Contact us to learn more about placement opportunities and career guidance.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">Contact Placement Cell</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Placements;
