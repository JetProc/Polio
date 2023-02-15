import React from 'react';

import File from '../../atoms/File';
const School = props => {
  const array = [
    {
      url: 'dimigo-logo',
      name: 'Korea Digital Media HighSchool',
      value: 'https://www.dimigo.hs.kr/',
      isFullScreen: true,
      isLink: true,
    },
    {
      url: 'inha',
      name: 'Inha University',
      value: 'https://www.inha.ac.kr',
      isFullScreen: true,

      isLink: true,
    },
  ];
  return (
    <>
      <File title="School" arrays={array} />
    </>
  );
};
export default School;
