// Codes By Mahdi Tasha
// Importing Part
import {MouseEventHandler, ReactNode} from "react";
import ImageOfCabel from "@/public/img/device/img-cable.svg";
import IconComponent from "@/chunk/iconComponent";
import MonitorComponent from "@/component/monitorComponent";
import ButtonComponent from "@/chunk/buttonComponent";
import {motion} from "framer-motion";

// Defining Type Of Props
interface propsType {
    isOpened: boolean;
    children: ReactNode;
    title: string;
    icon: string;
    closeFunction: MouseEventHandler;
    showsMonitorForHiring: boolean;
}

// CreatingAnd Exporting Modal Component As Default
export default function ModalComponent({isOpened, children, title, icon, closeFunction, showsMonitorForHiring}:propsType):ReactNode {
    // Returning JSX
    return (
        <motion.div
            variants={{
                hidden: {opacity: 0, y: -20, pointerEvents: 'none'},
                visible: {opacity: 1, y: 0, pointerEvents: 'visible'}
            }}
            initial={'hidden'}
            transition={{duration: .4}}
            animate={(isOpened) ? 'visible' : 'hidden'}
            className={'fixed top-0 left-0 w-full h-full z-[50]'}
        >
            <div onClick={closeFunction} className={'w-full h-full fixed top-0 left-0 bg-black/50 lg:block hidden'} />
            <div>
                <div className={'relative h-[150px] lg:flex hidden items-center justify-center z-[2]'}>
                    <div className={'w-[5px] h-full bg-theme-orange-dark absolute left-[50%] translate-x-[-50%] z-[1]'} />
                    <img src={ImageOfCabel.src} alt="Cable Image" className={'w-[20px] z-[2]'} />
                    <div className={'bg-theme w-[75px] rounded-[50rem] absolute left-[50%] z-[2] translate-x-[-50%] top-full rotate-90 h-[20px]'} />
                </div>
                <div className={'bg-theme-orange z-[3] lg:relative shadow-lg lg:max-w-[800px] max-w-[auto] lg:w-auto w-full mx-auto lg:rounded-[20px] flex flex-col lg:h-[300px] h-full fixed top-0 left-0'}>
                    <div className={'p-[20px] flex justify-between gap-[20px] border-b-4 border-b-theme-orange-dark '}>
                        <div className={'w-full flex items-center gap-[20px] bg-theme-orange-dark p-[10px] rounded-[10px]'}>
                            <div className={'aspect-square w-[50px] bg-theme flex justify-center items-center text-theme-orange rounded-[10px]'}><IconComponent name={icon} size={20} /></div>
                            <span className={'truncate text-white uppercase tracking-wide text-[16px] font-bold'}>{title}</span>
                        </div>
                        {
                            (showsMonitorForHiring)
                                ? (
                                    <MonitorComponent hasWhiteSide={false} noPadding>
                                        <div className={'p-[20px] h-[40px] w-[150px] flex items-center justify-center'}>
                                            <span className={'text-[20px] whitespace-nowrap font-bold tracking-wide text-white'}>AVAILABLE FOR HIRING</span>
                                        </div>
                                    </MonitorComponent>
                                ) : false
                        }
                        <div>
                            <ButtonComponent onClick={closeFunction}
                                             shadowColor={'shadow-red-900 active:shadow-red-900'}
                                             iconColor={'text-red-900'}
                                             bgColor={'bg-red-500'}
                                             iconName={'x'}
                                             hasBorder={true}
                                             borderColor={'border-theme-orange-dark'}
                            />
                        </div>
                    </div>
                    <div className={'h-full w-full overflow-auto p-[20px]'}>
                        <div>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}