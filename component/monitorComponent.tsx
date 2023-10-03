// Codes By Mahdi Tasha
// Importing Part
import {ReactNode} from "react";

// Defining Type Of Props
interface propsType{
    hasWhiteSide: boolean;
    children: ReactNode;
}

// Creating And Exporting Monitor Component As Default
export default function MonitorComponent({children, hasWhiteSide = true}:propsType):ReactNode {
    // Returning JSX
    return (
        <div className={'bg-darker-theme rounded-[10px] p-[20px]'}>
            <div className={'bg-theme p-[20px] rounded-[10px] relative overflow-hidden'}>
                {
                    (hasWhiteSide)
                        ? <div className={'w-[300px] h-[200px] bg-white/10 -rotate-45 absolute left-[-100px] top-[-90px]'} />
                        : false
                }
                <div className={'noise-img'} />
                {children}
            </div>
        </div>
    );
}