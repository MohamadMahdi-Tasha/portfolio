// Codes By Mahdi Tasha
// Forcing NextJS To Render This Component As Client Side Component
'use client';

// Importing Part
import {ReactNode, useState} from "react";
import ButtonComponent from "@/chunk/buttonComponent";
import IconComponent from "@/chunk/iconComponent";

// Defining Type Of Props
interface propsType {
    children: ReactNode;
    className: string;
}

// Creating And Exporting Openable Dashboard Component Asd Default
export default function OpenableDashboardComponent({children, className}:propsType):ReactNode {
    // Defining States Of Component
    const [isOpened, setOpened] = useState(false);

    // Returning JSX
    return (
        <div className={`${className}`}>
            <div>
                <div>
                    <div>
                        <div />
                        <div />
                    </div>
                    <ButtonComponent
                        onClick={() => setOpened(true)}
                        iconName={'lock'}
                        shadowColor={'shadow-black-300'}
                        bgColor={'shadow-black-300'}
                        iconColor={'shadow-black-300'}
                        hasBorder={false}
                    />
                    <div>
                        <div />
                        <div />
                    </div>
                </div>
                <h6>
                    <IconComponent size={20} name={'info'} />
                    CLICK TO OPEN
                </h6>
            </div>
            <div>
                {children}
            </div>
        </div>
    );
}