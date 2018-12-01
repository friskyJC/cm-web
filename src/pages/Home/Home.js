/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import copy from 'copy-to-clipboard';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.less'; // eslint-disable-line

class Home extends React.Component {
  // static propTypes = {
  //   code: PropTypes.string,
  // };

  // static defaultProps = {
  //   code: '',
  // };
  // constructor(props) {
  //   super(props);
  //   this.handleClick = this.handleClick.bind(this);
  // }
  // handleClick() {
  //   if (this.props.code) {
  //     copy(this.props.code);
  //   }
  // }

  render() {
    return <div>TODO</div>;
  }
}

export default withStyles(s)(Home);
