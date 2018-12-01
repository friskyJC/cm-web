import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import styles from './course.less'; // eslint-disable-line

import CourseBanner from '../../components/CourseBanner';
import imgZhiSun from '../../../public/images/course/zhisun.png';

class Course8 extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.courseName}>什么是止盈止损</div>
          <div className={styles.item}>
            <div className={styles.title}>止盈</div>
            <div className={styles.answer}>
              当盈利达到心理价位及时平仓的行为叫做止盈。止盈点目的是为了保护投资者的利益，帮助盈利落袋为安。
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.title}>止损</div>
            <div className={styles.answer}>
              亏损时及时平仓的行为叫做止损。止损的目的是将投资出现的亏损控制在虽小的范围内。
            </div>
            <div className={styles.answer}>
              用户可在下单页根据需要设置止盈止损百分比。
            </div>
            <img src={imgZhiSun} alt="snapshot" />
          </div>
        </div>
        <div className={styles.banner}>
          <CourseBanner />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Course8);
