// Codes By Mahdi Tasha
// Importing Part
import {ReactNode} from "react";
import OpenableDashboardComponent from "@/component/dashboard/openableDashboardComponent";
import IconComponent from "@/chunk/iconComponent";
import ButtonComponent from "@/chunk/buttonComponent";
import MonitorComponent from "@/component/monitorComponent";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';

// Creating And Exporting dashboard Portfolio Menu Component As Default
export default function DashboardPortfolioMenuComponent():ReactNode {
    // Returning JSX
    return (
        <OpenableDashboardComponent className={'flex justify-between gap-[30px] h-full flex-col items-start w-full'}>
            <div className={'flex sm:flex-row flex-col sm:justify-between sm:gap-[30px] gap-[20px] w-full'}>
                <div className={'bg-darker-theme flex items-center gap-[10px] px-[20px] py-[10px] rounded-[10px] sm:w-[60%]'}>
                    <span className={'text-theme-orange'}><IconComponent name={'img'} size={20} /></span>
                    <span className={'text-white text-[14px] truncate'}>PORTFOLIO</span>
                </div>
                <div className={'flex items-center sm:justify-end justify-center gap-[20px] sm:w-[40%]'}>
                    <ButtonComponent
                        iconName={'left-arrow'}
                        bgColor={'bg-theme'}
                        iconColor={'text-theme-orange'}
                        hasBorder={false}
                        shadowColor={'shadow-darker-theme active:shadow-darker-theme'}
                        className={'border border-darker-theme'}
                        onClick={() => false}
                    />
                    <ButtonComponent
                        iconName={'right-arrow'}
                        bgColor={'bg-theme'}
                        iconColor={'text-theme-orange'}
                        hasBorder={false}
                        shadowColor={'shadow-darker-theme active:shadow-darker-theme'}
                        onClick={() => false}
                        className={'border border-darker-theme'}
                    />
                </div>
            </div>
            <div className={'w-full'}>
                <MonitorComponent hasWhiteSide={false}>
                    <div className="h-[100px]">
                        <Swiper>
                            <SwiperSlide><h1>asdkasjdklasldjaksljdkljaskld</h1></SwiperSlide>
                            <SwiperSlide><h1>asdkasjdklasldjaksljdkljaskld</h1></SwiperSlide>
                            <SwiperSlide><h1>asdkasjdklasldjaksljdkljaskld</h1></SwiperSlide>
                            <SwiperSlide><h1>asdkasjdklasldjaksljdkljaskld</h1></SwiperSlide>
                        </Swiper>
                    </div>
                </MonitorComponent>
            </div>
        </OpenableDashboardComponent>
    );
}