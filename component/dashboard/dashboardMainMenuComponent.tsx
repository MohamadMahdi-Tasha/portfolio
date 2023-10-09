// Codes By Mahdi Tasha
// Forcing NextJS To Render This Component As Client Side Component
'use client';

// Importing Part
import {ReactNode, useState} from "react";
import ImageOfDots from "@/public/img/device/img-device-dots.png";
import MonitorComponent from "@/component/monitorComponent";
import Image from 'next/image';
import ImageOfLogoWithNoBG from '@/public/img/dashboard/img-logo-nobg.png';
import ModalComponent from "@/component/modalComponent";

// Creating And Exporting Main Menu Of Dashboard As Default
export default function DashboardMainMenuComponent():ReactNode {
    // Defining State Of Component
    const [isMailModalOpened, setMailModalOpened] = useState(false);

    // Returning JSX
    return (
        <div className={'bg-theme-orange rounded-[20px] overflow-hidden'}>
            <ModalComponent isOpened={isMailModalOpened}
                            icon={'mail'}
                            title={'asdsd'}
                            closeFunction={() => setMailModalOpened(false)}
                            showsMonitorForHiring={true}
            >
                <h1>mail modal</h1>
            </ModalComponent>
            <div className={'p-[20px] border-b-4 border-b-theme-orange-dark flex justify-between items-center gap-[20px]'}>
                <h1 className={'text-white font-bold text-[14px] truncate tracking-wide'}>MOHAMAD MAHDI TASHA</h1>
                <img className={'w-[50px] lg:block hidden shrink-0'} src={ImageOfDots.src} alt="Image Of Dots"/>
            </div>
            <div className={'flex flex-col gap-[10px] justify-between items-center w-full p-[20px] h-[96%]'}>
                <div className={'w-full'}>
                    <MonitorComponent hasWhiteSide={true}>
                        <a href={'https://www.github.com/MohamadMahdi-Tasha'} className={'h-[200px] flex justify-center items-center [&>img]:hover:scale-150'}>
                            <Image src={ImageOfLogoWithNoBG.src} alt={'Logo Of Mahdi Tasha'} className={'transition-all duration-300'} width={50} height={50} />
                        </a>
                    </MonitorComponent>
                    <button onClick={() => setMailModalOpened(true)} className={`bg-sky-500 text-sky-300 shadow-sky-800 shadow-[0_0.5em_0] px-auto py-[10px] rounded-[10px] translate-y-[-6px] hover:translate-y-0 active:translate-y-0 hover:shadow-[transparent] active:shadow-[0_inset_-0.5em_0] duration-400 transition-all w-full mt-[20px] mb-[18px]`}>
                        CONTACT ME
                    </button>
                    <div className={'p-[10px] bg-theme-orange-dark rounded-[10px] h-[300px] overflow-auto'}>
                        <p className={'text-white font-light text-[15px]'}>
                            <span className={'text-[17px] font-bold block truncate mb-[5px]'}>About Me:</span>
                            I'm <span className={'font-bold'}>mahdi tasha</span> <br/>
                            A creative <span className={'font-bold'}>front end developer</span> <br/>
                            Based in <span className={'font-bold'}>tehran</span> <br/>
                            With <span className={'font-bold'}>infinite</span> love for this industry :)
                        </p>
                        <hr className={'border-white/30 my-[20px]'} />
                        <p className={'text-white font-light text-[15px]'}>
                            <span className={'text-[17px] font-bold block truncate mb-[5px]'}>Skills:</span>
                            HTML 5 <br/>
                            CSS 3 <br/>
                            Javascript + ES6 <br/>
                            GIT <br/>
                            REACT JS <br/>
                            VITE <br/>
                            REACT NATIVE <br/>
                            NEXT JS <br/>
                            TAILWINDCSS <br/>
                            BOOTSTRAP <br/>
                            PHOTOPSHOP <br/>
                            TYPESCRIPT <br/>
                            REDUX
                        </p>
                        <hr className={'border-white/30 my-[20px]'} />
                        <p className={'text-white font-light text-[15px]'}>
                            <span className={'text-[17px] font-bold block truncate mb-[5px]'}>My Reason To Became Front End dev:</span>
                            Before i even learn about this, I knew some Photoshop skills <br/>
                            And i really liked it. After that which i came up with coding ideas <br/>
                            I realized i should do front end developer stuff because i like colors and design
                        </p>
                    </div>
                </div>
                <div className={'w-[80%] h-[50px] bg-darker-theme rounded-t-[20px] mx-auto'} />
            </div>
        </div>
    );
}