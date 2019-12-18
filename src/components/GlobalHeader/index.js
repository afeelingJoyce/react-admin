import React, { PureComponent } from 'react';
import { Menu, Icon, Spin, Tag, Dropdown, Avatar, Divider, Tooltip, Button } from 'antd';
// import moment from 'moment';
// import groupBy from 'lodash/groupBy';
// import Debounce from 'lodash-decorators/debounce';
import { Link } from 'react-router-dom'
// import { FormattedMessage, setLocale, getLocale } from 'umi/locale';
// import NoticeIcon from '../NoticeIcon';
// import HeaderSearch from '../HeaderSearch';
import styles from './index.less';

export default class GlobalHeader extends PureComponent {

  toggle = () => {
    const { collapsed, onToggle } = this.props;
    onToggle(!collapsed);
  };
  render() {

    const { collapsed } = this.props;

    return (
      <div className={styles.header}>
        <Icon
          className={styles.trigger}
          type={collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={this.toggle}
        />
        <div className={styles.right}>
        </div>
      </div>
    );
  }
}
