// Codes By Mahdi Tasha
// Importing Part
import {ReactNode} from "react";

// Defining Type Of Props
interface propsType {
    name: string;
    size: number;
}

// Creating And Exporting Icon Component As Default
export default function IconComponent({name, size}:propsType):ReactNode {
    // Conditional Rendering
    if (name === 'sound') {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 15 15" fill="none">
                <path d="M7.75 1.5C7.75 1.30904 7.64122 1.13475 7.46968 1.05085C7.29813 0.966944 7.09377 0.988084 6.94303 1.10533L3.2213 4H1.5C0.671573 4 0 4.67158 0 5.5V9.5C0 10.3284 0.671571 11 1.5 11H3.2213L6.94303 13.8947C7.09377 14.0119 7.29813 14.0331 7.46968 13.9492C7.64122 13.8653 7.75 13.691 7.75 13.5V1.5Z" fill="CurrentColor"></path>
                <path d="M10.833 3.95949C10.7106 3.77557 10.4623 3.72567 10.2784 3.84804C10.0944 3.97041 10.0445 4.21871 10.1669 4.40264C11.4111 6.27269 11.4111 8.72728 10.1669 10.5973C10.0445 10.7813 10.0944 11.0296 10.2784 11.1519C10.4623 11.2743 10.7106 11.2244 10.833 11.0405C12.2558 8.90199 12.2558 6.09798 10.833 3.95949Z" fill="CurrentColor"></path>
                <path d="M12.1147 1.38386C12.2832 1.24104 12.5356 1.2619 12.6785 1.43044C15.6406 4.92612 15.6406 10.0739 12.6785 13.5696C12.5356 13.7381 12.2832 13.759 12.1147 13.6161C11.9462 13.4733 11.9253 13.2209 12.0681 13.0524C14.7773 9.85513 14.7773 5.14488 12.0681 1.94762C11.9253 1.77908 11.9462 1.52667 12.1147 1.38386Z" fill="CurrentColor"></path>
            </svg>
        );
    } else if (name === 'sound-off') {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 15 15" fill="none">
                <path d="M8 1.5C8 1.31062 7.893 1.13749 7.72361 1.05279C7.55421 0.968093 7.35151 0.986371 7.2 1.1L3.33333 4H1.5C0.671573 4 0 4.67158 0 5.5V9.5C0 10.3284 0.671573 11 1.5 11H3.33333L7.2 13.9C7.35151 14.0136 7.55421 14.0319 7.72361 13.9472C7.893 13.8625 8 13.6894 8 13.5V1.5Z" fill="CurrentColor"></path>
                <path d="M14.8536 5.85355C15.0488 5.65829 15.0488 5.34171 14.8536 5.14645C14.6583 4.95118 14.3417 4.95118 14.1464 5.14645L12.5 6.79289L10.8536 5.14645C10.6583 4.95118 10.3417 4.95118 10.1464 5.14645C9.95118 5.34171 9.95118 5.65829 10.1464 5.85355L11.7929 7.5L10.1464 9.14645C9.95118 9.34171 9.95118 9.65829 10.1464 9.85355C10.3417 10.0488 10.6583 10.0488 10.8536 9.85355L12.5 8.20711L14.1464 9.85355C14.3417 10.0488 14.6583 10.0488 14.8536 9.85355C15.0488 9.65829 15.0488 9.34171 14.8536 9.14645L13.2071 7.5L14.8536 5.85355Z" fill="CurrentColor"></path>
            </svg>
        );
    } else if (name === 'power') {
        return (
            <svg width={size} height={size} viewBox="0 0 34 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M13.9999 11.9192C14.9563 11.6609 15.9621 11.5231 17.0002 11.5231C17.6823 11.5231 18.3505 11.5826 18.9999 11.6967L18.9999 6.59634C18.3444 6.51726 17.677 6.47656 17.0002 6.47656C15.9756 6.47656 14.9728 6.56981 13.9999 6.74829L13.9999 11.9192ZM9.99987 13.9045L9.99987 8.02839C4.37382 10.6635 0.476924 16.3766 0.476924 22.9998C0.476924 32.1254 7.87464 39.5231 17.0002 39.5231C26.1257 39.5231 33.5234 32.1254 33.5234 22.9998C33.5234 15.9907 29.1592 10.0009 22.9999 7.59955L22.9999 13.2143C26.2857 15.2332 28.4769 18.8606 28.4769 22.9998C28.4769 29.3382 23.3386 34.4766 17.0002 34.4766C10.6617 34.4766 5.52344 29.3382 5.52344 22.9998C5.52344 19.2966 7.27738 16.003 9.99987 13.9045Z" fill="currentColor"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M16.5 0C17.8807 0 19 0.909101 19 2.03053V16.9695C19 18.0909 17.8807 19 16.5 19C15.1193 19 14 18.0909 14 16.9695V2.03053C14 0.909101 15.1193 0 16.5 0Z" fill="currentColor"/>
            </svg>
        );
    } else if (name === 'right-arrow-stroke') {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 37 33" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M24.848 1.81118L34.6091 11.9087C36.8848 14.2636 36.8845 18.0384 34.6092 20.3928L24.8478 30.4909C22.5131 32.9053 18.6827 32.9046 16.3487 30.4909C14.1355 28.201 14.0742 24.5682 16.1649 22.2043H5.95698C2.56698 22.2043 0 19.3923 0 16.1508C0 12.9094 2.56698 10.0973 5.95698 10.0973H16.165C14.074 7.73345 14.135 4.10094 16.3485 1.81117C18.6828 -0.603693 22.5136 -0.603758 24.848 1.81118Z" fill="#b05504"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M31.9413 14.5631L22.1804 4.4657C21.3108 3.56613 19.8865 3.56611 19.0169 4.4657C18.1657 5.34621 18.1658 6.76021 19.0169 7.64071L25.0564 13.8884H5.95741C4.6996 13.8884 3.7373 14.9335 3.7373 16.1506C3.7373 17.3677 4.6996 18.4128 5.95741 18.4128H25.0564L19.0169 24.6604C18.1658 25.541 18.1659 26.9552 19.017 27.8357C19.8866 28.735 21.3108 28.7349 22.1804 27.8356L31.9414 17.738C32.7923 16.8575 32.7922 15.4436 31.9413 14.5631Z" fill="#fb6e04"></path>
            </svg>
        );
    } else if (name === 'instagram') {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 0 16 16"><path
                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
            </svg>
        );
    } else if (name === 'github') {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
            </svg>
        );
    } else if (name === 'ponisha') {
        return (
            <svg width={size} height={size} viewBox="0 0 196 196" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="11" y="11" width="174" height="174" rx="47" stroke="currentColor" strokeWidth="22"/>
                <rect x="40" y="67" width="116" height="20" rx="4" fill="currentColor"/>
                <path d="M42.7421 125.893L51.5875 120.707C53.1375 119.799 55.126 120.458 56.0779 121.982C62.7618 132.681 77.7438 138.318 85.2043 139.937C85.4052 139.981 85.6036 140 85.8092 140H103.5C105.157 140 106.5 141.343 106.5 143V153C106.5 154.657 105.161 156 103.504 156H82C65.152 156 49.2542 140.07 41.8301 130.09C40.8005 128.706 41.254 126.765 42.7421 125.893Z" fill="currentColor"/>
            </svg>
        );
    } else if (name === 'info') {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 26 26" fill="none">
                <path d="M10.1574 9.90758H9.90738V10.1576V11.9695V12.2195H10.1574H11.0633H11.7193V17.1552H11.0633H10.1574H9.90738V17.4052V19.2171V19.4671H10.1574H11.0633H12.8753H14.6872H15.5931H15.8431V19.2171V17.4052V17.1552H15.5931H14.6872H14.0312V11.0635C14.0312 10.4251 13.5137 9.90758 12.8753 9.90758H11.0633H10.1574ZM12.875 0.625C6.10953 0.625 0.625 6.1095 0.625 12.875C0.625 19.6404 6.10953 25.125 12.875 25.125C19.6406 25.125 25.125 19.6404 25.125 12.875C25.125 6.1095 19.6406 0.625 12.875 0.625ZM2.84631 12.875C2.84631 7.3363 7.33633 2.84631 12.875 2.84631C18.4137 2.84631 22.9037 7.3363 22.9037 12.875C22.9037 18.4136 18.4137 22.9037 12.875 22.9037C7.33634 22.9037 2.84631 18.4136 2.84631 12.875ZM12.8751 9.04865C13.7636 9.04865 14.484 8.3283 14.484 7.43972C14.484 6.55112 13.7636 5.83079 12.8751 5.83079C11.9865 5.83079 11.2661 6.55112 11.2661 7.43972C11.2661 8.3283 11.9865 9.04865 12.8751 9.04865Z" fill="CurrentColor" stroke="CurrentColor" strokeWidth="0.5"></path>
            </svg>
        );
    } else if (name === 'lock') {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 30" fill="none">
                <g clipPath="url(#clip0_1282_12368)"><path d="M20.6 11.5H20.2V8.5C20.2 6 19.5 3.9 18.1 2.4C16.6 0.8 14.5 0 12 0C9.2 0 7 1 5.5 2.9C4.4 4.3 3.8 6.2 3.8 8.4C3.8 9.2 4.5 9.9 5.3 9.9H7.2C8 9.9 8.7 9.2 8.7 8.4C8.7 7.3 8.9 6.4 9.4 5.8C9.9 5.2 10.7 4.8 12 4.8C13.1 4.8 13.9 5.1 14.5 5.6C15 6.2 15.3 7.1 15.3 8.3V11.3H3.4C1.5 11.5 0 13 0 14.9V26.4C0 28.3 1.5 29.8 3.4 29.8H20.6C22.5 29.8 24 28.3 24 26.4V14.9C24 13 22.5 11.5 20.6 11.5ZM19.1 16.4V24.9H4.9V16.4H19.1Z" fill="CurrentColor"></path></g>
                <defs><clipPath id="clip0_1282_12368"><rect width="24" height="29.7" fill="currentColor"></rect></clipPath></defs>
            </svg>
        );
    } else if (name === 'img') {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M0.613281 2.49023C0.613281 1.45362 1.45362 0.613281 2.49023 0.613281H21.2598C22.2964 0.613281 23.1367 1.45362 23.1367 2.49023V21.2598C23.1367 22.2964 22.2964 23.1367 21.2598 23.1367H2.49023C1.45362 23.1367 0.613281 22.2964 0.613281 21.2598V2.49023ZM14.5617 8.12072C14.5617 9.60477 13.3587 10.8078 11.8746 10.8078C10.3906 10.8078 9.1875 9.60477 9.1875 8.12072C9.1875 6.63666 10.3906 5.43359 11.8746 5.43359C13.3587 5.43359 14.5617 6.63666 14.5617 8.12072ZM18.7848 12.1484L21.2598 15.2104V21.2598H2.49023L2.49023 13.3543L5.48584 9.46289L13.032 19.2657L18.7848 12.1484Z" fill="currentColor"/>
            </svg>
        );
    } else if (name === 'left-arrow') {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 23 20" fill="none">
                <path d="M10.746 15.5531L7.06338 11.7434L20.1048 11.7434C21.2474 11.7434 22.1736 10.7853 22.1736 9.60327C22.1736 8.42128 21.2474 7.46309 20.1048 7.46309L7.06341 7.46309L10.7461 3.65351C11.5539 2.81766 11.554 1.46257 10.7461 0.626724C9.93824 -0.208777 8.62833 -0.208973 7.82043 0.626527L0.605803 8.08994C-0.201849 8.92569 -0.201977 10.2807 0.605675 11.1165L7.82028 18.5798C8.6282 19.4156 9.93816 19.4155 10.7461 18.5798C11.554 17.744 11.554 16.3889 10.746 15.5531Z" fill="CurrentColor"></path>
            </svg>
        );
    } else if (name === 'right-arrow') {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" transform="rotate(180)" width={size} height={size} viewBox="0 0 23 20" fill="none">
                <path d="M10.746 15.5531L7.06338 11.7434L20.1048 11.7434C21.2474 11.7434 22.1736 10.7853 22.1736 9.60327C22.1736 8.42128 21.2474 7.46309 20.1048 7.46309L7.06341 7.46309L10.7461 3.65351C11.5539 2.81766 11.554 1.46257 10.7461 0.626724C9.93824 -0.208777 8.62833 -0.208973 7.82043 0.626527L0.605803 8.08994C-0.201849 8.92569 -0.201977 10.2807 0.605675 11.1165L7.82028 18.5798C8.6282 19.4156 9.93816 19.4155 10.7461 18.5798C11.554 17.744 11.554 16.3889 10.746 15.5531Z" fill="CurrentColor"></path>
            </svg>
        );
    } else if (name === 'coffee') {
        return (
            <svg fill="none" width={size} height={size} viewBox="0 0 23 25" xmlns="http://www.w3.org/2000/svg">
                <clipPath id="a">
                    <path d="m.134766.875h22v24h-22z"/>
                </clipPath>
                <g clipPath="url(#a)" fill="currentColor">
                    <path d="m8.85802 9.04038c2.34628 0 4.69258-.01614 7.03618 0 1.5427-.0082 3.0331.56503 4.1803 1.60782 1.1471 1.0428 1.8688 2.4804 2.0243 4.0322s-.2663 3.1065-1.1833 4.3607c-.917 1.2543-2.2633 2.1181-3.7763 2.423-1.0082.2017-1.7051.5379-2.285 1.4658-.8566 1.3879-2.3145 1.8827-3.9 1.907-1.94724.0242-3.89718.0618-5.85244 0-2.92624-.1076-4.788373-1.8048-4.905423-4.7392-.1409914-3.3971-.029257-6.8022-.06118-10.20196 0-.89835.531992-.85805 1.143843-.85536 2.53253.00537 5.05448 0 7.57902 0zm6.96438 6.22392v2.5337c0 .5137.1916.7182.7236.6294 1.2503-.2098 2.3729-1.5708 2.4128-2.9587.0426-1.4766-.9975-2.8887-2.3037-3.1899-.548-.1238-.8513-.0485-.8353.5998.0133.7853 0 1.5869 0 2.3857z"/>
                    <rect height="5" rx="1.5" width="3" x="9" y="1"/>
                    <rect height="5" rx="1.5" width="3" x="9" y="1"/>
                    <rect height="5" rx="1.5" width="3" x="3" y="1"/>
                    <rect height="5" rx="1.5" width="3" x="3" y="1"/>
                </g>
            </svg>
        );
    } else if (name === 'mail') {
        return (
            <svg width={size} height={size} viewBox="0 0 25 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2.2772" y="1.52231" width="21.1958" height="14.7073" rx="1.94656" stroke="currentColor" strokeWidth="2.59541" strokeLinejoin="round"/>
                <path d="M13.163 8.18966C12.8667 8.39499 12.474 8.39499 12.1777 8.18966L5.04921 3.25093C4.35215 2.768 4.69391 1.67466 5.5419 1.67466L19.7988 1.67466C20.6468 1.67466 20.9885 2.768 20.2915 3.25093L13.163 8.18966Z" fill="currentColor" stroke="currentColor" strokeWidth="2.59541" strokeLinejoin="round"/>
            </svg>
        );
    } else if (name === 'x') {
        return (
            <svg width={size} height={size} viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.92773 17.7383L18.0699 3.59614" stroke="currentColor" strokeWidth="6.21514" strokeLinecap="round"/>
                <path d="M18.0693 17.7383L3.9272 3.59615" stroke="currentColor" strokeWidth="6.21514" strokeLinecap="round"/>
            </svg>
        );
    } else if (name === 'coffee-catch-up') {
        return (
            <svg width={size} height={size} viewBox="0 0 111 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M110.432 0.375999V2.936C107.701 3.02133 105.653 3.36266 104.288 3.96C102.923 4.472 101.984 5.496 101.472 7.032C101.045 8.48266 100.832 10.7867 100.832 13.944V77.432C100.832 80.504 101.045 82.808 101.472 84.344C101.984 85.88 102.923 86.904 104.288 87.416C105.653 87.928 107.701 88.2693 110.432 88.44V91C108.043 90.8293 105.013 90.744 101.344 90.744C97.76 90.6587 94.0907 90.616 90.336 90.616C86.24 90.616 82.4 90.6587 78.816 90.744C75.232 90.744 72.3307 90.8293 70.112 91V88.44C73.0133 88.2693 75.1893 87.928 76.64 87.416C78.176 86.904 79.2 85.88 79.712 84.344C80.224 82.808 80.48 80.504 80.48 77.432V8.184H81.376L49.632 91.128H47.584L13.024 8.696V70.008C13.024 74.7013 13.28 78.328 13.792 80.888C14.304 83.3627 15.4133 85.1547 17.12 86.264C18.912 87.288 21.6853 88.0133 25.44 88.44V91C23.8187 90.8293 21.6853 90.744 19.04 90.744C16.3947 90.6587 13.92 90.616 11.616 90.616C9.65333 90.616 7.648 90.6587 5.6 90.744C3.552 90.744 1.84533 90.8293 0.48 91V88.44C3.21067 88.0133 5.25867 87.288 6.624 86.264C7.98933 85.24 8.88533 83.576 9.312 81.272C9.824 78.8827 10.08 75.64 10.08 71.544V13.944C10.08 10.7867 9.824 8.48266 9.312 7.032C8.88533 5.496 7.94667 4.472 6.496 3.96C5.13067 3.36266 3.12533 3.02133 0.48 2.936V0.375999C1.84533 0.461332 3.552 0.546664 5.6 0.631996C7.648 0.717328 9.65333 0.759995 11.616 0.759995C15.2853 0.759995 18.8693 0.717328 22.368 0.631996C25.952 0.546664 29.1093 0.461332 31.84 0.375999L58.72 65.272L55.52 68.216L81.248 0.759995C82.6987 0.759995 84.192 0.759995 85.728 0.759995C87.264 0.759995 88.8 0.759995 90.336 0.759995C94.0907 0.759995 97.76 0.717328 101.344 0.631996C105.013 0.546664 108.043 0.461332 110.432 0.375999Z" fill="currentColor"/>
            </svg>
        );
    }  else if (name === 'i-will-be-good') {
        return (
            <svg width={size} height={size} viewBox="0 0 211 210" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M135 58C134.2 71.6 120 87 113 93C111 94.6 107.833 93.6667 106.5 93V0L122.5 19C127 26.3333 135.8 44.4 135 58Z" fill="currentColor"/>
                <path d="M78.0508 58C78.8508 71.6 93.0508 87 100.051 93C102.051 94.6 105.217 93.6667 106.551 93V0L90.5508 19C86.0508 26.3333 77.2508 44.4 78.0508 58Z" fill="currentColor"/>
                <path d="M78.8714 55.7086C90.1986 63.278 96.3005 83.3171 97.9355 92.3905C98.3041 94.9251 95.8972 97.1847 94.6477 97.9976L14.4225 50.956L38.9058 46.7645C47.508 46.592 67.5442 48.1393 78.8714 55.7086Z" fill="currentColor"/>
                <path d="M50.0652 104.835C62.2017 111.024 82.669 106.564 91.3856 103.561C93.7775 102.645 94.5741 99.4411 94.6734 97.9537L14.4482 50.9121L22.7452 74.325C26.7949 81.9162 37.9287 98.6459 50.0652 104.835Z" fill="currentColor"/>
                <path d="M49.0936 103.177C61.0254 96.6021 81.6252 100.403 90.4336 103.126C92.8536 103.964 93.7526 107.141 93.8996 108.625L15.2241 158.215L22.766 134.548C26.5703 126.83 37.1618 109.752 49.0936 103.177Z" fill="currentColor"/>
                <path d="M79.4604 151.355C90.539 143.426 95.9952 123.201 97.3385 114.08C97.6256 111.535 95.1474 109.354 93.8725 108.582L15.197 158.172L39.8021 161.576C48.4054 161.472 68.3817 159.283 79.4604 151.355Z" fill="currentColor"/>
                <path d="M78.3888 150.883C79.268 137.288 93.5574 121.971 100.592 116.012C102.601 114.424 105.763 115.375 107.092 116.05L106.551 209.048L90.6615 189.955C86.2043 182.596 77.5096 164.478 78.3888 150.883Z" fill="currentColor"/>
                <path d="M135.337 151.215C134.616 137.61 120.506 122.128 113.541 116.087C111.55 114.476 108.378 115.39 107.041 116.049L106.5 209.048L122.61 190.141C127.153 182.834 136.058 164.819 135.337 151.215Z" fill="currentColor"/>
                <path d="M131.98 153.616C120.653 146.047 114.551 126.008 112.916 116.934C112.547 114.4 114.954 112.14 116.204 111.327L196.429 158.369L171.946 162.56C163.344 162.733 143.307 161.186 131.98 153.616Z" fill="currentColor"/>
                <path d="M160.786 104.49C148.65 98.3008 128.183 102.761 119.466 105.764C117.074 106.68 116.277 109.884 116.178 111.371L196.403 158.413L188.106 135C184.057 127.409 172.923 110.679 160.786 104.49Z" fill="currentColor"/>
                <path d="M161.758 106.148C149.826 112.723 129.226 108.922 120.418 106.199C117.998 105.36 117.099 102.184 116.952 100.7L195.627 51.1104L188.086 74.7773C184.281 82.4945 173.69 99.5726 161.758 106.148Z" fill="currentColor"/>
                <path d="M131.391 57.9703C120.313 65.899 114.856 86.1235 113.513 95.2446C113.226 97.7897 115.704 99.971 116.979 100.743L195.655 51.1534L171.049 47.7492C162.446 47.8526 142.47 50.0417 131.391 57.9703Z" fill="currentColor"/>
            </svg>
        );
    }
}