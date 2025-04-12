import React from 'react';
import { useLanguage } from '../context/LanguageContext';

function Faculty() {
  const { translate } = useLanguage();
  const facultyMembers = translate('faculty.members');
  const principal = facultyMembers.find(member => member.role === translate('faculty.roles.principal'));
  const secretary = facultyMembers.find(member => member.role === translate('faculty.roles.secretary'));
  const otherFaculty = facultyMembers.filter(member => 
    member.role !== translate('faculty.roles.principal') && 
    member.role !== translate('faculty.roles.secretary')
  );

  return (
    <div className='container mx-auto px-4 py-16'>
      <h1 className="text-4xl font-bold text-center mb-16 text-indigo-800">{translate('faculty.title')}</h1>
      <p className="text-xl text-center text-gray-600 mb-12">{translate('faculty.description')}</p>

     
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {/* Principal Card */}
        {principal && (
          <div className="p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-105">
            <div className="flex flex-col items-center">
              <img src={principal.image} alt={principal.name} className="w-48 h-48 rounded-full object-cover mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800">{principal.name}</h3>
              <p className="text-blue-600 mb-4">{principal.role}</p>
              <p className="text-gray-600 text-center italic">"{principal.quote}"</p>
            </div>
          </div>
        )}

        {/* Secretary Card */}
        {secretary && (
          <div className="p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-105">
            <div className="flex flex-col items-center">
              <img src={secretary.image} alt={secretary.name} className="w-48 h-48 rounded-full object-cover mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800">{secretary.name}</h3>
              <p className="text-blue-600 mb-4">{secretary.role}</p>
              <p className="text-gray-600 text-center italic">"{secretary.quote}"</p>
            </div>
          </div>
        )}
      </div>

      {/* Other Faculty Members */}
      <div className="grid md:grid-cols-3 gap-8">
        {otherFaculty.map((member, index) => (
          <div key={index} className="p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-105">
            <div className="flex flex-col items-center">
              <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full object-cover mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-blue-600 mb-4">{member.role}</p>
              <p className="text-gray-600 text-center italic text-sm">"{member.quote}"</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faculty;
