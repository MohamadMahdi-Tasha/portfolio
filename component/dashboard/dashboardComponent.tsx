// Codes By Mahdi Tasha
// Importing Part
import {ReactNode} from "react";
import {motion} from 'framer-motion';
import DashboardMainMenuComponent from "@/component/dashboard/dashboardMainMenuComponent";
import DashboardSocialMenuComponent from '@/component/dashboard/dashboardSocialMenuComponent';
import DashboardPorfolioMenuComponent from '@/component/dashboard/dashboardPortfolioMenuComponent';

// Defining Type Of Props
interface propsType {
    stateOfAnimate: string;
}

// Creating And Exporting Dashboard Component As Default
export default function DashboardComponent({stateOfAnimate}:propsType):ReactNode {
    // Returning JSX
    return (
        <motion.div
            variants={{
                visible: {x: 0, opacity: 100,visibility: 'visible', height: 'auto', width: '100%'},
                hidden: {x: -10, opacity: 0,visibility: 'hidden', height: 0, width: 'auto'}
            }}
            transition={{duration: .5}}
            initial={'hidden'}
            animate={stateOfAnimate}
            className={'py-[30px]'}
        >
            <div>
                <DashboardMainMenuComponent />
                <DashboardSocialMenuComponent />
                <DashboardPorfolioMenuComponent />
            </div>
        </motion.div>
    );
}