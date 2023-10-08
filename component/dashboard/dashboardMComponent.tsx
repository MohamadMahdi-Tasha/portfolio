// Codes By Mahdi Tasha
// Importing Part
import {ReactNode} from 'react';
import OpenableDashboardComponent from "@/component/dashboard/openableDashboardComponent";

// Creating Amd Exporting Dashboard M Component As Default
export default function DashboardMComponent():ReactNode {
    // Returning JSX
    return (
        <OpenableDashboardComponent
            wholeClassName={'grid-cols-1 lg:grid-rows-2'}
            className={'h-full flex flex-col justify-between items-center w-full'}
        >
            <div className={'flex justify-between items-center gap-[20px] w-full'}>
                <div className={'w-[10px] h-[10px] bg-white/20 rounded-full'} />
                <div className={'w-[10px] h-[10px] bg-white/20 rounded-full'} />
            </div>
            <span className={'text-white font-bold text-[32px]'}>M</span>
            <div className={'flex justify-between items-center gap-[20px] w-full'}>
                <div className={'w-[10px] h-[10px] bg-white/20 rounded-full'} />
                <div className={'w-[10px] h-[10px] bg-white/20 rounded-full'} />
            </div>
        </OpenableDashboardComponent>
    );
}
