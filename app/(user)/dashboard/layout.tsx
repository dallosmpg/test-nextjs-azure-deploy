import Link from "next/link"

export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        <nav>
            <ul className="flex gap-4 justify-center">
                <li>The</li>
                <li>Dashboard</li>
                <li>Layout.tsx</li>
            </ul>
        </nav>
   
        {children}
      </section>
    )
  }