
import React, { useState } from 'react';
import { FileText, Brain, Map, MessageSquare, Sparkles } from 'lucide-react';

const AIGenerator: React.FC = () => {
  const [selectedTool, setSelectedTool] = useState<string | null>(null);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const tools = [
    {
      id: 'summarize',
      title: 'SUMMARIZE',
      icon: FileText,
      description: 'Extract key concepts and main points',
      color: 'bg-blue-500/20 hover:bg-blue-500/30 border-blue-500/30'
    },
    {
      id: 'quiz',
      title: 'QUIZ ME',
      icon: Brain,
      description: 'Generate interactive quizzes',
      color: 'bg-green-500/20 hover:bg-green-500/30 border-green-500/30'
    },
    {
      id: 'mindmap',
      title: 'MIND MAP',
      icon: Map,
      description: 'Create visual knowledge maps',
      color: 'bg-purple-500/20 hover:bg-purple-500/30 border-purple-500/30'
    }
  ];

  const courses = [
    'Python', 'Java', 'Base de données', 'Programmation Web',
    'Programmation Mobile Android', 'Framework PHP Laravel',
    'Programmation JS', 'Programmation mobile JS'
  ];

  const handleGenerate = () => {
    if (!selectedTool || !selectedCourse) return;
    
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Sparkles className="w-8 h-8 text-purple-400" />
          <h1 className="text-4xl font-bold gradient-text">AI Content Generator Hub</h1>
        </div>
        <p className="text-xl text-gray-300">Transform your learning with AI-powered tools</p>
      </div>

      {/* AI Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {tools.map((tool) => {
          const Icon = tool.icon;
          return (
            <button
              key={tool.id}
              onClick={() => setSelectedTool(tool.id)}
              className={`${tool.color} ${selectedTool === tool.id ? 'ring-2 ring-purple-500' : ''} 
                border rounded-2xl p-8 text-left transition-all duration-300 hover-glow group`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{tool.title}</h3>
                  <p className="text-gray-300">{tool.description}</p>
                </div>
              </div>
              
              {selectedTool === tool.id && (
                <div className="mt-4 p-4 bg-white/5 rounded-lg border border-white/10">
                  <p className="text-sm text-purple-300">✓ Selected</p>
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Chat Assistant Section */}
      <div className="glass-card rounded-2xl p-8 mb-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-orange-500/20 rounded-2xl flex items-center justify-center">
            <MessageSquare className="w-8 h-8 text-orange-400" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">AI Learning Assistant</h2>
            <p className="text-gray-400">Ask questions and get personalized help</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-gray-700/30 rounded-lg p-4">
            <p className="text-purple-300 font-medium">AI Assistant</p>
            <p className="text-gray-300 mt-1">
              Hello! I'm here to help you with your learning journey. You can ask me questions about any course content, 
              programming concepts, or request explanations on specific topics.
            </p>
          </div>
          
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Ask me anything about your courses..."
              className="flex-1 bg-gray-700/50 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition-colors">
              Ask
            </button>
          </div>
        </div>
      </div>

      {/* Generation Interface */}
      {selectedTool && (
        <div className="glass-card rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">
            Generate {tools.find(t => t.id === selectedTool)?.title}
          </h2>

          <div className="space-y-6">
            {/* Course Selection */}
            <div>
              <label className="block text-white font-medium mb-3">Select Course</label>
              <select
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="">Choose a course...</option>
                {courses.map((course) => (
                  <option key={course} value={course}>{course}</option>
                ))}
              </select>
            </div>

            {/* Generation Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-white font-medium mb-3">Difficulty Level</label>
                <select className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500">
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
              </div>
              
              <div>
                <label className="block text-white font-medium mb-3">Content Length</label>
                <select className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500">
                  <option>Short</option>
                  <option>Medium</option>
                  <option>Detailed</option>
                </select>
              </div>
            </div>

            {/* Generate Button */}
            <button
              onClick={handleGenerate}
              disabled={!selectedCourse || isGenerating}
              className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 
                disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold py-4 px-6 rounded-lg 
                transition-all duration-300 disabled:cursor-not-allowed"
            >
              {isGenerating ? (
                <div className="flex items-center justify-center gap-3">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Generating...
                </div>
              ) : (
                `Generate ${tools.find(t => t.id === selectedTool)?.title}`
              )}
            </button>
          </div>

          {/* Generated Content Placeholder */}
          {isGenerating && (
            <div className="mt-8 p-6 bg-gray-700/30 rounded-lg border border-gray-600">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-6 border-2 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
                <span className="text-purple-300">AI is processing your request...</span>
              </div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-600 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-600 rounded animate-pulse w-3/4"></div>
                <div className="h-4 bg-gray-600 rounded animate-pulse w-1/2"></div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AIGenerator;
