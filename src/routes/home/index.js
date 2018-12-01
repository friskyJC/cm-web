import React from 'react';
import Layout from '../../components/Layout';
import Home from '../../pages/Home';

function action() {
  const pageData = {};
  // if (!isClient) {
  // } else {
  // }
  return {
    chunks: ['home'],
    title: '老虎掘金',
    description: '老虎掘金',
    keywords: '老虎掘金',
    initState: pageData,
    component: (
      <Layout>
        <Home />
      </Layout>
    ),
  };
}

export default action;
