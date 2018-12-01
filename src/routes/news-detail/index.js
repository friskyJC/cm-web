import React from 'react';
import Layout from '../../components/Layout';
import NewsDetail from '../../pages/NewsDetail/index';

async function action({ isClient, fetch, query }) {
  let pageData = {};
  const { id } = query;
  if (!isClient) {
    const res = await fetch(`/api/getNewsDetail?id=${id}`, {
      method: 'GET',
    });
    const data = await res.json();
    const tmp = data.data;
    if (tmp) {
      pageData = {
        id: tmp.id,
        title: tmp.title,
        subtitle: tmp.subtitle,
        marketView: tmp.marketView,
        proTypeId: tmp.proTypeId,
        typeName: tmp.typeName,
        content: tmp.content,
        createTime: tmp.createTime,
        visitNum: tmp.visitNum,
      };
    }
  } else {
    pageData = window.App.initState;
  }
  return {
    chunks: ['news-detail'],
    title: '详情',
    description: '',
    keywords: '',
    initState: pageData,
    component: (
      <Layout>
        <NewsDetail {...pageData} />
      </Layout>
    ),
  };
}

export default action;
