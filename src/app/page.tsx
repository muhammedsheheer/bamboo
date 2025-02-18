import Navbar from "@/components/Navbar";
import Hero from "./(section)/Hero";
import Welcome from "./(section)/Welcome";
import Special from "./(section)/(special)/Special";
import Reserve from "./(section)/Reserve";
import Reviews from "./(section)/Review";
import Footer from "@/components/Footer";
import Contact from "./(section)/Contact";
import Map from "./(section)/Map";
import Discover from "./(section)/Serving";

export default function HomePage() {
    return (
        <main className="relative flex h-full w-full">
            <div className="flex h-full w-full flex-col items-center justify-center">
                <Navbar position="absolute" />
                <Hero />
                <Welcome />
                <Discover />
                <Special />
                <Reserve />
                <Reviews />
                <Contact />
                <Map />
                <Footer />
            </div>
        </main>
    );
}
