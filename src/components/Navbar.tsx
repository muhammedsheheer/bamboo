"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Sidebar from "./SideBar";
import { cn } from "@/lib/utils";

const Navbar = ({ position = "static" }: { position?: "static" | "fixed" | "absolute" }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const heroHeight = document.getElementById("hero")?.offsetHeight ?? 0;
            setIsScrolled(window.scrollY > heroHeight);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={cn(`${position} top-0 z-50 flex h-[10vh] w-full flex-col items-center bg-transparent p-4 transition-all duration-0 ease-in-out`, isScrolled && "bg-black")}>
            <div className="flex w-full max-w-[1300px] flex-col items-center gap-2">
                <div className="flex h-full w-full items-center justify-between md:justify-center">
                    <div className="lg:hidden">
                        <Link href="/">
                            <Image src="/images/home/hero/LOGO.png" width={114} height={35} alt="logo" />
                        </Link>
                    </div>
                    <div className="hidden flex-row items-center justify-center gap-28 pt-5 md:flex">
                        <Button asChild variant="link" className="text-center font-playfair text-base font-[400] capitalize leading-[80%] tracking-[1.08px] text-[#fff]">
                            <Link href="/">Home</Link>
                        </Button>
                        <Button asChild variant="link" className="text-center font-playfair text-base font-[400] capitalize leading-[80%] tracking-[1.08px] text-[#fff]">
                            <Link href="/menu">Menu</Link>
                        </Button>
                        <Link href="/">
                            <Image src="/images/home/hero/LOGO.png" width={114} height={35} alt="logo" />
                        </Link>
                        <Button asChild variant="link" className="text-center font-playfair text-base font-[400] capitalize leading-[80%] tracking-[1.08px] text-[#fff]">
                            <Link href="/about-us">About</Link>
                        </Button>
                        <Button asChild variant="link" className="text-center font-playfair text-base font-[400] capitalize leading-[80%] tracking-[1.08px] text-[#fff]">
                            <Link href="/contact">Contact</Link>
                        </Button>
                    </div>
                    <Sidebar>
                        <Button variant="ghost" className="px-1 py-1 text-primary hover:bg-transparent hover:text-primary md:hidden">
                            <span className="sr-only">Menu</span>
                            <EqualizerIcon />
                        </Button>
                    </Sidebar>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

const EqualizerIcon: React.FC = () => {
    return (
        <div className="equalizer-icon rotate">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>
    );
};
