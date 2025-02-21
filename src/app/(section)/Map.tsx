import Link from "next/link";

const Map = ({}) => {
    return (
        <section className="h-full w-full overflow-hidden bg-[#000] px-4 py-12 md:px-[50px] md:py-24 2xl:px-[80px]">
            <div className="flex flex-col gap-6 md:gap-10">
                <div className="flex flex-col items-center justify-center gap-1 md:flex-row md:gap-20">
                    <h2 className="font-manrope text-center text-4xl font-[400] capitalize text-[#E7E6E6] md:text-6xl">Find</h2>
                    <h3 className="font-manrope text-center text-lg font-[400] capitalize text-[#DCB355] md:mt-4 md:text-xl">CONNECT</h3>
                    <h2 className="font-manrope text-center text-4xl font-[400] capitalize text-[#E7E6E6] md:text-6xl">Us</h2>
                </div>
                <div className="flex flex-col gap-6 md:flex-row md:gap-4">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2419.3093530443102!2d-1.1901099888423565!3d52.672451271985096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877607586b3901f%3A0x3e2cc8c299288365!2sLara%20Restaurant!5e0!3m2!1sen!2sin!4v1732026568402!5m2!1sen!2sin"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="h-[50vh] w-full grayscale invert filter md:h-[80vh] md:w-[65%]"
                    ></iframe>
                    <div className="flex flex-col items-center gap-4 md:items-start md:justify-end">
                        <Link className="font-manrope text-lg font-[400] uppercase text-[rgba(255,255,255,0.84)] md:text-3xl" href={""} target="_blank">
                            58 Stoke Newington <br /> High Street, London, <br /> UK
                        </Link>
                        <Link href={""} className="font-manrope text-sm font-[300] uppercase text-[#fff] md:text-lg">
                            +44 20 7275 7523{" "}
                        </Link>
                        <Link className="font-manrope text-sm font-[300] uppercase text-[#fff] md:text-lg" href={""}>
                            cafezbar.stoky@gmail.com{" "}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Map;
