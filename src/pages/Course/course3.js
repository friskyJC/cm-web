import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import styles from './course.less'; // eslint-disable-line

import CourseBanner from '../../components/CourseBanner';

class Course3 extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.courseName}>什么是买涨买跌</div>
          <div className={styles.item}>
            <div className={styles.title}>买涨：也称之为做多</div>
            <div className={styles.answer}>
              当预测产品价格会上涨时，可以下单买涨，在价格上涨时卖出，就能赚钱
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.title}>买跌：也称之为做空</div>
            <div className={styles.answer}>
              当预测产品价格会下跌时，可以下单买跌，在价格下跌时卖出，就能赚钱
            </div>
          </div>
        </div>
        <div className={styles.banner}>
          <CourseBanner />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Course3);
