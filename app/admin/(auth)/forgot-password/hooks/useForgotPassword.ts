import { useRequestPasswordResetMutation } from '@/services/AuthApi'

export const useForgotPassword = (email: string) => {
    const [requestPasswordReset, { isLoading, isSuccess, isError }] =
        useRequestPasswordResetMutation()

    const handleSubmit = async () => {

        try {
            await requestPasswordReset({ email }).unwrap()
        } catch (err: any) {
            const errorMsg =
                err.data?.message ||
                'Failed to send reset link. Please try again.'
        }
    }

    return {
        handleSubmit,
        isLoading,
        isSuccess,
        isError
    }
}
