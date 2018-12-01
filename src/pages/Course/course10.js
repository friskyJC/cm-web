import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import styles from './course.less'; // eslint-disable-line

import CourseBanner from '../../components/CourseBanner';
import imgK1 from '../../../public/images/course/K1.png';
import imgK2 from '../../../public/images/course/K2.png';
import imgK3 from '../../../public/images/course/K3.png';
import imgK4 from '../../../public/images/course/K4.png';
import imgK5 from '../../../public/images/course/K5.png';
import imgK6 from '../../../public/images/course/K6.png';
import imgK7 from '../../../public/images/course/K7.png';
import imgK8 from '../../../public/images/course/K8.png';

class Course10 extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.courseName}>一分钟看懂K线</div>
          <div className={styles.item}>
            <div className={styles.title}>K线图的盈利玄机</div>
            <div className={styles.answer}>
              贵金属盈利并不难，简单的K线蕴含不少秘密，只要了解其中的门道就能在市场中运筹帷幄！
            </div>
            <img src={imgK1} alt="snapshot" />
          </div>
          <div className={styles.item}>
            <div className={styles.title}>标准K线图的图形解说</div>
            <div className={styles.chart}>
              <img className={styles.icon} src={imgK2} alt="icon" />
              <div className={styles.text}>
                开盘价=最低价，收盘价=最高价，市场开盘后价格一直涨，俗称大阳线，表示市场买盘占据上风，后续看涨。
              </div>
            </div>
            <div className={styles.chart}>
              <img className={styles.icon} src={imgK3} alt="icon" />
              <div className={styles.text}>
                开盘价=最高价，收盘价=最低价，实体部分很长，俗称大阴线，表示市场看跌氛围浓厚，后续看跌。
              </div>
            </div>
            <div className={styles.chart}>
              <img className={styles.icon} src={imgK4} alt="icon" />
              <div className={styles.text}>
                收盘价=最低价，因此没有下影线，此时市场处于短期下跌趋势中，做空力量占据上风。
              </div>
            </div>
            <div className={styles.chart}>
              <img className={styles.icon} src={imgK5} alt="icon" />
              <div className={styles.text}>
                收盘价=最高价，下影线较长，实体较短，若它出现在下跌途中，我们称为锤子线，预示着下跌行情即将出现逆转。
              </div>
            </div>
            <div className={styles.chart}>
              <img className={styles.icon} src={imgK6} alt="icon" />
              <div className={styles.text}>
                收盘价=最低价，上影线较长，实体较短，若它出现在上涨途中，我们称为流星线，预示着上涨行情即将出现逆转。
              </div>
            </div>
            <div className={styles.chart}>
              <img className={styles.icon} src={imgK7} alt="icon" />
              <div className={styles.text}>
                开盘、收盘、最低、最高价之间十分接近，不论颜色红绿，均显示行情波动较小，市场多空双方交投谨慎，按兵不动，后市可能出现突破行情。
              </div>
            </div>
            <div className={styles.chart}>
              <img className={styles.icon} src={imgK8} alt="icon" />
              <div className={styles.text}>
                收盘价=开盘价，显示多空双方力量势均力敌。我们俗称十字星，这是一个十分危险的行情反转信号。
              </div>
            </div>
            <div className={styles.answer}>
              以上就是单根K线的形态，通过这些形态发出的信号，可以为我们做单提供较为准确的参考。
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

export default withStyles(styles)(Course10);
