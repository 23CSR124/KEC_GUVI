import { Clock, Users, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/layout/Layout";

const guviCourses = [
  {
    title: "Full Stack Development",
    description: "Master front-end and back-end technologies including React, Node.js, MongoDB, and more.",
    duration: "6 Months",
    students: "10,000+",
    rating: 4.8,
    level: "Beginner to Advanced",
    category: "GUVI",
  },
  {
    title: "Data Science & AI",
    description: "Learn Python, Machine Learning, Deep Learning, and AI applications with hands-on projects.",
    duration: "5 Months",
    students: "8,000+",
    rating: 4.9,
    level: "Intermediate",
    category: "GUVI",
  },
  {
    title: "Python Programming",
    description: "Complete Python course from basics to advanced concepts with real-world applications.",
    duration: "3 Months",
    students: "25,000+",
    rating: 4.7,
    level: "Beginner",
    category: "GUVI",
  },
  {
    title: "Java Full Stack",
    description: "Comprehensive Java development including Spring Boot, Hibernate, and microservices.",
    duration: "6 Months",
    students: "6,000+",
    rating: 4.8,
    level: "Intermediate",
    category: "GUVI",
  },
];

const kecPrograms = [
  {
    title: "B.E. Computer Science",
    description: "Four-year undergraduate program focusing on computer science fundamentals and advanced topics.",
    duration: "4 Years",
    students: "240/batch",
    rating: 4.9,
    level: "Undergraduate",
    category: "KEC",
  },
  {
    title: "B.E. Information Technology",
    description: "Comprehensive IT program covering software development, networking, and information systems.",
    duration: "4 Years",
    students: "180/batch",
    rating: 4.8,
    level: "Undergraduate",
    category: "KEC",
  },
  {
    title: "B.E. Electronics & Communication",
    description: "Engineering program in electronics, communications, and embedded systems.",
    duration: "4 Years",
    students: "180/batch",
    rating: 4.7,
    level: "Undergraduate",
    category: "KEC",
  },
  {
    title: "M.E. Computer Science",
    description: "Advanced postgraduate program in computer science with research opportunities.",
    duration: "2 Years",
    students: "30/batch",
    rating: 4.9,
    level: "Postgraduate",
    category: "KEC",
  },
];

const Courses = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary/80 py-16 md:py-24 text-primary-foreground">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Courses & Programs</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Explore our wide range of courses from GUVI and academic programs from Kongu Engineering College
          </p>
        </div>
      </section>

      {/* GUVI Courses */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12">
            <Badge className="mb-4 bg-secondary text-secondary-foreground">GUVI Courses</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industry-Ready Tech Courses</h2>
            <p className="text-muted-foreground max-w-2xl">
              Gain practical skills with our industry-aligned courses designed by experts from top tech companies.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guviCourses.map((course) => (
              <Card key={course.title} className="flex flex-col">
                <CardHeader>
                  <Badge variant="outline" className="w-fit mb-2">{course.level}</Badge>
                  <CardTitle className="text-lg">{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>{course.students} enrolled</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <span>{course.rating} rating</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="secondary">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* KEC Programs */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="mb-12">
            <Badge className="mb-4">KEC Programs</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Academic Programs</h2>
            <p className="text-muted-foreground max-w-2xl">
              World-class engineering programs with state-of-the-art facilities and experienced faculty.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {kecPrograms.map((program) => (
              <Card key={program.title} className="flex flex-col">
                <CardHeader>
                  <Badge variant="outline" className="w-fit mb-2">{program.level}</Badge>
                  <CardTitle className="text-lg">{program.title}</CardTitle>
                  <CardDescription>{program.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>{program.students}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <span>{program.rating} rating</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Courses;
