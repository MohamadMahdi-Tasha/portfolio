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
        <OpenableDashboardComponent className={'lg:col-span-2 lg:row-span-2'}>
            <div>
                <div>
                    <IconComponent name={'img'} size={20} />
                    <span>PORTFOLIO</span>
                </div>
                <ButtonComponent
                    iconName={'left-arrow'}
                    bgColor={'bg-theme'}
                    iconColor={'text-orange-theme'}
                    hasBorder={false}
                    shadowColor={'shadow-darker-theme hover:shadow-darker-theme'}
                    onClick={() => false}
                />
                <ButtonComponent
                    iconName={'right-arrow'}
                    bgColor={'bg-theme'}
                    iconColor={'text-orange-theme'}
                    hasBorder={false}
                    shadowColor={'shadow-darker-theme hover:shadow-darker-theme'}
                    onClick={() => false}
                />
            </div>
            <MonitorComponent hasWhiteSide={false}>
                <Swiper>
                    <SwiperSlide><h1>asdkasjdklasldjaksljdkljaskld</h1></SwiperSlide>
                    <SwiperSlide><h1>asdkasjdklasldjaksljdkljaskld</h1></SwiperSlide>
                    <SwiperSlide><h1>asdkasjdklasldjaksljdkljaskld</h1></SwiperSlide>
                    <SwiperSlide><h1>asdkasjdklasldjaksljdkljaskld</h1></SwiperSlide>
                </Swiper>
            </MonitorComponent>
        </OpenableDashboardComponent>
    );
}