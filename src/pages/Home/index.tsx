import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';
import { TEST } from '@definitions/saga-type';
//
import Button from '@components/Button';

const HomePage: FunctionComponent = () => {
  const { t, i18n } = useTranslation();
  const distpatch = useDispatch();

  function onClick() {
    i18n.changeLanguage('en');
    distpatch({
      type: TEST.ADD_TEST,
    });
  }

  return (
    <>
      <Helmet>
        <title>{t('test')}</title>
      </Helmet>
      <Button title={t('test')} onClick={onClick}>
        {t('test')}
      </Button>
      <Link to="/home">Link</Link>
    </>
  );
};

export default HomePage;
