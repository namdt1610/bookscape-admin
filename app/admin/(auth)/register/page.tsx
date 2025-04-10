'use client'
import { motion } from 'framer-motion'
import { RegisterForm } from './components'

export default function RegisterPage() {
    console.log('RegisterForm:', RegisterForm) // nếu là undefined -> bạn biết lý do rồi đấy

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center w-full h-screen"
        >
            <RegisterForm />
        </motion.div>
    )
}
