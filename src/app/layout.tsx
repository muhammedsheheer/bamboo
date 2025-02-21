import "@/styles/globals.css";
import "@/styles/ham.css";
import { cn } from "@/lib/utils";
import { type Metadata } from "next";
import Providers from "@/app/Providers";

export const metadata: Metadata = {
    title: "Bamboo",
    description: "Bamboo Fresh",
    icons: [{ rel: "icon", url: "/images/logo.svg" }],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
            <body className={cn("theme-custom flex min-h-screen bg-[#070707] font-poppins text-[#FBEAD2] antialiased")}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
