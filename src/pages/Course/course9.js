import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import styles from './course.less'; // eslint-disable-line

import CourseBanner from '../../components/CourseBanner';
import imgTiXian1 from '../../../public/images/course/tixian1.png';
import imgTiXian2 from '../../../public/images/course/tixian2.png';

class Course9 extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.courseName}>如何提现</div>
          <div className={styles.item}>
            <div className={styles.title}>第一步</div>
            <div className={styles.answer}>资产-提现</div>
            <img src={imgTiXian1} alt="snapshot" />
          </div>
          <div className={styles.item}>
            <div className={styles.title}>第二步</div>
            <div className={styles.answer}>
              输入提现金额，并正确填写信息（用户最低提现金额为50元）
            </div>
            <img src={imgTiXian2} alt="snapshot" />
            <div className={styles.answer}>
              注：提现金额300元以内，手续费为3元；超过300元，收提现金额的1%，30元封顶。
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

export default withStyles(styles)(Course9);
