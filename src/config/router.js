import React from 'react'
import { Redirect, withRouter, Switch } from 'react-router-dom'
import { CustomRoute as Route } from './common'
import LoadableComponent from '../utils/LoadableComponent'

const Home = LoadableComponent(() => import('../pages/Home/index'))  //参数一定要是函数，否则不会懒加载，只会代码拆分
const ButtonDemo = LoadableComponent(() => import('../pages/General/ButtonDemo'))  //参数一定要是函数，否则不会懒加载，只会代码拆分
const IconDemo = LoadableComponent(() => import('../pages/General/IconDemo'))  //参数一定要是函数，否则不会懒加载，只会代码拆分
const FormDemo1 = LoadableComponent(() => import('../pages/Entry/FormDemo/FormDemo1'))  //参数一定要是函数，否则不会懒加载，只会代码拆分
const FormDemo2 = LoadableComponent(() => import('../pages/Entry/FormDemo/FormDemo2'))  //参数一定要是函数，否则不会懒加载，只会代码拆分
const UploadDemo = LoadableComponent(() => import('../pages/Entry/UploadDemo/index'))  //参数一定要是函数，否则不会懒加载，只会代码拆分




function Router() {
    return (
        <div style={{ padding: 16, position: 'relative' }}>
            <Switch>
                <Route exact path='/home' component={Home} />
                <Route exact path='/general/button' component={ButtonDemo} />
                <Route exact path='/general/icon' component={IconDemo} />
                <Route exact path='/entry/form/basic-form' component={FormDemo1} />
                <Route exact path='/entry/form/step-form' component={FormDemo2} />
                <Route exact path='/entry/upload' component={UploadDemo} />
                <Redirect exact from='/' to='/home' />
            </Switch>
        </div>
    )
}

export default withRouter(Router)