import { useEffect, useRef, useState } from "react"
import jeans from '../assets/images/textures thumbnails/jeans.png'
import marble from '../assets/images/textures thumbnails/marble.png'
import paper from '../assets/images/textures thumbnails/paper.png'
import scroll from '../assets/images/textures thumbnails/scroll.png'
import stone from '../assets/images/textures thumbnails/stone.png'
import wallSpiral from '../assets/images/textures thumbnails/wall spiral.png'
import wall from '../assets/images/textures thumbnails/wall.png'
import wall2 from '../assets/images/textures thumbnails/wall2.png'
import wood from '../assets/images/textures thumbnails/wood.png'

export const Textures = ({ setImg }) => {
    // const [img, setImg] = useState('wall')
    const [texture, setTexture] = useState()
    const wallRef = useRef()

    useEffect(() => {
        if (!texture) setTexture(wallRef.current)
    }, [texture])

    const handleTexture = (e) => {
        pickTexture(e)
    }

    const pickTexture = (e) => {
        texture.classList.remove('active')
        e.target.classList.add('active')
        setTexture(e.target)
        setImg(e.target.id)
    }

    return <section className="textures">
        <ul className="flex space-evenly" onClick={handleTexture}>
            <li className="texture active" id="paper" ref={wallRef}>
                <img src={paper} alt="paper texture" />
            </li>
            <li className="texture" id="wall" >
                <img src={wall} alt="wall texture" />
            </li>
            <li className="texture" id="jeans">
                <img src={jeans} alt="jeans texture" />
            </li>
            <li className="texture" id="marble">
                <img src={marble} alt="marble texture" />
            </li>
            <li className="texture" id="scroll">
                <img src={scroll} alt="scroll texture" />
            </li>
            <li className="texture" id="stone">
                <img src={stone} alt="stone texture" />
            </li>
            <li className="texture" id="wall">
                <img src={wallSpiral} alt="wall spirals texture" />
            </li>
            <li className="texture" id="wall2">
                <img src={wall2} alt="wall 2 texture" />
            </li>
            <li className="texture" id="woodpng">
                <img src={wood} alt="wood texture" />
            </li>

        </ul>
    </section>
}