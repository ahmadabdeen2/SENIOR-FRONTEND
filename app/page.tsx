/* eslint-disable tailwindcss/classnames-order */
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-10 pb-8 pt-6 md:py-10 h-[90vh]">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-10 tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
        Defining the Future of Security  <br className="hidden sm:inline" />
        with Keystroke Dynamics
        </h1>
        <p className="max-w-[700px] text-lg leading-10 text-muted-foreground sm:text-lg pt-2">
        Welcome to AYM, where cybersecurity meets innovation. Our cutting-edge keystroke dynamics technology offers the ultimate in user verification, ensuring the utmost security for your digital world.
        </p>
      {/* </div> */}
      <div className="flex gap-4 pt-4">
        <Link
          href={siteConfig.links.about}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants({ size: "lg" })}
        >
          About Us
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.signUp}
          className={buttonVariants({ variant: "outline", size: "lg" })}
        >
          Get Started
        </Link>
      </div>
      </div>
    </section>
  )
}
