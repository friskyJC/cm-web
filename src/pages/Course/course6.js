import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import styles from './course.less'; // eslint-disable-line

import CourseBanner from '../../components/CourseBanner';

class Course3 extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.courseName}>什么是持仓过夜</div>
          <div className={styles.item}>
            <div className={styles.answer}>
              所有品种均可以持仓过夜，即当日不平仓，持仓到第二天甚至更长时间。<br />持仓过夜功能在下单时默认开启，您也可以点击按钮关闭。<br />如选择不持仓过夜，则当天建仓的交易订单会在当个交易结束时（即次日04:00）系统平仓。
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.title}>持仓过夜手续费收取规则</div>
            <div className={styles.priceTable}>
              <table>
                <tbody>
                  <tr className={styles.grayRow}>
                    <td className={styles.special}>
                      <div className={styles.diagonal} />
                      <div className={styles.unit}>交易单位</div>
                      <div className={styles.category}>产品类别</div>
                    </td>
                    <td>8元/手</td>
                    <td>100元/手</td>
                    <td>500元/手</td>
                  </tr>
                  <tr>
                    <td className={styles.title}>
                      GL银<br />GL铜<br />GL镍
                    </td>
                    <td>0.1元/天</td>
                    <td>1.2元/天</td>
                    <td>6元/天</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className={styles.priceTable}>
              <table>
                <tbody>
                  <tr className={styles.grayRow}>
                    <td className={styles.special}>
                      <div className={styles.diagonal} />
                      <div className={styles.unit}>交易单位</div>
                      <div className={styles.category}>产品类别</div>
                    </td>
                    <td>8元/手</td>
                    <td>200元/手</td>
                    <td>400元/手</td>
                  </tr>
                  <tr>
                    <td className={styles.title}>
                      GL大豆<br />GL小麦<br />GL玉米
                    </td>
                    <td>0.1元/天</td>
                    <td>2元/天</td>
                    <td>4元/天</td>
                  </tr>
                </tbody>
              </table>
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
