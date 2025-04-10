import { useLoginMutation } from "@/services/AuthApi";

export const useLogin = () => {
      const [login, { isLoading, error }] = useLoginMutation();

      const handleSubmit = async (values: { email: string; password: string }) => {
            try {
                  const res = await login({
                        email: values.email,
                        password: values.password,
                  }).unwrap();

                  localStorage.setItem("token", res.token);
                  localStorage.setItem("user", JSON.stringify(res.user));

                  return { success: true };
            } catch (err: any) {
                  return { success: false, error: err };
            }
      };

      return { handleSubmit, isLoading, error };
}