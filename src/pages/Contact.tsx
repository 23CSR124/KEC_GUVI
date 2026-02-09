import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/layout/Layout";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  inquiryType: z.string().min(1, "Please select an inquiry type"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

const contactInfo = [
  {
    title: "Kongu Engineering College",
    address: "Perundurai, Erode - 638060, Tamil Nadu, India",
    phone: "+91 4294 226 600",
    email: "info@kongu.edu",
  },
  {
    title: "GUVI",
    address: "IIT Madras Research Park, Chennai - 600113, Tamil Nadu, India",
    phone: "+91 44 2257 9600",
    email: "support@guvi.in",
  },
];

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      inquiryType: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form submitted:", data);
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary/80 py-16 md:py-24 text-primary-foreground">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Get in touch with us for any inquiries about courses, admissions, or partnerships
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="grid sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="john@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="+91 9876543210" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="inquiryType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Inquiry Type</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select inquiry type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="admissions">Admissions</SelectItem>
                              <SelectItem value="courses">Courses & Programs</SelectItem>
                              <SelectItem value="placements">Placements & Careers</SelectItem>
                              <SelectItem value="events">Events & Workshops</SelectItem>
                              <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us about your inquiry..." 
                              className="min-h-[120px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : (
                        <>
                          Send Message <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <Card key={info.title}>
                  <CardHeader>
                    <CardTitle className="text-lg">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{info.address}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-primary shrink-0" />
                      <span className="text-muted-foreground">{info.phone}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-primary shrink-0" />
                      <span className="text-muted-foreground">{info.email}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Social Links */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Follow Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    <a href="#" className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="Facebook">
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a href="#" className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="Twitter">
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a href="#" className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="LinkedIn">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href="#" className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="Instagram">
                      <Instagram className="h-5 w-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8 bg-muted">
        <div className="container">
          <div className="rounded-lg overflow-hidden h-[400px] bg-card border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.037063956744!2d77.56636931533216!3d11.275673650971946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96e43e21f1e67%3A0x4f44f35b8c6e6c4c!2sKongu%20Engineering%20College!5e0!3m2!1sen!2sin!4v1645000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kongu Engineering College Location"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
