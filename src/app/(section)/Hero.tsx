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
            opacity: 0, // Start with opacity 0
            duration: 1, // Animation duration (1 second)
            delay: -0.5, // Optional delay before starting animation
        }).to(".down-button", 1, {
            opacity: 1, // End with opacity 1
            duration: -1.5, // Animation duration (1 second)
            ease: "bounce.out",
        });
    }, []);

    return (
        <section id="hero" className="flex w-full items-center justify-center">
            <div className="relative flex min-h-[100vh] w-full items-center justify-center bg-black">
                <div className="absolute left-0 top-0 h-full w-full overflow-hidden bg-cover bg-center" style={{ backgroundImage: 'url("/images/home/hero/bg.png")' }}></div>

                <div className="relative flex items-center justify-center px-4 md:mt-20 md:px-0">
                    <div className="flex flex-col items-center justify-center gap-4 bg-black bg-opacity-80 px-6 py-6 md:px-36 md:py-24 lg:gap-6">
                        <h3 className="text-center font-playfair text-3xl font-[400] capitalize leading-[110%] text-[#fff] lg:text-5xl">Opening soon</h3>
                        <p className="font-inter w-full max-w-[450px] text-center text-sm font-[200] lowercase leading-[110%] lg:text-base">
                            We’re cooking up something amazing! Delicious food and unforgettable vibes are coming your way soon. Stay tuned for the grand opening!
                        </p>
                        <div>
                            <Button className="flex flex-row gap-2 rounded-none bg-[#D3AF5E] px-6 py-6 text-center font-playfair text-sm font-[500] capitalize leading-[80%] tracking-[0.911px] text-[#000]">
                                Contact US <ArrowRight className="w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
