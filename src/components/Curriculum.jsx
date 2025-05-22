import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Curriculum = () => {
  const { translate } = useLanguage();
  const grades = translate('curriculum.grades');
  const methodologies = translate('curriculum.methodologies');

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h1 className="text-5xl font-bold text-center mb-16 text-blue-900">
          {translate('curriculum.title')}
        </h1>

        {/* Grades Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {grades.map((grade, gradeIdx) => (
            <div
              key={gradeIdx}
              className="bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              <header className={`${grade.color} py-4 px-6`}>
                <h3 className="text-2xl font-bold text-white">{grade.title}</h3>
              </header>

              <div className="p-6">
                {grade.subjects ? (
                  <ul className="space-y-2">
                    {grade.subjects.map((subject, subjectIdx) => (
                      <li key={subjectIdx} className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        {subject}
                      </li>
                    ))}
                  </ul>
                ) : (
                  grade.streams?.map((stream, streamIdx) => (
                    <section key={streamIdx} className="mb-4">
                      <h4 className="text-xl font-semibold mb-2 text-blue-700">{stream.name}</h4>
                      <ul className="space-y-2">
                        {stream.subjects.map((subject, subIdx) => (
                          <li key={subIdx} className="flex items-center">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                            {subject}
                          </li>
                        ))}
                      </ul>
                    </section>
                  ))
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Methodologies Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
          {methodologies.map((method, methodIdx) => (
            <article
              key={methodIdx}
              className="bg-white rounded-xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              <header className="flex items-center mb-4">
                <span className="text-4xl mr-4">{method.icon}</span>
                <h3 className="text-2xl font-bold text-blue-800">{method.title}</h3>
              </header>
              <p className="text-gray-600 leading-relaxed">{method.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
