import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Docs trial project - Next.js'
}

export default function Page() {
  return (
    <>
      <h1>Hello, Home page!</h1>
      <Link className="link" href={"/dashboard"} >
        Go to Dashboard
      </Link>
    </>
  )
}