import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Brain, 
  Activity, 
  Users, 
  Clock, 
  Shield, 
  Star,
  Play,
  ChevronRight,
  Stethoscope,
  Bot,
  Sparkles
} from "lucide-react";

export default function Index() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-healthcare-blue-50 via-white to-healthcare-green-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-white/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-healthcare-blue-500 to-healthcare-teal-500 rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-healthcare-blue-600 to-healthcare-teal-600 bg-clip-text text-transparent">
                AI HealthCare
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-healthcare-blue-700 hover:text-healthcare-blue-600 transition-colors">Features</a>
              <a href="#how-it-works" className="text-healthcare-blue-700 hover:text-healthcare-blue-600 transition-colors">How It Works</a>
              <a href="#testimonials" className="text-healthcare-blue-700 hover:text-healthcare-blue-600 transition-colors">Testimonials</a>
              <Button variant="outline" className="glass-button">Sign In</Button>
              <Button className="bg-gradient-to-r from-healthcare-blue-500 to-healthcare-teal-500 hover:from-healthcare-blue-600 hover:to-healthcare-teal-600">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`space-y-8 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 rounded-full glass text-sm font-medium text-healthcare-blue-700">
                  <Sparkles className="w-4 h-4 mr-2" />
                  AI-Powered Healthcare Platform
                </div>
                
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-healthcare-blue-600 to-healthcare-teal-600 bg-clip-text text-transparent">
                    AI-powered
                  </span>
                  <br />
                  Healthcare.
                  <br />
                  <span className="text-healthcare-green-600">Smarter</span> Appointments.
                  <br />
                  <span className="text-healthcare-blue-600">Better</span> Care.
                </h1>
                
                <p className="text-xl text-healthcare-blue-700/80 leading-relaxed max-w-lg">
                  Experience the future of healthcare with our AI-driven platform. Get instant doctor recommendations, 
                  smart symptom analysis, and seamless appointment booking.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/find-doctor">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-healthcare-blue-500 to-healthcare-teal-500 hover:from-healthcare-blue-600 hover:to-healthcare-teal-600 shadow-lg hover:shadow-xl transition-all duration-300 text-lg px-8 py-6"
                  >
                    <Stethoscope className="w-5 h-5 mr-2" />
                    Find a Doctor
                  </Button>
                </Link>
                
                <Link to="/ai-health-advice">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="glass-button shadow-lg hover:shadow-xl transition-all duration-300 text-lg px-8 py-6"
                  >
                    <Bot className="w-5 h-5 mr-2" />
                    Get AI Health Advice
                  </Button>
                </Link>
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-healthcare-blue-600">50K+</div>
                  <div className="text-sm text-healthcare-blue-700/70">Happy Patients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-healthcare-green-600">1,200+</div>
                  <div className="text-sm text-healthcare-blue-700/70">Expert Doctors</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-healthcare-teal-600">98%</div>
                  <div className="text-sm text-healthcare-blue-700/70">Accuracy Rate</div>
                </div>
              </div>
            </div>

            {/* AI Assistant Animation */}
            <div className="relative">
              <div className="relative z-10">
                <div className="glass-card p-8 space-y-6 floating-element">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-healthcare-blue-500 to-healthcare-teal-500 rounded-full flex items-center justify-center animate-pulse-glow">
                      <Bot className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-healthcare-blue-700">AI Health Assistant</div>
                      <div className="text-sm text-healthcare-blue-600/70">Online</div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-healthcare-blue-50 rounded-lg p-3">
                      <p className="text-sm text-healthcare-blue-700">
                        Hi! I'm analyzing your symptoms. Based on your description, I recommend seeing a cardiologist.
                      </p>
                    </div>
                    
                    <div className="bg-white rounded-lg p-3 shadow-soft">
                      <p className="text-sm text-healthcare-blue-700">
                        Thank you! Can you book an appointment with Dr. Sarah Chen?
                      </p>
                    </div>
                    
                    <div className="bg-healthcare-green-50 rounded-lg p-3">
                      <p className="text-sm text-healthcare-green-700">
                        ✅ Appointment booked for tomorrow at 2:00 PM with Dr. Chen. 
                        Pre-diagnosis report sent to doctor.
                      </p>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-healthcare-blue-500 to-healthcare-teal-500">
                    Try AI Assistant
                  </Button>
                </div>
              </div>
              
              {/* Background decorative elements */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-r from-healthcare-blue-200 to-healthcare-teal-200 rounded-full opacity-20 animate-float"></div>
              <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-gradient-to-r from-healthcare-green-200 to-healthcare-teal-200 rounded-full opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-healthcare-blue-600 to-healthcare-teal-600 bg-clip-text text-transparent">
              Revolutionary AI Features
            </h2>
            <p className="text-xl text-healthcare-blue-700/80 max-w-2xl mx-auto">
              Experience healthcare like never before with our cutting-edge AI technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "AI Symptom-to-Specialist Matcher",
                description: "Advanced NLP analyzes your symptoms and instantly matches you with the right specialist and urgency level.",
                gradient: "from-healthcare-blue-500 to-healthcare-teal-500"
              },
              {
                icon: Activity,
                title: "Personalized Pre-Diagnosis Report",
                description: "AI generates comprehensive reports with symptoms, history, and risk predictions before your appointment.",
                gradient: "from-healthcare-green-500 to-healthcare-teal-500"
              },
              {
                icon: Heart,
                title: "AI Health Companion Dashboard",
                description: "Get personalized tips, reminders, and follow-up care recommendations after booking.",
                gradient: "from-healthcare-teal-500 to-healthcare-blue-500"
              },
              {
                icon: Clock,
                title: "Predictive Appointment Scheduling",
                description: "Smart scheduling suggests optimal appointment slots based on patterns to minimize wait times.",
                gradient: "from-healthcare-blue-500 to-healthcare-green-500"
              },
              {
                icon: Star,
                title: "Gamified Wellness Insights",
                description: "Earn badges, track health progress, and achieve AI-driven micro-goals for better health.",
                gradient: "from-healthcare-green-500 to-healthcare-blue-500"
              },
              {
                icon: Shield,
                title: "Real-time Doctor Availability",
                description: "See live availability and book appointments instantly with one-click booking system.",
                gradient: "from-healthcare-teal-500 to-healthcare-green-500"
              }
            ].map((feature, index) => (
              <div key={index} className="glass-card p-6 hover:scale-105 transition-all duration-300 group">
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-healthcare-blue-700 mb-2">{feature.title}</h3>
                <p className="text-healthcare-blue-600/80 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-6 gradient-mesh">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-healthcare-blue-600 to-healthcare-teal-600 bg-clip-text text-transparent">
              How It Works
            </h2>
            <p className="text-xl text-healthcare-blue-700/80 max-w-2xl mx-auto">
              Three simple steps to better healthcare
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Describe Your Symptoms",
                description: "Tell our AI assistant about your symptoms using voice or text. Our advanced NLP understands medical terminology.",
                icon: Bot
              },
              {
                step: "02",
                title: "Get AI Recommendations",
                description: "Receive instant specialist recommendations, urgency assessments, and personalized pre-diagnosis reports.",
                icon: Brain
              },
              {
                step: "03",
                title: "Book & Get Care",
                description: "Book appointments with one click, access your health dashboard, and receive ongoing AI-powered care guidance.",
                icon: Heart
              }
            ].map((step, index) => (
              <div key={index} className="text-center space-y-6">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-r from-healthcare-blue-500 to-healthcare-teal-500 rounded-full flex items-center justify-center mx-auto">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-healthcare-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-healthcare-blue-700">{step.title}</h3>
                <p className="text-healthcare-blue-600/80 leading-relaxed">{step.description}</p>
                
                {index < 2 && (
                  <div className="hidden md:block absolute top-10 left-1/2 transform translate-x-full">
                    <ChevronRight className="w-6 h-6 text-healthcare-blue-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-healthcare-blue-600 to-healthcare-teal-600 bg-clip-text text-transparent">
              What Our Patients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Patient",
                content: "The AI assistant correctly identified I needed a cardiologist. The appointment was seamless and the pre-diagnosis report saved so much time!",
                rating: 5
              },
              {
                name: "Dr. Michael Chen",
                role: "Cardiologist",
                content: "The pre-diagnosis reports are incredibly detailed and accurate. It helps me prepare better for each patient consultation.",
                rating: 5
              },
              {
                name: "Emma Rodriguez",
                role: "Patient",
                content: "I love the wellness dashboard! The AI recommendations have helped me maintain better health habits consistently.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="glass-card p-6 space-y-4">
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-healthcare-green-500 text-healthcare-green-500" />
                  ))}
                </div>
                <p className="text-healthcare-blue-700/80 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-healthcare-blue-700">{testimonial.name}</div>
                  <div className="text-sm text-healthcare-blue-600/70">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 gradient-mesh">
        <div className="container mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-healthcare-blue-600 to-healthcare-teal-600 bg-clip-text text-transparent">
            Ready to Experience the Future of Healthcare?
          </h2>
          <p className="text-xl text-healthcare-blue-700/80 max-w-2xl mx-auto">
            Join thousands of patients who trust our AI-powered platform for smarter, faster, and better healthcare.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/find-doctor">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-healthcare-blue-500 to-healthcare-teal-500 hover:from-healthcare-blue-600 hover:to-healthcare-teal-600 shadow-lg hover:shadow-xl transition-all duration-300 text-lg px-8 py-6"
              >
                Start Your Health Journey
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg" 
              className="glass-button shadow-lg hover:shadow-xl transition-all duration-300 text-lg px-8 py-6"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 glass border-t border-white/20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-healthcare-blue-500 to-healthcare-teal-500 rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-healthcare-blue-600 to-healthcare-teal-600 bg-clip-text text-transparent">
                  AI HealthCare
                </span>
              </div>
              <p className="text-healthcare-blue-700/70">
                Revolutionizing healthcare with AI-powered solutions for better patient outcomes.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-healthcare-blue-700 mb-4">Platform</h4>
              <div className="space-y-2">
                <Link to="/find-doctor" className="block text-healthcare-blue-600/70 hover:text-healthcare-blue-600">Find Doctors</Link>
                <Link to="/ai-health-advice" className="block text-healthcare-blue-600/70 hover:text-healthcare-blue-600">AI Health Advice</Link>
                <Link to="/symptom-checker" className="block text-healthcare-blue-600/70 hover:text-healthcare-blue-600">Symptom Checker</Link>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-healthcare-blue-700 mb-4">Company</h4>
              <div className="space-y-2">
                <a href="#" className="block text-healthcare-blue-600/70 hover:text-healthcare-blue-600">About Us</a>
                <a href="#" className="block text-healthcare-blue-600/70 hover:text-healthcare-blue-600">Careers</a>
                <a href="#" className="block text-healthcare-blue-600/70 hover:text-healthcare-blue-600">Press</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-healthcare-blue-700 mb-4">Support</h4>
              <div className="space-y-2">
                <a href="#" className="block text-healthcare-blue-600/70 hover:text-healthcare-blue-600">Help Center</a>
                <a href="#" className="block text-healthcare-blue-600/70 hover:text-healthcare-blue-600">Contact Us</a>
                <a href="#" className="block text-healthcare-blue-600/70 hover:text-healthcare-blue-600">Privacy Policy</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-healthcare-blue-600/70">
              © 2024 AI HealthCare. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
