// Codes By mahdi Tasha
// Forcing NextJS To Render This Component Asd Client Side Component
'use client';

// Importing Part
import {ReactNode, useState} from 'react';
import OpenableDashboardComponent from "@/component/dashboard/openableDashboardComponent";
import IconComponent from "@/chunk/iconComponent";
import SideProjectComponent from "@/chunk/sideProjectComponent";
import ScrewComponent from "@/chunk/screwComponent";
import SoundImage from '@/public/img/dashboard/img-sound-dot.svg';
import DashboardInnerSideProjectComponent from "@/component/dashboard/dashboardInnerSideProjectComponent";

// Creating And Exporting Dashboard Side Project Component As Default
export default function DashboardSideProjectComponent():ReactNode {
    // Defining States Of Component
    const [coffeeCatchUpInnerOpened, setCoffeeCatchUpInnerOpened] = useState(false);
    const [medictaionInnerOpened, setmedictaionInnerOpened] = useState(false);

    // Returning JSX
    return (
        <OpenableDashboardComponent wholeClassName={'lg:col-span-1 sm:col-span-2 col-span-1'} className={'grid grid-rows-[.5fr_1fr_4fr] h-full relative'}>
            <DashboardInnerSideProjectComponent title={'Coffee Catch Up'} icon={'i-will-be-good'} isOpened={coffeeCatchUpInnerOpened} closeFunction={() => setCoffeeCatchUpInnerOpened(false)} link={'https://coffe-catch-up.vercel.app/'}>
                Coffee Catch Up is daily vlog of me about challenges, my routine, my projects and many more ...
            </DashboardInnerSideProjectComponent>
            <DashboardInnerSideProjectComponent title={'I Will Be Good'} icon={'coffee-catch-up'} isOpened={medictaionInnerOpened} closeFunction={() => setmedictaionInnerOpened(false)} link={'https://i-will-be-good-web.vercel.app/'}>
                I Will Be Good is web app which its purpose is to make you overcome DP/DR with tracking medications and meditations which you have done in today and before
            </DashboardInnerSideProjectComponent>
            <div className={'flex items-center gap-[30px] bg-darker-theme rounded-[10px] p-[20px] mb-[20px]'}>
                <span className={'block text-theme-orange'}><IconComponent name={'coffee'} size={20} /></span>
                <span className={'block truncate text-white font-bold tracking-wide'}>SIDE-PROJECTS</span>
            </div>
            <div className={'grid grid-cols-2 gap-[20px] mb-[20px]'}>
                <SideProjectComponent onClick={() => setmedictaionInnerOpened(true)} icon={'i-will-be-good'} />
                <SideProjectComponent onClick={() => setCoffeeCatchUpInnerOpened(true)} icon={'coffee-catch-up'} />
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


