import React, {useEffect, useState} from 'react';
import { Icon_stars, Icon_stars_golden } from '../Icons/icons';

export function Rates(props) {
    const [stars, setStars] = useState([]);

    useEffect(() => {
        const newStars = [];
        const rating = Math.round(props.rating);

        for(let i = 0; i < 5; i++) {
            if(i < rating) {
                newStars.push(<Icon_stars_golden key={i} />);
            } else {
                newStars.push(<Icon_stars key={i} />)
            }
        }

        setStars([...stars, newStars]);
    }, [])

    return <div className="rates">
        <span>Mes étoiles</span>
        <div className="container_stars">
            {  stars.map(item => item) }
        </div>
    </div>;
}