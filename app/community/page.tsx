// app/dashboard/page.tsx
"use client"; 

import React from 'react';
import { Search, Users, Trophy, Bell, ChevronRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Community = () => {
  const offers = [
    {
      id: 1,
      company: "AI Innovations Ltd.",
      message: "We're impressed with your profile and would like to discuss potential opportunities at our company.",
      date: "Today"
    },
    {
      id: 2,
      company: "Data Dynamics Corp",
      message: "Your experience in machine learning aligns well with a new position we're looking to fill. Are you available for a chat?",
      date: "Yesterday"
    }
  ];

  const communities = [
    { id: 1, name: "Machine Learning Enthusiasts", members: 1500, projects: 12 },
    { id: 2, name: "Data Visualization Group", members: 800, projects: 8 },
    { id: 3, name: "AI Ethics Discussion", members: 650, projects: 5 }
  ];

  const jobOpportunities = [
    {
      id: 1,
      position: "Senior Data Scientist",
      company: "TechCorp AI",
      location: "San Francisco, CA",
      skills: ["Python", "Machine Learning", "Big Data"],
      postedDate: "2 days ago"
    },
    {
      id: 2,
      position: "ML Engineer",
      company: "DataDrive Inc.",
      location: "New York, NY",
      skills: ["TensorFlow", "PyTorch", "Cloud Computing"],
      postedDate: "1 week ago"
    },
    {
      id: 3,
      position: "Data Analyst",
      company: "FinTech Solutions",
      location: "Chicago, IL",
      skills: ["SQL", "Tableau", "Excel"],
      postedDate: "3 days ago"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-white">
      <header className="bg-white shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <svg className="w-8 h-8 text-purple-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 8C21 6.34315 19.6569 5 18 5H10C8.34315 5 7 6.34315 7 8V16C7 17.6569 8.34315 19 10 19H18C19.6569 19 21 17.6569 21 16V8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 12H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 12L18 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 9L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 15L18 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h1 className="text-2xl font-bold text-purple-600">Parott</h1>
            </div>
            <nav className="flex items-center space-x-6">
              <ul className="flex space-x-6 text-sm font-medium">
                <li><a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Home</a></li>
                <li><a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Dashboard</a></li>
                <li><a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Competitions</a></li>
                <li><a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Community</a></li>
              </ul>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-48 p-2 pl-8 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
                <Search className="absolute left-2 top-2 w-4 h-4 text-gray-400" />
              </div>
              <a href="#" className="flex items-center text-white bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-full transition-colors">Sign In</a>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-purple-600 mb-8">Community</h1>

        {/* WE WANT YOU! Section with added top padding for each box */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center text-purple-600">
            <Bell className="mr-2" /> WE WANT YOU!
          </h2>
          <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg p-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-semibold text-white">You have {offers.length} new offers!</h3>
              <Button variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
                View All <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {offers.map((offer) => (
                <Card key={offer.id} className="bg-white">
                  <CardContent className="p-6 pt-8"> {/* Added extra top padding */}
                    <h4 className="font-semibold text-lg mb-3 text-purple-600">{offer.company}</h4>
                    <p className="text-sm mb-4 text-gray-600">{offer.message}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">{offer.date}</span>
                      <Button size="sm" className="bg-purple-600 text-white hover:bg-purple-700">
                        Respond
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Your Organization Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center text-purple-600">
            <Users className="mr-2" /> Your Organization
          </h2>
          <Card className="overflow-hidden">
            <CardContent className="p-8 pt-10"> {/* Maintained extra top padding */}
              <div className="flex items-center mb-6">
                <img src="/api/placeholder/80/80" alt="Club Logo" className="w-20 h-20 rounded-full mr-6" />
                <div>
                  <h3 className="text-2xl font-semibold text-purple-600">Data Science Club</h3>
                  <p className="text-lg text-gray-600 mt-1">University of Data Science</p>
                  <p className="text-sm text-gray-500 mt-2">500 members</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="flex items-center bg-purple-100 rounded-lg p-4">
                  <Users className="text-purple-600 mr-3 w-6 h-6" />
                  <div>
                    <span className="block font-semibold">25</span>
                    <span className="text-sm text-gray-600">active discussions</span>
                  </div>
                </div>
                <div className="flex items-center bg-purple-100 rounded-lg p-4">
                  <Trophy className="text-purple-600 mr-3 w-6 h-6" />
                  <div>
                    <span className="block font-semibold">10</span>
                    <span className="text-sm text-gray-600">ongoing competitions</span>
                  </div>
                </div>
                <div className="flex items-center bg-purple-100 rounded-lg p-4">
                  <Users className="text-purple-600 mr-3 w-6 h-6" />
                  <div>
                    <span className="block font-semibold">5</span>
                    <span className="text-sm text-gray-600">study groups</span>
                  </div>
                </div>
              </div>
              <Button className="w-full">View Organization Page</Button>
            </CardContent>
          </Card>
        </section>

        {/* Your Other Communities Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center text-purple-600">
            <Users className="mr-2" /> Your Other Communities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {communities.map((community) => (
              <Card key={community.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <CardTitle>{community.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                    <span>{community.members} members</span>
                    <span>{community.projects} active projects</span>
                  </div>
                  <Button variant="outline" className="w-full">View Community</Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Button variant="link" className="text-purple-600">
              Discover More Communities <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>

        {/* Career Opportunities Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center text-purple-600">
            <Users className="mr-2" /> Career Opportunities
          </h2>
          <Card>
            <CardHeader>
              <CardTitle>Job Opportunities</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-6">
                {jobOpportunities.map((job) => (
                  <li key={job.id} className="border-b pb-4 last:border-b-0 last:pb-0">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold text-lg">{job.position}</h4>
                        <p className="text-sm text-gray-600">{job.company} • {job.location}</p>
                      </div>
                      <Button variant="outline" size="sm">Apply</Button>
                    </div>
                    <div className="mb-2">
                      {job.skills.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="mr-1 mb-1">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-xs text-gray-500">Posted {job.postedDate}</p>
                  </li>
                ))}
              </ul>
              <Button variant="link" className="mt-6 text-purple-600">
                View All Jobs <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>&copy; 2024 Parott. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Community;
