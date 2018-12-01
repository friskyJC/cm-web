import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import styles from './index.less'; // eslint-disable-line

import CourseBanner from '../../components/CourseBanner';
import courseTitle from '../../../public/images/course_title.png';
import arrowRight from '../../../public/images/arrow_right.png';

const qaList = [
  { key: '1', title: '交易时间', url: '/course/1' },
  { key: '2', title: '充值和提现时间', url: '/course/2' },
  { key: '3', title: '什么是买涨买跌', url: '/course/3' },
  { key: '4', title: '什么是建仓持仓平仓爆仓', url: '/course/4' },
  { key: '5', title: '手续费如何收取', url: '/course/5' },
  { key: '6', title: '什么是持仓过夜', url: '/course/6' },
  { key: '7', title: '什么是代金券', url: '/course/7' },
  { key: '8', title: '什么是止盈止损', url: '/course/8' },
  { key: '9', title: '如何提现', url: '/course/9' },
  { key: '10', title: '一分钟看懂K线', url: '/course/10' },
];

class Course extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <img src={courseTitle} alt="logo" />
          <div className={styles.subTitle}>如何快速入手投资交易品</div>
        </div>
        <div className={styles.qaContainer}>
          <div className={styles.title}>常见问题</div>
          {qaList &&
            qaList.length &&
            qaList.map(item => (
              <div className={styles.qaItem} key={item.key}>
                <a href={item.url}>
                  <span>{item.title}</span>
                  <img src={arrowRight} alt="arrow" />
                </a>
              </div>
            ))}
        </div>
        <div className={styles.banner}>
          <CourseBanner />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Course);
