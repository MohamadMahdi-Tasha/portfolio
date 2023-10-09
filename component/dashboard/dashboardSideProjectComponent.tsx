// Codes By mahdi Tasha
// Importing Part
import {ReactNode} from 'react';
import OpenableDashboardComponent from "@/component/dashboard/openableDashboardComponent";
import IconComponent from "@/chunk/iconComponent";
import SideProjectComponent from "@/chunk/sideProjectComponent";
import ScrewComponent from "@/chunk/screwComponent";

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
                <svg className={'mx-auto w-[60%] aspect-square'} viewBox="0 0 188 189" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="57.2833" cy="8.57532" r="7.89563" fill="#3B3B44"/>
                    <circle cx="81.8478" cy="8.57532" r="7.89563" fill="#3B3B44"/>
                    <circle cx="106.411" cy="8.57532" r="7.89563" fill="#3B3B44"/>
                    <circle cx="130.976" cy="8.57532" r="7.89563" fill="#3B3B44"/>
                    <circle cx="32.7198" cy="33.1398" r="7.89563" fill="#3B3B44"/>
                    <circle cx="57.2843" cy="33.1398" r="7.89563" fill="#3B3B44"/>
                    <circle cx="81.8478" cy="33.1398" r="7.89563" fill="#3B3B44"/>
                    <circle cx="106.412" cy="33.1398" r="7.89563" fill="#3B3B44"/>
                    <circle cx="130.977" cy="33.1398" r="7.89563" fill="#3B3B44"/>
                    <circle cx="155.541" cy="33.1398" r="7.89563" fill="#3B3B44"/>
                    <circle cx="8.15539" cy="57.7042" r="7.89563" fill="#3B3B44"/>
                    <circle cx="32.7198" cy="57.7042" r="7.89563" fill="#3B3B44"/>
                    <circle cx="57.2833" cy="57.7042" r="7.89563" fill="#3B3B44"/>
                    <circle cx="81.8478" cy="57.7042" r="7.89563" fill="#3B3B44"/>
                    <circle cx="106.412" cy="57.7042" r="7.89563" fill="#3B3B44"/>
                    <circle cx="130.977" cy="57.7042" r="7.89563" fill="#3B3B44"/>
                    <circle cx="155.54" cy="57.7042" r="7.89563" fill="#3B3B44"/>
                    <circle cx="180.105" cy="57.7042" r="7.89563" fill="#3B3B44"/>
                    <circle cx="8.15539" cy="82.2687" r="7.89563" fill="#3B3B44"/>
                    <circle cx="32.7198" cy="82.2687" r="7.89563" fill="#3B3B44"/>
                    <circle cx="57.2833" cy="82.2687" r="7.89563" fill="#3B3B44"/>
                    <circle cx="81.8478" cy="82.2687" r="7.89563" fill="#3B3B44"/>
                    <circle cx="106.412" cy="82.2687" r="7.89563" fill="#3B3B44"/>
                    <circle cx="130.977" cy="82.2687" r="7.89563" fill="#3B3B44"/>
                    <circle cx="155.54" cy="82.2687" r="7.89563" fill="#3B3B44"/>
                    <circle cx="180.105" cy="82.2687" r="7.89563" fill="#3B3B44"/>
                    <circle cx="8.15539" cy="106.831" r="7.89563" fill="#3B3B44"/>
                    <circle cx="32.7198" cy="106.831" r="7.89563" fill="#3B3B44"/>
                    <circle cx="57.2833" cy="106.831" r="7.89563" fill="#3B3B44"/>
                    <circle cx="81.8478" cy="106.831" r="7.89563" fill="#3B3B44"/>
                    <circle cx="106.412" cy="106.831" r="7.89563" fill="#3B3B44"/>
                    <circle cx="130.977" cy="106.831" r="7.89563" fill="#3B3B44"/>
                    <circle cx="155.54" cy="106.831" r="7.89563" fill="#3B3B44"/>
                    <circle cx="180.105" cy="106.831" r="7.89563" fill="#3B3B44"/>
                    <circle cx="8.15539" cy="131.396" r="7.89563" fill="#3B3B44"/>
                    <circle cx="32.7198" cy="131.396" r="7.89563" fill="#3B3B44"/>
                    <circle cx="57.2833" cy="131.396" r="7.89563" fill="#3B3B44"/>
                    <circle cx="81.8478" cy="131.396" r="7.89563" fill="#3B3B44"/>
                    <circle cx="106.412" cy="131.396" r="7.89563" fill="#3B3B44"/>
                    <circle cx="130.977" cy="131.396" r="7.89563" fill="#3B3B44"/>
                    <circle cx="155.54" cy="131.396" r="7.89563" fill="#3B3B44"/>
                    <circle cx="180.105" cy="131.396" r="7.89563" fill="#3B3B44"/>
                    <circle cx="32.7198" cy="155.96" r="7.89563" fill="#3B3B44"/>
                    <circle cx="57.2843" cy="155.96" r="7.89563" fill="#3B3B44"/>
                    <circle cx="81.8478" cy="155.96" r="7.89563" fill="#3B3B44"/>
                    <circle cx="106.412" cy="155.96" r="7.89563" fill="#3B3B44"/>
                    <circle cx="130.977" cy="155.96" r="7.89563" fill="#3B3B44"/>
                    <circle cx="155.541" cy="155.96" r="7.89563" fill="#3B3B44"/>
                    <circle cx="57.2833" cy="180.525" r="7.89563" fill="#3B3B44"/>
                    <circle cx="81.8478" cy="180.525" r="7.89563" fill="#3B3B44"/>
                    <circle cx="106.411" cy="180.525" r="7.89563" fill="#3B3B44"/>
                    <circle cx="130.976" cy="180.525" r="7.89563" fill="#3B3B44"/>
                </svg>
                <div className={'flex justify-between items-center w-full'}>
                    <span className={'text-white/20'}><ScrewComponent clickable={true} onClick={() => alert('asd')} /></span>
                    <span className={'text-white/20'}><ScrewComponent clickable={true} onClick={() => alert('asd')} /></span>
                </div>
            </div>
        </OpenableDashboardComponent>
    );
}


