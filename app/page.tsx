// Codes By Mahdi Tasha
// Forcing NextJS To Render This Component As Client Side Component
'use client';

// Importing Part
import {ReactNode} from "react";
import {useState} from "react";
import DeviceComponent from '@/component/deviceComponent';
import SoundButtonComponent from "@/component/soundButtonComponent";

// Creating And Exporting Home Page Component As Default
export default function HomePage():ReactNode {
    // Defining State Of Component
    const [isDeviceShowing, setDeviceShowing] = useState(true);

    // Returning JSX
    return (
        <div className={'holder-bg bg-darker-theme min-h-[100vh]'}>
            <SoundButtonComponent />
            <div className={'max-w-[1100px] mx-auto px-[20px]'}>
                {
                    (isDeviceShowing)
                        ? <DeviceComponent />
                        : <h1>The Other One</h1>
                }
            </div>
        </div>
    );
}
