import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import styles from './index.less'; // eslint-disable-line

// import imgActivityBG from '../../../public/images/activity1_bg.png';
import jsBridge from '../../common/jsBridge';
import { JSBRIDGE_METHODS, PAGE_TYPE } from '../../common/constants';

class Activity1 extends React.Component {
  static onGetTicket(isLogin) {
    if (window.JSBridge && !isLogin) {
      window.JSBridge.callHandler(
        JSBRIDGE_METHODS.PAGE_REDIRECT,
        { pageType: PAGE_TYPE.REGISTER, data: {} },
        () => {},
      );
    }
  }

  static onRecharge(amount) {
    if (window.JSBridge) {
      window.JSBridge.callHandler(
        JSBRIDGE_METHODS.PAGE_REDIRECT,
        { pageType: PAGE_TYPE.RECHARGE, data: { amount } },
        () => {},
      );
    }
  }

  state = {
    isLogin: false,
  };

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     info: '',
  //   };
  // }

  componentDidMount() {
    const me = this;
    jsBridge.setupWebViewJavascriptBridge(bridge => {
      window.JSBridge = bridge;
      bridge.registerHandler(JSBRIDGE_METHODS.INIT_ACTIVITY_DATA, data => {
        if (typeof data === 'string') {
          data = JSON.parse(data); // eslint-disable-line
        }
        me.setState({
          isLogin: data && !!data.isLogin,
        });
      });
    });
  }

  render() {
    const { isLogin } = this.state;
    return (
      <div className={styles.container}>
        <div className={styles.present1}>
          <div className={styles.activityBG} />
          {/* <img src={imgActivityBG} alt="icon" /> */}
          <div className={styles.presentContent}>
            <div className={styles.title}>豪礼一</div>
            <div className={styles.ticket}>
              <div className={styles.ticketSection1}>代金券</div>
              <div className={styles.ticketSection2}>
                <div className={styles.top}>
                  <span className={styles.little}>￥</span>
                  <span>100.00</span>
                </div>
                <div className={styles.bottom}>有效期 2019-01-30</div>
              </div>
              <div className={styles.ticketSection3}>
                <button onClick={() => Activity1.onGetTicket(isLogin)}>
                  {isLogin ? '已领取' : '立即领取'}
                </button>
              </div>
            </div>
            <div className={styles.remarks}>新用户注册即送100元代金券</div>
          </div>
        </div>
        <div className={styles.present2}>
          <div className={styles.title}>豪礼二</div>
          <div className={styles.products}>
            <div className={styles.item}>
              <div className={`${styles.inner} ${styles.left}`}>
                <div className={styles.tag}>特惠</div>
                <span className={styles.text1}>500</span>
                <span className={styles.text2}>首充送 100 元券</span>
                <div className={styles.btnSection}>
                  <button onClick={() => Activity1.onRecharge(50000)}>
                    去充值
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.item}>
              <div className={`${styles.inner} ${styles.right}`}>
                <span className={styles.text1}>100</span>
                <span className={styles.text2}>首充送 16 元券</span>
                <div className={styles.btnSection}>
                  <button onClick={() => Activity1.onRecharge(10000)}>
                    去充值
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.productText}>首充 500 送 100, 首充100送16</div>
          <div className={styles.rule}>
            <div className={styles.ruleTitle}>活动规则</div>
            <div>
              <ul>
                <li>活动时间：12月1日00:00 ～ 12月30日00:00；</li>
                <li>活动仅限新注册用户与首次现金充值用户参与；</li>
                <li>
                  如有疑问请联系在线客服，本次活动最终解释权归老虎掘金所有。
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.risk}>
            <div className={styles.riskTitle}>市场有风险 投资需谨慎</div>
            <div className={styles.riskContent}>
              老虎掘金保留法律范围内对活动的解释权。本产品属于高风险、高收益投资品种，投资者应具备较高的风险识别能力、资金实力与风险承受能力，合理配置资产。
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Activity1);
