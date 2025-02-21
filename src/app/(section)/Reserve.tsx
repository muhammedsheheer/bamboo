import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Reserve: React.FC = ({}) => {
    return (
        <section className="h-full w-full bg-[#161616] px-4 py-12 md:px-[50px] md:py-24">
            <div className="flex flex-col gap-6 md:gap-10">
                <div className="flex flex-col items-center justify-center gap-1 md:flex-row md:gap-20">
                    <h2 className="font-manrope text-center text-4xl font-[400] capitalize text-[#E7E6E6] md:text-6xl">Reserve</h2>
                    <h3 className="font-manrope text-center text-lg font-[400] capitalize text-[#DCB355] md:mt-4 md:text-xl">OUR MENU</h3>
                    <h2 className="font-manrope text-center text-4xl font-[400] capitalize text-[#E7E6E6] md:text-6xl">Table</h2>
                </div>
                <div className="flex flex-col gap-6 md:flex-row md:gap-14">
                    <div className="w-full md:w-[35%]">
                        <Image className="h-[300px] w-full object-cover md:h-[450px]" src="/images/home/booking/image.png" width={536} height={517} alt="image" />
                    </div>
                    <div className="flex w-full flex-col items-center justify-center gap-4 md:mb-20 md:w-[30%] md:gap-8">
                        <p className="font-manrope w-full max-w-[400px] text-center text-sm font-[300] uppercase tracking-[1.5px] text-[#fff] md:text-base">
                            Bamboo Fresh brings you the rich flavors of Turkish cuisine with fresh, high-quality ingredients and authentic recipes. high-quality
                        </p>
                        <Link href={"/menu"}>
                            <Button className="font-manrope rounded-full bg-[#DCB355] px-12 py-7 text-center text-sm font-[400] uppercase leading-[110%] text-[#000]">
                                Book Now
                            </Button>
                        </Link>
                    </div>
                    <div className="hidden w-full md:block md:w-[35%]">
                        <Image className="h-[300px] w-full object-cover md:h-[450px]" src="/images/home/booking/image.png" width={536} height={517} alt="image" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reserve;
