"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { FieldErrors, useForm} from "react-hook-form";
import Link from "next/link";
import { newPasswordSchema } from "@/schemas/pass";

type formData = z.infer<typeof newPasswordSchema>

export default function ResettingPasswordForm()  {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>({
    resolver: zodResolver(newPasswordSchema),
    mode: "onSubmit",
  });

  const onSubmit = (data:formData) => {
    
    //console.log(data);
  }
  const onError = (errors: FieldErrors<formData>) => {
   // console.log(errors);
  };

    return (
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Login To your Account</CardTitle>
          <CardDescription>
            Enter new password below to confirm the password
          </CardDescription>
          <CardAction>
            <Button className="text-lg" variant="link">
              <Link
                href="/signup"
                className="text-lg font-bold  text-slate-600 hover:text-blue-600"
              >
                Sign up
              </Link>
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={handleSubmit(onSubmit, onError)}
            method="POST"
            noValidate
          >
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                
                  <Label className="text-lg" htmlFor="password">
                    Password
                  </Label>
                <Input
                  {...register("password")}
                  className="text-lg font-semibold"
                  id="password"
                  type="password"
                />
                <p className="mt-1 font-bold text-sm text-red-700 text-shadow-2xs">
                  {errors.password?.message}
                </p>
              </div>
            </div>
            <CardFooter className="flex-col gap-2">
              <Button type="submit" className="w-full">
                Confirm Password
              </Button>
              {/*<Button variant="outline" className="w-full">
                signup with Google
              </Button>*/}
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    );
}
