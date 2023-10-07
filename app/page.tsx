// Codes By Mahdi Tasha
// Forcing NextJS To Render This Component As Client Side Component
'use client';

// Importing Part
import {ReactNode} from "react";
import {useState} from "react";
import DeviceComponent from '@/component/deviceComponent';
import SoundButtonComponent from "@/component/soundButtonComponent";
import DashboardComponent from "@/component/dashboard/dashboardComponent";

// Creating And Exporting Home Page Component As Default
export default function HomePage():ReactNode {
    // Defining States Of Component
    const [isDeviceShowing, setDeviceShowing] = useState(false);
    const [stateOfDeviceAnimate, setStateOfDeviceAnimate] = useState('hidden');

    // Returning JSX
    return (
        <div className={'min-h-[100vh]'}>
            <SoundButtonComponent />
            <div className={'max-w-[1200px] mx-auto px-[20px]'}>
                {
                    (isDeviceShowing)
                        ? <DeviceComponent stateOfAnimate={stateOfDeviceAnimate} onClickOfButton={() => {
                            setStateOfDeviceAnimate('hidden');
                            setInterval(() => {setDeviceShowing(false)}, 1000);
                        }} />
                        : <DashboardComponent stateOfAnimate={(stateOfDeviceAnimate === 'visible') ? 'hidden' : 'visible'} />
                }
            </div>
        </div>
    );
}
