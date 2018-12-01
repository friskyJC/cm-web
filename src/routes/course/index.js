import React from 'react';
import Layout from '../../components/Layout';
import Course from '../../pages/Course/index';

function action() {
  const pageData = {};
  return {
    chunks: ['course'],
    title: '新手课堂',
    description: '新手课堂',
    keywords: '新手课堂',
    initState: pageData,
    component: (
      <Layout>
        <Course />
      </Layout>
    ),
  };
}

export default action;
