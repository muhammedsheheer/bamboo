"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const Welcome = ({}) => {
    return (
        <section className="flex h-full w-full flex-col gap-8 bg-[#000] px-4 pb-12 pt-12 md:gap-12 md:px-0 md:pb-0 md:pt-20">
            <div className="flex flex-col items-center justify-center gap-4 md:gap-8">
                <span className="font-playfair text-lg font-[400] lowercase tracking-[5px] text-[#D3AF5E] md:text-xl">bamboo fresh </span>
                <h2 className="text-center font-playfair text-3xl font-[400] capitalize tracking-[1px] text-[#DDD1BD] md:text-start md:text-5xl">The Heart Behind the Plate</h2>
                <p className="font-inter w-full max-w-[750px] text-center font-[300] text-[#fff]">
                    At Bosphorus Istanbul, every dish is crafted with passion, using the finest ingredients and time-honored recipes that transport you to the bustling streets of
                    Turkey.
                </p>
                <Link href={"/table-booking"}>
                    <Button className="flex flex-row gap-2 rounded-none bg-[#D3AF5E] px-8 py-6 text-center font-playfair text-sm font-[500] capitalize leading-[80%] tracking-[1px] text-[#000]">
                        Book Now <ArrowRight className="w-4" />
                    </Button>
                </Link>
            </div>
            <div className="flex w-full flex-col gap-4 md:flex-row md:gap-6">
                <Image
                    src="/images/home/welcome/image1.png"
                    width={417}
                    height={576}
                    alt="private dining"
                    className="hidden h-[300px] w-full rounded-lg object-cover md:block md:h-[400px] md:w-[25%] lg:rounded-none"
                />
                <Image
                    src="/images/home/welcome/image2.png"
                    width={417}
                    height={576}
                    alt="private dining"
                    className="h-[300px] w-full rounded-lg object-cover md:h-[500px] md:w-[25%] lg:rounded-none"
                />
                <Image
                    src="/images/home/welcome/image3.png"
                    width={417}
                    height={576}
                    alt="private dining"
                    className="h-[300px] w-full rounded-lg object-cover md:h-[400px] md:w-[35%] lg:rounded-none"
                />
                <Image
                    src="/images/home/welcome/image4.png"
                    width={417}
                    height={576}
                    alt="private dining"
                    className="hidden h-[300px] w-full rounded-lg object-cover md:block md:h-[500px] md:w-[15%] lg:rounded-none"
                />
            </div>
        </section>
    );
};

export default Welcome;
