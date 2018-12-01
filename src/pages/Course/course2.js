import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import styles from './course.less'; // eslint-disable-line

import CourseBanner from '../../components/CourseBanner';

class Course2 extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.courseName}>充值和提现时间</div>
          <div className={styles.item}>
            <div className={styles.title}>充值时间</div>
            <div className={styles.answer}>每天06:00 - 24:00</div>
          </div>
          <div className={styles.item}>
            <div className={styles.title}>提现时间</div>
            <div className={styles.answer}>
              每天08:00 - 24:00<br />当天最高提现1万元
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

export default withStyles(styles)(Course2);
