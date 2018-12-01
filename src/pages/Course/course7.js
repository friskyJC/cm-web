import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import styles from './course.less'; // eslint-disable-line

import CourseBanner from '../../components/CourseBanner';
import imgDaiJinQuan1 from '../../../public/images/course/daijinquan1.png';
import imgDaiJinQuan2 from '../../../public/images/course/daijinquan2.png';

class Course7 extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.courseName}>什么是代金券</div>
          <div className={styles.item}>
            <div className={styles.answer}>
              代金券是可以代替现金进行交易的活动券，<b>
                使用代金券交易不支持持仓过夜
              </b>
            </div>
            <div className={styles.answer}>
              代金券金额：<br />8元、100元、200元、400元、500元。
            </div>
            <div className={styles.answer}>
              代金券优势：<br />使用代金券，也将产生手续费，盈利部分返回账户，盈利可提现<b
              >
                （代金券本身不能提现）
              </b>。
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.title}>获取方式</div>
            <div className={styles.answer}>
              1. 新用户注册<br />2. 活动
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.title}>如何使用</div>
            <div className={styles.answer}>
              下单时点击按钮，使用代金券，其他步骤与现金交易一致
            </div>
            <img src={imgDaiJinQuan1} alt="snapshot" />
            <div className={styles.answer}>
              代金券信息可在“资产”中的“代金券”中查看
            </div>
            <img src={imgDaiJinQuan2} alt="snapshot" />
          </div>
          <div className={styles.item}>
            <div className={styles.title}>有效期</div>
            <div className={styles.answer}>
              代金券有使用有效期，请在有效期内使用，过期作废不予补偿。
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

export default withStyles(styles)(Course7);
