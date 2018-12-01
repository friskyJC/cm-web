import React from 'react';
import Layout from '../../components/Layout';
import Course6 from '../../pages/Course/course6';

function action() {
  const pageData = {};
  return {
    chunks: ['course6'],
    title: '新手课堂',
    description: '新手课堂',
    keywords: '新手课堂',
    initState: pageData,
    component: (
      <Layout>
        <Course6 />
      </Layout>
    ),
  };
}

export default action;
