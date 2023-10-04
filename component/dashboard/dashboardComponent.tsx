// Codes By Mahdi Tasha
// Importing Part
import {ReactNode} from "react";
import {motion} from 'framer-motion';
import DashboardMainMenuComponent from "@/component/dashboard/dashboardMainMenuComponent";

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
            <div className={'gap-[20px] grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1'}>
                <DashboardMainMenuComponent />
                <div className={'grid lg:grid-cols-2 gap-[20px] h-full grid-row-4'}>
                    <div className={'bg-red-600 lg:col-span-2'} />
                    <div className={'bg-red-600 lg:col-span-2 lg:row-span-2'} />
                    <div className={'bg-red-600'} />
                    <div className={'bg-red-600'} />
                </div>
                <div className={'bg-theme-orange lg:grid-cols-1 sm:grid-cols-2 grid-cols-1'} />
            </div>
        </motion.div>
    );
}