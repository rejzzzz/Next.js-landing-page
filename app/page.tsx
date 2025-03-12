"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowRight, Zap, Shield, LineChart, Users } from "lucide-react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="container px-4 mx-auto max-w-6xl"> {/* Added max-w-6xl */}
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/2 px-4 mb-10 lg:mb-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
               
                className="max-w-md"
              >
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6"> {/* Reduced font sizes */}
                  Transform Your Business with{" "}
                  <span className="text-primary">AI-Powered</span> Insights
                </h1>
                <p className="text-base text-muted-foreground mb-6"> {/* Reduced from text-lg */}
                  Leverage the power of artificial intelligence to make better business decisions,
                  automate workflows, and stay ahead of the competition.
                </p>
                <div className="flex flex-col sm:flex-row gap-3"> {/* Reduced gap from 4 to 3 */}
                  <Button size="lg" className="gap-2 text-sm"> {/* Added text-sm */}
                    Get Started <ChevronRight className="h-3 w-3" /> {/* Reduced icon size */}
                  </Button>
                  <Button variant="outline" size="lg" className="gap-2 text-sm"> {/* Added text-sm */}
                    Watch Demo <ArrowRight className="h-3 w-3" /> {/* Reduced icon size */}
                  </Button>
                </div>
              </motion.div>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-6"> {/* Reduced padding from 8 to 6 */}
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
                    alt="AI Dashboard"
                    className="rounded-lg shadow-xl" 
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/50"> {/* Reduced padding from 20 to 16 */}
        <div className="container px-4 mx-auto max-w-6xl"> {/* Added max-w-6xl */}
          <div className="max-w-xl mx-auto text-center mb-12"> {/* Reduced from max-w-2xl and mb-16 */}
            <h2 className="text-2xl font-bold mb-3"> {/* Reduced from 3xl and mb-4 */}
              Powerful Features
            </h2>
            <p className="text-muted-foreground text-sm"> {/* Added text-sm */}
              Everything you need to take your business to the next level
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> {/* Reduced gap from 8 to 6 */}
            <FeatureCard
              icon={<Zap className="h-5 w-5" />} 
              title="Lightning Fast"
              description="Get insights in milliseconds with our optimized AI engine"
            />
            <FeatureCard
              icon={<Shield className="h-5 w-5" />} 
              title="Enterprise Security"
              description="Bank-grade encryption and security protocols"
            />
            <FeatureCard
              icon={<LineChart className="h-5 w-5" />} 
              title="Advanced Analytics"
              description="Deep insights into your business metrics"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16"> {/* Reduced padding from 20 to 16 */}
        <div className="container px-4 mx-auto max-w-6xl"> {/* Added max-w-6xl */}
          <div className="max-w-xl mx-auto text-center mb-12"> {/* Reduced from max-w-2xl and mb-16 */}
            <h2 className="text-2xl font-bold mb-3"> {/* Reduced from 3xl and mb-4 */}
              Trusted by Industry Leaders
            </h2>
            <p className="text-muted-foreground text-sm"> {/* Added text-sm */}
              See what our customers have to say about us
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> {/* Reduced gap from 8 to 6 */}
            <TestimonialCard
              image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
              name="John Smith"
              role="CEO at TechCorp"
              quote="This AI platform has transformed how we make decisions. The insights are invaluable."
            />
            <TestimonialCard
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
              name="Sarah Johnson"
              role="CTO at InnovateCo"
              quote="The speed and accuracy of the analytics have given us a competitive edge."
            />
            <TestimonialCard
              image="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80"
              name="Michael Chen"
              role="Director at DataFlow"
              quote="Implementation was seamless, and the results were immediate. Highly recommended."
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-card p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow"> {/* Reduced padding from 6 to 5 */}
      <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3"> {/* Reduced size and mb-4 to mb-3 */}
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-1"> {/* Reduced from xl and mb-2 to mb-1 */}
        {title}
      </h3>
      <p className="text-muted-foreground text-sm"> {/* Added text-sm */}
        {description}
      </p>
    </div>
  );
}

function TestimonialCard({ image, name, role, quote }: { image: string; name: string; role: string; quote: string }) {
  return (
    <div className="bg-card p-5 rounded-lg shadow-sm"> {/* Reduced padding from 6 to 5 */}
      <div className="flex items-center mb-3"> {/* Reduced mb-4 to mb-3 */}
        <img
          src={image}
          alt={name}
          className="h-10 w-10 rounded-full object-cover mr-3" 
        />
        <div>
          <h4 className="font-semibold text-sm"> {/* Added text-sm */}
            {name}
          </h4>
          <p className="text-xs text-muted-foreground"> {/* Reduced from sm to xs */}
            {role}
          </p>
        </div>
      </div>
      <p className="text-muted-foreground italic text-sm"> {/* Added text-sm */}
        “{quote}”
      </p>
    </div>
  );
}