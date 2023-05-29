/* eslint-disable tailwindcss/classnames-order */
'use client'
import Link from "next/link"
import { useState } from "react"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"



export default function IndexPage() {
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // TODO: POST request to your Django backend with the email, password, and features.
    // Remember to clear the features, keyPressTimes and keyReleaseTimes after successful authentication.
    let data = {
      username: name,
      email: email,
      password: password,
    }
    console.log(data)
    const response = await fetch('http://34.165.26.38:8001/api/register/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      // credentials: "include"
    })
    const responseData = await response.json()
    console.log(responseData)
  };


  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  return (
    <section className="container grid items-center gap-10 pb-8 pt-6 md:py-10 h-[90vh]">
      <div className="flex w-full flex-col items-center gap-2">
     <Card className="w-[500px] flex flex-col items-center">
      <CardHeader>
        <CardTitle className="text-center text-md sm:text-2xl ">Sign Up Now</CardTitle>
        {/* <CardDescription></CardDescription> */}
      </CardHeader>
      <CardContent className="w-full mt-2">
        <form className="">
          <div className="grid w-full items-center  gap-4 space-y-4">
            <div className="flex flex-col w-[100%]  space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input className="w-full " value={name} onChange={(e) => setName(e.target.value)} id="name" placeholder="John Smith" />
            </div>
            <div className="flex flex-col w-[100%]  space-y-1.5">
              <Label htmlFor="name">Email</Label>
              <Input type="email" className="w-full " value={email} onChange={(e) => setEmail(e.target.value)} id="email" placeholder="johnsmith@gmail.com" />
            </div>
            <div className="flex flex-col w-[100%]  space-y-1.5">
              <Label htmlFor="name">Password</Label>
              <Input type="password" className="w-full " value={password} onChange={(e) => setPassword(e.target.value)} id="password" placeholder="***********" />
            </div>

          </div>
        </form>
      </CardContent>
      <CardFooter className="flex w-full  justify-between mt-4 space-x-4">
                <CardDescription className="mt-2 text-white">Dont have an account? <Link className="text-blue-300" href={siteConfig.links.login}>Login</Link></CardDescription>
        <Button onClick={(e) => handleSubmit(e)}>Sign Up</Button>

      </CardFooter>

    </Card>
      </div>
    </section>
  )
}
