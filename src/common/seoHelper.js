function getEntitySeoInfo(entityInfo, type) {
  const info = {
    title: '',
    keywords: '',
    description: '',
  };
  switch (type) {
    case '10':
      info.title = `【关注${entityInfo.name}的最新商业动态】- 公司情报`;
      info.keywords = `${entityInfo.name}，情报，商业动态`;
      info.description = `情报为您发现${
        entityInfo.name
      }的最新商业动态，关注更多公司商业动态就上情报网`;
      break;
    case '20':
      info.title = `【关注${
        entityInfo.name
      }的最新采访言论和新闻动态】- 人物情报`;
      info.keywords = `${entityInfo.name}，情报，言论和动态`;
      info.description = `情报为您发现${entityInfo.title}${
        entityInfo.name
      }的最新采访言论和新闻动态，关注更多商业人物的动态就上情报网`;
      break;
    case '30':
      info.title = `【关注${
        entityInfo.name
      }的最新产业政策|新闻动态|发展趋势】- 新兴领域情报`;
      info.keywords = `${entityInfo.name}，情报，产业政策，新闻动态，发展趋势`;
      info.description = `情报为您洞察${
        entityInfo.name
      }的最新的产业政策|新闻动态|发展趋势，关注更多新兴领域的动态就上情报网`;
      break;
    default:
      info.title = `【关注最新商业动态】- 情报`;
      info.keywords = `情报，商业动态`;
      info.description = `情报为您发现最新商业动态，关注更多公司商业动态就上情报网`;
      break;
  }

  return info;
}

function getTopicSeoInfo(topicInfo) {
  const info = {
    title: `【${topicInfo.name}】- 情报`,
    keywords: `${topicInfo.keyword}，情报`,
    description: `情报${
      topicInfo.description
    }，关注更多区块链商业资讯就上情报网`,
  };

  switch (topicInfo.propertyTag) {
    case '1':
      info.title = `【${topicInfo.name}】- 情报`;
      info.keywords = `${topicInfo.keyword}，情报`;
      info.description = `情报${
        topicInfo.description
      }，关注更多区块链商业资讯就上情报网`;
      break;
    case '23': // 会议活动
      info.title = `【${topicInfo.name}】- 情报`;
      info.keywords = `${topicInfo.keyword}，情报`;
      info.description = `情报${
        topicInfo.description
      }，关注更多区块链商业资讯就上情报网`;
      break;
    case '26': // 投融资
      info.title = `【${topicInfo.name}】- 情报`;
      info.keywords = `${topicInfo.keyword}，情报`;
      info.description = `情报${
        topicInfo.description
      }，关注更多区块链商业资讯就上情报网`;
      break;
    default:
      info.title = `【${topicInfo.name}】- 情报`;
      info.keywords = `${topicInfo.keyword}，情报`;
      info.description = `情报${
        topicInfo.description
      }，关注更多区块链商业资讯就上情报网`;
      break;
  }
  // switch (topicInfo.type) {
  //   case '1001': // 企业经营风险主题
  //     info.title = `【关注${
  //       topicInfo.detail ? topicInfo.detail.name : ''
  //     }的经营风险】- 公司情报`;
  //     info.keywords = `${
  //       topicInfo.detail ? topicInfo.detail.name : ''
  //     }，情报，经营风险`;
  //     info.description = `情报为您发现${
  //       topicInfo.detail ? topicInfo.detail.name : ''
  //     }的最新经营风险，关注更多公司经营风险就上情报网`;
  //     break;
  //   case '1002': // 企业新闻动态主题
  //     info.title = `【关注${
  //       topicInfo.detail ? topicInfo.detail.name : ''
  //     }的新闻动态】- 公司情报`;
  //     info.keywords = `${
  //       topicInfo.detail ? topicInfo.detail.name : ''
  //     }，情报，新闻动态`;
  //     info.description = `情报为您发现${
  //       topicInfo.detail ? topicInfo.detail.name : ''
  //     }的最新新闻动态，关注更多公司新闻动态就上情报网`;
  //     break;
  //   case '1003': // 企业知识产权主题
  //     info.title = `【关注${
  //       topicInfo.detail ? topicInfo.detail.name : ''
  //     }的知识产权】- 公司情报`;
  //     info.keywords = `${
  //       topicInfo.detail ? topicInfo.detail.name : ''
  //     }，情报，知识产权`;
  //     info.description = `情报为您发现${
  //       topicInfo.detail ? topicInfo.detail.name : ''
  //     }的最新知识产权，关注更多公司知识产权就上情报网`;
  //     break;
  //   case '1005': // 企业沿革和融资动态主题
  //     info.title = `【关注${
  //       topicInfo.detail ? topicInfo.detail.name : ''
  //     }的沿革和融资动态】- 公司情报`;
  //     info.keywords = `${
  //       topicInfo.detail ? topicInfo.detail.name : ''
  //     }，情报，沿革和融资动态`;
  //     info.description = `情报为您发现${
  //       topicInfo.detail ? topicInfo.detail.name : ''
  //     }的最新沿革和融资动态，关注更多公司沿革和融资动态就上情报网`;
  //     break;
  //   case '2001': // 人物言论访谈主题
  //     info.title = `【关注${
  //       topicInfo.detail ? topicInfo.detail.name : ''
  //     }的最新言论和访谈】- 人物情报`;
  //     info.keywords = `${
  //       topicInfo.detail ? topicInfo.detail.name : ''
  //     }，情报，言论和访谈`;
  //     info.description = `情报为您订阅${
  //       topicInfo.detail ? topicInfo.detail.title : ''
  //     }${
  //       topicInfo.detail ? topicInfo.detail.name : ''
  //     }的最新采访言论和访谈，关注更多商业人物的动态就上情报网`;
  //     break;
  //   case '2002': // 人物新闻动态主题
  //     info.title = `【关注${
  //       topicInfo.detail ? topicInfo.detail.name : ''
  //     }的最新新闻动态】- 人物情报`;
  //     info.keywords = `${
  //       topicInfo.detail ? topicInfo.detail.name : ''
  //     }，情报，新闻动态`;
  //     info.description = `情报为您订阅${
  //       topicInfo.detail ? topicInfo.detail.title : ''
  //     }${
  //       topicInfo.detail ? topicInfo.detail.name : ''
  //     }的最新新闻动态，关注更多商业人物的动态就上情报网`;
  //     break;
  //   case '3001': // 领域新闻动态主题
  //     info.title = `【关注${
  //       topicInfo.detail ? topicInfo.detail.name : ''
  //     }的产业新闻动态】- ${topicInfo.detail ? topicInfo.detail.name : ''}情报`;
  //     info.keywords = `${
  //       topicInfo.detail ? topicInfo.detail.name : ''
  //     }，情报，新闻动态`;
  //     info.description = `情报为您洞察${
  //       topicInfo.detail ? topicInfo.detail.name : ''
  //     }的最新的新闻动态，关注更多${
  //       topicInfo.detail ? topicInfo.detail.name : ''
  //     }的动态就上情报网`;
  //     break;
  //   case '3002': // 领域政策主题
  //     info.title = `【关注${
  //       topicInfo.detail ? topicInfo.detail.name : ''
  //     }的产业政策信息】- ${topicInfo.detail ? topicInfo.detail.name : ''}情报`;
  //     info.keywords = `${
  //       topicInfo.detail ? topicInfo.detail.name : ''
  //     }，情报，最新政策`;
  //     info.description = `情报为您洞察${
  //       topicInfo.detail ? topicInfo.detail.name : ''
  //     }的最新的产业政策，关注更多${
  //       topicInfo.detail ? topicInfo.detail.name : ''
  //     }的动态就上情报网`;
  //     break;
  //   case '9903': // 展会
  //     info.title = `【发现最新的${topicInfo.keyword}展会信息】- 展会情报`;
  //     info.keywords = `${topicInfo.keyword}，情报，展会`;
  //     info.description = `情报为您发现最新的${
  //       topicInfo.keyword
  //     }展会信息，关注更多展会信息就上情报网`;
  //     break;
  //   case '9904': // 活动
  //     info.title = `【发现最新的${
  //       topicInfo.keyword
  //     }会议活动动态】- 会议活动情报`;
  //     info.keywords = `${topicInfo.keyword}，情报，会议活动`;
  //     info.description = `情报为您发现最新的${
  //       topicInfo.keyword
  //     }会议活动动态，关注更多会议活动就上情报网`;
  //     break;
  //   case '9905': // 招投标
  //     info.title = `【推送最新的${topicInfo.keyword}招投标动态】- 招投标情报`;
  //     info.keywords = `${topicInfo.keyword}，情报，招投标`;
  //     info.description = `情报为您推送最新的${
  //       topicInfo.keyword
  //     }的招投标动态，关注更多招投标动态就上情报网`;
  //     break;
  //   case '9906': // 投融资
  //     info.title = `【报道全面及时的${
  //       topicInfo.keyword
  //     }投融资动态】- 投融资情报`;
  //     info.keywords = `情报，${topicInfo.keyword}，投融资`;
  //     info.description = `情报为您发现最新的${
  //       topicInfo.keyword
  //     }展会信息，关注更多展会信息就上情报网`;
  //     break;
  //   default:
  //     info.title = `【关注最新商业动态】- 情报`;
  //     info.keywords = `情报，商业动态`;
  //     info.description = `情报为您发现最新商业动态，关注更多公司商业动态就上情报网`;
  //     break;
  // }

  return info;
}

function getSeoInfoForNews(topicInfo, entityInfo, newsInfo) {
  const info = {
    title: ``,
    keywords: ``,
    description: ``,
  };

  switch (topicInfo.propertyTag) {
    case '1':
      info.title = `【${newsInfo.title_text}】- 情报`;
      info.keywords = `${newsInfo.keywords}，情报`;
      info.description = `${newsInfo.title_text}。情报${
        topicInfo.description
      }，关注更多区块链商业资讯就上情报网。`;
      break;
    case '26': // 投融资
      info.title = `【${newsInfo.title_text}】- 情报`;
      info.keywords = `${newsInfo.keywords}，情报`;
      info.description = `${newsInfo.title_text}。情报${
        topicInfo.description
      }，关注更多区块链商业资讯就上情报网。`;
      break;
    default:
      info.title = `【${newsInfo.title_text}】- 情报`;
      info.keywords = `${newsInfo.keywords}，情报`;
      info.description = `${newsInfo.title_text}。情报${
        topicInfo.description
      }，关注更多区块链商业资讯就上情报网。`;
      break;
  }

  // switch (topicInfo.type) {
  //   case '1002': // 企业 新闻动态
  //     info.title = `【${newsInfo.title_text}】- 公司情报`;
  //     info.keywords = `${entityInfo.name}，情报`; // TODO: 通过标题提取的关键词
  //     info.description = `情报为您洞察${
  //       entityInfo.name
  //     }的最新新闻动态，关注更多企业新闻动态就上情报网`;
  //     break;
  //   case '2001': // 人物 言论与专访
  //     info.title = `【${newsInfo.title_text}】- 人物情报`;
  //     info.keywords = `${entityInfo.name}，情报，言论访谈`;
  //     info.description = `情报为您订阅${entityInfo.title}${
  //       entityInfo.name
  //     }的最新采访言论和访谈，关注更多商业人物动态就上情报网`;
  //     break;
  //   case '2002': // 人物 新闻动态
  //     info.title = `【${newsInfo.title_text}】- 人物情报`;
  //     info.keywords = `${entityInfo.name}，情报，新闻动态`;
  //     info.description = `情报为您订阅${entityInfo.title}${
  //       entityInfo.name
  //     }的最新新闻动态，关注更多商业人物动态就上情报网`;
  //     break;
  //   case '3001': // 领域 新闻动态
  //     info.title = `【${newsInfo.title_text}】- ${entityInfo.name}情报`;
  //     info.keywords = `${entityInfo.name}，情报，新闻动态`;
  //     info.description = `情报为您洞察${
  //       entityInfo.name
  //     }的最新的新闻动态，关注更多${entityInfo.name}的动态上情报网`;
  //     break;
  //   case '3002': // 领域 政策
  //     info.title = `【${newsInfo.title_text}】- ${entityInfo.name}情报`;
  //     info.keywords = `${entityInfo.name}，情报，最新政策`;
  //     info.description = `情报为您洞察${
  //       entityInfo.name
  //     }的最新的产业政策，关注更多${entityInfo.name}的动态就上情报网`;
  //     break;
  //   case '9906':
  //     info.title = `【${newsInfo.title_text}】- 投融资情报`;
  //     info.keywords = `${topicInfo.keyword}，情报，投融资`; // TODO
  //     info.description = `情报为您订阅${
  //       topicInfo.keyword
  //     }的最新投融资动态，关注更多投融资动态就上情报网`; // TODO
  //     break;
  //   default:
  //     info.title = `【${newsInfo.title_text}】- 情报`;
  //     info.keywords = `${topicInfo.keyword}，情报`;
  //     info.description = `情报为您订阅${
  //       topicInfo.keyword
  //     }的最新动态，关注更多动态就上情报网`;
  //     break;
  // }

  return info;
}

function getDynamicSeoInfo(detail, type, topicInfo) {
  let info = {
    title: '',
    keywords: '',
    description: '',
  };

  switch (+type) {
    case 1: // 新闻动态/言论与专访/自定义的投融资动态
      info = getSeoInfoForNews(topicInfo, topicInfo.detail, detail);
      break;
    // case 5: // 行业政策
    // break;
    case 2: // 工商变更
      info.title = `【${detail.name}在${detail.alt_date}发生了${
        detail.alt_item
      }的工商变更】- 公司情报`;
      info.keywords = `${detail.name}，情报，工商变更`;
      info.description = `情报为您发现${
        detail.name
      }的最新工商变更，关注更多工商变更就上情报网`;
      break;
    // case 3: // 推荐企业
    //   return null;
    case 4: // 招标信息
      info.title = `【${detail.title}】- 招投标情报`;
      info.keywords = `情报，${topicInfo.keyword}，招标公告`; // TODO
      info.description = `情报为您订阅${
        topicInfo.keyword
      }的最新招投标动态，关注更多招投标动态就上情报网`;
      break;
    // case 6: // 企业招聘
    // break;
    case 7: // 展会信息
      info.title = `【${detail.title}】- 展会情报`;
      info.keywords = `情报，${topicInfo.keyword}，展览会`;
      info.description = `${detail.title}。情报为您发现${
        topicInfo.keyword
      }的最新展会动态，关注更多展会动态就上情报网`;
      break;
    case 8: // 商标信息
      info.title = `【新商标：${detail.name}的商标被注册了】- 商标情报`;
      info.keywords = `${detail.company}，情报，商标，${detail.name}`;
      info.description = `情报发现${detail.company}已经注册了${
        detail.name
      }的商标，关注更多商标动态就上情报网`;
      break;
    case 9: // 专利信息
      info.title = `【新专利：${detail.name}的专利被注册了】- 专利情报`;
      info.keywords = `${detail.owner}，情报，专利，${detail.name}`;
      info.description = `情报发现${
        detail.owner
      }的注册了最新专利信息，关注更多专利动态就上情报网`;
      break;
    case 10: // 法院公告
      info.title = `【${detail.title}】- 法院公告情报`;
      info.keywords = `${detail.person}，情报，法院公告`;
      info.description = `情报为您发现${
        detail.person
      }的最新法院公告，关注更多法院公告就上情报网`;
      break;
    case 11: // 开庭公告
      info.title = `【${detail.seo ? detail.seo.name : ''}作为${
        detail.seo ? detail.seo.role : '当事人'
      }以${detail.number}案件被起诉】- 公司开庭公告情报`;
      info.keywords = `${detail.seo ? detail.seo.name : ''}，情报，开庭公告`;
      info.description = `情报为您发现${
        detail.seo ? detail.seo.name : ''
      }的最新开庭公告，关注更多开庭公告就上情报网`;
      break;
    case 12: // 动产抵押
      info.title = `【${detail.name}在${
        detail.info_event_date
      }做了动产抵押】- 公司动产抵押情报`;
      info.keywords = `${detail.name}，情报，动产抵押`;
      info.description = `情报为您发现${
        detail.name
      }的最新动产抵押，关注更多动产抵押就上情报网`;
      break;
    // case 13: // 可能感兴趣
    //   return null;
    case 14: // 行政处罚
      info.title = `【${detail.department}处罚了${
        detail.number
      }的案件】- 公司行政处罚情报`;
      info.keywords = `${detail.name}，情报，行政处罚`;
      info.description = `情报为您发现${
        detail.name
      }的最新行政处罚，关注更多行政处罚就上情报网`;
      break;
    case 15: // 股权出质
      info.title = `【${detail.pledgor_name}出质了${
        detail.pledgor && detail.pledgor.name ? detail.pledgor.name : ''
      }${detail.pledgor_amt}的股权】- 股权出质公司情报`;
      info.keywords = `${
        detail.pledgor && detail.pledgor.name ? detail.pledgor.name : ''
      }，情报，股权出质`;
      info.description = `情报为您发现${
        detail.pledgor && detail.pledgor.name ? detail.pledgor.name : ''
      }的最新股权出质，关注更股权出质就上情报网`;
      break;
    case 16: // 抽查检查
      break;
    case 17: // 裁判文书
      info.title = `【${detail.title}】- 公司裁判文书情报`;
      info.keywords = `${detail.name}，情报，裁判文书`;
      info.description = `情报为您发现${
        detail.name
      }的最新裁判文书，关注更多裁判文书就上情报网`;
      break;
    case 18: // 被执行人
      info.title = `【${detail.name}在${
        detail.info_event_date
      }日被列为被执行人】- 公司被执行情报`;
      info.keywords = `${detail.name}，情报，被执行人`;
      info.description = `情报为您发现${
        detail.name
      }的最新被执行，关注更多被执行信息就上情报网`;
      break;
    case 19: // 投融资
      break;
    case 20: // 经营异常
      info.title = `【${detail.name ? detail.name : ''}在${
        detail.info_event_date
      }日被列为经营异常】- 公司经营异常情报`;
      info.keywords = `${detail.name ? detail.name : ''}，情报，经营异常`;
      info.description = `情报为您发现${
        detail.name ? detail.name : ''
      }的最新经营异常，关注更多经营异常就上情报网`;
      break;
    case 21: // 失信信息
      info.title = `【${detail.name}在${
        detail.info_event_date
      }日被列为失信人】- 公司失信人情报`;
      info.keywords = `${detail.name}，情报，失信信息`;
      info.description = `情报为您发现${
        detail.name
      }的最新失信信息，关注更多失信信息就上情报网`;
      break;
    case 22: // 域名
      info.title = `【${detail.name}启用了新域名：${
        detail.websites
      }】- 域名情报`;
      info.keywords = `${detail.company}，情报，域名，${detail.websites}，${
        detail.name
      }`;
      info.description = `情报发现${detail.company}的${detail.name}启用了${
        detail.websites
      }的域名，关注更多域名动态就上情报网`;
      break;
    case 23: // 会议活动
      info.title = `【${detail.title}】- 情报`;
      info.keywords = `${detail.keywords}，情报`;
      info.description = `${detail.title}。情报${
        topicInfo.description
      }，关注更多区块链商业资讯就上情报网。`;
      break;
    case 24: // 培训信息
      break;
    // case 999: // 自定义
    //   break;
    case 25: // 研报
      info.title = `【${detail.title_text}】- 情报`;
      info.keywords = `${detail.keywords}，情报`;
      info.description = `${detail.title_text}。情报${
        topicInfo.description
      }，关注更多区块链商业资讯就上情报网。`;
      break;
    default:
      break;
  }
  return info;
}

module.exports = {
  getEntitySeoInfo,
  getTopicSeoInfo,
  getDynamicSeoInfo,
};
