import React from 'react';
import Layout from '../../components/Layout';
import Course10 from '../../pages/Course/course10';

function action() {
  const pageData = {};
  return {
    chunks: ['course10'],
    title: '新手课堂',
    description: '新手课堂',
    keywords: '新手课堂',
    initState: pageData,
    component: (
      <Layout>
        <Course10 />
      </Layout>
    ),
  };
}

export default action;
