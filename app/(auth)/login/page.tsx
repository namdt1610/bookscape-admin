import React from 'react'
import { Card } from 'antd/lib'
import LoginForm from './components/LoginForm'

const Login: React.FC = () => {
    return (
        <Card className="w-full max-w-6xl card-border">
            <div className="flex flex-col md:flex-row items-center justify-center w-full">
                <div className="w-full md:w-1/2 flex justify-center items-center">
                    <div className="w-full max-w-[450px] px-4">
                        <LoginForm />
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default Login
