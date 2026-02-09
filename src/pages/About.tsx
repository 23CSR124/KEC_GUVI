import { GraduationCap, Code2, Target, Eye, Award, Users, BookOpen, Building } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";

const achievements = [
  { label: "Years of Excellence", value: "40+", icon: Award },
  { label: "Alumni Network", value: "50,000+", icon: Users },
  { label: "Research Papers", value: "2,000+", icon: BookOpen },
  { label: "Industry Partners", value: "200+", icon: Building },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary/80 py-16 md:py-24 text-primary-foreground">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Learn about the prestigious partnership between Kongu Engineering College and GUVI
          </p>
        </div>
      </section>

      {/* Kongu Engineering College */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="h-10 w-10 text-primary" />
                <h2 className="text-3xl md:text-4xl font-bold">Kongu Engineering College</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                Established in 1984, Kongu Engineering College (KEC) is an autonomous institution affiliated to Anna University, Chennai. Located in Perundurai, Erode district of Tamil Nadu, it stands as one of the premier engineering institutions in South India.
              </p>
              <p className="text-muted-foreground mb-6">
                The college is run by the Kongu Vellalar Institute of Technology Trust and has consistently been ranked among the top engineering colleges in Tamil Nadu for its academic excellence, research contributions, and outstanding placement records.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <Target className="h-6 w-6 text-primary mb-1" />
                    <CardTitle className="text-lg">Our Mission</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      To provide quality technical education and produce globally competent engineers.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <Eye className="h-6 w-6 text-primary mb-1" />
                    <CardTitle className="text-lg">Our Vision</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      To be a center of excellence in engineering education and research.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="bg-primary/5 rounded-2xl p-8 flex items-center justify-center">
              <div className="text-center">
                <GraduationCap className="h-32 w-32 mx-auto text-primary opacity-50" />
                <p className="text-muted-foreground mt-4">Kongu Engineering College</p>
                <p className="text-sm text-muted-foreground">Est. 1984</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-12 bg-muted">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((item) => (
              <div key={item.label} className="text-center">
                <item.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                <div className="text-3xl md:text-4xl font-bold text-primary">{item.value}</div>
                <div className="text-sm text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GUVI */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-secondary/5 rounded-2xl p-8 flex items-center justify-center">
              <div className="text-center">
                <Code2 className="h-32 w-32 mx-auto text-secondary opacity-50" />
                <p className="text-muted-foreground mt-4">GUVI</p>
                <p className="text-sm text-muted-foreground">IIT-M & IIM-A Incubated</p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="h-10 w-10 text-secondary" />
                <h2 className="text-3xl md:text-4xl font-bold">GUVI</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                GUVI (Grab Your Vernacular Imprint) is an IIT Madras and IIM Ahmedabad incubated ed-tech company that aims to make quality technical education accessible to everyone through vernacular language courses.
              </p>
              <p className="text-muted-foreground mb-4">
                Founded with the vision of bridging the gap between education and employment, GUVI offers industry-aligned courses in programming, web development, data science, artificial intelligence, and more.
              </p>
              <p className="text-muted-foreground">
                With over 2 million learners and partnerships with leading tech companies, GUVI has established itself as a trusted platform for skill development and career advancement in the tech industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-secondary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Partnership</h2>
          <p className="text-lg opacity-90 max-w-3xl mx-auto mb-8">
            The collaboration between Kongu Engineering College and GUVI brings together the best of academic excellence and industry expertise. This partnership aims to provide students with comprehensive learning experiences that combine theoretical knowledge with practical, industry-ready skills.
          </p>
          <div className="flex items-center justify-center gap-4">
            <GraduationCap className="h-16 w-16" />
            <span className="text-3xl font-bold">×</span>
            <Code2 className="h-14 w-14" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
