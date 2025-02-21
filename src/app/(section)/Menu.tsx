import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Menu: React.FC = () => {
    return (
        <section className="h-full w-full bg-[#000] px-4 py-12 sm:px-[10px] md:px-[50px] lg:py-24 2xl:px-[80px]">
            <div className="flex flex-col gap-6 md:gap-12">
                <div className="flex flex-col items-center justify-center gap-1 md:flex-row md:gap-20">
                    <h2 className="font-manrope text-center text-4xl font-[400] capitalize text-[#E7E6E6] md:text-6xl">Menu</h2>
                    <h3 className="font-manrope text-center text-lg font-[400] capitalize text-[#DCB355] md:mt-4 md:text-xl">OUR MENU</h3>
                    <h2 className="font-manrope text-center text-4xl font-[400] capitalize text-[#E7E6E6] md:text-6xl">Highlights</h2>
                </div>
                <div className="flex flex-col gap-6 md:flex-row md:gap-10">
                    <Image className="h-[300px] w-full object-cover md:h-[450px] md:w-[33%]" src="/images/home/menu/image1.png" width={492} height={569} alt="image" />
                    <Image className="h-[300px] w-full object-cover md:h-[450px] md:w-[33%]" src="/images/home/menu/image2.png" width={333} height={516} alt="image" />
                    <Image className="h-[300px] w-full object-cover md:h-[450px] md:w-[33%]" src="/images/home/menu/image3.png" width={333} height={516} alt="image" />
                </div>
                <div className="flex items-center justify-center">
                    <Link href={"/menu"}>
                        <Button className="font-manrope rounded-full bg-[#DCB355] px-12 py-7 text-center text-sm font-[400] uppercase leading-[110%] text-[#000]">
                            VIEW MENU{" "}
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Menu;
