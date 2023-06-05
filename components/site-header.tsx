'use client'

import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { useRouter } from "next/navigation"
import useLocalStorage from "@/lib/hooks"

// import { useState } from "react"

export default function SiteHeader() {

  const token = localStorage.getItem("token")
  console.log("siteheader", token)

  const router = useRouter()
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        {token !== null ? (
          <MainNav items={siteConfig.loggedInNav} />
        ) : (
          <MainNav items={siteConfig.mainNav} />
        )}

        <nav className="flex items-center">
          <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
            <div
              className={buttonVariants({
                size: "sm",
                variant: "ghost",
              })}
            >

              <Icons.gitHub className="h-5" />
              <span className="sr-only">GitHub</span>
            </div>
          </Link>

          <ThemeToggle />
          {token !== null ? (
          <Icons.logout
            className="h-5 w-5 cursor-pointer"
            onClick={() => {
              localStorage.removeItem("token")
              localStorage.removeItem("refresh")
              router.push("/")
              router.refresh()

              // window.location.reload()

            }}
          />
          ): null}
        </nav>
      </div>
    </header>
  )
}
