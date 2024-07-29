import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../LangSwitcher/LangSwitcher.jsx';
import '../Home/home.scss';

const Home = ({ selectedLanguage, changeLanguage }) => {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';

  return (
    <section id="home">
      <div className='header'>
        <img src='/images/logo-head.svg' alt='Logo' className='logo-head' />
        <LanguageSwitcher 
          selectedLanguage={selectedLanguage} 
          changeLanguage={changeLanguage} 
        />
      </div>
      <div className='home-content'>
        {isEnglish ? (
          <>
            <h1>{t('head1')} 
            <span className='colored-text'> {t('head2')} </span> {t('head3')} </h1>
            <h1> {t('head4')} </h1>
          </>
        ) : (
          <>
            <h1> {t('head1')} </h1>
            <h1> <span className='colored-text'> {t('head2')} </span> {t('head3')} </h1>
          </>
        )}
        <p> Business Analyst <span className='separator'> ● </span> UX Designer </p>
        <img src='/images/certified.svg' alt='Logo certified' className='certified' />
      </div>
    </section>
  );
};

export default Home;
