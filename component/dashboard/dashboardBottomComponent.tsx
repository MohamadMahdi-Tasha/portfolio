// Codes By Mahdi Tasha
// Importing Part
import {ReactNode} from "react";

// Creating And Exporting Bottom Component Of Dashboard Side As Default
export default function DashboardBottomComponent():ReactNode {
    // Returning JSX
    return (
        <div className={'flex justify-between lg:flex-row flex-col gap-[20px]'}>
            <div className={'w-full lg:h-auto h-[20px] lg:mb-0 mb-[10px] bg-red-600 small-lines-on-door'} />
            <div className={'flex lg:flex-row flex-col justify-center lg:gap-[20px] gap-0 items-center'}>
                <span className={'whitespace-nowrap text-white/80 text-[12px] font-bold tracking-wide'}>Mahdi Tasha 2023</span>
                <span className={'whitespace-nowrap text-white/80 text-[12px] font-bold tracking-wide'}>-</span>
                <span className={'whitespace-nowrap text-white/80 text-[12px] font-bold tracking-wide'}>ALL RIGHTS RESERVED</span>
                <span className={'whitespace-nowrap text-white/80 text-[12px] font-bold tracking-wide'}>-</span>
                <button className={'whitespace-nowrap text-white/80 text-[12px] font-bold tracking-wide'}>Credits</button>
            </div>
        </div>
    );
}