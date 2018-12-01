import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import styles from './course.less'; // eslint-disable-line

import CourseBanner from '../../components/CourseBanner';

class Course3 extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.courseName}>手续费如何收取</div>
          <div className={styles.item}>
            <div className={styles.answer}>
              每个产品都会在建仓时收取手续费（代金券交易不收取手续费），根据产品的规格不同，收取的费用也不同。
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.title}>如何收取</div>
            <div className={styles.priceTable}>
              <table>
                <tbody>
                  <tr className={styles.grayRow}>
                    <td className={styles.title}>产品名称</td>
                    <td className={styles.title}>产品规格</td>
                    <td className={styles.title}>手续费</td>
                    <td className={styles.title}>波动盈亏</td>
                  </tr>
                  <tr>
                    <td rowSpan="3" className={styles.title}>
                      GL银
                    </td>
                    <td>8元/手</td>
                    <td>0.7元/手</td>
                    <td>0.1元</td>
                  </tr>
                  <tr>
                    <td>100元/手</td>
                    <td>10元/手</td>
                    <td>1元</td>
                  </tr>
                  <tr>
                    <td>500元/手</td>
                    <td>48元/手</td>
                    <td>5元</td>
                  </tr>
                  <tr className={styles.grayRow}>
                    <td rowSpan="3" className={styles.title}>
                      GL铜
                    </td>
                    <td>8元/手</td>
                    <td>0.7元/手</td>
                    <td>0.02元</td>
                  </tr>
                  <tr className={styles.grayRow}>
                    <td>100元/手</td>
                    <td>10元/手</td>
                    <td>0.2元</td>
                  </tr>
                  <tr className={styles.grayRow}>
                    <td>500元/手</td>
                    <td>48元/手</td>
                    <td>1元</td>
                  </tr>
                  <tr>
                    <td rowSpan="3" className={styles.title}>
                      GL镍
                    </td>
                    <td>8元/手</td>
                    <td>0.7元/手</td>
                    <td>0.01元</td>
                  </tr>
                  <tr>
                    <td>100元/手</td>
                    <td>10元/手</td>
                    <td>0.08元</td>
                  </tr>
                  <tr>
                    <td>500元/手</td>
                    <td>48元/手</td>
                    <td>0.4元</td>
                  </tr>
                  <tr className={styles.grayRow}>
                    <td rowSpan="3" className={styles.title}>
                      GL大豆<br />GL小麦<br />GL玉米
                    </td>
                    <td>8元/手</td>
                    <td>0.7元/手</td>
                    <td>0.2元</td>
                  </tr>
                  <tr className={styles.grayRow}>
                    <td>200元/手</td>
                    <td>16元/手</td>
                    <td>5元</td>
                  </tr>
                  <tr className={styles.grayRow}>
                    <td>400元/手</td>
                    <td>32元/手</td>
                    <td>10元</td>
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
