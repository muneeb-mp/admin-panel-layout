import Footer from "@/components/footer";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { LoginFormSchema } from "@/schema/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PasswordInput } from "@/components/ui/password-input";
import { useAppDispatch } from "@/hooks/redux";
import { setAuth } from "@/store/slices/common";

const Login = () => {
  const nav = useNavigate();
  const dispatch = useAppDispatch();

  const form = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
  });

  function onSubmit(data: z.infer<typeof LoginFormSchema>) {
    toast({
      duration: 3000,
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });

    dispatch(setAuth(true));
    nav("/select/search");
  }

  return (
    <main className="min-h-dvh flex flex-col">
      <div className="flex-grow flex justify-center items-center bg-gradient-to-r from-red-300 to-fuchsia-300 p-4">
        <Card className="rounded-lg px-4 py-8 sm:px-4 md:px-8 md:py-12 w-full min-w-[240px] max-w-96">
          <h1 className="font-bold text-3xl ">Login</h1>
          <p className="text-gray-500">Welcome to the login page</p>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="mt-4 space-y-4"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <PasswordInput
                        placeholder="Enter your password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" variant={"destructive"} className="w-full">
                Login
              </Button>
            </form>
          </Form>
        </Card>
      </div>
      <Footer />
    </main>
  );
};

export default Login;
