import React from 'react';
import Layout from '../../components/Layout';
import Course7 from '../../pages/Course/course7';

function action() {
  const pageData = {};
  return {
    chunks: ['course7'],
    title: '新手课堂',
    description: '新手课堂',
    keywords: '新手课堂',
    initState: pageData,
    component: (
      <Layout>
        <Course7 />
      </Layout>
    ),
  };
}

export default action;
