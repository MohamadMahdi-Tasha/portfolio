// Codes By Mahdi Tasha
// Importing Part
import {MouseEventHandler, ReactNode} from "react";
import IconComponent from "@/chunk/iconComponent";

// Defining Type Of Props
interface propsType {
    bgColor: string;
    iconColor: string;
    hasBorder: boolean;
    borderColor?: string;
    iconName: string;
    shadowColor: string;
    onClick: MouseEventHandler;
}

// Creating And Exporting Button Component As Default
export default function ButtonComponent({bgColor,iconColor,iconName,hasBorder,borderColor, shadowColor, onClick}:propsType):ReactNode {
    // Conditional Rendering
    if (hasBorder) {
        return (
            <div className={`${borderColor} border-[15px] rounded-full flex items-center justify-center`}>
                <button onClick={onClick} className={`${bgColor} ${iconColor} ${shadowColor} shadow-[0_0.5em_0] w-[50px] h-[50px] flex justify-center items-center rounded-full translate-y-[-6px] hover:translate-y-0 hover:shadow-none active:shadow-[0_-0.5em_0] active:translate-y-[6px] duration-400 transition-all`}>
                    <IconComponent size={20} name={iconName} />
                </button>
            </div>
        );
    }
    else {
        return (
            <button onClick={onClick} className={`${bgColor} ${iconColor} ${shadowColor} shadow-[0_0.5em_0] w-[50px] h-[50px] flex justify-center items-center rounded-full translate-y-[-6px] hover:translate-y-0 hover:shadow-none active:shadow-[0_-0.5em_0] active:translate-y-[6px] duration-400 transition-all`}>
                <IconComponent size={20} name={iconName} />
            </button>
        );
    }
}