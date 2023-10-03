// Codes By Mahdi Tasha
// Forcing NextJS To Render This Component As Client Side Component
'use client';

// Importing Part
import {ReactNode} from "react";
import {useState} from "react";
import IconComponent from "@/chunk/iconComponent";

// Creating And Exporting Sound Button Component As Default
export default function SoundButtonComponent():ReactNode {
    // Defining State Of Component
    const [isMuted, setMuted] = useState(false);

    // Returning JSX
    return (
        <button>
            <div data-muted={isMuted}>
                <IconComponent name={'sound'} size={20} />
                <IconComponent name={'sound-off'} size={20} />
            </div>
        </button>
    );
}
