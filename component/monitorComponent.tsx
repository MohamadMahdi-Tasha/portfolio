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
        <div>
            <div>
                {
                    (hasWhiteSide)
                        ? <div />
                        : false
                }
                <div className={'noise-img'} />
                {children}
            </div>
        </div>
    );
}