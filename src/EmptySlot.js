import React, {useEffect} from 'react';
import hillImg from './MoleHill.png';

function EmptySlot(props) {

    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.toggle(true)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

return (
        <div>
            <img style={{ 'width': '30vw' }}
            src={hillImg} alt=''
            onClick={props.handleClick} />
        </div>
    )
}

export default EmptySlot