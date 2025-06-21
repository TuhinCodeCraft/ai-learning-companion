import React from "react";
import { Mail, MessageSquare, Twitter, Linkedin, Github, Clock, Users } from "lucide-react";
import Link from "next/link";

const Contact = () => {
  const teamMembers = [
    {
      name: "Sourav Pal",
      role: "Frontend Developer",
      email: "alex@converseai.com",
      twitter: "https://twitter.com/alexj",
      linkedin: "https://linkedin.com/in/alexj",
      avatar: "/images/Souravpal.jpg"
    },
    {
      name: "Tuhin Ghosh",
      role: "Backend Engineer",
      email: "sarah@converseai.com",
      twitter: "https://twitter.com/sarahc",
      linkedin: "https://linkedin.com/in/sarahc",
      avatar: "/images/tuhin.png"
    },
    {
      name: "Pritam Mahato",
      role: "Designer & Video Editor",
      email: "michael@converseai.com",
      twitter: "https://twitter.com/michaelr",
      linkedin: "https://linkedin.com/in/michaelr",
      avatar: "https://media.licdn.com/dms/image/v2/D4E03AQEcwaWJsVWKKQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1695264553998?e=1755734400&v=beta&t=pvkaLSrLyWY6Wl9phLmocfUZxvtzbC4BpRyQmA4RRkw"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
        <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Get in touch with our team or reach out to individual members directly
        </p>
      </div>

      {/* Team Section */}
      <div className="mb-16">
        <div className="flex items-center justify-center gap-3 mb-8">
          <Users className="h-6 w-6 text-indigo-600" />
          <h2 className="text-2xl font-semibold text-center">Meet Our Team</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-indigo-100">
                <img 
                  src={member.avatar} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-indigo-600 mb-3">{member.role}</p>
              
              <div className="flex justify-center gap-3 mb-4">
                <a href={`mailto:${member.email}`} className="text-gray-500 hover:text-indigo-600">
                  <Mail className="h-5 w-5" />
                </a>
                <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-400">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
              
              <a 
                href={`mailto:${member.email}`} 
                className="inline-block px-4 py-2 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100 text-sm font-medium"
              >
                Contact {member.name.split(' ')[0]}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Methods */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Email Card */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-blue-100 rounded-full">
              <Mail className="h-6 w-6 text-blue-600" />
            </div>
            <h2 className="text-xl font-semibold">General Support</h2>
          </div>
          <p className="text-gray-600 mb-4">
            For general inquiries, technical support, or partnership opportunities.
          </p>
          <a
            href="mailto:support@converseai.com"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            support@converseai.com
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        {/* Chat Support Card */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-green-100 rounded-full">
              <MessageSquare className="h-6 w-6 text-green-600" />
            </div>
            <h2 className="text-xl font-semibold">Live Chat</h2>
          </div>
          <p className="text-gray-600 mb-4">
            Get instant help from our support team or AI assistant through in-app chat.
          </p>
          <Link href="/chatbot">
             <button className="inline-flex items-center cursor-pointer text-green-600 hover:text-green-800 font-medium">
            Open Chat Widget
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
          </Link>
        </div>
      </div>

      {/* Social Media */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 max-w-2xl mx-auto text-center mb-12">
        <h2 className="text-xl font-semibold mb-4">Connect With Us</h2>
        <p className="text-gray-600 mb-4">
          Follow us for updates, news, and community discussions
        </p>
        <div className="flex justify-center gap-6">
          <a href="https://twitter.com/converseai" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
            <Twitter className="h-8 w-8" />
          </a>
          <a href="https://linkedin.com/company/converseai" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
            <Linkedin className="h-8 w-8" />
          </a>
          <a href="https://github.com/converseai" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
            <Github className="h-8 w-8" />
          </a>
        </div>
      </div>

      {/* Response Time */}
      <div className="bg-blue-50 rounded-xl p-6 text-center max-w-2xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Clock className="h-5 w-5 text-blue-600" />
          <span className="font-medium text-blue-800">Our Response Time</span>
        </div>
        <p className="text-gray-700">
          We typically respond to inquiries within <span className="font-semibold">24–48 hours</span> during business days.
        </p>
      </div>

      {/* Footer Note */}
      <p className="text-sm text-gray-500 text-center mt-10">
        © {new Date().getFullYear()} Tutoraid. All rights reserved.
      </p>
    </div>
  );
};

export default Contact;