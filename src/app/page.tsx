import Navbar from "@/components/Navbar";
import Hero from "./(section)/Hero";
import Welcome from "./(section)/Welcome";
import Reserve from "./(section)/Reserve";
import Reviews from "./(section)/Review";
import Footer from "@/components/Footer";
import Contact from "./(section)/Contact";
import Map from "./(section)/Map";
import Discover from "./(section)/Serving";
import Menu from "./(section)/Menu";

export default function HomePage() {
    return (
        <main className="relative flex h-full w-full">
            <div className="flex h-full w-full flex-col items-center justify-center">
                <Navbar position="absolute" />
                <Hero />
                <Welcome />
                <Discover />
                <Menu />
                <Reserve />
                <Reviews />
                <Contact />
                <Map />
                <Footer />
            </div>
        </main>
    );
}
