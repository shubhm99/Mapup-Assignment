import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import 'leaflet/dist/leaflet.css';
import { Breadcrumb, Button, Layout , Menu } from 'antd';
import Title from 'antd/lib/typography/Title';
import SubMenu from 'antd/lib/menu/SubMenu';
import { EnvironmentOutlined } from '@ant-design/icons';
import DataListing from './containers/datalisting';

const { Header, Content, Sider, Footer } = Layout;


function App() {
  return (
    <div className="App">
  <Layout>
    <Header style={{padding: '12px', background: '#84DFFF'}} mode='inline'>
    <Button shape="circle" style={{float: 'right', background:'#FFF89A', color:'#FFC900'}}>S</Button>              
    <Button style={{float: 'right' , background:'#84DFFF', borderColor:'#84DFFF', color:'#0f0f0f'}}>Login</Button>
    <Title style={{color:'#fff'}} level={2}>MapUp</Title>
    </Header>
    <Layout>
    <Sider style={{background:'#92A9BD'}}>
        <Menu
          defaultSelectedKeys={['maparea']} 
          mode="inline" style={{ background:'#92A9BD'}}>
          <Menu.Item key='maparea'>
            MapArea
          </Menu.Item>
          <SubMenu icon={<EnvironmentOutlined />} title="Countries">
            <Menu.ItemGroup key='countries' title='Countries' style={{ background:'#92A9BD'}}>
              <Menu.Item key='unitedstates'> United States </Menu.Item>
              <Menu.Item key='unitedkingdom'> United Kingdom </Menu.Item>
              <Menu.Item key='india'> India </Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
        </Menu>
    </Sider>
      <Layout>
          <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>MapArea</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ background:'#fff', padding: 24, minHeight: 566}}>
            <DataListing />
          </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>MapUp Assignment ©2022 Created by Shubham Singla</Footer>
      </Layout>
    </Layout>
  </Layout>
    </div>
  );
}

export default App;
