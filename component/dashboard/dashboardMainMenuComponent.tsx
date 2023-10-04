// Codes By Mahdi Tasha
// Importing Part
import {ReactNode} from "react";
import ImageOfDots from "@/public/img/img-device-dots.png";
import MonitorComponent from "@/component/monitorComponent";
import IconComponent from "@/chunk/iconComponent";

// Creating And Exporting Main Menu Of Dashboard As Default
export default function DashboardMainMenuComponent():ReactNode {
    // Returning JSX
    return (
        <div>
            <div>
                <h1>MOHAMAD MAHDI TASHA</h1>
                <img src={ImageOfDots.src} alt="Image Of Dots"/>
            </div>
            <div>
                <MonitorComponent hasWhiteSide={true}><h1>KJkj</h1></MonitorComponent>
                <div>
                    <div>
                        <button>CONTACT ME</button>
                        <IconComponent name={'right-arrow-stroke'} size={30} />
                    </div>
                </div>
                <p>
                    I'm mahdi tasha <br/>
                    A creative front end developer <br/>
                    Based in tehran <br/>
                    With infinite love for this industry :)
                </p>
                <div />
            </div>
        </div>
    );
}