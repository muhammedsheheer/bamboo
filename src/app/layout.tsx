import "@/styles/globals.css";
import "@/styles/ham.css";
import { cn } from "@/lib/utils";
import { type Metadata } from "next";
import { Gotu, Poppins, Playfair_Display, Inter } from "next/font/google";
import Providers from "@/app/Providers";

export const metadata: Metadata = {
    title: "Bamboo",
    description: "Bamboo Fresh",
    // icons: [{ rel: "icon", url: "/images/logo.png" }],
};

const manrope = Gotu({
    subsets: ["latin"],
    variable: "--font-gotu",
    weight: ["400"],
});

const poppins = Poppins({
    subsets: ["latin"],
    variable: "--font-poppins",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
    weight: ["400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
            <body
                className={cn(
                    "theme-custom flex min-h-screen bg-[#070707] font-poppins text-[#FBEAD2] antialiased",
                    manrope.variable,
                    poppins.variable,
                    playfair.variable,
                    inter.variable
                )}
            >
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
