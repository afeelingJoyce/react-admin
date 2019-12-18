import React, { useEffect } from 'react';

import { withRouter } from 'react-router-dom'

import { Form, Icon, Input, Button, Checkbox } from 'antd';

import { useStore } from "../../store/index";
import { authenticateSuccess, isAuthenticated } from '../../utils/Session'

import './index.css'

function NormalLoginForm(props) {

    const { state, dispatch } = useStore();

    console.log(props)

    useEffect(() => {
        const isLogin = isAuthenticated();

        if (isLogin) props.history.go(1)

    }, []);

    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {

                dispatch({ type: "UPDATE_USER_INFO", userInfo: values });
                dispatch({ type: 'UPDATE_LOGIN_STATU', isLogin: true })

                const token = 'asndndnbss83837'
                //在coookie中存入token
                authenticateSuccess(token)

                //取到跳转到登录之前的路径 方便登录成功后 直接回去

                const fromPath = props.location.state && props.location.state.from.pathname || '/'
                props.history.push(fromPath)


            }
        });
    };

    const { getFieldDecorator } = props.form;


    return (
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '150px' }}>
            <Form onSubmit={handleSubmit} className="login-form">

                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(<Checkbox>Remember me</Checkbox>)}
                    <a className="login-form-forgot" href="">
                        Forgot password
          </a>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
          </Button>
                    Or <a href="">register now!</a>
                </Form.Item>
            </Form>

        </div>
    );
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default withRouter(WrappedNormalLoginForm)