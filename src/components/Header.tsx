import { HomeIcon, File, UsersRound } from "lucide-react";
import Link from "next/link";
import { Navbutton } from "@/components/Navbutton";
import { ModeToggle } from "@/components/ModeToggle";

export function Header() {
  return (
    <header className="animate-slide bg-background flex w-full h-12 p-2 border-b sticky top-0 z-20">
      <nav className="flex grow h-8 items-center justify-between">
        <div className="flex items-center gap-2">
          <Navbutton href="/home" label="Home" icon={HomeIcon} />
          <Link
            href="/home"
            className="flex justify-center items-center gap-2 ml-0"
            title="Home"
          >
            <h1 className="hidden sm:block text-xl font-bold m-0">
              Computer Repair Shop
            </h1>
          </Link>
        </div>
        <div className="flex justify-right items-center">
          <Navbutton href="/tickets" label="Tickets" icon={File} />
          <Navbutton href="/customers" label="Customers" icon={UsersRound} />
        </div>
      </nav>
      <ModeToggle />
    </header>
  );
}
