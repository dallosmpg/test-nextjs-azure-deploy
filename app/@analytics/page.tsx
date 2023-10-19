import Link from "next/link"
// import { Metadata } from 'next'
 
// export const metadata: Metadata = {
//   title: 'Analytics gec',
// }

export default async function Page() {
        return (
            <>
                <Link className="link" href={"/"}>Go Home</Link>
                <h1>Hello, Analytics Page!</h1>
            </>
        )
}