"use client";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
    return (
        <section className="h-full w-full bg-[#000] px-4 py-12 sm:px-[10px] md:py-24">
            <div className="hidden md:block">
                <div className="flex flex-col items-center justify-center gap-1 md:flex-row md:gap-20">
                    <h2 className="font-manrope text-center text-4xl font-[400] capitalize text-[#E7E6E6] md:text-6xl">Scroll Us</h2>
                    <Link href={""} target="_blank">
                        <h3 className="font-manrope text-center text-lg font-[400] capitalize text-[#DCB355] md:mt-4 md:text-2xl">@bamboofresh</h3>
                    </Link>
                </div>
            </div>
            <div className="relative hidden h-[800px] md:block">
                <div className="absolute left-[155px] top-[365px] hidden md:block 2xl:left-[470px]">
                    <div className="relative">
                        <div className="absolute -left-36 bottom-0 flex flex-col items-end gap-0">
                            <h5 className="font-manrope text-center text-3xl font-[400] uppercase text-[rgba(255,255,255,0.84)]">KUNEFE</h5>
                            <h5 className="font-manrope text-center text-lg font-[400] uppercase text-[rgba(255,255,255,0.84)]">CRISPY DELIGHT</h5>
                        </div>
                        <div className="absolute -right-44 top-0 flex flex-col items-start gap-0">
                            <h5 className="font-manrope text-center text-3xl font-[400] uppercase text-[rgba(255,255,255,0.84)]">Çılbır</h5>
                            <h5 className="font-manrope text-center text-lg font-[400] uppercase text-[rgba(255,255,255,0.84)]">poached delicacy</h5>
                        </div>
                        <div className="absolute -bottom-2 -right-[70px]">
                            <h2 className="font-manrope text-center text-9xl font-[400] uppercase text-[#B99647]">F</h2>
                        </div>
                        <Image src="/images/home/contact/image4.png" width={316} height={328} alt="image" className="h-[240px] w-full object-cover 2xl:h-[300px]" />
                    </div>
                </div>
                <div className="absolute left-[5px] top-[50px] hidden md:block 2xl:left-[160px]">
                    <div className="relative">
                        <div className="absolute -right-[70px] -top-6">
                            <h2 className="font-manrope text-center text-9xl font-[400] uppercase text-[#B99647]">B</h2>
                        </div>
                        <Image src="/images/home/contact/image1.png" width={316} height={328} alt="image" className="h-[240px] w-full object-cover 2xl:h-[300px]" />
                    </div>
                </div>
                <div className="absolute right-[5px] top-[50px] hidden md:block 2xl:right-[160px]">
                    <div className="relative">
                        <div className="absolute -left-72">
                            <div className="relative">
                                <div className="absolute -left-36 bottom-0 flex flex-col items-start gap-0">
                                    <h5 className="font-manrope text-center text-3xl font-[400] uppercase text-[rgba(255,255,255,0.84)]">Baklava</h5>
                                    <h5 className="font-manrope text-center text-lg font-[400] uppercase text-[rgba(255,255,255,0.84)]">Sweet layers</h5>
                                </div>
                                <Image src="/images/home/contact/image2.png" width={316} height={328} alt="image" className="h-[240px] w-full object-cover 2xl:h-[300px]" />
                            </div>
                        </div>
                        <Image src="/images/home/contact/image3.png" width={316} height={328} alt="image" className="h-[240px] w-full object-cover 2xl:h-[300px]" />
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-6 px-4 md:hidden">
                <div className="flex flex-col items-center justify-center gap-1 md:flex-row md:gap-20">
                    <h2 className="font-manrope text-center text-4xl font-[400] capitalize text-[#E7E6E6] md:text-6xl">Scroll Us</h2>
                    <Link href={""} target="_blank">
                        <h3 className="font-manrope text-center text-lg font-[400] capitalize text-[#DCB355] md:mt-4 md:text-xl">@bamboofresh</h3>
                    </Link>
                </div>
                <Image src="/images/home/contact/image1.png" width={316} height={328} alt="image" className="h-[260px] w-full object-cover" />
                <Image src="/images/home/contact/image2.png" width={316} height={328} alt="image" className="h-[260px] w-full object-cover" />
                <Image src="/images/home/contact/image3.png" width={316} height={328} alt="image" className="h-[260px] w-full object-cover" />
                <Image src="/images/home/contact/image4.png" width={316} height={328} alt="image" className="h-[260px] w-full object-cover" />
            </div>
        </section>
    );
};

export default Contact;
