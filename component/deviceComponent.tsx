// Codes By Mahdi Tasha
// Importing Part
import {ReactNode} from "react";
import ImageOfCabel from '@/public/img/img-cable.svg';
import ScrewComponent from "@/chunk/screwComponent";
import ImageOfDots from '@/public/img/img-device-dots.png';
import MonitorComponent from "@/component/monitorComponent";
import ButtonComponent from '@/chunk/buttonComponent';
import IconComponent from "@/chunk/iconComponent";

// Creating And Exporting Device Component As Default
export default function DeviceComponent():ReactNode {
    return (
        <div className={'pb-[20px]'}>
            <div className={'relative h-[150px] flex items-center justify-center z-[2]'}>
                <div className={'w-[5px] h-full bg-theme-orange-dark absolute left-[50%] translate-x-[-50%] z-[1]'} />
                <img src={ImageOfCabel.src} alt="Cable Image" className={'w-[20px] z-[2]'} />
                <div className={'bg-theme w-[75px] rounded-[50rem] absolute left-[50%] z-[2] translate-x-[-50%] top-full rotate-90 h-[20px]'} />
            </div>
            <div className={'bg-theme-orange z-[3] relative shadow-lg max-w-[400px] mx-auto p-[20px] rounded-[20px] mb-[30px]'}>
                <div className={'flex items-center gap-[20px] justify-between mb-[20px]'}>
                    <span className={'text-white/50'}><ScrewComponent clickable={false} /></span>
                    <img className={'w-[50px]'} src={ImageOfDots.src} alt="Dots Image"/>
                    <span className={'text-white/50'}><ScrewComponent clickable={false} /></span>
                </div>
                <MonitorComponent hasWhiteSide={false}>
                    <h1 className={'text-white text-[30px] font-bold mb-[10px]'}>I'm Mahdi Tasha</h1>
                    <h3 className={'text-[13px] text-gray-300 font-normal'}>I'm creative front end developer based in tehran. Welcome to my personal dashboard.</h3>
                </MonitorComponent>
                <div className={'flex justify-center items-center my-[20px]'}>
                    <div className={'relative'}>
                        <div className={'absolute z-[3] click-btn-popup flex bottom-[70%] left-[80%] w-[75px] h-[75px] justify-center items-center rounded-full bg-white after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-[20px] after:h-[20px] after:bg-cover'}>
                            <span className={'text-black font-bold text-[16px] block tracking-wide'}>CLICK</span>
                        </div>
                        <ButtonComponent onClick={() => alert('asd')} shadowColor={'shadow-darker-theme active:shadow-darker-theme'} iconName={'power'} iconColor={'text-white/50'} bgColor={'bg-theme'} hasBorder={true} borderColor={'border-theme-orange-dark'} />
                    </div>
                </div>
                <div className={'flex items-center gap-[20px] justify-between'}>
                    <span className={'text-white/50'}><ScrewComponent clickable={false} /></span>
                    <img className={'w-[50px]'} src={ImageOfDots.src} alt="Dots Image"/>
                    <span className={'text-white/50'}><ScrewComponent clickable={false} /></span>
                </div>
            </div>
            <div className={'bg-gray-800 max-w-[400px] mx-auto p-[10px] rounded-[10px] flex items-center justify-center gap-[20px]'}>
                <span className={'text-gray-500 text-[14px] font-bold'}>TURN ON YOUR</span>
                <span className={'text-white'}><IconComponent name={'sound'} size={16} /></span>
            </div>
        </div>
    );
}