import React from 'react';

import File from '../../atoms/File';
const array = [
  {
    url: 'loading',
    name: 'Loading . . .',
    value: 'ProfileLoading',
  },
];
const MyProjects = props => {
  return <File title="My Profile" arrays={array}></File>;
};
export default MyProjects;
