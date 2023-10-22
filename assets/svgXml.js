import React from "react";
import Svg, { SvgUri, SvgXml } from 'react-native-svg';

export const searchIcon = () => {
    const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_48_1382)"><path d="M18.031 16.617L22.314 20.899L20.899 22.314L16.617 18.031C15.0237 19.3082 13.042 20.0029 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20.0029 13.042 19.3082 15.0237 18.031 16.617ZM16.025 15.875C17.2941 14.5699 18.0029 12.8204 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18C12.8204 18.0029 14.5699 17.2941 15.875 16.025L16.025 15.875Z" fill="#546BD7"/></g><defs><clipPath id="clip0_48_1382"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>`
    return (
        <SvgXml xml={xml} width="100%" height="100%" />
    );
}

export const searchIcon2 = (w, h) => {
    xml = `<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_125_924)">
    <path d="M27.0465 24.9255L33.471 31.3485L31.3485 33.471L24.9255 27.0465C22.5356 28.9623 19.563 30.0044 16.5 30C9.048 30 3 23.952 3 16.5C3 9.048 9.048 3 16.5 3C23.952 3 30 9.048 30 16.5C30.0044 19.563 28.9623 22.5356 27.0465 24.9255ZM24.0375 23.8125C25.9412 21.8548 27.0043 19.2306 27 16.5C27 10.698 22.3005 6 16.5 6C10.698 6 6 10.698 6 16.5C6 22.3005 10.698 27 16.5 27C19.2306 27.0043 21.8548 25.9412 23.8125 24.0375L24.0375 23.8125Z" fill="#FBFBFB"/>
    </g>
    <defs>
    <clipPath id="clip0_125_924">
    <rect width="36" height="36" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    `
    return (
        <SvgXml xml={xml} width={w} height={h} />
    );
}
export const settingIcon = (w, h) => {
    xml = `
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_125_887)">
                <path d="M3.31951 21.0901C2.88813 19.0527 2.88813 16.9475 3.31951 14.9101C4.98451 15.1051 6.43951 14.5546 6.91351 13.4086C7.38901 12.2611 6.75151 10.8436 5.43451 9.80413C6.57007 8.05862 8.0585 6.57019 9.80401 5.43463C10.842 6.75013 12.261 7.38913 13.4085 6.91363C14.556 6.43813 15.1065 4.98463 14.91 3.31963C16.9474 2.88825 19.0526 2.88825 21.09 3.31963C20.895 4.98463 21.4455 6.43963 22.5915 6.91363C23.739 7.38913 25.1565 6.75163 26.196 5.43463C27.9415 6.57019 29.43 8.05862 30.5655 9.80413C29.25 10.8421 28.611 12.2611 29.0865 13.4086C29.562 14.5561 31.0155 15.1066 32.6805 14.9101C33.1119 16.9475 33.1119 19.0527 32.6805 21.0901C31.0155 20.8951 29.5605 21.4456 29.0865 22.5916C28.611 23.7391 29.2485 25.1566 30.5655 26.1961C29.43 27.9416 27.9415 29.4301 26.196 30.5656C25.158 29.2501 23.739 28.6111 22.5915 29.0866C21.444 29.5621 20.8935 31.0156 21.09 32.6806C19.0526 33.112 16.9474 33.112 14.91 32.6806C15.105 31.0156 14.5545 29.5606 13.4085 29.0866C12.261 28.6111 10.8435 29.2486 9.80401 30.5656C8.0585 29.4301 6.57007 27.9416 5.43451 26.1961C6.75001 25.1581 7.38901 23.7391 6.91351 22.5916C6.43801 21.4441 4.98451 20.8936 3.31951 21.0901ZM6.00001 18.3151C7.65001 18.7726 9.01051 19.8181 9.68551 21.4441C10.359 23.0716 10.1355 24.7741 9.29251 26.2621C9.43651 26.4151 9.58501 26.5636 9.73801 26.7076C11.2275 25.8646 12.9285 25.6426 14.556 26.3146C16.182 26.9896 17.2275 28.3501 17.685 30.0001C17.895 30.0061 18.105 30.0061 18.315 30.0001C18.7725 28.3501 19.818 26.9896 21.444 26.3146C23.0715 25.6411 24.774 25.8646 26.262 26.7076C26.415 26.5636 26.5635 26.4151 26.7075 26.2621C25.8645 24.7726 25.6425 23.0716 26.3145 21.4441C26.9895 19.8181 28.35 18.7726 30 18.3151C30.006 18.1051 30.006 17.8951 30 17.6851C28.35 17.2276 26.9895 16.1821 26.3145 14.5561C25.641 12.9286 25.8645 11.2261 26.7075 9.73813C26.563 9.58573 26.4144 9.43718 26.262 9.29263C24.7725 10.1356 23.0715 10.3576 21.444 9.68563C19.818 9.01063 18.7725 7.65013 18.315 6.00013C18.105 5.99457 17.895 5.99457 17.685 6.00013C17.2275 7.65013 16.182 9.01063 14.556 9.68563C12.9285 10.3591 11.226 10.1356 9.73801 9.29263C9.58501 9.43663 9.43651 9.58513 9.29251 9.73813C10.1355 11.2276 10.3575 12.9286 9.68551 14.5561C9.01051 16.1821 7.65001 17.2276 6.00001 17.6851C5.99401 17.8951 5.99401 18.1051 6.00001 18.3151ZM18 22.5001C16.8065 22.5001 15.6619 22.026 14.818 21.1821C13.9741 20.3382 13.5 19.1936 13.5 18.0001C13.5 16.8067 13.9741 15.6621 14.818 14.8182C15.6619 13.9742 16.8065 13.5001 18 13.5001C19.1935 13.5001 20.3381 13.9742 21.182 14.8182C22.0259 15.6621 22.5 16.8067 22.5 18.0001C22.5 19.1936 22.0259 20.3382 21.182 21.1821C20.3381 22.026 19.1935 22.5001 18 22.5001ZM18 19.5001C18.3978 19.5001 18.7794 19.3421 19.0607 19.0608C19.342 18.7795 19.5 18.398 19.5 18.0001C19.5 17.6023 19.342 17.2208 19.0607 16.9395C18.7794 16.6582 18.3978 16.5001 18 16.5001C17.6022 16.5001 17.2207 16.6582 16.9394 16.9395C16.658 17.2208 16.5 17.6023 16.5 18.0001C16.5 18.398 16.658 18.7795 16.9394 19.0608C17.2207 19.3421 17.6022 19.5001 18 19.5001Z" fill="#FBFBFB" />
            </g>
            <defs>
                <clipPath id="clip0_125_887">
                    <rect width="36" height="36" fill="white" />
                </clipPath>
            </defs>
        </svg>`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    );
}

export const infoIcon = () => {
    const xml = `<svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.8125 2.6875C7.11706 2.6875 2.5 7.30456 2.5 13C2.5 18.6954 7.11706 23.3125 12.8125 23.3125C18.5079 23.3125 23.125 18.6954 23.125 13C23.125 7.30456 18.5079 2.6875 12.8125 2.6875ZM0.625 13C0.625 6.26903 6.08153 0.8125 12.8125 0.8125C19.5435 0.8125 25 6.26903 25 13C25 19.731 19.5435 25.1875 12.8125 25.1875C6.08153 25.1875 0.625 19.731 0.625 13ZM12.8125 5.8125C13.3303 5.8125 13.75 6.23223 13.75 6.75V6.76249C13.75 7.28026 13.3303 7.69999 12.8125 7.69999C12.2947 7.69999 11.875 7.28026 11.875 6.76249V6.75C11.875 6.23223 12.2947 5.8125 12.8125 5.8125ZM12.8125 9.5625C13.3303 9.5625 13.75 9.98223 13.75 10.5L13.75 19.25C13.75 19.7678 13.3303 20.1875 12.8125 20.1875C12.2947 20.1875 11.875 19.7678 11.875 19.25L11.875 10.5C11.875 9.98223 12.2947 9.5625 12.8125 9.5625Z" fill="#3E3E3E"/></svg>`
    return (
        <SvgXml xml={xml} width="100%" height="100%" />
    );
}

export const homeIcon = (w, h) => {
    const xml = `
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_125_583)">
    <path d="M28.5 31.5H7.5C7.10218 31.5 6.72064 31.342 6.43934 31.0607C6.15804 30.7794 6 30.3978 6 30V16.5H1.5L16.9905 2.418C17.2667 2.16672 17.6266 2.02747 18 2.02747C18.3734 2.02747 18.7333 2.16672 19.0095 2.418L34.5 16.5H30V30C30 30.3978 29.842 30.7794 29.5607 31.0607C29.2794 31.342 28.8978 31.5 28.5 31.5ZM9 28.5H27V13.7355L18 5.5545L9 13.7355V28.5Z" fill="#FBFBFB"/>
    </g>
    <defs>
    <clipPath id="clip0_125_583">
    <rect width="36" height="36" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    `
    return (
        <SvgXml xml={xml} width={w} height={h} />
    );
}

export const bookmark = (isBookmarked, w, h) => {
    const xml1 = `<svg width="100%" height="100%" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_148_264)"><path d="M6.25 2.5H23.75C24.0815 2.5 24.3995 2.6317 24.6339 2.86612C24.8683 3.10054 25 3.41848 25 3.75V27.6787C25.0001 27.7905 24.9703 27.9003 24.9136 27.9966C24.8569 28.0929 24.7755 28.1722 24.6777 28.2264C24.5799 28.2805 24.4694 28.3074 24.3577 28.3043C24.246 28.3012 24.1371 28.2682 24.0425 28.2087L15 22.5375L5.9575 28.2075C5.86296 28.2669 5.75423 28.2999 5.64263 28.303C5.53102 28.3062 5.42061 28.2794 5.32287 28.2254C5.22513 28.1714 5.14363 28.0923 5.08685 27.9961C5.03007 27.9 5.00008 27.7904 5 27.6787V3.75C5 3.41848 5.1317 3.10054 5.36612 2.86612C5.60054 2.6317 5.91848 2.5 6.25 2.5ZM22.5 5H7.5V24.29L15 19.5887L22.5 24.29V5Z" fill="#CD7F2D"/></g><defs><clipPath id="clip0_148_264"><rect width="30" height="30" fill="white"/></clipPath></defs></svg>`
    const xml2 = `<svg width="100%" height="100%" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_7_326)"><path d="M6.25 2.5H23.75C24.0815 2.5 24.3995 2.6317 24.6339 2.86612C24.8683 3.10054 25 3.41848 25 3.75V27.6787C25.0001 27.7905 24.9703 27.9003 24.9136 27.9966C24.8569 28.0929 24.7755 28.1722 24.6777 28.2264C24.5799 28.2805 24.4694 28.3074 24.3577 28.3043C24.246 28.3012 24.1371 28.2682 24.0425 28.2087L15 22.5375L5.9575 28.2075C5.86296 28.2669 5.75423 28.2999 5.64263 28.303C5.53102 28.3062 5.42061 28.2794 5.32287 28.2254C5.22513 28.1714 5.14363 28.0923 5.08685 27.9961C5.03007 27.9 5.00008 27.7904 5 27.6787V3.75C5 3.41848 5.1317 3.10054 5.36612 2.86612C5.60054 2.6317 5.91848 2.5 6.25 2.5Z" fill="#CD7F2D"/></g><defs><clipPath id="clip0_7_326"><rect width="30" height="30" fill="white"/></clipPath></defs></svg>`
    return (
        <SvgXml xml={isBookmarked ? xml2 : xml1} width={w} height={h} />
    );
}

export const heart = (isLoved) => {
    const xml1 = `<svg width="100%" height="100%" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_86_3757)"><path d="M15.6693 6.40532C15.2895 6.74633 14.7138 6.74655 14.3338 6.40584C11.782 4.11838 7.85687 4.20091 5.40321 6.65349C2.96055 9.09755 2.86902 13.0032 5.1293 15.5551L14.9988 25.4409L24.8708 15.555C27.1307 13.0035 27.0413 9.10474 24.596 6.65271L15.6693 6.40532ZM15.6693 6.40532C18.2129 4.12166 22.1455 4.19818 24.5957 6.65239L15.6693 6.40532Z" stroke="#5E3810" stroke-width="2" stroke-linejoin="round"/></g><defs><clipPath id="clip0_86_3757"><rect width="30" height="30" fill="white"/></clipPath></defs></svg>`
    const xml2 = `<svg width="100%" height="100%" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_86_3754)"><path d="M15.0013 5.66122C17.9375 3.02497 22.475 3.11247 25.3038 5.94622C28.1313 8.78122 28.2288 13.2962 25.5988 16.2412L14.9988 26.8562L4.40126 16.2412C1.77126 13.2962 1.87001 8.77373 4.69626 5.94622C7.52751 3.11623 12.0563 3.02122 15.0013 5.66122Z" fill="#CC0000"/></g><defs><clipPath id="clip0_86_3754"><rect width="30" height="30" fill="white"/></clipPath></defs></svg>`
    return (
        <SvgXml xml={isLoved ? xml2 : xml1} width="100%" height="100%" />
    );
}

export const heartDouble = (w, h) => {
    xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_86_8475)">
    <path d="M19.243 4.75698C20.705 6.22298 21.255 8.24998 20.893 10.137C21.461 10.297 21.999 10.6 22.447 11.045C23.851 12.439 23.851 14.699 22.447 16.092L17 21.5L13.978 18.5L11 21.485L2.52002 12.993C0.417023 10.637 0.496023 7.01898 2.75702 4.75698C5.02202 2.49298 8.64502 2.41698 11.001 4.52898C13.35 2.41998 16.98 2.48998 19.243 4.75698ZM12.962 12.465C12.346 13.076 12.346 14.062 12.962 14.673L17 18.682L21.038 14.673C21.654 14.062 21.654 13.076 21.038 12.465C20.414 11.845 19.396 11.845 18.77 12.467L16.998 14.221L15.591 12.825L15.228 12.465C14.604 11.845 13.586 11.845 12.962 12.465ZM4.17202 6.17198C2.68202 7.66198 2.60702 10.047 3.98002 11.623L11 18.654L12.559 17.092L11.553 16.092C10.149 14.699 10.149 12.439 11.553 11.045C12.957 9.65198 15.233 9.65198 16.637 11.045L17 11.405L17.363 11.045C17.788 10.624 18.293 10.33 18.828 10.163C19.244 8.79598 18.906 7.25098 17.827 6.16998C16.327 4.66798 13.907 4.60698 12.337 6.01698L11.002 7.21498L9.66602 6.01798C8.09102 4.60598 5.67602 4.66798 4.17202 6.17198Z" fill="#E2B647"/>
    </g>
    <defs>
    <clipPath id="clip0_86_8475">
    <rect width="24" height="24" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    `
    return (
        <SvgXml xml={xml} width={w} height={h} />
    )
}

export const leftArrow = (w = '100%', h = '100%') => {
    const xml = `<svg width="100%" height="100%" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_118_911)">
    <path d="M9.785 16.25L16.49 22.955L14.7225 24.7225L5 15L14.7225 5.27747L16.49 7.04497L9.785 13.75L25 13.75L25 16.25L9.785 16.25Z" fill="rgb(0,0,0)"/>
    </g>
    <defs>
    <clipPath id="clip0_118_911">
    <rect width="30" height="30" fill="white" transform="translate(30 30) rotate(-180)"/>
    </clipPath>
    </defs>
    </svg>
    `
    return (
        <SvgXml xml={xml} width={w} height={h} />
    );
}

export const shareIcon = (w, h) => {
    const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.68439 10.6578L15.3125 7.34375M15.3156 16.6578L8.6938 13.3469M21 6C21 7.65685 19.6569 9 18 9C16.3431 9 15 7.65685 15 6C15 4.34315 16.3431 3 18 3C19.6569 3 21 4.34315 21 6ZM9 12C9 13.6569 7.65685 15 6 15C4.34315 15 3 13.6569 3 12C3 10.3431 4.34315 9 6 9C7.65685 9 9 10.3431 9 12ZM21 18C21 19.6569 19.6569 21 18 21C16.3431 21 15 19.6569 15 18C15 16.3431 16.3431 15 18 15C19.6569 15 21 16.3431 21 18Z" stroke="#3454A4" stroke-width="1.5"/>
    </svg>
    `
    return (
        <SvgXml xml={xml} width={w} height={h} />
    );
}

export const locationIcon = () => {
    const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
    <g clip-path="url(#clip0_49_2120)">
      <path d="M10.5 17.4167L14.625 13.2917C15.4408 12.4759 15.9963 11.4365 16.2213 10.3049C16.4463 9.17337 16.3308 8.00051 15.8892 6.93465C15.4477 5.86878 14.7 4.95777 13.7408 4.31682C12.7815 3.67587 11.6537 3.33377 10.5 3.33377C9.3463 3.33377 8.21851 3.67587 7.25924 4.31682C6.29997 4.95777 5.55229 5.86878 5.11076 6.93465C4.66923 8.00051 4.55368 9.17337 4.77871 10.3049C5.00374 11.4365 5.55926 12.4759 6.375 13.2917L10.5 17.4167ZM10.5 19.7734L5.19667 14.47C4.14779 13.4211 3.43349 12.0847 3.14411 10.6299C2.85473 9.17504 3.00326 7.66704 3.57092 6.2966C4.13858 4.92616 5.09987 3.75483 6.33324 2.93072C7.5666 2.10661 9.01665 1.66675 10.5 1.66675C11.9834 1.66675 13.4334 2.10661 14.6668 2.93072C15.9001 3.75483 16.8614 4.92616 17.4291 6.2966C17.9968 7.66704 18.1453 9.17504 17.8559 10.6299C17.5665 12.0847 16.8522 13.4211 15.8033 14.47L10.5 19.7734ZM10.5 10.8334C10.942 10.8334 11.366 10.6578 11.6785 10.3452C11.9911 10.0326 12.1667 9.60871 12.1667 9.16668C12.1667 8.72466 11.9911 8.30073 11.6785 7.98817C11.366 7.67561 10.942 7.50002 10.5 7.50002C10.058 7.50002 9.63405 7.67561 9.32149 7.98817C9.00893 8.30073 8.83334 8.72466 8.83334 9.16668C8.83334 9.60871 9.00893 10.0326 9.32149 10.3452C9.63405 10.6578 10.058 10.8334 10.5 10.8334ZM10.5 12.5C9.61595 12.5 8.7681 12.1488 8.14298 11.5237C7.51786 10.8986 7.16667 10.0507 7.16667 9.16668C7.16667 8.28263 7.51786 7.43478 8.14298 6.80966C8.7681 6.18454 9.61595 5.83335 10.5 5.83335C11.3841 5.83335 12.2319 6.18454 12.857 6.80966C13.4821 7.43478 13.8333 8.28263 13.8333 9.16668C13.8333 10.0507 13.4821 10.8986 12.857 11.5237C12.2319 12.1488 11.3841 12.5 10.5 12.5Z" fill="#FAFAFA"/>
    </g>
    <defs>
      <clipPath id="clip0_49_2120">
        <rect width="20" height="20" fill="white" transform="translate(0.5)"/>
      </clipPath>
    </defs>
  </svg>`
    return (
        <SvgXml xml={xml} width="100%" height="100%" />
    );
}

export const valid = () => {
    xml = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_233_586)">
    <path d="M3.33333 2.5H16.6667C16.8877 2.5 17.0996 2.5878 17.2559 2.74408C17.4122 2.90036 17.5 3.11232 17.5 3.33333V16.6667C17.5 16.8877 17.4122 17.0996 17.2559 17.2559C17.0996 17.4122 16.8877 17.5 16.6667 17.5H3.33333C3.11232 17.5 2.90036 17.4122 2.74408 17.2559C2.5878 17.0996 2.5 16.8877 2.5 16.6667V3.33333C2.5 3.11232 2.5878 2.90036 2.74408 2.74408C2.90036 2.5878 3.11232 2.5 3.33333 2.5ZM9.16917 13.3333L15.0608 7.44083L13.8825 6.2625L9.16917 10.9767L6.81167 8.61917L5.63333 9.7975L9.16917 13.3333Z" fill="#34B020"/>
    </g>
    <defs>
    <clipPath id="clip0_233_586">
    <rect width="20" height="20" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    `
    return (
        <SvgXml xml={xml} width="100%" height="100%" />
    );
}

export const notValid = () => {
    xml = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_233_914)">
    <path d="M9.99996 18.3334C5.39746 18.3334 1.66663 14.6026 1.66663 10.0001C1.66663 5.39758 5.39746 1.66675 9.99996 1.66675C14.6025 1.66675 18.3333 5.39758 18.3333 10.0001C18.3333 14.6026 14.6025 18.3334 9.99996 18.3334ZM9.99996 8.82175L7.64329 6.46425L6.46413 7.64341L8.82163 10.0001L6.46413 12.3567L7.64329 13.5359L9.99996 11.1784L12.3566 13.5359L13.5358 12.3567L11.1783 10.0001L13.5358 7.64341L12.3566 6.46425L9.99996 8.82175Z" fill="#B71212"/>
    </g>
    <defs>
    <clipPath id="clip0_233_914">
    <rect width="20" height="20" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    `
    return (
        <SvgXml xml={xml} width="100%" height="100%" />
    );
}

export const editable = (w, h) => {
    xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_33_5381)">
    <path d="M17.849 11.808L17.142 11.101L7.242 21.001H3V16.758L14.313 5.44403L19.97 11.101C20.1575 11.2886 20.2628 11.5429 20.2628 11.808C20.2628 12.0732 20.1575 12.3275 19.97 12.515L12.9 19.586L11.485 18.172L17.849 11.808ZM15.728 9.68703L14.313 8.27303L5 17.586V19.001H6.414L15.728 9.68703ZM18.556 2.61603L21.385 5.44403C21.5725 5.63156 21.6778 5.88586 21.6778 6.15103C21.6778 6.41619 21.5725 6.6705 21.385 6.85803L19.97 8.27303L15.728 4.03003L17.142 2.61603C17.3295 2.42856 17.5838 2.32324 17.849 2.32324C18.1142 2.32324 18.3685 2.42856 18.556 2.61603Z" fill="#3C3C3C"/>
    </g>
    <defs>
    <clipPath id="clip0_33_5381">
    <rect width="24" height="24" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    `
    return (
        <SvgXml xml={xml} width={w} height={h} />
    )
}

export const deletefitler = (w, h) => {
    xml = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_314_607)">
    <path d="M9.99999 8.82166L14.125 4.69666L15.3033 5.87499L11.1783 9.99999L15.3033 14.125L14.125 15.3033L9.99999 11.1783L5.87499 15.3033L4.69666 14.125L8.82166 9.99999L4.69666 5.87499L5.87499 4.69666L9.99999 8.82166Z" fill="#E2B647"/>
    </g>
    <rect x="0.5" y="0.5" width="19" height="19" rx="5.5" stroke="#E2B647"/>
    <defs>
    <clipPath id="clip0_314_607">
    <rect width="20" height="20" rx="6" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    `

    return (
        <SvgXml xml={xml} width={w} height={h} />
    )
}

export const clock = (w, h) => {
    xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_314_526)">
    <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20ZM13 12H17V14H11V7H13V12Z" fill="#3C3C3C"/>
    </g>
    <defs>
    <clipPath id="clip0_314_526">
    <rect width="24" height="24" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    `
    return (
        <SvgXml xml={xml} width={w} height={h} />
    )
}

export const notiBell = (toggle, w, h) => {
    xml1 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_13_383)">
    <path d="M22 20H2V18H3V11.031C3 6.043 7.03 2 12 2C16.97 2 21 6.043 21 11.031V18H22V20ZM5 18H19V11.031C19 7.148 15.866 4 12 4C8.134 4 5 7.148 5 11.031V18ZM9.5 21H14.5C14.5 21.663 14.2366 22.2989 13.7678 22.7678C13.2989 23.2366 12.663 23.5 12 23.5C11.337 23.5 10.7011 23.2366 10.2322 22.7678C9.76339 22.2989 9.5 21.663 9.5 21Z" fill="#715FDC"/>
    </g>
    <defs>
    <clipPath id="clip0_13_383">
    <rect width="24" height="24" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    
    `
    xml2 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_13_386)">
    <path d="M22 20H2V18H3V11.031C3 6.043 7.03 2 12 2C16.97 2 21 6.043 21 11.031V18H22V20ZM9.5 21H14.5C14.5 21.663 14.2366 22.2989 13.7678 22.7678C13.2989 23.2366 12.663 23.5 12 23.5C11.337 23.5 10.7011 23.2366 10.2322 22.7678C9.76339 22.2989 9.5 21.663 9.5 21Z" fill="#546BD7"/>
    </g>
    <defs>
    <clipPath id="clip0_13_386">
    <rect width="24" height="24" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    
    `

    return (
        <SvgXml xml={toggle ? xml2 : xml1} width={w} height={h} />
    )
}

export const userIcon = (w, h) => {
    xml = `<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_125_1098)">
    <path d="M6 33C6 29.8174 7.26428 26.7652 9.51472 24.5147C11.7652 22.2643 14.8174 21 18 21C21.1826 21 24.2348 22.2643 26.4853 24.5147C28.7357 26.7652 30 29.8174 30 33H27C27 30.6131 26.0518 28.3239 24.364 26.636C22.6761 24.9482 20.3869 24 18 24C15.6131 24 13.3239 24.9482 11.636 26.636C9.94821 28.3239 9 30.6131 9 33H6ZM18 19.5C13.0275 19.5 9 15.4725 9 10.5C9 5.5275 13.0275 1.5 18 1.5C22.9725 1.5 27 5.5275 27 10.5C27 15.4725 22.9725 19.5 18 19.5ZM18 16.5C21.315 16.5 24 13.815 24 10.5C24 7.185 21.315 4.5 18 4.5C14.685 4.5 12 7.185 12 10.5C12 13.815 14.685 16.5 18 16.5Z" fill="#FBFBFB"/>
    </g>
    <defs>
    <clipPath id="clip0_125_1098">
    <rect width="36" height="36" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    `
    return (
        <SvgXml xml={xml} width={w} height={h} />
    )
}