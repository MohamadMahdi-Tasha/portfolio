// Codes By Mahdi Tasha
// Importing Part
import {ReactNode} from "react";
import ImageOfCabel from '@/public/img/img-cable.svg';
import ScrewComponent from "@/chunk/screwComponent";
import ImageOfDots from '@/public/img/img-device-dots.png';
import MonitorComponent from "@/component/monitorComponent";
import ButtonComponent from '@/chunk/buttonComponent';
import IconComponent from "@/chunk/iconComponent";

// Defining Type Of Props
interface propsType {
    isOpened: boolean;
}

// Creating And Exporting Device Component As Default
export default function DeviceComponent({isOpened}:propsType):ReactNode {
    // Conditional Rendering
    if (isOpened) {
        return (
            <div>
                <div>
                    <div />
                    <img src={ImageOfCabel.src} alt="Cable Image"/>
                    <div />
                </div>
                <div>
                    <div>
                        <ScrewComponent clickable={false} />
                        <img src={ImageOfDots.src} alt="Dots Image"/>
                        <ScrewComponent clickable={false} />
                    </div>
                    <MonitorComponent hasWhiteSide={false}>
                        <h1>I'm Mahdi Tasha</h1>
                        <h3>I'm creative front end developer based in tehran. Welcome to my personal dashboard.</h3>
                    </MonitorComponent>
                    <div>
                        <div>
                            <div><span>CLICK</span></div>
                            <ButtonComponent iconName={'power'} iconColor={'red-600'} bgColor={'red-200'} hasBorder={true} borderColor={'purple-500'} />
                        </div>
                    </div>
                    <div>
                        <ScrewComponent clickable={false} />
                        <img src={ImageOfDots.src} alt="Dots Image"/>
                        <ScrewComponent clickable={false} />
                    </div>
                </div>
                <button>
                    TURN ON YOUR
                    <IconComponent name={'sound'} size={16} />
                </button>
            </div>
        );
    }
}