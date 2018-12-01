import React from 'react';
import Layout from '../../components/Layout';
import Course9 from '../../pages/Course/course9';

function action() {
  const pageData = {};
  return {
    chunks: ['course9'],
    title: '新手课堂',
    description: '新手课堂',
    keywords: '新手课堂',
    initState: pageData,
    component: (
      <Layout>
        <Course9 />
      </Layout>
    ),
  };
}

export default action;
