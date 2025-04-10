'use client'
import { ForgotPasswordForm } from './components'
import { motion } from 'framer-motion'
import { ErrorBoundaries } from '@/components'

export default function ForgotPwd() {
    return (
        <ErrorBoundaries>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center justify-center w-full h-screen"
            >
                <ForgotPasswordForm />
            </motion.div>
        </ErrorBoundaries>
    )
}
