import React, {useState} from 'react';
import EmptySpotImg from '/public/Mole Empty.png';

function EmptySpot(props) {
    let [empty, setEmpty] = useState('')
    
}








return (
    <div>
        <img style={{ 'width': '30vw' }}
            src={moleImg}
            onClick={props.handleClick} />
    </div>
)