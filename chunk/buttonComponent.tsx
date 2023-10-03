// Codes By Mahdi Tasha
// Importing Part
import {ReactNode} from "react";
import IconComponent from "@/chunk/iconComponent";

// Defining Type Of Props
interface propsType {
    bgColor: string;
    iconColor: string;
    hasBorder: boolean;
    borderColor?: string;
    iconName: string;
}

// Creating And Exporting Button Component As Default
export default function ButtonComponent({bgColor,iconColor,iconName,hasBorder,borderColor}:propsType):ReactNode {
    // Conditional Rendering
    if (hasBorder) {
        return (
            <div className={`border-${borderColor}`}>
                <button className={`bg-${bgColor} text-${iconColor}`}>
                    <IconComponent size={20} name={iconName} />
                </button>
            </div>
        );
    }
    else {
        return (
            <button className={`bg-${bgColor} text-${iconColor}`}>
                <IconComponent size={20} name={iconName} />
            </button>
        );
    }
}