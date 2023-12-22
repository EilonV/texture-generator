import { useEffect, useState } from "react";
import { HexColorInput, RgbaColorPicker } from "react-colorful";

export const Generator = () => {

    useEffect(() => {
        const body = document.body
        // body.backgroundColor = texture.bgColor
        // body.opacity = `${texture.opacity / 100}`
        // body.backgroundPosition = `${texture.bgPosX}% ${texture.bgPosY}%`
        // body.backgroundSize = `${texture.bgSizeX}% ${texture.bgSizeY}%`
        body.classList.add('active')

    })

    const [color, setColor] = useState({ r: 250, g: 250, b: 255, a: 1 })
    const [texture, setTexture] = useState({
        opacity: 25,
        baseLink: "https://texturegenerator.sirv.com/Images/wall.jpg",
        bgColor: "rgba(250,250,255,1)",
        bgPosX: 0,
        bgPosY: 0,
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
            backgroundColor: `${texture.bgColor}`
        }}>
            <div className="texture flex align-center  justify-center" style={{
                opacity: `${texture.opacity / 100}`,
                backgroundPosition: `${texture.bgPosX}% ${texture.bgPosY}%`,
                backgroundSize: `${texture.bgSizeX}% ${texture.bgSizeY}%`,
            }}>

            </div>
        </div>

        <div>
            <div className="settings">
                <form className="flex column" onInput={handleForm}>
                    <div className="flex align-center">
                        <label htmlFor="opacity">Opacity</label>
                        <input type="range" name="opacity" id="opacity" defaultValue={texture.opacity} />
                    </div>
                    <div className="flex align-center">
                        <label htmlFor="bgPosX">Background pos X</label>
                        <input type="range" name="bgPosX" id="bgPosX" defaultValue={texture.bgPosX} step={1} min={-100} max={100} />
                    </div>
                    <div className="flex align-center">
                        <label htmlFor="bgPosY">Background pos Y</label>
                        <input type="range" name="bgPosY" id="bgPosY" defaultValue={texture.bgPosY} step={1} min={-100} max={100} />
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

            <div className="code-export">
                <p><span>background-image:</span> url("{texture.baseLink}?opacity={texture.opacity}");</p>
                <p><span>background-position:</span> {texture.bgPosX}% {texture.bgPosY}%;</p>
                <p><span>background-size:</span> {texture.bgSizeX}% {texture.bgSizeY}%;</p>
                <p><span>background-color:</span> "{texture.bgColor}";</p>
            </div>

        </div>
    </section >
}