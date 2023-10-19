import Link from "next/link"
// import { Metadata } from 'next'
 
// export const metadata: Metadata = {
//   title: 'Team gec',
// }

export default async function Page() {
        return (
            <>
                <Link className="link" href={"/"}>Go Home</Link>
                <h1>Hello, Team Page!</h1>
            </>
        )
}