import React from 'react';
import Layout from '../../components/Layout';
import Course2 from '../../pages/Course/course2';

function action() {
  const pageData = {};
  return {
    chunks: ['course2'],
    title: '新手课堂',
    description: '新手课堂',
    keywords: '新手课堂',
    initState: pageData,
    component: (
      <Layout>
        <Course2 />
      </Layout>
    ),
  };
}

export default action;
