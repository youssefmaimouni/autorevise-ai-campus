
import React from 'react';
import { BarChart3, TrendingUp, Clock, Award, BookOpen, Target } from 'lucide-react';
import { coursesData } from '../data/coursesData';

const Dashboard: React.FC = () => {
  const totalCourses = coursesData.length;
  const completedSessions = coursesData.reduce((acc, course) => 
    acc + course.sessions.filter(session => session.completed).length, 0
  );
  const totalSessions = coursesData.reduce((acc, course) => acc + course.sessions.length, 0);
  const avgProgress = Math.round(coursesData.reduce((acc, course) => acc + course.progress, 0) / totalCourses);

  const stats = [
    {
      title: 'Total Courses',
      value: totalCourses,
      icon: BookOpen,
      color: 'bg-blue-500/20 text-blue-400',
      change: '+2 this month'
    },
    {
      title: 'Completed',
      value: completedSessions,
      icon: Target,
      color: 'bg-green-500/20 text-green-400',
      change: '+5 this week'
    },
    {
      title: 'In Progress',
      value: totalSessions - completedSessions,
      icon: Clock,
      color: 'bg-orange-500/20 text-orange-400',
      change: `${totalSessions} total sessions`
    },
    {
      title: 'Avg Progress',
      value: `${avgProgress}%`,
      icon: TrendingUp,
      color: 'bg-purple-500/20 text-purple-400',
      change: '+15% this month'
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold gradient-text mb-2">Learning Dashboard</h1>
        <p className="text-xl text-gray-400">Track your progress and achievements</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="glass-card rounded-2xl p-6 hover-glow transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.change}</div>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-300">{stat.title}</h3>
            </div>
          );
        })}
      </div>

      {/* Course Progress */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Course Progress Chart */}
        <div className="glass-card rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Course Progress</h2>
          <div className="space-y-4">
            {coursesData.slice(0, 5).map((course) => (
              <div key={course.id} className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-medium">{course.title}</span>
                    <span className="text-purple-400 text-sm">{course.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="glass-card rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-gray-700/30 rounded-lg">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-white font-medium">Completed Python Session 1</p>
                <p className="text-gray-400 text-sm">2 hours ago</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 bg-gray-700/30 rounded-lg">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-white font-medium">Generated Quiz for Java</p>
                <p className="text-gray-400 text-sm">1 day ago</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 bg-gray-700/30 rounded-lg">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-white font-medium">Created Mind Map for Databases</p>
                <p className="text-gray-400 text-sm">2 days ago</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 bg-gray-700/30 rounded-lg">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-white font-medium">Started Web Programming Course</p>
                <p className="text-gray-400 text-sm">3 days ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="glass-card rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-white mb-6">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-4 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
            <Award className="w-8 h-8 text-yellow-400" />
            <div>
              <h3 className="text-white font-semibold">First Course</h3>
              <p className="text-gray-400 text-sm">Started your learning journey</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
            <Award className="w-8 h-8 text-green-400" />
            <div>
              <h3 className="text-white font-semibold">Quick Learner</h3>
              <p className="text-gray-400 text-sm">Completed 5 sessions</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg">
            <Award className="w-8 h-8 text-purple-400" />
            <div>
              <h3 className="text-white font-semibold">AI Explorer</h3>
              <p className="text-gray-400 text-sm">Used all AI tools</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
