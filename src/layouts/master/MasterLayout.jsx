import React, { Component } from 'react';
import HeaderLayout from '../header/HeaderLayout';
import FooterLayout from '../footer/FooterLayout';
// import SidebarLayout from '../sidebar/SidebarLayout';
import styles from './master.scss'

class MasterLayout extends Component {
  
  render() {
    const childrenWidthProps = React.Children.map(this.props.children,child =>
      React.cloneElement(child,{})
    );
    return (
      <div className="wrapper">
         <HeaderLayout/>
        <div className={styles.main}>
          <div className={styles.appContent}>{childrenWidthProps}</div>
        </div>
        <FooterLayout/> 
      </div>
    );
  }
}

export default MasterLayout;