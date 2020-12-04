import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

const HomePage: FunctionComponent = () => {
  const { t } = useTranslation();
  const distpatch = useDispatch();

  function onClick() {
    distpatch({
      type: 'TEST_TEST',
    });
  }

  return (
    <>
      <button type="button" onClick={onClick}>
        {t('test')}
      </button>
      <Link to="/home">Link</Link>
    </>
  );
};

export default HomePage;
