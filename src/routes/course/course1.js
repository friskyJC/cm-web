import React from 'react';
import Layout from '../../components/Layout';
import Course1 from '../../pages/Course/course1';

function action() {
  const pageData = {};
  return {
    chunks: ['course1'],
    title: '新手课堂',
    description: '新手课堂',
    keywords: '新手课堂',
    initState: pageData,
    component: (
      <Layout>
        <Course1 />
      </Layout>
    ),
  };
}

export default action;
