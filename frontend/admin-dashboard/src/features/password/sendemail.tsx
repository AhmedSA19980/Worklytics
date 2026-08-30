"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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

import { FieldErrors, useForm } from "react-hook-form";
import Link from "next/link";
import { sendingemailSchema } from "@/schemas/sendemail";

type formData = z.infer<typeof sendingemailSchema>;

export default function SendEmailForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>({
    resolver: zodResolver(sendingemailSchema),
    mode: "onSubmit",
  });

  const onSubmit = (data: formData) => {
    //console.log(data);
  };
  const onError = (errors: FieldErrors<formData>) => {
    // console.log(errors);
  };

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Email</CardTitle>
        <CardDescription>
          Enter your email to reset your password 
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
              <Label className="text-lg" htmlFor="email">
                email
              </Label>
              <Input
                {...register("email")}
                className="text-lg font-semibold"
                id="email"
                type="email"
              />
              <p className="mt-1 font-bold text-sm text-red-700 text-shadow-2xs">
                {errors.email?.message}
              </p>
            </div>
          </div>
          <CardFooter className="flex-col gap-2">
            <Button type="submit" className="w-full">
              submit
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
