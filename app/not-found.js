import Link from "next/link";

export default function NotFound() {
  return (
    <main className="text-center">
      <h2 className="text-3x1"></h2>
      <p>We could not find this page</p>
      <p>Go back to the <Link href="/">Dashboard</Link></p>
    </main>
  )
}