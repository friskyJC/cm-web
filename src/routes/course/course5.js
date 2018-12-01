import React from 'react';
import Layout from '../../components/Layout';
import Course5 from '../../pages/Course/course5';

function action() {
  const pageData = {};
  return {
    chunks: ['course5'],
    title: '新手课堂',
    description: '新手课堂',
    keywords: '新手课堂',
    initState: pageData,
    component: (
      <Layout>
        <Course5 />
      </Layout>
    ),
  };
}

export default action;
