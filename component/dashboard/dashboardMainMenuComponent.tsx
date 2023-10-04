// Codes By Mahdi Tasha
// Importing Part
import {ReactNode} from "react";
import ImageOfDots from "@/public/img/device/img-device-dots.png";
import MonitorComponent from "@/component/monitorComponent";
import IconComponent from "@/chunk/iconComponent";
import Image from 'next/image';
import ImageOfLogoWithNoBG from '@/public/img/dashboard/img-logo-nobg.png';

// Creating And Exporting Main Menu Of Dashboard As Default
export default function DashboardMainMenuComponent():ReactNode {
    // Returning JSX
    return (
        <div className={'bg-theme-orange rounded-[20px] overflow-hidden'}>
            <div className={'p-[20px] border-b-4 border-b-theme-orange-dark flex justify-between items-center gap-[20px]'}>
                <h1 className={'text-white font-bold text-[14px] truncate tracking-wide'}>MOHAMAD MAHDI TASHA</h1>
                <img className={'w-[50px] lg:block hidden shrink-0'} src={ImageOfDots.src} alt="Image Of Dots"/>
            </div>
            <div>
                <div className={'p-[20px]'}>
                    <MonitorComponent hasWhiteSide={true}>
                        <div className={'h-[200px] flex justify-center items-center'}>
                            <Image src={ImageOfLogoWithNoBG.src} alt={'Logo Of Mahdi Tasha'} width={50} height={50} />
                        </div>
                    </MonitorComponent>
                    <div className={'mt-[20px] p-[15px] rounded-[10px] bg-theme-orange-dark mb-[20px]'}>
                        <div className={'flex line-bg bg-cover rounded-[10px] relative h-[39px]'}>
                            <button className={'bg-sky-500 z-[2] absolute left-0 top-0 px-[20px] py-[10px] rounded-[5px] text-sky-700 font-bold text-[14px] tracking-wide shadow-[0_0.5em_0] shadow-sky-800 translate-y-[-10px] transition-all hover:shadow-transparent hover:translate-y-0 duration-400 active:translate-y-0 active:shadow-[0_inset_-0.5em_0]'}>
                                CONTACT ME
                            </button>
                            <span className={'block absolute left-[70%] top-[50%] translate-y-[-50%]'}><IconComponent name={'right-arrow-stroke'} size={30} /></span>
                        </div>
                    </div>
                    <p className={'text-white font-light line-clamp-5 text-[14]'}>
                        I'm <span className={'font-bold'}>mahdi tasha</span> <br/>
                        A creative <span className={'font-bold'}>front end developer</span> <br/>
                        Based in <span className={'font-bold'}>tehran</span> <br/>
                        With <span className={'font-bold'}>infinite</span> love for this industry :)
                    </p>
                </div>
                <div className={'w-[80%] h-[50px] bg-darker-theme rounded-t-[20px] mx-auto'} />
            </div>
        </div>
    );
}