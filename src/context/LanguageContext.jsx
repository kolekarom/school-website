import React, { createContext, useState, useContext, useEffect } from 'react';

const LanguageContext = createContext();

const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('language');
    return savedLanguage || 'en';
  });
  const [translations, setTranslations] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Log the URL we're trying to fetch
        const url = `${window.location.origin}/locales/${language}.json`;
        console.log('Fetching translations from:', url);
        
        const response = await fetch(url);
        if (!response.ok) {
          console.error('Response not OK:', response.status, response.statusText);
          throw new Error(`Failed to load translations: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();
        console.log('Translations loaded successfully:', Object.keys(data));
        setTranslations(data);
        localStorage.setItem('language', language);
      } catch (error) {
        console.error('Error loading translations:', error);
        console.error('Stack trace:', error.stack);
        setError(error.message);
        // Fallback to English if translation fails
        if (language !== 'en') {
          console.log('Falling back to English');
          setLanguage('en');
        }
      } finally {
        setLoading(false);
      }
    };

    loadTranslations();
  }, [language]);

  const translate = (key) => {
    if (loading) {
      return key; // Return the key while translations are loading
    }
    
    if (!translations || Object.keys(translations).length === 0) {
      console.warn('No translations available for key:', key);
      return key;
    }
    
    const keys = key.split('.');
    let value = translations;
    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) {
        console.warn(`Translation missing for key: ${key}, failed at: ${k}`);
        break;
      }
    }
    return value || key;
  };

  if (error && !loading) {
    console.error('Rendering error state:', error);
    return (
      <div className="p-4 bg-red-100 text-red-700 rounded">
        <h3 className="font-bold">Error loading translations</h3>
        <p>{error}</p>
        <button 
          className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={() => window.location.reload()}
        >
          Retry
        </button>
      </div>
    );
  }

  const contextValue = {
    language,
    setLanguage,
    translate,
    loading,
    error
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageProvider, useLanguage };
