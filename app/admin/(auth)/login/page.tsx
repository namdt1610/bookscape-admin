'use client'
import React, { Suspense } from 'react'
import { Skeleton } from 'antd'
import { motion } from 'framer-motion'
import { LoginForm } from './components'
import { ErrorBoundaries } from '@/components'

export default function LoginPage() {
    return (
        <ErrorBoundaries>
            <Suspense fallback={<Skeleton active />}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex items-center justify-center w-full h-screen"
                >
                    <LoginForm />
                </motion.div>
            </Suspense>
        </ErrorBoundaries>
    )
}

