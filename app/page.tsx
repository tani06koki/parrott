import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Trophy, ChevronLeft, ChevronRight, Archive, Globe, Star } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

interface Competition {
  id: number;
  name: string;
  organizer: string;
  skillset?: string[];
  place?: string;
  prize: string;
  winner?: string;
  participants?: number;
}

export default function Home() {
  const activeCompetitions = [
    {
      id: 1,
      name: "Image Classification Challenge",
      organizer: "TechCorp AI",
      skillset: ["Computer Vision", "Deep Learning", "Python"],
      place: "1st",
      prize: "$15,000"
    },
    // ... (add more active competitions)
  ];

  const pastCompetitions = [
    {
      id: 1,
      name: "Natural Language Processing Task",
      organizer: "LinguaTech",
      winner: "AI Master",
      participants: 1500,
      prize: "$10,000"
    },
    // ... (add more past competitions)
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <section className="mb-16 bg-cover bg-center rounded-lg shadow-md p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-purple-600 opacity-75"></div>
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-4">Get Started with Parott</h2>
            <p className="text-xl mb-6">Join the world's largest community of data scientists and machine learning enthusiasts.</p>
            <a href="#" className="inline-block bg-white text-purple-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors">Get Started</a>
          </div>
          <Globe className="absolute right-10 bottom-10 text-white opacity-20 w-40 h-40" />
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center text-purple-600"><Trophy className="mr-2" /> Active Competitions</h2>
          <div className="relative">
            <div className="overflow-x-auto flex space-x-6 p-2">
              {activeCompetitions.map((competition) => (
                <Card key={competition.id} className="flex-shrink-0 w-80 hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg">{competition.name}</CardTitle>
                    <p className="text-sm text-gray-600">by {competition.organizer}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-3 flex flex-wrap">
                      {competition.skillset?.map((skill, index) => (
                        <span key={index} className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full mr-1 mb-1">{skill}</span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm font-semibold">Place: {competition.place}</span>
                      <span className="text-sm text-gray-600">Prize: {competition.prize}</span>
                    </div>
                    <button className="w-full bg-purple-600 text-white px-3 py-2 rounded-full hover:bg-purple-700 transition-colors">Join Competition</button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors">
              <ChevronLeft className="text-gray-600" />
            </button>
            <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors">
              <ChevronRight className="text-gray-600" />
            </button>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center text-purple-600"><Archive className="mr-2" /> Past Competitions</h2>
          <div className="relative">
            <div className="overflow-x-auto flex space-x-6 p-2">
              {pastCompetitions.map((competition) => (
                <Card key={competition.id} className="flex-shrink-0 w-80 hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg">{competition.name}</CardTitle>
                    <p className="text-sm text-gray-600">by {competition.organizer}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-3">
                      <p className="text-sm"><span className="font-semibold">Winner:</span> {competition.winner}</p>
                      <p className="text-sm"><span className="font-semibold">Participants:</span> {competition.participants}</p>
                    </div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm text-gray-600">Prize: {competition.prize}</span>
                    </div>
                    <button className="w-full bg-gray-200 text-gray-800 px-3 py-2 rounded-full hover:bg-gray-300 transition-colors mb-2">View Results</button>
                    <button className="w-full bg-yellow-400 text-gray-800 px-3 py-2 rounded-full hover:bg-yellow-500 transition-colors flex items-center justify-center">
                      <Star className="w-4 h-4 mr-2" /> Rate this competition
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors">
              <ChevronLeft className="text-gray-600" />
            </button>
            <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors">
              <ChevronRight className="text-gray-600" />
            </button>
          </div>
        </section>

        {/* Additional Sections (e.g., Top Rated Users, Community Dashboard) */}

      </main>
      <Footer />
    </div>
  );
}
