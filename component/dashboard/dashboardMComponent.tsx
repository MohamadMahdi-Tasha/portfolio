// Codes By Mahdi Tasha
// Importing Part
import {ReactNode} from 'react';
import OpenableDashboardComponent from "@/component/dashboard/openableDashboardComponent";

// Creating Amd Exporting Dashboard M Component As Default
export default function DashboardMComponent():ReactNode {
    // Returning JSX
    return (
        <OpenableDashboardComponent
            wholeClassName={'row-span-1'}
            className={'h-full flex flex-col sm:justify-between justify-center items-center w-full'}
        >
            <div className={'sm:flex hidden justify-between items-center gap-[20px] w-full'}>
                <div className={'w-[10px] h-[10px] bg-white/20 rounded-full'} />
                <div className={'w-[10px] h-[10px] bg-white/20 rounded-full'} />
            </div>
            <span className={'text-white font-bold text-[32px]'}>M</span>
            <div className={'sm:flex hidden justify-between items-center gap-[20px] w-full'}>
                <div className={'w-[10px] h-[10px] bg-white/20 rounded-full'} />
                <div className={'w-[10px] h-[10px] bg-white/20 rounded-full'} />
            </div>
        </OpenableDashboardComponent>
    );
}
