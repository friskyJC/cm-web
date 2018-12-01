import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import styles from './index.less'; // eslint-disable-line

import jsBridge from '../../common/jsBridge';
import { JSBRIDGE_METHODS, PAGE_TYPE } from '../../common/constants';

class PayResult extends React.Component {
  static handleClick() {
    console.info('clicked!');
    if (window.JSBridge) {
      window.JSBridge.callHandler(
        JSBRIDGE_METHODS.PAGE_REDIRECT,
        { pageType: PAGE_TYPE.PAYMENT, data: {} },
        () => {
        // eslint-disable-line
          // alert('JS got response');
          // console.info(response);
        },
      );
    }
  }

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     info: '',
  //   };
  // }

  componentDidMount() {
    jsBridge.setupWebViewJavascriptBridge(bridge => {
      window.JSBridge = bridge;
      // bridge.registerHandler(
      //   'receiveObjCFunction',
      //   (data, responseCallback) => {

      //   },
      // );
    });
  }

  render() {
    return (
      <div className={styles.container}>
        <div>
          <img src="/images/payment.png" alt="icon" />
        </div>
        <div className={styles.btnSection}>
          <button
            onClick={() => PayResult.handleClick()}
            className={styles.btnPay}
          >
            前往支付页
          </button>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PayResult);
