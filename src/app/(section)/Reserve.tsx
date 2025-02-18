import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Reserve: React.FC = ({}) => {
    return (
        <section className="relative flex h-full w-full items-center justify-center">
            <div className="flex h-full w-full flex-col-reverse items-center justify-center gap-4 bg-[#161616] lg:flex-row lg:gap-0">
                <div className="h-full w-full overflow-hidden p-4 lg:w-1/2 lg:p-0">
                    <Image src="/images/home/booking/dining.png" width={948} height={880} alt="private dining" className="h-auto w-full rounded-lg lg:rounded-none" />
                </div>
                <div className="flex h-full w-full flex-col items-center gap-6 p-6 md:items-start lg:w-1/2 lg:p-0 lg:pl-20">
                    <h1 className="text-center font-playfair text-4xl font-[400] capitalize text-[#D3AF5E] sm:text-5xl lg:text-start">
                        Reserve Your
                        <br />
                        Table at Bamboo
                    </h1>
                    <p className="font-inter max-w-[450px] text-center text-sm font-[300] leading-[140%] text-[#D7D7D7] md:text-start lg:text-base">
                        Experience the charm of Twickenham hospitality. Visit Cafe Pera for a memorable outing filled with delicious meals and a cozy ambiance.
                    </p>
                    <Link href={"/contact"}>
                        <Button className="flex flex-row gap-2 rounded-none bg-[#D3AF5E] px-7 py-7 text-center font-playfair text-sm font-[500] capitalize leading-[80%] tracking-[1px] text-[#000]">
                            Contact US <ArrowRight className="w-4" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Reserve;
