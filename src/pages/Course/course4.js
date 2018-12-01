import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import styles from './course.less'; // eslint-disable-line

import CourseBanner from '../../components/CourseBanner';
import imgChiCang from '../../../public/images/course/chicang.png';
import imgPingCang from '../../../public/images/course/pingcang.png';

class Course4 extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.courseName}>什么是建仓持仓平仓爆仓</div>
          <div className={styles.item}>
            <div className={styles.title}>建仓</div>
            <div className={styles.answer}>就是买入</div>
          </div>
          <div className={styles.item}>
            <div className={styles.title}>平仓</div>
            <div className={styles.answer}>建仓后择机卖出</div>
            <img src={imgPingCang} alt="snapshot" />
          </div>
          <div className={styles.item}>
            <div className={styles.title}>持仓</div>
            <div className={styles.answer}>建仓之后不卖出</div>
            <img src={imgChiCang} alt="snapshot" />
          </div>
          <div className={styles.item}>
            <div className={styles.title}>爆仓</div>
            <div className={styles.answer}>投入的金额亏损75%即为爆仓</div>
          </div>
        </div>
        <div className={styles.banner}>
          <CourseBanner />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Course4);
