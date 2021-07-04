import React from 'react';

/**
 * Retourne une icone d'étoile standart
 * 
 * @returns Icon stars 
 **/
export function Icon_stars() {
    return (
        <span className={"icon icon-star"}>
            <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path  d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" fill="currentColor"/>
            </svg>
        </span>
    );
}

/**
 * Retourne une icone d'étoile standart
 * 
 * @returns Icon stars 
 **/
 export function Icon_stars_golden() {
    return (
        <span className={"icon icon-star-golden"}>
            <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path  d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" fill="currentColor"/>
            </svg>
        </span>
    );
}