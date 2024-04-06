'use-client'

import { Suspense } from "react";
import TicketList from "./TicketsList";
import Loading from "../loading";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Tickets() {
  const router = useRouter

  return (
    <main>
      <nav className="d-flex justify-between">
        <div>
          <h2>Tickets</h2>
          <p>
            <small>
              Currently open tickets.
            </small>
          </p>
        </div>
        <div>
        <Link href="/tickets/create">
          <button className="btn-primary">
            Add Ticket
          </button>
        </Link>
        </div>
      </nav>

      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </main>
  )
}