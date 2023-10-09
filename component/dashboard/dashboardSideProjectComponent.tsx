// Codes By mahdi Tasha
// Importing Part
import {ReactNode} from 'react';
import OpenableDashboardComponent from "@/component/dashboard/openableDashboardComponent";
import IconComponent from "@/chunk/iconComponent";
import SideProjectComponent from "@/chunk/sideProjectComponent";
import ScrewComponent from "@/chunk/screwComponent";
import SoundImage from '@/public/img/dashboard/img-sound-dot.svg';

// Creating And Exporting Dashboard Side Project Component As Default
export default function DashboardSideProjectComponent():ReactNode {
    // Returning JSX
    return (
        <OpenableDashboardComponent wholeClassName={'lg:col-span-1 sm:col-span-2 col-span-1'} className={'grid grid-rows-[.5fr_1fr_4fr] h-full overflow-hidden'}>
            <div className={'flex items-center gap-[30px] bg-darker-theme rounded-[10px] p-[20px] mb-[20px]'}>
                <span className={'block text-theme-orange'}><IconComponent name={'coffee'} size={20} /></span>
                <span className={'block truncate text-white font-bold tracking-wide'}>SIDE-PROJECTS</span>
            </div>
            <div className={'grid grid-cols-2 gap-[20px] mb-[20px]'}>
                <SideProjectComponent onClick={() => alert('asd')} icon={'s'} />
                <SideProjectComponent onClick={() => alert('asd')} icon={'s'} />
            </div>
            <div className={'bg-darker-theme p-[20px] rounded-[20px] flex flex-col gap-[20px] justify-between items-center w-full'}>
                <div className={'flex justify-between items-center w-full'}>
                    <span className={'text-white/20'}><ScrewComponent clickable={true} onClick={() => alert('asd')} /></span>
                    <span className={'text-white/20'}><ScrewComponent clickable={true} onClick={() => alert('asd')} /></span>
                </div>
                <img src={SoundImage.src} className={'mx-auto w-[60%] aspect-square'} alt="Sound Dots Image"/>
                <div className={'flex justify-between items-center w-full'}>
                    <span className={'text-white/20'}><ScrewComponent clickable={true} onClick={() => alert('asd')} /></span>
                    <span className={'text-white/20'}><ScrewComponent clickable={true} onClick={() => alert('asd')} /></span>
                </div>
            </div>
        </OpenableDashboardComponent>
    );
}


