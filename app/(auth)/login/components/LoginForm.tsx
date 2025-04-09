'use client'
import React from 'react'
import { Button, Checkbox, Form, Input, message } from 'antd'
import { useRouter } from 'next/navigation'
import { useLoginMutation } from '@/services/AuthApi'

const LoginForm: React.FC = () => {
    const router = useRouter()
    const [login, { isLoading, error }] = useLoginMutation()

    const onFinish = async (values: { email: string; password: string }) => {
        try {
            const res = await login({
                email: values.email,
                password: values.password,
            }).unwrap()

            localStorage.setItem('token', res.token)
            localStorage.setItem('user', JSON.stringify(res.user))

            message.success('Login successfully!')
            router.push('/dashboard') // Điều hướng sau khi đăng nhập thành công
        } catch (err: any) {
            if ('data' in err) {
                message.error(err.data?.message || 'Login fail!')
            } else {
                message.error('Login fail! Please try again.')
            }
            console.error('Login error:', err)
        }
    }

    const onFinishFailed = (errorInfo: any) => {
        message.error('Please fill in all required fields!')
        console.log('Failed:', errorInfo)
    }

    return (
        <Form
            style={{ width: 500, paddingRight: '90px' }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="on"
            layout="vertical"
        >
            <Form.Item
                label="Email"
                name="email"
                rules={[
                    { required: true, message: 'Please input your email!' },
                    {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                    },
                ]}
            >
                <Input autoComplete="email" placeholder="Enter your email" />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                    { required: true, message: 'Please input your password!' },
                ]}
            >
                <Input.Password
                    autoComplete="current-password"
                    placeholder="Enter your password"
                />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    loading={isLoading} // Thêm loading khi đang gọi API
                    className="btn-hover"
                    style={{ width: '100%' }}
                >
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}

export default LoginForm
