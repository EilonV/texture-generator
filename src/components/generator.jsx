import { useEffect, useState } from "react";
import { RgbaColorPicker } from "react-colorful";

export const Generator = ({ bgRef, bgColorRef, img }) => {
    useEffect(() => {
        const bg = bgRef.current.style
        const bgColor = bgColorRef.current.style
        const body = document.body
        bg.backgroundImage = `url(${baseLink})`
        bg.opacity = `${texture.opacity / 100}`
        bg.backgroundPosition = `${texture.bgPosX}% ${texture.bgPosY}%`
        bg.backgroundSize = `${texture.bgSizeX}% ${texture.bgSizeY}%`
        bg.filter = `grayscale(${texture.grayscale})`
        bgColor.backgroundColor = texture.bgColor
        body.classList.add('active')
    })
    let baseLink
    if (img === 'woodpng')
        baseLink = `https://texturegenerator.sirv.com/Images/${img}.png`
    else {
        baseLink = `https://texturegenerator.sirv.com/Images/${img}.jpg`
    }
    const [color] = useState({ r: 250, g: 250, b: 255, a: 1 })
    const [texture, setTexture] = useState({
        opacity: 25,
        link: baseLink,
        bgColor: "rgba(250,250,255,1)",
        bgPosX: 0,
        bgPosY: 0,
        bgSizeX: 100,
        bgSizeY: 100,
        grayscale: 0
    })


    const handleForm = (e) => {
        if (e.target.type === 'checkbox')
            changeTextureValues(e.target.name, e.target.checked)
        else changeTextureValues(e.target.name, e.target.value)
    }

    const handleColor = (value) => {
        const rgba = `rgba(${value.r},${value.g},${value.b},${value.a})`
        changeTextureValues('bgColor', rgba)
    }

    const changeTextureValues = (key, value) => {
        if (key === 'grayscale') setTexture((prevTexture) => ({
            ...prevTexture,
            [key]: +value
        }))
        else setTexture((prevTexture) => ({
            ...prevTexture,
            [key]: value
        }))
    }

    return <section className="generator flex space-evenly align-center">
        <div className="texture-wrapper" style={{
            backgroundColor: `${texture.bgColor}`
        }}>
            <div className="texture flex align-center  justify-center" style={{
                filter: `grayscale(${texture.grayscale})`,
                backgroundImage: `url(${baseLink})`,
                opacity: `${texture.opacity / 100}`,
                backgroundPosition: `${texture.bgPosX}% ${texture.bgPosY}%`,
                backgroundSize: `${texture.bgSizeX}% ${texture.bgSizeY}%`,
            }}>

            </div>
        </div>

        <div className="setttings-export flex column">
            <div className="settings flex space-between align-center">
                <form className="flex column" onInput={handleForm}>
                    <div className="slider flex align-center">
                        <label htmlFor="opacity">Opacity</label>
                        <input type="range" name="opacity" id="opacity" defaultValue={texture.opacity} />
                    </div>
                    <div className="slider flex align-center">
                        <label htmlFor="bgPosX">Background pos X</label>
                        <input type="range" name="bgPosX" id="bgPosX" defaultValue={texture.bgPosX} step={1} min={-100} max={100} />
                    </div>
                    <div className="slider flex align-center">
                        <label htmlFor="bgPosY">Background pos Y</label>
                        <input type="range" name="bgPosY" id="bgPosY" defaultValue={texture.bgPosY} step={1} min={-100} max={100} />
                    </div>
                    <div className="slider flex align-center">
                        <label htmlFor="bgSizeX">Background size X</label>
                        <input type="range" name="bgSizeX" id="bgSizeX" step={1} min={100} max={2000} />
                    </div>
                    <div className="slider flex align-center">
                        <label htmlFor="bgSizeY">Background size Y</label>
                        <input type="range" name="bgSizeY" id="bgSizeY" step={1} min={100} max={2000} />
                    </div>
                    <div className="checkbox flex align-center">
                        <label htmlFor="grayscale">Grayscale? </label>
                        <input className="custom-checkbox" type="checkbox" name="grayscale" id="grayscale" />
                    </div>
                </form>

                <RgbaColorPicker color={color} onChange={handleColor} />
            </div>

            <div className="code-export">
                <p><span>background-image:</span> url("{baseLink}{texture.opacity > 0 && `?opacity=${texture.opacity}`}{(texture.grayscale === 1 && texture.opacity > 0) && '&grayscale=true'}{(texture.grayscale === 1 && !texture.opacity) && '?grayscale=true'}");</p>
                <p><span>background-position:</span> {texture.bgPosX}% {texture.bgPosY}%;</p>
                <p><span>background-size:</span> {texture.bgSizeX}% {texture.bgSizeY}%;</p>
                <p><span>background-color:</span> {texture.bgColor};</p>
            </div>

        </div>
    </section >
}