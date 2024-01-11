import { useRef, useState } from "react"
import { Desc } from "../components/desc"
import { Generator } from "../components/generator"
import { Textures } from "../components/textures"

export const Home = () => {
    const bgRef = useRef()
    const bgColorRef = useRef()
    const [img, setImg] = useState('paper')

    return <main className="home main-layout">
        <Desc />
        <Generator bgRef={bgRef} bgColorRef={bgColorRef} img={img} />
        <Textures setImg={setImg} />

        <div className="texture-bg" ref={bgRef} />
        <div className="texture-bg-color" ref={bgColorRef}></div>
    </main>
}