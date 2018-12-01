import React from 'react';
import Layout from '../../components/Layout';
import Course3 from '../../pages/Course/course3';

function action() {
  const pageData = {};
  return {
    chunks: ['course3'],
    title: '新手课堂',
    description: '新手课堂',
    keywords: '新手课堂',
    initState: pageData,
    component: (
      <Layout>
        <Course3 />
      </Layout>
    ),
  };
}

export default action;
