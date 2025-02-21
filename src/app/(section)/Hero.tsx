"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";
import gsap from "gsap";

const Hero = ({}) => {
    useEffect(() => {
        const tl = gsap.timeline();
        tl.from(".head-container", 1.5, {
            y: 50,
            opacity: 1,
            ease: "power4.out",
        })
            .from(".head-hero", 1, {
                x: 200,
                opacity: 0,
                delay: -1.5,
            })
            .from(".hero-button", 1, {
                y: 100,
                opacity: 0,
                ease: "power4.out",
                delay: -1.5,
            });
        tl.from(".down-button", 1, {
            opacity: 0,
            duration: 1,
            delay: -0.5,
        }).to(".down-button", 1, {
            opacity: 1,
            duration: -1.5,
            ease: "bounce.out",
        });
    }, []);

    return (
        <section id="hero" className="flex w-full items-center justify-center">
            <div className="relative flex min-h-[100vh] w-full items-center justify-center bg-black">
                <div className="absolute left-0 top-0 h-full w-full overflow-hidden bg-cover bg-center" style={{ backgroundImage: 'url("/images/home/hero/bg.png")' }}></div>

                <div className="relative flex items-center justify-center px-4 md:mt-20 md:px-0">
                    <div className="flex flex-col items-center justify-center gap-1 bg-black bg-opacity-80 px-20 py-8 md:px-52 md:py-20">
                        <h3 className="font-lavish text-center text-5xl font-[400] capitalize leading-[110%] tracking-[-2px] text-[#DCB355] md:text-7xl">
                            bamboo <br /> Fresh
                        </h3>
                        <h6 className="font-manrope text-center text-base font-[400] uppercase text-[#DCB355] md:text-lg">THE SIGN OF GREAT TASTE</h6>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
