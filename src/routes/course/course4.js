import React from 'react';
import Layout from '../../components/Layout';
import Course4 from '../../pages/Course/course4';

function action() {
  const pageData = {};
  return {
    chunks: ['course4'],
    title: '新手课堂',
    description: '新手课堂',
    keywords: '新手课堂',
    initState: pageData,
    component: (
      <Layout>
        <Course4 />
      </Layout>
    ),
  };
}

export default action;
