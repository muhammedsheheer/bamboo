"use client";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
    const images = [
        "/images/home/welcome/image2.png",
        "/images/home/welcome/image3.png",
        "/images/home/welcome/image2.png",
        "/images/home/welcome/image3.png",
        "/images/home/welcome/image2.png",
        "/images/home/welcome/image3.png",
        "/images/home/welcome/image2.png",
        "/images/home/welcome/image3.png",
        "/images/home/welcome/image2.png",
        "/images/home/welcome/image3.png",
        "/images/home/welcome/image2.png",
        "/images/home/welcome/image3.png",
    ];

    return (
        <section className="flex h-full w-full flex-col gap-4 bg-[#000] pb-12 pt-12 md:gap-8 md:pb-0 md:pt-20">
            <div className="flex flex-col items-center gap-4 px-4 md:flex-row md:justify-between md:gap-0 md:px-[50px] 2xl:px-[140px]">
                <h2 className="text-center font-playfair text-6xl font-[400] text-[#DDD1BD] md:text-9xl" style={{ fontVariant: "small-caps" }}>
                    Scroll{" "}
                </h2>
                <Link href="" target="_blank" className="font-playfair text-2xl font-[400] capitalize tracking-[1px] text-[#ddd1bd] md:mr-10 md:mt-8 md:text-4xl">
                    @bamboofresh
                </Link>
                <h2 className="text-center font-playfair text-6xl font-[400] text-[#DDD1BD] md:text-9xl" style={{ fontVariant: "small-caps" }}>
                    Us{" "}
                </h2>
            </div>
            <div className="relative">
                <div
                    style={{
                        overflowX: "auto",
                        msOverflowStyle: "none",
                        scrollbarWidth: "none",
                    }}
                    className="flex snap-x snap-mandatory gap-4 scroll-smooth px-4 md:px-0"
                >
                    {images.map((src, index) => (
                        <div key={index} className="w-full flex-shrink-0 snap-center md:w-1/3 lg:w-1/4 2xl:w-1/6">
                            <Image src={src} alt={`Image ${index}`} width={500} height={500} className="h-[300px] w-full rounded-md object-cover md:h-[400px]" />
                        </div>
                    ))}
                </div>
                {/* Hide scrollbar for Chrome, Safari using style jsx */}
                <style jsx>{`
                    div::-webkit-scrollbar {
                        display: none;
                    }
                `}</style>
            </div>
        </section>
    );
};

export default Contact;
