
import React from 'react';
import { Button } from "@/components/ui/button";
import DonationForm from "@/components/DonationForm";
import CaseStudyCard from "@/components/CaseStudyCard";

const Index = () => {
  const caseStudies = [
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      title: "Shopify E-commerce Integration",
      description: "Boost customer loyalty by 52% and increase AOV by 26% with AI-powered personalized checkout donations.",
      category: "E-commerce"
    },
    {
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop",
      title: "QR Code Retail Experience",
      description: "Transform physical stores with QR donation cards that create meaningful customer connections.",
      category: "Retail"
    },
    {
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop",
      title: "Corporate Social Responsibility",
      description: "Engage employees and customers with transparent, trackable corporate giving programs.",
      category: "Corporate"
    },
    {
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      title: "Employee Gift Matching",
      description: "Amplify employee donations with company matching programs that build team culture.",
      category: "Employee"
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

      {/* Hero Section */}
      <section className="bg-fandy-teal text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
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
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-fandy-blue hover:bg-fandy-blue-light text-fandy-teal font-semibold px-8 py-4 text-lg">
                    Book a demo
                  </Button>
                  <Button size="lg" variant="outline" className="border-fandy-blue text-fandy-blue hover:bg-fandy-blue/10 px-8 py-4 text-lg">
                    Install Shopify app
                  </Button>
                </div>
              </div>
              
              <div className="space-y-6 animate-fade-in">
                <div className="text-right">
                  <h2 className="text-2xl font-semibold mb-6">Your Discounts Are Boring. Try Donations.</h2>
                  <div className="space-y-4 text-left">
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
                
                <div className="flex items-center space-x-4 justify-end">
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
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Donation Form Section */}
      <section className="py-20 bg-gradient-to-b from-white to-fandy-gray">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-fandy-teal mb-4">Experience Fandy in Action</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how your customers will interact with our donation platform. Select a cause, share your impact, and track your giving history.
            </p>
          </div>
          <DonationForm />
        </div>
      </section>

      {/* Impact Section - Case Studies */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-fandy-teal mb-4">Real Impact Across Industries</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how businesses like yours are building deeper customer connections and driving meaningful impact with Fandy.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CaseStudyCard {...study} />
              </div>
            ))}
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
