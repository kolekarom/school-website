import React from 'react';

const Students = () => {
  return (
    <div className="container mx-auto px-4 py-16 bg-gray-100">
      <h1 className="text-5xl font-bold text-center mb-16 text-indigo-800">Student Life at Apex</h1>

      {/* Extracurricular Activities Section */}
      <section className="mb-20 bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-semibold mb-6 text-center text-indigo-700">Extracurricular Activities</h2>
        <p className="text-xl text-gray-600 text-center mb-8">
          Our students engage in a variety of extracurricular activities including:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Music', 'Dance', 'Drama', 'Art', 'Sports', 'Robotics', 'Debate Club', 'Science Club'].map((activity, index) => (
            <div key={index} className="bg-indigo-100 rounded-lg p-4 text-center">
              <span className="text-lg font-medium text-indigo-700">{activity}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold mb-6 text-center text-indigo-700">Achievements</h2>
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <ul className="space-y-4">
            {[
              { name: 'John Smith', achievement: 'National Level Math Olympiad Winner' },
              { name: 'Sarah Lee', achievement: 'Gold Medalist in State Swimming Championship' },
              { name: 'Tech Innovators Club', achievement: 'Winners of Inter-School Robotics Competition' }
            ].map((item, index) => (
              <li key={index} className="flex items-center">
                <span className="w-3 h-3 bg-yellow-400 rounded-full mr-3"></span>
                <span className="font-semibold text-gray-800">{item.name}:</span>
                <span className="ml-2 text-gray-600">{item.achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Student Feedback Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold mb-6 text-center text-indigo-700">Student Feedback</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: 'Emma Johnson', grade: 'Grade 12', feedback: 'The school provides excellent opportunities for both academics and extracurricular activities. I feel well-prepared for the future.' },
            { name: 'Arjun Patel', grade: 'Grade 11', feedback: 'Teachers are very supportive, and the learning environment is amazing. The student council does a great job organizing events!' },
            { name: 'Sophia Lee', grade: 'Grade 10', feedback: 'I love the interactive learning methods used in our classes. The new facilities and resources are a great help in my studies.' }
          ].map((student, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <p className="text-lg font-semibold text-indigo-700 mb-1">{student.name}</p>
              <p className="text-md text-gray-600 mb-2">{student.grade}</p>
              <p className="text-gray-600">"{student.feedback}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* Student Life Image Section */}
      <section className="text-center">
  <h2 className="text-3xl font-semibold mb-6 text-indigo-700">A Glimpse of Student Life</h2>
  <div className="overflow-hidden rounded-lg shadow-lg">
    <img 
      src="src/assets/students.jpeg" 
      alt="Students enjoying campus life" 
      className="mx-auto rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:brightness-110"
    />
  </div>
</section>

    </div>
  );
}

export default Students;
