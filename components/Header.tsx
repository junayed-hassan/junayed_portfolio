import Link from "next/link";
import { Button } from "./ui/button";
// component
import Nav from "./Nav";

function header() {
    return (
        <header className="py-8 xl:py-12 text-white ">
            <div className="container mx-auto flex justify-between items-center">
                {/* logo */}
                <Link href="/">
                    <h1 className="text-4xl font-semibold">junayed <span className="text-accent">.</span></h1>
                </Link>

                {/* desktop nav & hire me button */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav/>
                    <Link href="/contact">
                        <Button>hire me</Button>
                    </Link>
                </div>

                {/* mobile nav */}
                <div className="xl:hidden ">mobile nav</div>

            </div>
        </header>
    )
}

export default header