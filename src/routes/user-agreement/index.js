import React from 'react';
import Layout from '../../components/Layout';
import UserAgreement from '../../pages/UserAgreement/index';

function action() {
  const pageData = {};
  return {
    chunks: ['user-agreement'],
    title: '用户协议',
    description: '用户协议',
    keywords: '用户协议',
    initState: pageData,
    component: (
      <Layout>
        <UserAgreement />
      </Layout>
    ),
  };
}

export default action;
