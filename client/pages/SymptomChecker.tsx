import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  ArrowLeft, 
  Bot, 
  Send, 
  Mic, 
  MicOff,
  Brain,
  AlertTriangle,
  CheckCircle,
  Clock,
  Stethoscope,
  User,
  Sparkles,
  FileText,
  Calendar,
  MapPin
} from "lucide-react";

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

interface SymptomAnalysis {
  symptoms: string[];
  possibleConditions: string[];
  recommendedSpecialists: Array<{
    name: string;
    specialization: string;
    urgency: 'low' | 'medium' | 'high';
    reasoning: string;
  }>;
  urgencyLevel: 'low' | 'medium' | 'high';
  recommendations: string[];
  preDiagnosisReport?: string;
}

export default function SymptomChecker() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'ai',
      content: "Hello! I'm your AI Health Assistant. Please describe your symptoms in detail, and I'll help analyze them and recommend the right specialist for you. Feel free to mention when the symptoms started, their severity, and any relevant medical history.",
      timestamp: new Date()
    }
  ]);
  
  const [inputValue, setInputValue] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<SymptomAnalysis | null>(null);
  const [showReport, setShowReport] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Simulated AI symptom analysis
  const analyzeSymptoms = (symptomText: string): SymptomAnalysis => {
    const lowerText = symptomText.toLowerCase();
    
    // Simple keyword matching for demo purposes
    const keywordAnalysis = {
      chest: {
        conditions: ['Angina', 'Heart Arrhythmia', 'Anxiety', 'Muscle Strain'],
        specialists: [
          { name: 'Dr. Sarah Chen', specialization: 'Cardiologist', urgency: 'high' as const, reasoning: 'Chest symptoms require immediate cardiac evaluation' },
          { name: 'Dr. Michael Rodriguez', specialization: 'Emergency Medicine', urgency: 'high' as const, reasoning: 'Chest pain needs urgent assessment' }
        ],
        urgency: 'high' as const
      },
      headache: {
        conditions: ['Tension Headache', 'Migraine', 'Sinusitis', 'Cluster Headache'],
        specialists: [
          { name: 'Dr. Emily Johnson', specialization: 'Neurologist', urgency: 'medium' as const, reasoning: 'Persistent headaches should be evaluated by a neurologist' },
          { name: 'Dr. James Park', specialization: 'Family Medicine', urgency: 'low' as const, reasoning: 'Primary care can address common headache patterns' }
        ],
        urgency: 'medium' as const
      },
      fever: {
        conditions: ['Viral Infection', 'Bacterial Infection', 'Flu', 'COVID-19'],
        specialists: [
          { name: 'Dr. Lisa Thompson', specialization: 'Internal Medicine', urgency: 'medium' as const, reasoning: 'Fever requires medical evaluation for underlying cause' },
          { name: 'Dr. Robert Kim', specialization: 'Family Medicine', urgency: 'medium' as const, reasoning: 'Primary care can diagnose and treat most febrile illnesses' }
        ],
        urgency: 'medium' as const
      },
      stomach: {
        conditions: ['Gastritis', 'Food Poisoning', 'IBS', 'Appendicitis'],
        specialists: [
          { name: 'Dr. Amanda Wilson', specialization: 'Gastroenterologist', urgency: 'medium' as const, reasoning: 'Persistent stomach issues need GI specialist evaluation' },
          { name: 'Dr. Kevin Lee', specialization: 'Family Medicine', urgency: 'low' as const, reasoning: 'Initial assessment can be done by primary care' }
        ],
        urgency: 'medium' as const
      },
      cough: {
        conditions: ['Upper Respiratory Infection', 'Bronchitis', 'Pneumonia', 'Asthma'],
        specialists: [
          { name: 'Dr. Maria Garcia', specialization: 'Pulmonologist', urgency: 'medium' as const, reasoning: 'Persistent cough may indicate respiratory condition' },
          { name: 'Dr. David Brown', specialization: 'Family Medicine', urgency: 'low' as const, reasoning: 'Most coughs can be treated by primary care' }
        ],
        urgency: 'low' as const
      }
    };

    // Find matching keywords
    let matchedAnalysis = keywordAnalysis.cough; // default
    for (const [keyword, data] of Object.entries(keywordAnalysis)) {
      if (lowerText.includes(keyword)) {
        matchedAnalysis = data;
        break;
      }
    }

    const extractedSymptoms = Object.keys(keywordAnalysis).filter(keyword => 
      lowerText.includes(keyword)
    );

    return {
      symptoms: extractedSymptoms.length > 0 ? extractedSymptoms : ['general discomfort'],
      possibleConditions: matchedAnalysis.conditions,
      recommendedSpecialists: matchedAnalysis.specialists,
      urgencyLevel: matchedAnalysis.urgency,
      recommendations: [
        'Monitor symptoms closely',
        'Stay hydrated and get adequate rest',
        'Avoid strenuous activities',
        'Book an appointment with recommended specialist',
        'Seek immediate care if symptoms worsen'
      ],
      preDiagnosisReport: `Based on the described symptoms: "${symptomText}", the AI analysis suggests ${matchedAnalysis.conditions[0]} as the most likely condition. Recommended specialist: ${matchedAnalysis.specialists[0].specialization}. This preliminary assessment should be confirmed by a medical professional.`
    };
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsAnalyzing(true);

    // Simulate AI processing time
    setTimeout(() => {
      const analysisResult = analyzeSymptoms(inputValue);
      setAnalysis(analysisResult);

      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: `I've analyzed your symptoms and here's what I found:\n\n**Possible Conditions:** ${analysisResult.possibleConditions.join(', ')}\n\n**Recommended Specialist:** ${analysisResult.recommendedSpecialists[0].specialization}\n\n**Urgency Level:** ${analysisResult.urgencyLevel.toUpperCase()}\n\n**Reasoning:** ${analysisResult.recommendedSpecialists[0].reasoning}\n\nWould you like me to help you book an appointment or generate a detailed pre-diagnosis report?`,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiResponse]);
      setIsAnalyzing(false);
    }, 2000);
  };

  const handleVoiceInput = () => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
      const recognition = new SpeechRecognition();
      
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';

      if (!isListening) {
        setIsListening(true);
        recognition.start();

        recognition.onresult = (event: any) => {
          const transcript = event.results[0][0].transcript;
          setInputValue(transcript);
          setIsListening(false);
        };

        recognition.onerror = () => {
          setIsListening(false);
        };

        recognition.onend = () => {
          setIsListening(false);
        };
      }
    } else {
      alert('Speech recognition is not supported in your browser.');
    }
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'high': return 'text-red-600 bg-red-50 border-red-200';
      case 'medium': return 'text-orange-600 bg-orange-50 border-orange-200';
      case 'low': return 'text-green-600 bg-green-50 border-green-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getUrgencyIcon = (urgency: string) => {
    switch (urgency) {
      case 'high': return AlertTriangle;
      case 'medium': return Clock;
      case 'low': return CheckCircle;
      default: return Clock;
    }
  };

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
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-healthcare-blue-600">
                <Brain className="w-4 h-4" />
                <span>AI Symptom Detector</span>
              </div>
              <Link to="/">
                <Button variant="outline" className="glass-button">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-8 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Chat Interface */}
            <div className="lg:col-span-2">
              <div className="glass-card p-6 h-[70vh] flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-healthcare-blue-500 to-healthcare-teal-500 rounded-full flex items-center justify-center animate-pulse-glow">
                      <Bot className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-healthcare-blue-700">AI Health Assistant</h2>
                      <p className="text-sm text-healthcare-blue-600/70">Powered by advanced medical AI</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-healthcare-blue-600">Online</span>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-[80%] ${message.type === 'user' ? 'order-2' : 'order-1'}`}>
                        <div className={`flex items-start space-x-2 ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            message.type === 'user' 
                              ? 'bg-healthcare-blue-500' 
                              : 'bg-gradient-to-r from-healthcare-teal-500 to-healthcare-green-500'
                          }`}>
                            {message.type === 'user' ? (
                              <User className="w-4 h-4 text-white" />
                            ) : (
                              <Bot className="w-4 h-4 text-white" />
                            )}
                          </div>
                          <div className={`rounded-2xl px-4 py-3 ${
                            message.type === 'user'
                              ? 'bg-healthcare-blue-500 text-white'
                              : 'bg-white shadow-soft border border-healthcare-blue-100'
                          }`}>
                            <p className={`text-sm whitespace-pre-line ${
                              message.type === 'user' ? 'text-white' : 'text-healthcare-blue-700'
                            }`}>
                              {message.content}
                            </p>
                            <p className={`text-xs mt-1 ${
                              message.type === 'user' ? 'text-blue-100' : 'text-healthcare-blue-500'
                            }`}>
                              {message.timestamp.toLocaleTimeString()}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {isAnalyzing && (
                    <div className="flex justify-start">
                      <div className="flex items-start space-x-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-healthcare-teal-500 to-healthcare-green-500 flex items-center justify-center">
                          <Bot className="w-4 h-4 text-white" />
                        </div>
                        <div className="bg-white shadow-soft border border-healthcare-blue-100 rounded-2xl px-4 py-3">
                          <div className="flex items-center space-x-2">
                            <Sparkles className="w-4 h-4 text-healthcare-blue-500 animate-spin" />
                            <p className="text-sm text-healthcare-blue-700">Analyzing your symptoms...</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="flex items-center space-x-2">
                  <div className="flex-1 relative">
                    <input
                      ref={inputRef}
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      placeholder="Describe your symptoms in detail..."
                      className="w-full px-4 py-3 rounded-xl border border-healthcare-blue-200 focus:outline-none focus:ring-2 focus:ring-healthcare-blue-500 focus:border-transparent"
                      disabled={isAnalyzing}
                    />
                  </div>
                  <Button
                    onClick={handleVoiceInput}
                    variant="outline"
                    size="icon"
                    className={`rounded-xl ${isListening ? 'bg-red-50 border-red-200 text-red-600' : 'glass-button'}`}
                    disabled={isAnalyzing}
                  >
                    {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                  </Button>
                  <Button
                    onClick={handleSendMessage}
                    className="rounded-xl bg-gradient-to-r from-healthcare-blue-500 to-healthcare-teal-500 hover:from-healthcare-blue-600 hover:to-healthcare-teal-600"
                    disabled={isAnalyzing || !inputValue.trim()}
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Analysis Results */}
            <div className="space-y-6">
              {analysis && (
                <>
                  {/* Urgency Level */}
                  <div className="glass-card p-6">
                    <h3 className="text-lg font-semibold text-healthcare-blue-700 mb-4">Urgency Assessment</h3>
                    <div className={`flex items-center space-x-3 p-3 rounded-lg border ${getUrgencyColor(analysis.urgencyLevel)}`}>
                      {(() => {
                        const UrgencyIcon = getUrgencyIcon(analysis.urgencyLevel);
                        return <UrgencyIcon className="w-5 h-5" />;
                      })()}
                      <div>
                        <p className="font-semibold capitalize">{analysis.urgencyLevel} Priority</p>
                        <p className="text-sm opacity-80">
                          {analysis.urgencyLevel === 'high' && 'Seek medical attention soon'}
                          {analysis.urgencyLevel === 'medium' && 'Schedule appointment within days'}
                          {analysis.urgencyLevel === 'low' && 'Can wait for routine appointment'}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Recommended Specialists */}
                  <div className="glass-card p-6">
                    <h3 className="text-lg font-semibold text-healthcare-blue-700 mb-4">Recommended Specialists</h3>
                    <div className="space-y-3">
                      {analysis.recommendedSpecialists.map((specialist, index) => (
                        <div key={index} className="bg-healthcare-blue-50 rounded-lg p-4">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h4 className="font-semibold text-healthcare-blue-700">{specialist.name}</h4>
                              <p className="text-sm text-healthcare-blue-600">{specialist.specialization}</p>
                              <p className="text-xs text-healthcare-blue-500 mt-1">{specialist.reasoning}</p>
                            </div>
                            <Link to="/find-doctor">
                              <Button size="sm" className="bg-gradient-to-r from-healthcare-blue-500 to-healthcare-teal-500">
                                <Calendar className="w-4 h-4 mr-1" />
                                Book
                              </Button>
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Possible Conditions */}
                  <div className="glass-card p-6">
                    <h3 className="text-lg font-semibold text-healthcare-blue-700 mb-4">Possible Conditions</h3>
                    <div className="space-y-2">
                      {analysis.possibleConditions.map((condition, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-healthcare-blue-500 rounded-full"></div>
                          <span className="text-sm text-healthcare-blue-600">{condition}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pre-Diagnosis Report */}
                  <div className="glass-card p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-healthcare-blue-700">Pre-Diagnosis Report</h3>
                      <Button
                        onClick={() => setShowReport(!showReport)}
                        variant="outline"
                        size="sm"
                        className="glass-button"
                      >
                        <FileText className="w-4 h-4 mr-2" />
                        {showReport ? 'Hide' : 'View'}
                      </Button>
                    </div>
                    
                    {showReport && analysis.preDiagnosisReport && (
                      <div className="bg-healthcare-blue-50 rounded-lg p-4">
                        <p className="text-sm text-healthcare-blue-700 leading-relaxed">
                          {analysis.preDiagnosisReport}
                        </p>
                        <div className="mt-4 pt-4 border-t border-healthcare-blue-200">
                          <p className="text-xs text-healthcare-blue-500">
                            This report will be automatically shared with your chosen healthcare provider to ensure efficient consultation.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Quick Actions */}
                  <div className="glass-card p-6">
                    <h3 className="text-lg font-semibold text-healthcare-blue-700 mb-4">Quick Actions</h3>
                    <div className="space-y-3">
                      <Link to="/find-doctor" className="block">
                        <Button className="w-full bg-gradient-to-r from-healthcare-blue-500 to-healthcare-teal-500 hover:from-healthcare-blue-600 hover:to-healthcare-teal-600">
                          <Stethoscope className="w-4 h-4 mr-2" />
                          Find Specialists Near Me
                        </Button>
                      </Link>
                      <Button variant="outline" className="w-full glass-button">
                        <MapPin className="w-4 h-4 mr-2" />
                        Locate Emergency Care
                      </Button>
                      <Link to="/ai-health-advice" className="block">
                        <Button variant="outline" className="w-full glass-button">
                          <Brain className="w-4 h-4 mr-2" />
                          Get More Health Advice
                        </Button>
                      </Link>
                    </div>
                  </div>
                </>
              )}

              {!analysis && (
                <div className="glass-card p-6 text-center">
                  <Bot className="w-12 h-12 text-healthcare-blue-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-healthcare-blue-700 mb-2">AI Analysis Ready</h3>
                  <p className="text-sm text-healthcare-blue-600/70">
                    Describe your symptoms in the chat to get instant AI-powered analysis and specialist recommendations.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
