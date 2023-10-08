// Codes By Mahdi Tasha
// Importing Part
import {ReactNode} from "react";
import {motion} from 'framer-motion';
import DashboardMainMenuComponent from "@/component/dashboard/dashboardMainMenuComponent";
import DashboardSocialMenuComponent from '@/component/dashboard/dashboardSocialMenuComponent';
import DashboardPorfolioMenuComponent from '@/component/dashboard/dashboardPortfolioMenuComponent';
import OpenableDashboardComponent from "@/component/dashboard/openableDashboardComponent";
import DashboardMComponent from "@/component/dashboard/dashboardMComponent";

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
            <div className={'grid lg:grid-cols-[1fr_1.5fr_1fr] sm:grid-cols-2 grid-cols-1 gap-[20px]'}>
                <DashboardMainMenuComponent />
                <div className={'grid grid-rows-4 gap-[20px] lg:grid-cols-2 grid-cols-1'}>
                    <DashboardSocialMenuComponent />
                    <DashboardPorfolioMenuComponent />
                    <DashboardMComponent />
                    <div className={'bg-red-600 grid-cols-1 grid-rows-2'} />
                </div>
                <div className={'col-span-1 bg-red-600'} />
            </div>
        </motion.div>
    );
}