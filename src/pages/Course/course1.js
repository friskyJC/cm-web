import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import styles from './course.less'; // eslint-disable-line

import CourseBanner from '../../components/CourseBanner';

class Course1 extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.courseName}>交易时间</div>
          <div className={styles.item}>
            <div className={styles.title}>GL银</div>
            <div className={styles.answer}>
              06:00 - 次日04:00 (夏令时)<br />07:00 - 次日05:00 (冬令时)
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.title}>GL铜、GL镍</div>
            <div className={styles.answer}>
              08:00 - 次日02:00 (夏令时)<br />09:00 - 次日03:00 (冬令时)
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.title}>GL玉米、GL小麦、GL大豆</div>
            <div className={styles.answer}>
              08:00 - 20:45 21:30 - 次日02:20 (夏令时)<br />09:00 - 21:45 22:30
              - 次日03:20 (冬令时)
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

export default withStyles(styles)(Course1);
