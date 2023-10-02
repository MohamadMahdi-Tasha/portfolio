// Codes By Mahdi Tasha
// Importing Part
import {ReactNode} from "react";
import {Metadata} from "next";

// Defining Metadata Of Page
export const metadata:Metadata = {
    description: "I'm Frontend based in iran.",
    title: "Mahdi Tasha | Creative Frontend Developer",
    viewport: 'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0',
    manifest: './manifest.json',
    robots: './robots.txt',
    openGraph: {
        title: "Mahdi Tasha | Creative Frontend Developer",
        description: "I'm Frontend based in iran.",
        type: "website"
    },
    twitter:{
        title: "Mahdi Tasha | Creative Frontend Developer",
        description: "I'm Frontend based in iran.",
    }
}

// Defining Type Of Props
interface propsType{
    children: ReactNode;
}

// Creating And Exporting Layout Of Page
export default function LayoutComponent({children}:propsType):ReactNode {
    // Returning JSX
    return (
        <html>
            <body>
                {children}
            </body>
        </html>
    );
}