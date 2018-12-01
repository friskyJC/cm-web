import React from 'react';
import Layout from '../../components/Layout';
import Course8 from '../../pages/Course/course8';

function action() {
  const pageData = {};
  return {
    chunks: ['course8'],
    title: '新手课堂',
    description: '新手课堂',
    keywords: '新手课堂',
    initState: pageData,
    component: (
      <Layout>
        <Course8 />
      </Layout>
    ),
  };
}

export default action;
