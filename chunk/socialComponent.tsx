// Codes By Mahdi Tasha
// Importing Part
import {ReactNode} from 'react';
import ButtonComponent from "@/chunk/buttonComponent";

// Defining Type Of Props
interface propsType {
    icon: 'instagram' | 'github' | 'ponisha';
}

// Creating And Exporting Social Component As Default
export default function SocialComponent({icon}:propsType):ReactNode {
    // Returning JSX
    return (
        <div>
            <div>
                <div />
                <div />
            </div>
            <ButtonComponent
                iconName={icon}
                onClick={() => alert('button-clicked')}
                hasBorder={false}
                bgColor={'bg-red-200'}
                iconColor={'text-red-600'}
                shadowColor={'shadow-sky-800 active:shadow-sky-800'}
            />
            <div>
                <div />
                <div />
            </div>
        </div>
    );
}