import { useEffect, useState } from "react";
import { HexColorInput, RgbaColorPicker } from "react-colorful";

export const Generator = () => {

    useEffect(() => {
        const body = document.querySelector('body')
        body.style.backgroundColor = texture.bgColor
        body.style.opacity =  `${texture.opacity / 100}`
        body.style.backgroundPosition = `${texture.bgPosX}% ${texture.bgPosY}%`
        body.style.backgroundSize = `${texture.bgSizeX}% ${texture.bgSizeY}%`
    })

    const [color, setColor] = useState({ r: 250, g: 250, b: 255, a: 1 })
    const [texture, setTexture] = useState({
        opacity: 25,
        baseLink: "https://texturegenerator.sirv.com/Images/wall.jpg",
        bgColor: color,
        bgPosX: 100,
        bgPosY: 100,
        bgSizeX: 100,
        bgSizeY: 100
    })

    const handleForm = (e) => {
        changeTextureValues(e.target.name, e.target.value)
    }

    const handleColor = (value) => {
        const rgba = `rgba(${value.r},${value.g},${value.b},${value.a})`
        changeTextureValues('bgColor', rgba)
    }

    const changeTextureValues = (key, value) => {
        setTexture((prevTexture) => ({
            ...prevTexture,
            [key]: value
        }))
    }

    return <section className="generator flex space-evenly">
        <div className="texture-wrapper" style={{
            opacity: `${texture.opacity / 100}`,
            backgroundPosition: `${texture.bgPosX}% ${texture.bgPosY}%`,
            backgroundSize: `${texture.bgSizeX}% ${texture.bgSizeY}%`,
        }}>
        </div>

        <div>
            <div className="settings">
                <form className="flex column" onInput={handleForm}>
                    <div className="flex align-center">
                        <label htmlFor="opacity">Opacity</label>
                        <input type="range" name="opacity" id="opacity" />
                    </div>
                    <div className="flex align-center">
                        <label htmlFor="bgPosX">Background pos X</label>
                        <input type="range" name="bgPosX" id="bgPosX" step={1} min={100} max={200} />
                    </div>
                    <div className="flex align-center">
                        <label htmlFor="bgPosY">Background pos Y</label>
                        <input type="range" name="bgPosY" id="bgPosY" step={1} min={100} max={200} />
                    </div>
                    <div className="flex align-center">
                        <label htmlFor="bgSizeX">Background size X</label>
                        <input type="range" name="bgSizeX" id="bgSizeX" step={50} min={100} max={2000} />
                    </div>
                    <div className="flex align-center">
                        <label htmlFor="bgSizeY">Background size Y</label>
                        <input type="range" name="bgSizeY" id="bgSizeY" step={50} min={100} max={2000} />
                    </div>
                </form>

                <RgbaColorPicker color={color} onChange={handleColor} />

            </div>

            {/* <div className="code-export">

            </div> */}

        </div>
    </section>
}