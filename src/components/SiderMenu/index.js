import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Menu, Icon, Layout } from 'antd'




const { Sider } = Layout;

function CustomMenu(props) {


  const [openKeys, setOpenKeys] = useState([])

  const [selectedKeys, setSelectedKeys] = useState([])

  useEffect(() => {
    // 防止页面刷新侧边栏又初始化了
    const pathname = props.location.pathname

    const uri = pathname.split('/')

    switch (uri.length) {

      case 2:  //一级目录

        setSelectedKeys([pathname])
        break;

      case 4: //三级目录，要展开两个subMenu

        setSelectedKeys([pathname])
        setOpenKeys([uri.slice(0, 2).join('/'), uri.slice(0, 3).join('/')])
        break;

      default:  //二级目录 展开一个subMenu

        //解决侧边栏dom渲染的闪烁问题
        setTimeout(() => {
          setSelectedKeys([pathname]);
          setOpenKeys([pathname.substr(0, pathname.lastIndexOf('/'))])
        }, 200)


    }
  }, []);

  useEffect(() => {

    const pathname = props.location.pathname;
    setSelectedKeys([pathname])
  }, [selectedKeys[0]]);

  const onOpenChange = (openKeys) => {


    if (openKeys.length === 0 || openKeys.length === 1) {
      setOpenKeys(openKeys)
      return
    }

    //最新展开的菜单
    const latestOpenKey = openKeys[openKeys.length - 1]

    if (latestOpenKey.includes(openKeys[0])) {
      setOpenKeys(openKeys)
    } else {
      setOpenKeys([latestOpenKey])
    }
  }

  const renderMenuItem = ({ path, icon, title, }) => {
    return (
      <Menu.Item key={path}>
        <Link to={path}>
          {icon && <Icon type={icon} />}
          <span>{title}</span>
        </Link>
      </Menu.Item>
    )
  }
  const renderSubMenu = ({ path, icon, title, children }) => {
    return (
      <Menu.SubMenu key={path} title={<span>{icon && <Icon type={icon} />}<span>{title}</span></span>}>
        {
          children && children.map(item => {
            return item.children && item.children.length > 0 ? renderSubMenu(item) : renderMenuItem(item)
          })
        }
      </Menu.SubMenu>
    )
  }

  return (

    <Sider
      style={{ height: '100vh', overflow: 'auto' }}
      collapsible
      trigger={null}
      collapsed={props.collapsed}>
      <div style={{ height: '32px', background: 'rgba(255,255,255,.2)', margin: '16px' }}></div>
      <Menu
        onOpenChange={onOpenChange}
        onClick={({ key }) => { setSelectedKeys([key]); }}
        openKeys={openKeys}
        selectedKeys={selectedKeys}
        theme={props.theme ? props.theme : 'dark'}
        mode='inline'>
        {
          props.menus && props.menus.map(item => {
            return item.children && item.children.length > 0 ? renderSubMenu(item) : renderMenuItem(item)
          })
        }
      </Menu>
    </Sider>

  )
}

const styles = {
  logo: {
    height: '32px',
    background: 'rgba(255, 255, 255, .2)',
    margin: '16px'
  }
}



export default withRouter(CustomMenu)