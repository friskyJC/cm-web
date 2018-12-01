import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import styles from './index.less'; // eslint-disable-line

import upImg from '../../../public/images/up.png';
import downImg from '../../../public/images/down.png';
import jsBridge from '../../common/jsBridge';
import { JSBRIDGE_METHODS, PAGE_TYPE } from '../../common/constants';
import CourseBanner from '../../components/CourseBanner';

class NewsDetail extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    marketView: PropTypes.number,
    proTypeId: PropTypes.number,
    visitNum: PropTypes.number,
    typeName: PropTypes.string,
    content: PropTypes.string,
    createTime: PropTypes.string,
  };

  static defaultProps = {
    title: '',
    subtitle: '',
    marketView: 0,
    proTypeId: 0,
    visitNum: 0,
    typeName: '',
    content: '',
    createTime: '',
  };

  componentDidMount() {
    jsBridge.setupWebViewJavascriptBridge(bridge => {
      window.JSBridge = bridge;
    });
  }

  handleClick() {
    if (window.JSBridge) {
      const { proTypeId } = this.props;
      window.JSBridge.callHandler(
        JSBRIDGE_METHODS.PAGE_REDIRECT,
        { pageType: PAGE_TYPE.INVESTMENT, data: { proTypeId } },
        () => {},
      );
    }
  }

  render() {
    const isUp = +this.props.marketView === 1;
    let htmlText = this.props.content;
    const reg = new RegExp('<p></p>', 'g');
    htmlText = htmlText.replace(reg, '');
    return (
      <div className={styles.container}>
        <div className={styles.title}>{this.props.title}</div>
        <div className={styles.readCount}>
          阅读 {this.props.visitNum} · {this.props.createTime}
        </div>
        <div className={`${styles.status} ${isUp ? styles.up : styles.down}`}>
          <button onClick={() => this.handleClick()}>
            <span>
              {this.props.typeName} {isUp ? '看涨' : '看跌'}
            </span>
            <img src={isUp ? upImg : downImg} alt="icon" />
          </button>
        </div>
        <div className={styles.analyse}>
          <div className={styles.suggestion}>分析师建议</div>
          <div className={styles.suggestDetail}>{this.props.subtitle}</div>
        </div>
        <div className={styles.fundamentals}>基本面分析</div>
        <div className={styles.detail}>
          <div dangerouslySetInnerHTML={{ __html: htmlText }} />
        </div>
        <div className={styles.remarks}>以上策略仅供参考，不构成交易依据</div>
        <div className={styles.banner}>
          <CourseBanner proTypeId={this.props.proTypeId} />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(NewsDetail);
