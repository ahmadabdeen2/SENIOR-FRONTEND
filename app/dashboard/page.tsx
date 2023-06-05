/* eslint-disable tailwindcss/classnames-order */
'use client'
import Link from "next/link"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { useState } from "react"
import { useRouter } from "next/navigation"



import { Textarea } from "@/components/ui/textarea"

import useLocalStorage from "@/lib/hooks"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import PreviewPane from "@/components/PreviewPane"

const commits = [
  {
    commitDate: "16/5/2023",
    Name: "Ahmad",
    commitId: "1123563",
    commitMessage: "Fixed Bugs",
  },
  {
    commitDate: "INV002",
    Name: "Yousef",
    commitId: "1123562",
    commitMessage: "Changed Name",
  },
  {
    commitDate: "INV003",
    Name: "Mahmoud",
    commitId: "1123561",
    commitMessage: "Added New Feature",
  },
  {
    commitDate: "INV004",
    Name: "Ahmad",
    commitId: "1123560",
    commitMessage: "Changed Color",
  },
  {
    commitDate: "INV005",
    Name: "Ahmad",
    commitId: "1123559",
    commitMessage: "Added New Feature",
  },
  {
    commitDate: "INV006",
    Name: "Yousef",
    commitId: "1123556",
    commitMessage: "Fixed Bugs",
  },
  {
    commitDate: "INV007",
    Name: "Mahmoud",
    commitId: "1123550",
    commitMessage: "Changed Name",
  },
]

export default function IndexPage() {
  const router = useRouter()

  const token = localStorage.getItem("token")

  const [html,setHtml] = useState("")
  const [css,setCss] = useState("")
  const [js,setJs] = useState("")
  console.log(token)
  if (token == null) {
    router.push("/login")

  }



  return (
    <section className="container grid gap-10 pb-8 pt-6 md:py-10">
      <div className="flex w-full flex-col items-start gap-2">
        <h1 className="text-xl font-extrabold leading-10 tracking-tighter">
        Hello {localStorage.getItem("username")}
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-lg">
        Welcome back to your IDE
        </p>

        <div className="w-full mt-6">
        <h1 className="text-xl  font-extrabold leading-10 tracking-tighter">
        Recent Commits
        </h1>
        <Table className="border-[1px] mt-2">

      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Date</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Commit Message</TableHead>
          <TableHead className="text-right">Commit ID </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {commits.map((commit) => (
          <TableRow key={commit.commitId}>
            <TableCell className="font-medium">{commit.commitDate}</TableCell>
            <TableCell>{commit.Name}</TableCell>
            <TableCell>{commit.commitMessage}</TableCell>
            <TableCell className="text-right">{commit.commitId}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </div>
    <div className="w-full mt-6 flex justify-between">
      <div className="flex flex-col justify-start w-[32%]">
        <h1 className="text-xl  font-extrabold leading-10 tracking-tighter">
        HTML
        </h1>
    <Textarea onChange={(e) => setHtml(e.target.value)} value={html} className="mt-2 h-[50vh]" placeholder="Add your HTML here." />
    </div>
    <div className="flex flex-col justify-start w-[32%]">
        <h1 className="text-xl  font-extrabold leading-10 tracking-tighter">
        CSS
        </h1>
    <Textarea onChange={(e) => setCss(e.target.value)} value={css} className="mt-2 h-[50vh]" placeholder="Add your CSS here." />
    </div>
    <div className="flex flex-col justify-start w-[32%]">
        <h1 className="text-xl  font-extrabold leading-10 tracking-tighter">
        JS
        </h1>
    <Textarea onChange={(e) => setJs(e.target.value)} value={js} className="mt-2 h-[50vh]" placeholder="Add your JS here." />
    </div>
</div>
<PreviewPane js={js} html={html} css={css} />


      </div>
    </section>
  )
}
