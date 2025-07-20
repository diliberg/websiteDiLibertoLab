import React from 'react';
import { GraduationCap, Users, BookOpen } from 'lucide-react';

type Course = {
  code: string;
  title: string;
  role: string;
  program: string;
  icon: React.ComponentType<any>;
};

const courses: Course[] = [
  {
    code: "CSP7000",
    title: "Introduction to Machine Learning",
    role: "Coordinator",
    program: ["MSc in Smart and Sustainable Cities", "E3 MSc in Climate Adaptation Engineering"],
    icon: GraduationCap
  },
  {
    code: "CSU44061/CS7CS4",
    title: "Machine Learning",
    role: "Co-teaching",
    program: "MCS and MSc in Computer Science - Data Science",
    icon: Users
  },
  {
    code: "CSP7001",
    title: "Introduction to Machine Learning",
    role: "Coordinator",
    program: ["MSc in Applied Social Data Science", "MSc Environmental Science and Engineering", "MSc in Biomedical Engineering (Neural Eng stream)"],
    icon: BookOpen
  }
];

export function Teaching() {
  return (
    <div className="max-w-4xl">
      <h2 className="text-3xl font-semibold mb-8">Teaching Activities</h2>
      
      <div className="grid gap-6">
        {courses.map((course, index) => {
          const Icon = course.icon;
          return (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-blue-50 rounded-full">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 mt-1">
                    <span className="font-medium">{course.code}</span> • {course.role}
                  </p>
                  <p className="text-gray-500 text-sm mt-1">
                    {course.program}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
