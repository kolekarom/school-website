import React from 'react';
import { Lightbulb, Group, ThumbUp } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { translate } = useLanguage();

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold mb-6 text-blue-800">{translate('hero.title')}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {translate('hero.description')}
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between mb-20">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-3xl font-semibold mb-6 text-blue-700">{translate('about.title')}</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {translate('about.mission')}
            </p>
          </div>
          <div className="md:w-1/2 md:pl-10">
            <img 
              src="src/assets/logo.jpeg" 
              alt="Springdale Public School Campus"
              className="w-full h-auto object-cover rounded-lg shadow-2xl"
            />
          </div>
        </div>
        
        <div className="bg-white p-10 rounded-xl shadow-lg">
          <h2 className="text-3xl font-semibold mb-6 text-blue-700 text-center">{translate('about.legacy.title')}</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {translate('about.legacy.description')}
          </p>
        </div>

        {/* <div className="mt-20 text-center">
          <Link to="/events" className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300">
            Explore Our Programs
          </Link>
        </div> */}

        <div className="bg-gradient-to-b from-blue-50 to-white py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold mb-6 text-blue-900">{translate('about.mission_motto.title')}</h1>

                </div>
        
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
                  {translate('about.mission_motto.items').map((item, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                    >
                      <div className="flex items-center justify-center mb-6">
                        <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                          {React.cloneElement(icons[item.title], { className: "text-blue-600 text-3xl" })}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-blue-800 text-center">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
        

              </div>
            </div>
      </div>
    </div>
  );
}

const icons = {
  'Innovation': <Lightbulb />,
  'Excellence': <ThumbUp />,
  'Community': <Group />,
  'नवकल्पना': <Lightbulb />,
  'उत्कृष्टता': <ThumbUp />,
  'समुदाय': <Group />
};

export default About;