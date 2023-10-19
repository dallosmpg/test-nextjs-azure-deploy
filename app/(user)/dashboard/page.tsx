
// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
import Link from "next/link"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard gec',
}

export default async function Page() {

    const weatherData = await fetch('https://api.paraglidable.com/?key=771cdfb5767d2000&format=JSON&version=1').then(res => res.json());
    const dateNow = new Date;
    const formattedDate = dateNow.toISOString()
    console.log(weatherData);
    console.log(formattedDate);
    const weatherDataKeys = Object.keys(weatherData);
        return (
            <>
                <Link className="link" href={"/"}>Go Home</Link>
                <div>{weatherData[weatherDataKeys[0]][0].forecast.XC}</div>
                <h1>Hello, Dashboard Page!</h1>
                <Link href={"/dashboard/settings"}>Go to settings!</Link>
            </>
        )
}