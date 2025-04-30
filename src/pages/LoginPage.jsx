import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormDescription,
  FormItem,
  FormMessage,
  FormLabel,
  FormField,
  FormControl,
} from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginFormSchema = z.object({
  username: z
    .string()
    .min(3, "Username has to be 3 characters or more")
    .max(16, "Username has to be less than 16 characters"),
  password: z.string().min(8, "Your password needs to be 8 characters or more"),
});

const LoginPage = () => {
  const form = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: zodResolver(loginFormSchema),
    reValidateMode: "onChange"
  });

  const handleLogin = (values) => {
    alert(`Name: ${values.username} Password: ${values.password}`);
  };

  const [isChecked, setIsChecked] = useState(false);

  return (
    <main className="px-4 container py-8 flex flex-col justify-center max-w-screen items-center h-[80vh]">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleLogin)}
          className="w-full max-w-[540px]"
        >
          <Card>
            <CardHeader>
              <CardTitle>Welcome Back</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              <div>
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormDescription />
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div>
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type={isChecked ? "text" : "password"}
                        />
                      </FormControl>
                      <FormDescription />
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  onCheckedChange={(checked) => setIsChecked(checked)}
                  id="show-password"
                />
                <Label htmlFor="show-password">Show Password</Label>
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex flex-col space-y-4 w-full">
                <Button disabled={!form.formState.isValid}>Login</Button>
                <Button variant="link">Sign up instead</Button>
              </div>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </main>
  );
};

export default LoginPage;
