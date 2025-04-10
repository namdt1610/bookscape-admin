import { message, Form } from 'antd'
import { useRegisterMutation } from '@/services/AuthApi'

interface RegisterFormValues {
      name: string
      email: string
      password: string
      confirmPassword: string
}

export const useRegister = () => {
      const [form] = Form.useForm()
      const [register, { isLoading, isError }] = useRegisterMutation()

      const handleSubmit = async (values: RegisterFormValues) => {
            try {

                  // Call the registration API
                  await register({
                        name: values.name,
                        email: values.email,
                        password: values.password,
                  }).unwrap()

            } catch (err: any) {
                  // Safe error handling
                  let errorMessage = 'Registration failed. Please try again.'

                  if (typeof err === 'string') {
                        errorMessage = err
                  } else if (
                        err?.data?.message &&
                        typeof err.data.message === 'string'
                  ) {
                        errorMessage = err.data.message
                  } else if (err?.message && typeof err.message === 'string') {
                        errorMessage = err.message
                  }

                  message.error(errorMessage)
                  console.error('Registration error:', err)
            }
      }

      return {
            handleSubmit,
            isError,
            isLoading,
            form,
      }
}
