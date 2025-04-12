import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageSelector = () => {
  const { language, setLanguage, translate } = useLanguage();

  return (
    <div className="language-selector">
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="form-select form-select-sm"
        aria-label={translate('language.select')}
      >
        <option value="en">{translate('language.english')}</option>
        <option value="mr">{translate('language.marathi')}</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
