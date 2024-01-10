import { useEffect, useRef } from "react"
import jeans from '../assets/images/textures thumbnails/jeans.png'
import marble from '../assets/images/textures thumbnails/marble.png'
import paper from '../assets/images/textures thumbnails/paper.png'
import scroll from '../assets/images/textures thumbnails/scroll.png'
import stone from '../assets/images/textures thumbnails/stone.png'
import wallSpiral from '../assets/images/textures thumbnails/wall spiral.png'
import wall from '../assets/images/textures thumbnails/wall.png'
import wall2 from '../assets/images/textures thumbnails/wall2.png'
import wood from '../assets/images/textures thumbnails/wood.png'

export const Textures = () => {
    let img = 'wall'
    const link = `https://texturegenerator.sirv.com/Images/${img}.jpg`
    const wallRef = useRef()
    let currentActive

    useEffect(() => {
        initActivation()
    })

    const initActivation = () => {
        currentActive = wallRef.current
    }

    const handleTexture = (e) => {
        pickTexture(e)
        changeTexture(e)
    }

    const pickTexture = (e) => {
        currentActive.classList.remove('active')
        e.target.classList.add('active')
        currentActive = e.target
    }

    const changeTexture = (e) => {
        console.log(e);
    }

    return <section className="textures">
        <ul className="flex space-evenly" onClick={handleTexture}>
            <li className="texture active" id="wall" ref={wallRef}>
                <img src={wall} alt="wall texture" />
            </li>
            <li className="texture">
                <img src={jeans} alt="jeans texture" />
            </li>
            <li className="texture">
                <img src={marble} alt="marble texture" />
            </li>
            <li className="texture">
                <img src={paper} alt="paper texture" />
            </li>
            <li className="texture">
                <img src={scroll} alt="scroll texture" />
            </li>
            <li className="texture">
                <img src={stone} alt="stone texture" />
            </li>
            <li className="texture">
                <img src={wallSpiral} alt="wall spirals texture" />
            </li>
            <li className="texture">
                <img src={wall2} alt="wall 2 texture" />
            </li>
            <li className="texture">
                <img src={wood} alt="wood texture" />
            </li>

        </ul>
    </section>
}