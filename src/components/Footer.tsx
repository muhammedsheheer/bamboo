import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "./Icon";

const Footer = ({}) => {
    return (
        <footer className="h-full w-full bg-[#000] px-4 pb-12 pt-12 sm:px-[10px] md:px-[50px] md:pt-20 lg:px-[80px]">
            <div className="flex flex-col gap-4 md:gap-6">
                <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-20 2xl:gap-40">
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
                <div className="flex flex-row items-center justify-center gap-4 md:mr-[2%]">
                    <Icons.google className="text-[#d5a859]" />
                    <Icons.instagram className="text-[#d5a859]" />
                    <Icons.facebook className="text-[#d5a859]" />
                </div>
                <div className="flex flex-col items-center justify-center gap-4 lg:flex-row lg:gap-28 lg:pl-[2%] lg:pt-6">
                    <div className="flex flex-row items-center justify-between gap-16">
                        <div className="flex flex-col items-center justify-center gap-3">
                            <h6 className="font-playfair text-base font-[600] capitalize tracking-[0.48px] text-[#D3AF5E] lg:text-lg">Hours of Operation</h6>
                            <p className="text-center font-playfair text-sm font-[400] capitalize tracking-[0.44px] text-[#ECE6D6] lg:text-base">
                                Mon-Sat: 11pm-10:00pm, <br />
                                Sun: 12pm-10:00pm
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-between gap-10">
                        <div className="hidden h-[120px] border-r-[1px] border-r-[rgba(213,168,89,0.40)] lg:block" />
                        <div className="flex flex-col items-center justify-center gap-1">
                            <h6 className="font-playfair text-base font-[600] capitalize tracking-[0.48px] text-[#D3AF5E] lg:text-lg">Address </h6>
                            <div className="flex flex-col gap-0">
                                <Link href={""} target="_blank" className="text-center">
                                    <span className="text-center font-playfair text-sm font-[400] capitalize tracking-[0.44px] text-[#ECE6D6] lg:text-base">
                                        30-32 Humberstone Rd, Leicester <br /> LE5 0AR, United Kingdom <br />
                                        <br />
                                    </span>
                                </Link>
                                <Link className="text-center font-playfair text-sm font-[400] capitalize tracking-[0.44px] text-[#ECE6D6] lg:text-base" href={""}>
                                    441162514779
                                </Link>
                            </div>
                        </div>
                        <div className="hidden h-[120px] border-r-[1px] border-r-[rgba(213,168,89,0.40)] lg:block" />
                    </div>
                    <div className="flex flex-row items-center justify-between gap-16">
                        <div className="flex flex-col items-center justify-center gap-3">
                            <Image src={"/images/home/hero/bike.svg"} width={41} height={41} alt="insta" className="w-12" />
                            <p className="text-center font-playfair text-sm font-[400] capitalize tracking-[0.44px] text-[#ECE6D6] lg:text-base">
                                Craving Aroma Shawarma at home? <br />
                                Get it delivered via <span className="text-[#D3AF5E] underline">UberEats </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-6 hidden h-1 border-b-[1px] border-b-[rgba(213,168,89,0.40)] lg:block" />
            </div>
        </footer>
    );
};

export default Footer;
