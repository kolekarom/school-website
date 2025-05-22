import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageSelector = () => {
  const { language, setLanguage, translate, loading } = useLanguage();

  return (
    <div className="language-selector">
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="form-select form-select-sm"
        aria-label={translate('language.select')}
        disabled={loading}
      >
        <option value="en">{loading ? 'English' : translate('english')}</option>
        <option value="mr">{loading ? 'मराठी' : translate('marathi')}</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
