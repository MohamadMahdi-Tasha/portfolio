// Codes By mahdi Tasha
// Importing Part
import {ReactNode} from 'react';
import OpenableDashboardComponent from "@/component/dashboard/openableDashboardComponent";
import IconComponent from "@/chunk/iconComponent";
import DotsImage from '@/public/img/device/img-device-dots.png';
import SideProjectComponent from "@/chunk/sideProjectComponent";
import ScrewComponent from "@/chunk/screwComponent";

// Creating And Exporting Dashboard Side Project Component As Default
export default function DashboardSideProjectComponent():ReactNode {
    // Returning JSX
    return (
        <OpenableDashboardComponent>
            <div>
                <span><IconComponent name={'coffee'} size={20} /></span>
                <span>SIDE-PROJECTS</span>
                <img src={DotsImage.src} alt="Image Of Dots"/>
            </div>
            <div>
                <SideProjectComponent onClick={() => alert('asd')} icon={'s'} />
                <SideProjectComponent onClick={() => alert('asd')} icon={'s'} />
            </div>
            <div>
                <div>
                    <ScrewComponent clickable={true} onClick={() => alert('asd')} />
                    <ScrewComponent clickable={true} onClick={() => alert('asd')} />
                </div>
                <svg width="188" height="189" viewBox="0 0 188 189" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                <div>
                    <ScrewComponent clickable={true} onClick={() => alert('asd')} />
                    <ScrewComponent clickable={true} onClick={() => alert('asd')} />
                </div>
            </div>
        </OpenableDashboardComponent>
    );
}


