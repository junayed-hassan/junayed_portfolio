"use client";

import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";

const Links = [
    {
        name: "home",
        path:"/",
    },
    {
        name: "services",
        path:"/services",
    },
    {
        name: "resume",
        path:"/resume",
    },
    {
        name: "work",
        path:"/work",
    },
    {
        name: "contact",
        path:"/contact",
    }
]

function MobileNav() {

    const pathname = usePathname();

  return (
    <Sheet>
       <SheetTrigger className="flex justify-center items-center">
            <CiMenuFries className="text-[32px] text-accent " />
       </SheetTrigger>
       <SheetContent  aria-describedby="navigation-menu-description" className="flex flex-col">
            <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>
            <SheetDescription className="sr-only">This is the navigation menu for the site.</SheetDescription>
            {/* logo */}
            <div className="mt-20 mb-24 text-center text-2xl">
                <Link href="/">
                    <h1 className="text-4xl font-semibold ">junayed <span className="text-accent">.</span></h1>
                </Link>
            </div>
            {/* nav */}
            <nav className="flex flex-col justify-center items-center gap-4">
            {Links.map((link, index) => {
            return <Link href={link.path} key={index} className={`${link.path === pathname && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent  transition-all`} >{link.name}</Link>
        })}
            </nav>
       </SheetContent>
    </Sheet>
  )
}

export default MobileNav