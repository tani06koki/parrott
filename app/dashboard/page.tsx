import React, { useState } from 'react';
import { Share2, FileText, Trophy, Star, Filter, Edit, ChevronRight, Search } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Dashboard = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [memberId, setMemberId] = useState('');
  
  const interests = ["Machine Learning", "Data Visualization", "Natural Language Processing", "Big Data"];
  const skills = ["Python", "R", "SQL", "Tableau", "TensorFlow", "Spark"];

  const projects = [
    { name: "Customer Churn Prediction", description: "Used machine learning to predict customer churn for a telecom company.", skills: ["Python", "Scikit-learn", "Pandas"] },
    // 他のプロジェクトを省略
  ];

  const allTags = [...new Set(projects.flatMap(project => project.skills))];
  const filteredProjects = selectedFilter === 'All' ? projects : projects.filter(project => project.skills.includes(selectedFilter));

  const competitionHistory = [
    { id: 1, name: "Competition A", placement: "1st", date: "2023-01-15" },
    { id: 2, name: "Competition B", placement: "2nd", date: "2023-02-10" }
  ];

  const handleShare = () => console.log("Sharing dashboard...");
  const handleEditPortfolio = () => console.log("Editing portfolio...");
  const handleSearch = () => console.log("Searching for dashboard with member ID:", memberId);


  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-purple-600">My Dashboard</h1>
          <Button className="bg-purple-600 text-white hover:bg-purple-700" onClick={handleShare}>
            <Share2 className="w-4 h-4 mr-2" /> Share Dashboard
          </Button>
        </div>

        <section className="mb-12">
          <Card>
            <CardContent className="p-6 pt-10">
              <div className="flex items-center mb-6">
                <img src="/api/placeholder/80/80" alt="Profile Picture" className="w-20 h-20 rounded-full mr-6" />
                <div>
                  <h2 className="text-2xl font-semibold text-purple-600">Jane Doe</h2>
                  <p className="text-lg text-gray-600">Data Science Student</p>
                  <p className="text-sm text-gray-500">University of Data Science</p>
                </div>
              </div>
              <div className="flex flex-wrap justify-between items-center mb-6 bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center">
                  <FileText className="w-6 h-6 text-purple-600 mr-2" />
                  <div>
                    <p className="text-lg font-bold text-purple-600">15</p>
                    <p className="text-sm text-gray-600">Projects Completed</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Trophy className="w-6 h-6 text-purple-600 mr-2" />
                  <div>
                    <p className="text-lg font-bold text-purple-600">8</p>
                    <p className="text-sm text-gray-600">Competitions Entered</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FileText className="w-6 h-6 text-purple-600 mr-2" />
                  <div>
                    <p className="text-lg font-bold text-purple-600">3</p>
                    <p className="text-sm text-gray-600">Research Papers</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Star className="w-6 h-6 text-purple-600 mr-2" />
                  <div>
                    <p className="text-lg font-bold text-purple-600">1,250</p>
                    <p className="text-sm text-gray-600">Ranking Points</p>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2 text-purple-600">Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest, index) => (
                    <Badge key={index} variant="secondary" className="text-sm">
                      {interest}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-purple-600">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge key={index} variant="outline" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-purple-600">My Portfolio</h2>
            <Button onClick={handleEditPortfolio} className="bg-purple-600 text-white hover:bg-purple-700">
              <Edit className="w-4 h-4 mr-2" /> Edit Portfolio
            </Button>
          </div>
          
          <div className="mb-6 flex items-center">
            <Filter className="w-5 h-5 text-purple-600 mr-2" />
            <select 
              className="bg-white border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
            >
              <option value="All">All Skills</option>
              {allTags.map((tag, index) => (
                <option key={index} value={tag}>{tag}</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>{project.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap">
                    {project.skills.map((skill, sIndex) => (
                      <Badge key={sIndex} variant="secondary" className="mr-1 mb-1">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
  {/* Competition History section */}
  <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-purple-600">Competition History</h2>
          <div className="flex overflow-x-auto space-x-4 pb-4">
            {competitionHistory.map((competition) => (
              <div key={competition.id} className="flex-shrink-0 w-64">
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-4 pt-6"> {/* Added top padding */}
                    <h3 className="font-semibold text-lg mb-2">{competition.name}</h3>
                    <p className="text-purple-600 font-medium mb-1">{competition.placement}</p>
                    <p className="text-sm text-gray-500 mb-4">{competition.date}</p>
                    <a 
                      href={`/competitions/${competition.id}`} 
                      className="text-purple-600 hover:text-purple-800 text-sm font-medium flex items-center"
                    >
                      View Details
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </a>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* New section for searching other dashboards */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-purple-600">Search Other Dashboards</h2>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Enter member ID"
              value={memberId}
              onChange={(e) => setMemberId(e.target.value)}
              className="mr-4"
            />
            <Button onClick={handleSearch} className="bg-purple-600 text-white hover:bg-purple-700">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                <path d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M10 8L14 12L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;