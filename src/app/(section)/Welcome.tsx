import Image from "next/image";

const Welcome = ({}) => {
    return (
        <section className="relative flex h-full w-full flex-col gap-8 bg-[#000] pb-12 pt-12 md:gap-12 md:pb-20 md:pt-20">
            <div className="absolute bottom-32 left-0 right-0 z-20 hidden md:block">
                <Image className="h-[250px] w-full" src="/images/home/welcome/Bamboo.png" width={1920} height={399} alt="image" />
            </div>
            <div className="flex flex-col gap-6 px-4 md:gap-12 md:px-[50px] 2xl:px-[80px]">
                <div className="flex flex-col items-center justify-center gap-4 md:gap-8">
                    <div className="flex flex-col items-center justify-center gap-1 md:flex-row md:gap-20">
                        <h2 className="font-manrope text-center text-4xl font-[400] capitalize text-[#E7E6E6] md:text-6xl">Bamboo</h2>
                        <h3 className="font-manrope text-center text-lg font-[400] capitalize text-[#DCB355] md:mt-4 md:text-xl">About us</h3>
                        <h2 className="font-manrope text-center text-4xl font-[400] capitalize text-[#E7E6E6] md:text-6xl">fresh</h2>
                    </div>
                    <p className="font-manrope w-full max-w-[700px] text-center text-sm font-[300] uppercase tracking-[1.5px] text-[#fff] md:text-base">
                        Bamboo Fresh brings you the rich flavors of Turkish cuisine with fresh, high-quality ingredients and authentic recipes. From sizzling kebabs to fragrant
                        rice and handmade desserts, every dish is crafted with passion.to fragrant rice and handmade desserts, every dish is crafted with passion.{" "}
                    </p>
                </div>
                <div className="relative z-50 flex w-full flex-col gap-6 px-2 md:flex-row md:gap-0 md:pb-20 md:pt-4 2xl:pb-48">
                    <Image className="z-30 h-[300px] w-full object-cover md:h-[450px] md:w-[20%]" src="/images/home/welcome/image1.png" width={333} height={516} alt="image" />
                    <Image className="z-30 h-[300px] w-full object-cover md:h-[450px] md:w-[20%]" src="/images/home/welcome/image2.png" width={333} height={516} alt="image" />
                    <Image className="z-30 h-[300px] w-full object-cover md:h-[450px] md:w-[20%]" src="/images/home/welcome/image3.png" width={333} height={516} alt="image" />
                    <Image className="z-30 h-[300px] w-full object-cover md:h-[450px] md:w-[20%]" src="/images/home/welcome/image4.png" width={333} height={516} alt="image" />
                    <Image className="z-30 h-[300px] w-full object-cover md:h-[450px] md:w-[20%]" src="/images/home/welcome/image5.png" width={333} height={516} alt="image" />
                </div>
            </div>
        </section>
    );
};

export default Welcome;
