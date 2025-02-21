"use client";
import { Icons } from "@/components/Icon";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useRestaurant } from "@/context/RestaurantContext";
import Image from "next/image";

const Reviews = ({}) => {
    const { reviews } = useRestaurant();
    return (
        <section className="relative flex h-full w-full justify-center bg-[#000]">
            <div className="flex h-full w-full max-w-[1300px] flex-col items-start justify-center gap-4 py-12 md:py-32">
                <div className="flex h-fit w-full flex-col items-center justify-center gap-2 lg:gap-2">
                    <div className="flex flex-col items-center justify-center gap-1 md:flex-row md:gap-20">
                        <h2 className="font-manrope text-center text-4xl font-[400] capitalize text-[#E7E6E6] md:text-6xl">Our</h2>
                        <h3 className="font-manrope text-center text-lg font-[400] capitalize text-[#DCB355] md:mt-4 md:text-xl">Reviews</h3>
                        <h2 className="font-manrope text-center text-4xl font-[400] capitalize text-[#E7E6E6] md:text-6xl">stories</h2>
                    </div>
                </div>
                <div className="flex w-full items-center justify-center p-4">
                    {reviews && (
                        <Carousel className="w-full px-4">
                            <CarouselContent className="ml-4 flex h-full w-full justify-center gap-4">
                                {reviews.map((review, index) => (
                                    <CarouselItem key={index} className="flex w-full basis-full flex-col items-center justify-center gap-6 px-6 py-8 md:rounded-none">
                                        <div className="flex w-full items-center justify-center">
                                            {Array.from({ length: 5 }).map((_, index) => (
                                                <Icons.star key={index} className="text-[#B99647]" />
                                            ))}
                                        </div>
                                        <div className="">
                                            <p className="line-clamp-5 w-full max-w-[500px] text-center text-[#fff]">{review.text}</p>
                                        </div>
                                        <div className="flex w-full flex-col items-center justify-center gap-2">
                                            <Image
                                                src={review.profile_photo_url || "/images/home/reviews/pictures/anna-mathew.svg"}
                                                width={64}
                                                height={64}
                                                alt={review.author_name}
                                            />
                                            <div className="flex flex-col gap-2">
                                                <p className="text-center text-[#fff]">{review.author_name}</p>
                                                <span className="text-center text-[#fff]">{review.relative_time_description}</span>
                                            </div>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <div className="group absolute -bottom-12 left-1/2 flex w-fit -translate-x-1/2 transform items-center gap-2 transition-transform duration-300 ease-in-out">
                                <CarouselPrevious className="border-[#fff] text-[#fff] transition-transform duration-300 ease-in-out group-hover:-translate-x-2" />
                                <CarouselNext className="border-[#fff] text-[#fff] transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
                            </div>
                        </Carousel>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
