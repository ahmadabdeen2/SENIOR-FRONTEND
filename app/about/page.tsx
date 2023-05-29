/* eslint-disable tailwindcss/classnames-order */
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


const team = [
  {
    name: "Ahmad Abdeen",
    role: "AI - FRONTEND/UX",
    description: "Hi, my name is Ahmad and I am a student at Istanbul Bilgi University. I am passionate about Frontend & UX Engineering, I like to learn and understand how users interact with screens, I also like Machine learning because it contributes to UX!",
  },
  {
    name: "Yusuf Mansur",
    role: "AI - BACKEND",
    description: "Hi, my name is Yusuf and I am a student at Istanbul Bilgi University. I am passionate about Backend Engineering, I like to learn and understand how servers work and how to make them more efficient",
  },
  {
    name: "Mahmoud Mohanna",
    role: "AI - BACKEND",
    description: "Hi, my name is Mahmoud and I am a student at Istanbul Bilgi University. I am passionate about Backend Engineering, I like to learn and understand how servers work and how to make them more efficient",
  },


]

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-10 pb-8 pt-6 md:py-10 min-h-screen">
      <div className="flex max-w-[980px] flex-col items-start justify-center gap-2 h-[80vh] ">
        <h1 className="text-3xl font-extrabold leading-10 tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
        About Us
        </h1>
        <p className="max-w-[700px] text-lg leading-10 text-muted-foreground sm:text-lg pt-2">
        Hello, we are a team of 3 and we worked this project together in 3 countries. We are all students at Istanbul Bilgi University and we are all passionate about Tech. We hope you enjoy our project!
        </p>
      {/* </div> */}
      <div className="flex gap-4 pt-4">

        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.signUp}
          className={buttonVariants({ size: "lg" })}
        >
          Get Started
        </Link>
      </div>
      </div>
      <div className="flex flex-col items-start">
      <h1 className="text-3xl font-extrabold leading-10 tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl mb-10">
        The Team
        </h1>
<div className="flex flex-col gap-6 md:flex-row md:justify-between  w-full ">
{
  team.map((member, index) => (
    <Card className="w-full md:w-[30%] flex flex-col justify-between">
    <CardHeader className="space-y-4">
      <CardTitle className="mt-4">{member.name}</CardTitle>
      <CardDescription className="">{member.description}</CardDescription>
    </CardHeader>

    <CardFooter className="flex justify-between">
    <CardTitle className="mt-4">{member.role}</CardTitle>
    </CardFooter>
  </Card>
  ))

}


    </div>
      </div>
    </section>
  )
}
