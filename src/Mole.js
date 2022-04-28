import {useEffect} from 'react'
import moleImg from './Mole.png'

function Mole(props) {
        useEffect(() => {
            let randSeconds = Math.ceil(Math.random() * 5000)
            let timer = setTimeout(() => {
                props.setDisplayMole(false)
            }, randSeconds)
            return () => clearTimeout(timer)
        })

        return (
            <div>
                <img style={{ 'width': '30vw' }}
                    src={moleImg} alt=''
                    onClick={props.handleClick} />
            </div>
        )
    }

export default Mole




// import MoleContainer from './MoleContainer';
// import EmptySpot  from './EmptySpot';
// import App from './App.css'

// function Mole() {
//     <button onClick={() => onWhack()}>Mole</button>
// }