import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, ArrowLeft, Bot, MessageCircle } from "lucide-react";

export default function SymptomChecker() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-healthcare-blue-50 via-white to-healthcare-green-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-white/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-healthcare-blue-500 to-healthcare-teal-500 rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-healthcare-blue-600 to-healthcare-teal-600 bg-clip-text text-transparent">
                AI HealthCare
              </span>
            </Link>
            
            <Link to="/">
              <Button variant="outline" className="glass-button">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <div className="glass-card p-12 space-y-6">
            <div className="w-20 h-20 bg-gradient-to-r from-healthcare-blue-500 to-healthcare-teal-500 rounded-full flex items-center justify-center mx-auto animate-pulse-glow">
              <Bot className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-4xl font-bold bg-gradient-to-r from-healthcare-blue-600 to-healthcare-teal-600 bg-clip-text text-transparent">
              AI Symptom Checker
            </h1>
            
            <p className="text-xl text-healthcare-blue-700/80 max-w-2xl mx-auto">
              This amazing AI-powered symptom checker is coming soon! It will provide instant analysis 
              and specialist recommendations based on your symptoms.
            </p>
            
            <div className="bg-healthcare-blue-50 rounded-lg p-6 space-y-4">
              <MessageCircle className="w-12 h-12 text-healthcare-blue-500 mx-auto" />
              <h3 className="text-lg font-semibold text-healthcare-blue-700">
                Features Coming Soon:
              </h3>
              <ul className="text-left space-y-2 text-healthcare-blue-600">
                <li>• AI-powered symptom analysis</li>
                <li>• Instant specialist recommendations</li>
                <li>• Urgency level assessment</li>
                <li>• Pre-diagnosis report generation</li>
                <li>• Voice and text input support</li>
              </ul>
            </div>
            
            <p className="text-healthcare-blue-600/70">
              Continue prompting to have this page implemented with full functionality!
            </p>
            
            <Link to="/">
              <Button className="bg-gradient-to-r from-healthcare-blue-500 to-healthcare-teal-500 hover:from-healthcare-blue-600 hover:to-healthcare-teal-600">
                Return to Homepage
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
