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
  FormItem,
  FormMessage,
  FormLabel,
  FormField,
} from "@/components/ui/form";

const LoginPage = () => {
  const form = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  // const [inputUsername, setInputUsername] = useState("");
  // const [inputPassword, setInputPassword] = useState("");

  const [isChecked, setIsChecked] = useState(false);

  return (
    <main className="px-4 container py-8 flex flex-col justify-center max-w-screen items-center h-[80vh]">
      <Form {...form}>
        <form className="w-full max-w-[540px]">
          <Card>
            <CardHeader>
              <CardTitle>Welcome Back</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              <div>
                <Label htmlFor="username">Username</Label>
                <Input
                  // onChange={(event) => {
                  //   setInputUsername(event.target.value);
                  // }}
                  id="username"
                />
              </div>

              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  // onChange={(event) => {
                  //   setInputPassword(event.target.value);
                  // }}
                  id="password"
                  type={isChecked ? "text" : "password"}
                ></Input>
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
                <Button>Login</Button>
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
