"use client";

import { sendMail } from "@/actions/contact";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Select, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue, SelectContent } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+213 (0) 540 67 26 22",
    phone: "+213540672622",
    href: "tel:+213540672622"
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "aymentigui@gmail.com",
    email: "aymentigui@gmail.com",
    href: "mailto:aymentigui@gmail.com"
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "34 Belkacem Belkadi, Kouba, Algiers, Algeria",
    maps: "36.7261,3.0636",
    href: "https://maps.google.com/?q=36.7261,3.0636"
  }
]

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      const result = await sendMail(formData);

      if (result.success) {
        toast.success(result.message);
        e.currentTarget.reset();
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("An unexpected error occurred");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.2, ease: "easeInOut" } }}
      className="py-6"
      aria-label="Contact form and information"
    >
      <div className="container mx-auto">
        {/* SEO Header */}
        <header className="mb-12 text-center hidden lg:block">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Me - Let's Build Your Project
          </h1>
          <p className="text-lg text-white/60 max-w-3xl mx-auto">
            Ready to start your web or mobile project? Get in touch for a free consultation. I specialize in React, Next.js, Laravel, Flutter, and WordPress development.
          </p>
        </header>

        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Contact Form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form 
              onSubmit={handleSubmit} 
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              aria-label="Contact form"
              itemScope 
              itemType="https://schema.org/ContactForm"
            >
              <h2 className="text-4xl text-sky-400">Let's Work Together</h2>
              <p className="text-white/60 break-words">
                Whether you need a modern website, an e-commerce store, or a custom digital solution, I am here to bring your ideas to life. Tell me about your project and I'll get back to you as soon as possible.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  name="firstname"
                  type="text"
                  placeholder="First Name"
                  required
                  minLength={2}
                  maxLength={50}
                  disabled={isSubmitting}
                  aria-label="First name"
                  autoComplete="given-name"
                />
                <Input
                  name="lastname"
                  type="text"
                  placeholder="Last Name"
                  required
                  minLength={2}
                  maxLength={50}
                  disabled={isSubmitting}
                  aria-label="Last name"
                  autoComplete="family-name"
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  required
                  disabled={isSubmitting}
                  aria-label="Email address"
                  autoComplete="email"
                />
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  required
                  disabled={isSubmitting}
                  aria-label="Phone number"
                  autoComplete="tel"
                />
              </div>

              <Select name="service" disabled={isSubmitting} required>
                <SelectTrigger className="w-full" aria-label="Select a service">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a Service</SelectLabel>
                    <SelectItem value="web">Professional Website Development</SelectItem>
                    <SelectItem value="webecom">E-commerce Store Development</SelectItem>
                    <SelectItem value="wordPress">WordPress & WooCommerce Development</SelectItem>
                    <SelectItem value="webfront">Modern Front-End Development (React/Next.js)</SelectItem>
                    <SelectItem value="webback">Back-End & API Development (Laravel/Node.js)</SelectItem>
                    <SelectItem value="mobile">Mobile App Development (Flutter)</SelectItem>
                    <SelectItem value="bdd">Database Design & Optimization</SelectItem>
                    <SelectItem value="hosting">Hosting, Deployment & Website Migration</SelectItem>
                    <SelectItem value="seo">SEO & Website Speed Optimization</SelectItem>
                    <SelectItem value="landingpage">High-Converting Landing Pages</SelectItem>
                    <SelectItem value="ads">Facebook & Instagram Advertising</SelectItem>
                    <SelectItem value="automation">Automation & API Integrations</SelectItem>
                    <SelectItem value="custom">Custom Plugin & Feature Development</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea
                name="message"
                className="h-[200px]"
                placeholder="Tell me about your project, goals, and timeline..."
                required
                minLength={10}
                maxLength={1000}
                disabled={isSubmitting}
                aria-label="Project message"
              />

              <Button
                type="submit"
                size="md"
                className="max-w-40"
                disabled={isSubmitting}
                aria-label={isSubmitting ? "Sending message" : "Send message"}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <aside 
            className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0"
            aria-label="Contact information"
          >
            <address className="not-italic">
              <ul className="flex flex-col gap-10" itemScope itemType="https://schema.org/Person">
                {info.map((item, index) => (
                  <li key={index} className="flex gap-6" itemProp="contactPoint" itemScope itemType="https://schema.org/ContactPoint">
                    <div 
                      className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] rounded-md flex items-center justify-center text-sky-400"
                      aria-hidden="true"
                    >
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60 mb-1" itemProp="contactType">{item.title}</p>
                      {item.href ? (
                        <a 
                          href={item.href}
                          className="text-xl hover:text-sky-400 transition-colors"
                          itemProp={item.email ? "email" : item.phone ? "telephone" : "url"}
                          target={item.maps ? "_blank" : undefined}
                          rel={item.maps ? "noopener noreferrer" : undefined}
                          aria-label={`${item.title}: ${item.description}`}
                        >
                          {item.description}
                        </a>
                      ) : (
                        <h3 className="text-xl">{item.description}</h3>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </address>
          </aside>
        </div>

        {/* Additional SEO Content */}
        <section className="mt-16 text-center max-w-4xl mx-auto" aria-label="Why contact me">
          <h2 className="text-3xl font-bold text-white mb-6">Why Work With Me?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <article className="bg-[#27272c] p-6 rounded-xl">
              <h3 className="text-xl font-bold text-sky-400 mb-3">Fast Response</h3>
              <p className="text-white/60">I respond to all inquiries within 24 hours. Your project timeline matters to me.</p>
            </article>
            <article className="bg-[#27272c] p-6 rounded-xl">
              <h3 className="text-xl font-bold text-sky-400 mb-3">Free Consultation</h3>
              <p className="text-white/60">Get expert advice on your project requirements and the best technology stack.</p>
            </article>
            <article className="bg-[#27272c] p-6 rounded-xl">
              <h3 className="text-xl font-bold text-sky-400 mb-3">Flexible Availability</h3>
              <p className="text-white/60">Available for both short-term projects and long-term collaborations worldwide.</p>
            </article>
          </div>
        </section>
      </div>
    </motion.section>
  )
}

export default Contact;