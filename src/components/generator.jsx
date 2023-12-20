import { useState } from "react";
import { HexColorInput, RgbaColorPicker } from "react-colorful";


export const Generator = () => {
    const body = document.querySelector('body')
    const textureBlock = document.querySelector('.texture-wrapper')
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
    }

    const handleColor = (value) => {
        const rgba = `rgba(${value.r},${value.g},${value.b},${value.a})`
        changeTextureValues('bgColor', rgba)
    }

    const changeTextureValues = (key, value) => {
        console.log(key, value);
        setTexture((prevTexture) => ({
            ...prevTexture,
            [key]: value
        }))
    }
    body.style.backgroundColor = texture.bgColor
    // console.log(texture.bgColor);
    return <section className="generator flex space-evenly">
        <div className="texture-wrapper">
        </div>

        <div>
            <div className="settings">
                <form className="flex column" onInput={handleForm}>
                    <div className="flex align-center">
                        <label htmlFor="opacity">Opacity</label>
                        <input type="range" name="opacity" id="opacity" />
                    </div>
                    <div className="flex align-center">
                        <label htmlFor="backgroundx">Background pos X</label>
                        <input type="range" name="backgroundx" id="backgroundx" step={50} min={100} max={2000} />
                    </div>
                    <div className="flex align-center">
                        <label htmlFor="backgroundy">Background pos Y</label>
                        <input type="range" name="backgroundy" id="backgroundy" step={50} min={100} max={2000} />
                    </div>
                    <div className="flex align-center">
                        <label htmlFor="background-size-x">Background size X</label>
                        <input type="range" name="background-size-x" id="background-size-x" step={50} min={100} max={2000} />
                    </div>
                    <div className="flex align-center">
                        <label htmlFor="background-size-y">Background size Y</label>
                        <input type="range" name="background-size-y" id="background-size-y" step={50} min={100} max={2000} />
                    </div>
                </form>

                <RgbaColorPicker color={color} onChange={handleColor} />

            </div>

            {/* <div className="code-export">

            </div> */}

        </div>
    </section>
}