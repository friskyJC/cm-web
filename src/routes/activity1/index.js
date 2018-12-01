import React from 'react';
import Layout from '../../components/Layout';
import Activity1 from '../../pages/Activity1/index';

function action() {
  const pageData = {};
  return {
    chunks: ['activity1'],
    title: '活动页',
    description: '活动页',
    keywords: '活动页',
    initState: pageData,
    component: (
      <Layout>
        <Activity1 />
      </Layout>
    ),
  };
}

export default action;
