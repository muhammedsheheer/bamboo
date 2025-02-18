"use client";
import EmblaCarousel from "@/app/(section)/(special)/MenuCarousel";
import { useRestaurant } from "@/context/RestaurantContext";
import type { EmblaOptionsType } from "embla-carousel";
import Image from "next/image";

const OPTIONS: EmblaOptionsType = { loop: true };

const Special = ({}) => {
    const { modelData } = useRestaurant();
    return (
        <section className="relative flex h-full w-full justify-center bg-[#070707]">
            <div className="absolute left-0 right-0 top-0 hidden lg:block">
                <Image src={"/images/home/hero/bambo.png"} width={1920} height={243} alt="bambo" className="w-full" />
            </div>
            <div className="flex h-full w-full max-w-[1300px] flex-col items-center justify-center gap-4 px-3 py-12 lg:px-0">
                <div className="flex w-full flex-col gap-4 md:justify-center lg:flex-row">
                    <div className="flex flex-col items-center justify-center lg:gap-7">
                        <h1 className="w-full text-center font-playfair text-4xl font-[400] capitalize text-[#DDD1BD] md:mt-20">Signature Flavours</h1>
                    </div>
                </div>
                {modelData && (
                    <div className="relative z-20 flex min-h-[400px] w-full flex-col justify-center px-2">
                        <EmblaCarousel slides={modelData} options={OPTIONS} />
                    </div>
                )}
            </div>
        </section>
    );
};

export default Special;
