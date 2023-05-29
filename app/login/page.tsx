/* eslint-disable tailwindcss/classnames-order */
"use client"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { siteConfig } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/button"
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
import { features } from "process"



export default function IndexPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [features, setFeatures] = useState<number[]>([])
  const [hold, setHold] = useState<number[]>([])
  const [up_down, setUpDown] = useState<number[]>([])
  const [down_down, setDownDown] = useState<number[]>([])
  const [keyPressTimes, setKeyPressTimes] = useState<number[]>([])
  const [keyReleaseTimes, setKeyReleaseTimes] = useState<number[]>([])
  const [keysPressed, setKeysPressed] = useState<string[]>([])
  const passwordRef = useRef<HTMLInputElement>(null)
  const [isFeaturesUpdated, setIsFeaturesUpdated] = useState(false);

  // def on_key_press(key):
  // key_press_times.append(time.time())

const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  console.log(e.key)
  setKeyPressTimes((prev) => [...prev, performance.now()]);
  setKeysPressed((prev) => [...prev, e.key]);
}

const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
  console.log(e.key)
  setKeyReleaseTimes((prev) => [...prev, performance.now()]);
}






const onPasswordFocus = (e: React.FocusEvent<HTMLInputElement>) => {
  e.preventDefault()
  setFeatures([])
  setHold([])
  setUpDown([])
  setDownDown([])
  setKeyPressTimes([])
  setKeyReleaseTimes([])
}



const onPasswordReturn = (e: any) => {
  e.preventDefault()
  console.log("key press times", keyPressTimes.length)
  console.log("Keys pressed", keysPressed)

  let newHold = [];
  let newUpDown = [];
  let newDownDown = [];

  for (let i = 0; i < keyPressTimes.length; i++) {
    if (i === 5) {
      newHold.push(keyReleaseTimes[i+1] - keyPressTimes[i]);
      continue;
    }
    if (i === 6) {
      newUpDown.push(keyPressTimes[i+1] - keyReleaseTimes[i]);
      newDownDown.push(keyPressTimes[i+1] - keyPressTimes[i-1]);
      continue;
    }
    newHold.push(keyReleaseTimes[i] - keyPressTimes[i]);
    if (i !== keyPressTimes.length-1) {
      newUpDown.push(keyPressTimes[i+1] - keyReleaseTimes[i]);
      newDownDown.push(keyPressTimes[i+1] - keyPressTimes[i]);
    }
  }


  setHold(newHold);
  setUpDown(newUpDown);
  setDownDown(newDownDown);

  let newFeatures = [];

  for (let i = 0; i < newHold.length; i++) {
    if (i === 0) {
      newFeatures.push(newHold[i]);
    } else {
      newFeatures.push(newDownDown[i-1]);
      newFeatures.push(newUpDown[i-1]);
      newFeatures.push(newHold[i-1]);
    }
  }

  setFeatures(newFeatures);
  setIsFeaturesUpdated(true);
}


useEffect(() => {
  const fetchToken = async () => {
    // Only make the API call when features are updated and the form is being submitted
    if (isFeaturesUpdated) {
      let data = {
        username: username,
        password: password,
        features: features,
      }

      console.log(JSON.stringify(data))
      const response = await fetch("http://34.165.26.38:8001/api/token/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const responseData = await response.json()
      console.log(responseData)

      // reset isFeaturesUpdated after the API call
      setIsFeaturesUpdated(false);
    }
  }

  fetchToken();
}, [isFeaturesUpdated]); // Only trigger the effect when isFeaturesUpdated changes

const handleSubmit = (e: any) => {
  e.preventDefault()
  onPasswordReturn(e)
}
  return (
    <section className="container grid items-center gap-10 pb-8 pt-6 md:py-10 h-[90vh]">
      <div className="flex w-full flex-col items-center gap-2">
        <Card className="w-[500px] flex flex-col items-center">
          <CardHeader>
            <CardTitle className="text-center text-md sm:text-2xl ">
              Login
            </CardTitle>
          </CardHeader>
          <CardContent className="w-full mt-2">
            <form className="">
              <div className="grid w-full items-center  gap-4 space-y-4">
                <div className="flex flex-col w-[100%]  space-y-1.5">
                  <Label htmlFor="name">Username</Label>
                  <Input
                    type="text"
                    className="w-full "
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    id="email"
                    placeholder="johnsmith@gmail.com"
                  />
                </div>
                <div className="flex flex-col w-[100%]  space-y-1.5">
                  <Label htmlFor="name">Password</Label>
                  <Input
                    type="password"
                    ref={passwordRef}
                    className="w-full"
                    value={password}
                    onFocus={(e) => onPasswordFocus(e)}

                    onKeyDown={handleKeyDown}
                    onKeyUp={handleKeyUp}

                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
                    placeholder="***********"
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex w-full  justify-between mt-4 space-x-4">
            <CardDescription className="mt-2 text-white">
              Have an account already?{" "}
              <Link className="text-blue-300" href={siteConfig.links.signUp}>
                Sign Up
              </Link>
            </CardDescription>
            <Button onClick={(e) => handleSubmit(e)}>Login</Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}
