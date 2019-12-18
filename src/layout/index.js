import React from 'react'
import { Layout } from 'antd'
import SiderMenu from '../components/SiderMenu'
import GlobalHeader from '../components/GlobalHeader'
import Router from '../config/router'

import menus from '../config/menus'




const { Sider, Header, Content, Footer } = Layout


class Index extends React.Component {
    state = {
        collapsed: false,
    }

    toggle = () => {

        console.log(111)
        this.setState({
            collapsed: !this.state.collapsed
        })
    }

    render() {
        // 设置Sider的minHeight可以使左右自适应对齐
        const { collapsed } = this.state;

        return (
            <div id='page'>
                <Layout>
                    <SiderMenu collapsed={collapsed} onToggle={this.toggle} menus={menus} />
                    <Layout>
                        <Header style={{ background: '#fff', padding: '0 16px' }}>
                            <GlobalHeader collapsed={collapsed} onToggle={this.toggle} />
                        </Header>
                        <Content>
                            <Router />
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>React-Admin ©2018 Created by 137596665@qq.com <a target='_blank' href='https://github.com/zhangZhiHao1996/react-admin-master'>github地址</a></Footer>
                    </Layout>
                </Layout>
            </div>
        );
    }
}
export default Index