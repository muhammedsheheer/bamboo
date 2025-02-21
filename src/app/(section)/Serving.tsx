"use client";
import Image from "next/image";

const Discover = ({}) => {
    return (
        <section className="relative h-full w-full bg-[rgba(44,44,44,0.47)] px-4 py-12 md:h-screen">
            <div className="absolute left-[41%] top-[240px] z-50 hidden md:block">
                <h3 className="font-manrope text-center text-2xl font-[400] uppercase text-[#fff] md:text-5xl">
                    <span className="font-lavish text-4xl md:text-7xl">S</span>
                    AVORY
                    <span className="font-lavish text-4xl md:text-7xl">D</span>
                    elights
                </h3>
            </div>
            <div className="absolute left-[35%] top-[340px] z-50 hidden md:block">
                <h3 className="font-manrope text-center text-2xl font-[400] uppercase text-[#BE9E55] md:text-5xl">Fresh Ingredients</h3>
            </div>
            <div className="absolute left-[40%] top-[430px] z-50 hidden md:block">
                <h3 className="font-manrope text-center text-2xl font-[400] uppercase text-[#fff] md:text-5xl">
                    <span className="font-lavish text-4xl md:text-7xl">T</span>
                    imeless
                    <span className="font-lavish text-4xl md:text-7xl">T</span>
                    radition
                </h3>{" "}
            </div>
            <div className="absolute left-[30%] top-[530px] z-50 hidden md:block">
                <h3 className="font-manrope text-center text-2xl font-[400] uppercase text-[#BE9E55] md:text-5xl">Authentic Taste</h3>
            </div>
            <div className="absolute left-20 top-24 hidden md:block">
                <div className="relative">
                    <div className="absolute -bottom-16 -left-12">
                        <Image src="/images/home/serving/image2.png" width={316} height={328} alt="private dining" className="h-[120px] w-full object-cover" />
                    </div>
                    <Image src="/images/home/serving/image1.png" width={316} height={328} alt="private dining" className="h-[250px] w-full object-cover" />
                </div>
            </div>
            <div className="absolute bottom-14 left-72 hidden md:block">
                <Image src="/images/home/serving/image3.png" width={288} height={442} alt="private dining" className="h-[330px] w-full object-cover" />
            </div>
            <div className="absolute right-64 top-16 hidden md:block">
                <div className="relative">
                    <div className="absolute -bottom-32 -right-28">
                        <Image src="/images/home/serving/image5.png" width={288} height={442} alt="private dining" className="h-[250px] w-full object-cover" />
                    </div>
                    <Image src="/images/home/serving/image4.png" width={288} height={442} alt="private dining" className="h-[330px] w-full object-cover" />
                </div>
            </div>
            <div className="flex flex-col gap-2 md:hidden">
                <h3 className="font-manrope text-center text-2xl font-[400] uppercase text-[#fff] md:text-5xl">
                    <span className="font-lavish text-4xl md:text-7xl">S</span>
                    AVORY
                    <span className="font-lavish text-4xl md:text-7xl">D</span>
                    elights
                </h3>
                <h3 className="font-manrope text-center text-2xl font-[400] uppercase text-[#BE9E55] md:text-5xl">Fresh Ingredients</h3>
                <h3 className="font-manrope text-center text-2xl font-[400] uppercase text-[#fff] md:text-5xl">
                    <span className="font-lavish text-4xl md:text-7xl">T</span>
                    imeless
                    <span className="font-lavish text-4xl md:text-7xl">T</span>
                    radition
                </h3>
                <h3 className="font-manrope text-center text-2xl font-[400] uppercase text-[#BE9E55] md:text-5xl">Authentic Taste</h3>

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
