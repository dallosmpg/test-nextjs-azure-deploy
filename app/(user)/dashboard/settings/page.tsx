import Link from "next/link"

export default function Page() {
    return (
        <>
            <Link className="link" href={"/dashboard"}>Go back</Link>
            <h1>Hello, Dashboard-Settings Page!</h1>
        </>
    )
}