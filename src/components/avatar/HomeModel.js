import dynamic from "next/dynamic"
import { Component, useEffect, useRef, useState } from "react"
import s from "@/styles/Home.module.css"
const Model = dynamic(() => import("@/components/avatar/Model_2").then(mod => mod.Model2), { ssr:false, loading:() => <Loading /> })
function Loading() { return <div className={s.modelLoading} role="status">Loading…</div> }
class ModelBoundary extends Component {
    state = { failed:false }
    static getDerivedStateFromError() { return {failed:true} }
    render() {
        if(this.state.failed) return <div className={s.modelFallback}><svg viewBox="0 0 160 200" width="140" height="175" aria-hidden="true"><circle cx="80" cy="55" r="35" fill="#34475e"/><path d="M20 180v-30a60 60 0 01120 0v30" fill="#34475e"/><path d="M45 53h28v16H45zm42 0h28v16H87zM73 57h14" fill="none" stroke="#fb923c" strokeWidth="4"/></svg><p>3D avatar unavailable</p><button type="button" onClick={()=>this.setState({failed:false})}>Try again</button></div>
        return this.props.children
    }
}
export function HomeModel() {
    const ref=useRef(null)
    const [ready,setReady]=useState(false)
    const [reducedMotion,setReducedMotion]=useState(false)
    const [active,setActive]=useState(true)
    const [mobile,setMobile]=useState(false)
    useEffect(()=>{
        const media=window.matchMedia("(prefers-reduced-motion: reduce)")
        const sync=()=>setReducedMotion(media.matches)
        sync(); media.addEventListener("change",sync)
        const mobileMedia=window.matchMedia("(max-width: 700px)")
        const syncMobile=()=>setMobile(mobileMedia.matches)
        syncMobile(); mobileMedia.addEventListener("change",syncMobile)
        const observer=new IntersectionObserver(([entry])=>setActive(entry.isIntersecting),{threshold:0})
        observer.observe(ref.current)
        return ()=>{media.removeEventListener("change",sync);mobileMedia.removeEventListener("change",syncMobile);observer.disconnect()}
    },[])
    return <div ref={ref} className={s.modelHero} role="img" aria-label="Elliot’s original animated 3D avatar, wearing glasses and typing.">
        <svg className={s.modelWave} viewBox="0 0 500 500" fill="none" aria-hidden="true"><path d="M0 460C390 440 80 350 350 240S130 70 490 20"/><path d="M0 490C370 470 60 380 330 270S110 100 470 50"/></svg>
        <ModelBoundary><div className={s.modelCanvas}><Model modelScale={mobile ? 1.25 : 1.1} modelY={mobile ? -1.28 : -1.19} cameraZ={1.85} fov={40} dprMax={1.5} reducedMotion={reducedMotion} active={active} onReady={()=>setReady(true)} /></div>{!ready && <Loading />}</ModelBoundary>
    </div>
}
