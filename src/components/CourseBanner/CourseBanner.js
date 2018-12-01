/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './CourseBanner.less';
import jsBridge from '../../common/jsBridge';
import { JSBRIDGE_METHODS, PAGE_TYPE } from '../../common/constants';

class CourseBanner extends React.Component {
  static propTypes = {
    proTypeId: PropTypes.number,
  };

  static defaultProps = {
    proTypeId: 0,
  };

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

  handleClick() {
    if (window.JSBridge) {
      const { proTypeId } = this.props;
      window.JSBridge.callHandler(
        JSBRIDGE_METHODS.PAGE_REDIRECT,
        { pageType: PAGE_TYPE.INVESTMENT, data: { proTypeId } },
        () => {
          // eslint-disable-line
          // alert('JS got response');
          // console.info(response);
        },
      );
    }
  }

  render() {
    const { proTypeId } = this.props;
    return (
      <div className={s.container}>
        <span>
          {proTypeId > 0 ? '抓住行情，去下一单！' : '学完了快去试试身手吧！'}
        </span>
        <button onClick={() => this.handleClick()}>
          {proTypeId > 0 ? '去下单' : '去投资'}
        </button>
      </div>
    );
  }
}

export default withStyles(s)(CourseBanner);
