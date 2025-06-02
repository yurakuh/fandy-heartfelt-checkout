
import React from 'react';
import { Button } from "@/components/ui/button";
import DonationForm from "@/components/DonationForm";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { ShoppingBag, Briefcase, Dog } from "lucide-react";

const Index = () => {
  const useCases = [
    {
      icon: Dog,
      title: "Pet Store Chain",
      subtitle: "E-commerce",
      description: "Checkout charity boosts revenue and conversion — spend $100, and $10 is donated to an animal cause."
    },
    {
      icon: ShoppingBag,
      title: "Shopify D2C Brand",
      subtitle: "Direct-to-Consumer",
      description: "Branded donation reports boost customer loyalty and repeat purchases."
    },
    {
      icon: Briefcase,
      title: "Etsy Merchant",
      subtitle: "Marketplace",
      description: "Includes donation postcards inside every delivered package — a delightful unboxing surprise."
    },
    {
      icon: Dog,
      title: "Veterinary Clinic Chain",
      subtitle: "Healthcare",
      description: "Donations sold at checkout; proceeds help fund treatments right at the clinic."
    },
    {
      icon: Briefcase,
      title: "Fintech Bank",
      subtitle: "Financial Services",
      description: "Micro-donations integrated into promotions — drives app engagement and customer connection."
    },
    {
      icon: ShoppingBag,
      title: "NDA Gambling Platform",
      subtitle: "Gaming",
      description: "Deposit funds? A percentage goes to charity — making deposits feel good."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-fandy-gray to-white">
      {/* Header */}
      <header className="bg-fandy-teal text-white">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold">FANDY</div>
              <div className="w-2 h-2 bg-fandy-blue rounded-full"></div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="hover:text-fandy-blue transition-colors">Home</a>
              <a href="#" className="hover:text-fandy-blue transition-colors">Features</a>
              <a href="#" className="hover:text-fandy-blue transition-colors">Pricing</a>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="text-fandy-teal border-fandy-blue hover:bg-fandy-blue/10">
                Shopify app
              </Button>
              <Button className="bg-fandy-blue hover:bg-fandy-blue-light text-fandy-teal font-medium">
                Book a demo
              </Button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section with Donation Form */}
      <section className="bg-fandy-teal text-white min-h-screen py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
              <div className="space-y-8 animate-fade-in">
                <div className="inline-block bg-fandy-teal-light px-4 py-2 rounded-full text-sm">
                  Go Global. Support Local.
                </div>
                <div>
                  <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                    Give Back. Feel the Connection.
                  </h1>
                  <p className="text-xl text-gray-300 leading-relaxed mb-8">
                    Turn every checkout into a moment of personal impact — direct donations, thank-you messages, and real stories.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold">Your Discounts Are Boring. Try Donations.</h2>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-fandy-blue rounded-full"></div>
                      <span className="text-lg"><strong>Boost customer loyalty by 52%</strong></span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-fandy-blue rounded-full"></div>
                      <span className="text-lg"><strong>Increase AOV</strong> (Average Order Value) <strong>by 26%</strong></span>
                    </div>
                    <div className="mt-6 p-4 bg-fandy-teal-light rounded-lg">
                      <p className="text-fandy-blue-light">
                        Implement <strong>AI-powered personalized checkout donations</strong> now!
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 bg-fandy-blue rounded-full border-2 border-white"></div>
                    <div className="w-10 h-10 bg-fandy-blue-light rounded-full border-2 border-white"></div>
                    <div className="w-10 h-10 bg-fandy-blue rounded-full border-2 border-white"></div>
                    <div className="w-10 h-10 bg-fandy-blue-light rounded-full border-2 border-white"></div>
                    <div className="w-10 h-10 bg-fandy-blue rounded-full border-2 border-white"></div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">4.8</div>
                    <div className="text-sm text-gray-300">From 1,000+ reviews</div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6 animate-fade-in">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-semibold mb-2">Experience Fandy in Action</h3>
                  <p className="text-gray-300">See how your customers will interact with our donation platform</p>
                </div>
                <DonationForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section - Horizontal Slider */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-fandy-teal mb-4">💼 Use Cases of Fandy's Impact Marketing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how businesses across industries are building deeper customer connections and driving meaningful impact with Fandy.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {useCases.map((useCase, index) => {
                  const IconComponent = useCase.icon;
                  return (
                    <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                      <Card className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden h-full">
                        <div className="p-6 flex flex-col h-full">
                          <div className="mb-4 flex items-center space-x-3">
                            <div className="w-12 h-12 bg-fandy-blue/20 rounded-full flex items-center justify-center group-hover:bg-fandy-blue/30 transition-colors">
                              <IconComponent className="w-6 h-6 text-fandy-teal" />
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-fandy-teal group-hover:text-fandy-teal-light transition-colors">
                                {useCase.title}
                              </h3>
                              <span className="text-sm text-fandy-blue font-medium">
                                {useCase.subtitle}
                              </span>
                            </div>
                          </div>
                          <p className="text-gray-600 leading-relaxed flex-grow">
                            {useCase.description}
                          </p>
                        </div>
                      </Card>
                    </CarouselItem>
                  );
                })}
                {/* CTA Slide */}
                <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden h-full bg-gradient-to-br from-fandy-teal to-fandy-teal-light">
                    <div className="p-6 flex flex-col h-full items-center justify-center text-center text-white">
                      <div className="mb-4">
                        <div className="w-12 h-12 bg-fandy-blue rounded-full flex items-center justify-center mx-auto mb-3">
                          <Briefcase className="w-6 h-6 text-fandy-teal" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">
                          Want to learn more?
                        </h3>
                        <p className="text-fandy-blue-light mb-4">
                          See all solutions and start your journey today.
                        </p>
                      </div>
                      <Button 
                        className="bg-fandy-blue hover:bg-fandy-blue-light text-fandy-teal font-semibold"
                        size="lg"
                      >
                        Contact Us
                      </Button>
                    </div>
                  </Card>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-fandy-teal text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Checkout?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Join thousands of businesses creating meaningful connections through giving. Start your journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-fandy-blue hover:bg-fandy-blue-light text-fandy-teal font-semibold px-8 py-4 text-lg">
              Get Started Free
            </Button>
            <Button size="lg" variant="outline" className="border-fandy-blue text-fandy-blue hover:bg-fandy-blue/10 px-8 py-4 text-lg">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-fandy-teal-light text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="text-xl font-bold">FANDY</div>
              <div className="w-2 h-2 bg-fandy-blue rounded-full"></div>
            </div>
            <p className="text-gray-300">© 2024 Fandy. Building connections through giving.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
