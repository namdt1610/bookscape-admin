'use client'

import { Provider } from 'react-redux'
import store from '@/lib/store' // <-- đúng đường dẫn store của bạn

export default function Providers({ children }: { children: React.ReactNode }) {
    return <Provider store={store}>{children}</Provider>
}
