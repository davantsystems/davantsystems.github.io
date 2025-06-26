import React from 'react';
import ContentProvider from './src/ContentProvider';
import "./src/styles/global.css"

export const wrapRootElement = ({ element }) => {
  return <ContentProvider>{element}</ContentProvider>;
};
