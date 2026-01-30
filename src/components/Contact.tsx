import React from "react";
import { Mail, Phone, MapPin, Instagram, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";

export function Contact() {
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const firstNameRef = React.useRef<HTMLInputElement>(null);
  const lastNameRef = React.useRef<HTMLInputElement>(null);
  const emailRef = React.useRef<HTMLInputElement>(null);
  const interestRef = React.useRef<HTMLInputElement>(null);
  const messageRef = React.useRef<HTMLTextAreaElement>(null);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);
    const firstName = firstNameRef.current?.value || "";
    const lastName = lastNameRef.current?.value || "";
    const email = emailRef.current?.value || "";
    const interest = interestRef.current?.value || "";
    const message = messageRef.current?.value || "";
    try {
      const { supabase } = await import("../supabaseClient");
      const { error } = await supabase.from("inquiries").insert([
        { first_name: firstName, last_name: lastName, email, interest, message }
      ]);
      if (error) throw error;
      setSuccess(true);
      if (firstNameRef.current) firstNameRef.current.value = "";
      if (lastNameRef.current) lastNameRef.current.value = "";
      if (emailRef.current) emailRef.current.value = "";
      if (interestRef.current) interestRef.current.value = "";
      if (messageRef.current) messageRef.current.value = "";
    } catch (err: any) {
      setError(err.message || "Submission failed. Try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-br from-neutral-900 via-neutral-800 to-amber-950 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl animate-float-delayed" />
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl animate-pulse-slow" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="animate-fade-in">
            <span className="inline-block px-4 py-2 border border-neutral-600 tracking-widest uppercase mb-6 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-amber-400 transition-all duration-300 hover:shadow-lg hover:scale-105">
              Get in Touch
            </span>
            <h2 className="mb-6 text-white bg-gradient-to-r from-white via-amber-200 to-white bg-clip-text text-transparent">Begin Your Artistic Journey</h2>
            <p className="text-neutral-300 mb-12">
              I welcome inquiries from serious collectors and art enthusiasts. Whether you're interested in 
              acquiring an existing piece or commissioning a bespoke creation, I invite you to reach out for 
              a confidential consultation.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex gap-4 items-start group hover:translate-x-2 transition-all duration-300">
                <div className="w-12 h-12 border border-neutral-600 flex items-center justify-center flex-shrink-0 group-hover:border-amber-500 group-hover:bg-amber-500/10 transition-all duration-300 relative overflow-hidden">
                  <Mail className="size-5 relative z-10 group-hover:text-amber-400 transition-colors duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-rose-500/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </div>
                <div>
                  <div className="mb-1 text-white group-hover:text-amber-300 transition-colors duration-300">Email</div>
                  <p className="text-neutral-400">ar6153664@gmail.com</p>
                </div>
              </div>

              <div className="flex gap-4 items-start group hover:translate-x-2 transition-all duration-300">
                <div className="w-12 h-12 border border-neutral-600 flex items-center justify-center flex-shrink-0 group-hover:border-amber-500 group-hover:bg-amber-500/10 transition-all duration-300 relative overflow-hidden">
                  <Phone className="size-5 relative z-10 group-hover:text-amber-400 transition-colors duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-rose-500/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </div>
                <div>
                  <div className="mb-1 text-white group-hover:text-amber-300 transition-colors duration-300">Phone</div>
                  <p className="text-neutral-400">+1 (540) 287-4864</p>
                </div>
              </div>

              <div className="flex gap-4 items-start group hover:translate-x-2 transition-all duration-300">
                <div className="w-12 h-12 border border-neutral-600 flex items-center justify-center flex-shrink-0 group-hover:border-amber-500 group-hover:bg-amber-500/10 transition-all duration-300 relative overflow-hidden">
                  <MapPin className="size-5 relative z-10 group-hover:text-amber-400 transition-colors duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-rose-500/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </div>
                <div>
                  <div className="mb-1 text-white group-hover:text-amber-300 transition-colors duration-300">Studio Location</div>
                  <p className="text-neutral-400">123 Gallery District<br />New York, NY 10013</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-neutral-700">
              <div className="mb-4 text-white">Follow the Journey</div>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 border border-neutral-600 flex items-center justify-center hover:bg-gradient-to-br hover:from-amber-500 hover:to-rose-500 hover:border-transparent hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-6 hover:shadow-lg group relative overflow-hidden"
                >
                  <Instagram className="size-5 relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-rose-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 border border-neutral-600 flex items-center justify-center hover:bg-gradient-to-br hover:from-amber-500 hover:to-rose-500 hover:border-transparent hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-6 hover:shadow-lg group relative overflow-hidden"
                >
                  <Linkedin className="size-5 relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-rose-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-neutral-800/50 p-8 border border-neutral-700 backdrop-blur-md shadow-2xl hover:shadow-amber-900/20 transition-all duration-500 hover:border-amber-700 animate-fade-in-delayed relative overflow-hidden group">
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-900/5 via-rose-900/5 to-purple-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <h3 className="mb-6 text-white relative z-10">Send an Inquiry</h3>
            <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group/input">
                  <Label htmlFor="firstName" className="text-neutral-300 mb-2 block group-hover/input:text-amber-300 transition-colors duration-300">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    placeholder="John"
                    className="bg-neutral-900/80 border-neutral-700 text-white placeholder:text-neutral-500 focus:border-amber-500 transition-all duration-300 hover:border-neutral-600"
                    ref={firstNameRef}
                  />
                </div>
                <div className="group/input">
                  <Label htmlFor="lastName" className="text-neutral-300 mb-2 block group-hover/input:text-amber-300 transition-colors duration-300">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    placeholder="Doe"
                    className="bg-neutral-900/80 border-neutral-700 text-white placeholder:text-neutral-500 focus:border-amber-500 transition-all duration-300 hover:border-neutral-600"
                    ref={lastNameRef}
                  />
                </div>
              </div>

              <div className="group/input">
                <Label htmlFor="email" className="text-neutral-300 mb-2 block group-hover/input:text-amber-300 transition-colors duration-300">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className="bg-neutral-900/80 border-neutral-700 text-white placeholder:text-neutral-500 focus:border-amber-500 transition-all duration-300 hover:border-neutral-600"
                  ref={emailRef}
                />
              </div>

              <div className="group/input">
                <Label htmlFor="interest" className="text-neutral-300 mb-2 block group-hover/input:text-amber-300 transition-colors duration-300">
                  Area of Interest
                </Label>
                <Input
                  id="interest"
                  placeholder="e.g., Commission, Purchase, Consultation"
                  className="bg-neutral-900/80 border-neutral-700 text-white placeholder:text-neutral-500 focus:border-amber-500 transition-all duration-300 hover:border-neutral-600"
                  ref={interestRef}
                />
              </div>

              <div className="group/input">
                <Label htmlFor="message" className="text-neutral-300 mb-2 block group-hover/input:text-amber-300 transition-colors duration-300">
                  Message
                </Label>
                <Textarea
                  id="message"
                  rows={5}
                  placeholder="Please share details about your project or inquiry..."
                  className="bg-neutral-900/80 border-neutral-700 text-white placeholder:text-neutral-500 focus:border-amber-500 transition-all duration-300 hover:border-neutral-600"
                  ref={messageRef}
                />
              </div>

              <Button
                className="w-full bg-gradient-to-r from-amber-600 to-rose-600 hover:from-amber-700 hover:to-rose-700 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group/button relative overflow-hidden"
                type="submit"
                disabled={loading}
              >
                <span className="relative z-10">{loading ? "Submitting..." : "Submit Inquiry"}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-rose-500 translate-x-full group-hover/button:translate-x-0 transition-transform duration-300" />
              </Button>
              {success && (
                <p className="text-green-400 text-center">Thank you! Your inquiry has been received.</p>
              )}
              {error && (
                <p className="text-red-400 text-center">{error}</p>
              )}

              <p className="text-neutral-400 text-center">
                All inquiries are handled with complete confidentiality and receive a response within 24-48 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}