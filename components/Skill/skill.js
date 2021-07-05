import React from 'react';

/**
 * Affiche une compétence avec sa note
 * 
 * @param {*} props Propriété du composant
 * @returns 
 **/
export function Skill(props) {

    return <div className="skill">
        <div className="skill__rates">
            { props.children[0] }
        </div>

        <div className="skill__icon">
            { props.children[1] }
        </div>
        
        <h3 className="skill__title">{props.title}</h3>
    </div>;

}