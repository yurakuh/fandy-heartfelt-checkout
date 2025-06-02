
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Share } from 'lucide-react';

const DonationForm = () => {
  const [selectedCause, setSelectedCause] = useState<string | null>(null);
  const [email, setEmail] = useState('');

  const causes = [
    {
      id: 'team-red-white-blue',
      title: 'Team Red, White & Blue',
      subtitle: 'Floyds Knobs',
      amount: '$690.99 raised',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop'
    },
    {
      id: 'hands-united',
      title: 'Hands United',
      subtitle: 'Disaster Relief',
      amount: '$935.52 raised',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop'
    },
    {
      id: 'american-friends',
      title: 'American Friends Of Combatants For Peace',
      subtitle: 'New York',
      amount: '$903.51 raised',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop'
    }
  ];

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 animate-scale-in">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-semibold text-fandy-teal mb-2">
          Your code has been activated!
        </h3>
        <p className="text-sm text-gray-600 mb-6">
          6fd43169-3741-426a-bece-3927418a7ed4
        </p>
        <p className="text-lg text-gray-800">
          Please select the purpose of your donation
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {causes.map((cause) => (
          <Card
            key={cause.id}
            className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
              selectedCause === cause.id
                ? 'ring-2 ring-fandy-blue shadow-lg'
                : 'hover:ring-1 hover:ring-fandy-blue/50'
            }`}
            onClick={() => setSelectedCause(cause.id)}
          >
            <div className="p-4">
              <div className="aspect-video mb-3 rounded-lg overflow-hidden">
                <img
                  src={cause.image}
                  alt={cause.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-semibold text-fandy-teal text-sm mb-1">
                {cause.title}
              </h4>
              <p className="text-gray-600 text-xs mb-2">{cause.subtitle}</p>
              <div className="bg-fandy-blue/20 rounded-md px-2 py-1">
                <p className="text-fandy-teal text-xs font-medium">
                  {cause.amount}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Button
        className="w-full bg-fandy-teal hover:bg-fandy-teal-light text-white py-6 text-lg font-medium mb-8 transition-all duration-300"
        disabled={!selectedCause}
      >
        <Share className="w-5 h-5 mr-2" />
        Share
      </Button>

      <div className="border-t pt-6">
        <h4 className="text-lg font-semibold text-fandy-teal mb-4 text-center">
          Track your donation history
        </h4>
        <div className="flex gap-3">
          <Input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 py-3"
          />
          <Button
            className="bg-fandy-teal hover:bg-fandy-teal-light text-white px-8 py-3"
            disabled={!email}
          >
            Track
          </Button>
        </div>
      </div>

      <div className="text-center mt-6">
        <p className="text-sm text-gray-500">
          Powered by <span className="font-semibold text-fandy-teal">FANDY</span>
        </p>
      </div>
    </div>
  );
};

export default DonationForm;
