import { useRef } from "react"
import { Desc } from "../components/desc"
import { Generator } from "../components/generator"

export const Home = () => {
    const bgRef = useRef()
    const bgColorRef = useRef()
    return <main className="home main-layout">
        <Desc />
        <Generator bgRef={bgRef} bgColorRef={bgColorRef} />
        <div className="texture-bg" ref={bgRef} />
        <div className="texture-bg-color" ref={bgColorRef}></div>
    </main>
}