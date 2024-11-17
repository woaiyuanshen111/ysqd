import React from 'react';


import {  Layout,theme } from 'antd';

import CommonAside from '../components/commonAside';
import CommonHeader from '../components/commonHeader';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
const { Content } = Layout

const Main = () =>{
  //const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  //获取展开收起的状态
  const collapsed = useSelector(state => state.tab.isCollapse);

  return (
    
    <Layout className="main-container">
    <CommonAside collapsed={collapsed} />
    <Layout>
      <CommonHeader collapsed={collapsed} />
      <Content
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
         
        }}
      >
        <Outlet />
      </Content>
    </Layout>
  </Layout>
  );
}

export default Main
//我这里还需要另外 npm i antd， npm i @ant-design/icons 不然会报错