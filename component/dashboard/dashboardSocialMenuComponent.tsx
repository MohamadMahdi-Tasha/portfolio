// Codes BY Mahdi Tasha
// Importing Part
import {ReactNode} from 'react';
import SocialComponent from "@/chunk/socialComponent";
import OpenableDashboardComponent from "@/component/dashboard/openableDashboardComponent";

// Creating And Exporting Dashboard Social Menu Component As Default
export default function DashboardSocialMenuComponent():ReactNode {
    // Returning JSX
    return (
        <OpenableDashboardComponent className={'bg-red-600 lg:col-span-2'}>
            <SocialComponent icon={'instagram'} />
            <SocialComponent icon={'github'} />
            <SocialComponent icon={'ponisha'} />
        </OpenableDashboardComponent>
    );
}