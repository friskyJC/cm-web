import React from 'react';
import Layout from '../../components/Layout';
import PayResult from '../../pages/PayResult/index';

function action() {
  const pageData = {};
  return {
    chunks: ['pay-result'],
    title: '新手课堂',
    description: '新手课堂',
    keywords: '新手课堂',
    initState: pageData,
    component: (
      <Layout>
        <PayResult />
      </Layout>
    ),
  };
}

export default action;
