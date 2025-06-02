
import React from 'react';
import { Card } from "@/components/ui/card";

interface CaseStudyCardProps {
  image: string;
  title: string;
  description: string;
  category: string;
}

const CaseStudyCard = ({ image, title, description, category }: CaseStudyCardProps) => {
  return (
    <Card className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <div className="mb-3">
          <span className="inline-block bg-fandy-blue/20 text-fandy-teal text-sm font-medium px-3 py-1 rounded-full">
            {category}
          </span>
        </div>
        <h3 className="text-xl font-semibold text-fandy-teal mb-3 group-hover:text-fandy-teal-light transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </Card>
  );
};

export default CaseStudyCard;
