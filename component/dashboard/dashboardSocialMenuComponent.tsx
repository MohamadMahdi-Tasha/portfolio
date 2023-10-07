// Codes BY Mahdi Tasha
// Importing Part
import {ReactNode} from 'react';
import SocialComponent from "@/chunk/socialComponent";
import OpenableDashboardComponent from "@/component/dashboard/openableDashboardComponent";

// Creating And Exporting Dashboard Social Menu Component As Default
export default function DashboardSocialMenuComponent():ReactNode {
    // Returning JSX
    return (
        <OpenableDashboardComponent className={'lg:col-span-2'}>
            <div className={'grid lg:grid-cols-3 sm:grid-cols-2 lg:[&>div:last-of-type]:col-span-1 sm:[&>div:last-of-type]:col-span-2 [&>div:last-of-type]:col-span-1 gap-[10px] [&>:last-of-type]:col-span-1'}>
                <SocialComponent icon={'instagram'} />
                <SocialComponent icon={'github'} />
                <SocialComponent icon={'ponisha'} />
            </div>
        </OpenableDashboardComponent>
    );
}