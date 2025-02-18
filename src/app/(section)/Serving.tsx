"use client";
import Image from "next/image";

const Discover = ({}) => {
    return (
        <section className="relative h-full w-full bg-[#161616] px-4 py-12 md:h-screen md:px-[50px] 2xl:px-[100px]">
            <div className="absolute left-[35%] top-[200px] hidden md:block">
                <h3 className="text-center font-playfair text-4xl font-[400] lowercase tracking-[0.08px] text-[#DDD1BD] md:text-6xl">
                    <span className="text-[#D3AF5E]">Discover</span> the Taste
                </h3>
            </div>
            <div className="absolute left-[25%] top-[280px] hidden md:block">
                <h3 className="font-playfair text-4xl font-[400] lowercase tracking-[0.08px] text-[#DDD1BD] md:text-6xl">Discover the Taste</h3>
            </div>
            <div className="absolute left-[35%] top-[370px] hidden md:block">
                <h3 className="text-center font-playfair text-4xl font-[400] lowercase tracking-[0.08px] text-[#DDD1BD] md:text-6xl">
                    <span className="text-[#D3AF5E]">Discover</span> the Taste
                </h3>
            </div>
            <div className="absolute left-[25%] top-[450px] hidden md:block">
                <h3 className="font-playfair text-4xl font-[400] lowercase tracking-[0.08px] text-[#DDD1BD] md:text-6xl">Discover the Taste</h3>
            </div>
            <div className="absolute left-20 top-[25%] hidden md:block">
                <Image
                    src="/images/home/welcome/image2.png"
                    width={417}
                    height={576}
                    alt="private dining"
                    className="h-[300px] w-full rounded-lg object-cover md:block md:h-[400px] lg:rounded-none"
                />
            </div>
            <div className="absolute right-20 top-[26%] hidden md:block">
                <div className="relative">
                    <div className="absolute -bottom-28 -right-4">
                        <Image src="/images/home/welcome/image.png" width={417} height={576} alt="private dining" className="h-60 w-40 rounded-full" />
                    </div>
                    <Image
                        src="/images/home/welcome/image2.png"
                        width={417}
                        height={576}
                        alt="private dining"
                        className="h-[300px] w-[400px] rounded-lg object-cover md:block md:h-[300px] lg:rounded-none"
                    />
                </div>
            </div>
            <div className="flex flex-col gap-6 md:hidden">
                <h3 className="text-center font-playfair text-4xl font-[400] uppercase tracking-[0.08px] text-[#DDD1BD] md:text-6xl">
                    <span className="text-[#D3AF5E]">Discover</span> the Taste
                </h3>{" "}
                <Image
                    src="/images/home/welcome/image2.png"
                    width={417}
                    height={576}
                    alt="private dining"
                    className="h-[300px] w-full rounded-lg object-cover md:block md:h-[400px] md:w-[25%] lg:rounded-none"
                />
            </div>
        </section>
    );
};

export default Discover;
