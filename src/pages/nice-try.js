import { useRef } from "react"
import { SeoHead } from "@/components/seo/SeoHead"
import { useHomeGridPage } from "@/components/hooks/useHomeGridPage"
import s from "@/styles/NotFound.module.css"
import { recordDecoyHit } from "@/utils/decoyCounter"

export default function NiceTry({ decoyHits }) {
    const containerRef = useRef(null)
    useHomeGridPage(containerRef, { observeFades: false })
    return <>
        <SeoHead title="Nice try | Elliot Chin" description="The secrets are in another castle." path="/nice-try" noindex />
        <main className={s.page} ref={containerRef}><div className={s.container}>
            <section className={s.hero} aria-labelledby="decoy-heading">
                <div className={s.copy}><p className={s.path}>~/nothing-to-see-here</p>
                    <h1 id="decoy-heading"><span className={s.number}>403<span style={{fontSize:".25em",marginLeft:12}}>ish</span></span><span className={s.heading}>Nice try<span className={s.dot}>.</span></span></h1>
                    <p className={s.intro}>The secrets are in another castle.<br />You found the decoy. Want to see what I actually build?</p>
                    <div className={s.actions}><a className={s.button} href="/">Return Home <span aria-hidden="true">→</span></a><a className={s.textLink} href="/projects">View Projects <span aria-hidden="true">→</span></a></div>
                </div>
                <div className={s.decoyVisual}>
                    <svg className={s.lockIllustration} viewBox="0 0 400 320" role="img" aria-label="A locked vault. No secrets are exposed.">
                        <circle cx="200" cy="150" r="118" className={s.lockOrbit} />
                        <circle cx="200" cy="150" r="96" className={s.lockInnerOrbit} />
                        <path d="M24 150h51m250 0h51M200 8v23m0 238v23" className={s.lockCircuit} />
                        <circle cx="75" cy="150" r="4" className={s.lockEndpoint} /><circle cx="325" cy="150" r="4" className={s.lockEndpoint} />
                        <path d="M200 54l74 40v90l-74 48-74-48V94z" className={s.lockShield} />
                        <path d="M176 135v-23a24 24 0 0148 0v23" className={s.lockShackle} />
                        <rect x="160" y="130" width="80" height="64" rx="12" className={s.lockBody} />
                        <circle cx="200" cy="154" r="7" className={s.lockKeyhole} /><path d="M200 160v12" className={s.lockKeyStem} />
                        <path d="M169 140h62" className={s.lockHighlight} />
                        <rect x="146" y="248" width="108" height="28" rx="14" className={s.lockBadge} />
                        <circle cx="160" cy="262" r="3" className={s.lockKeyhole} />
                        <text x="202" y="266" textAnchor="middle" className={s.lockBadgeText}>ACCESS DENIED</text>
                    </svg>
                    <p className={s.diagnostic}>DECOY_HITS::{decoyHits == null ? "OFFLINE" : new Intl.NumberFormat("en-US").format(decoyHits)}</p>
                </div>
            </section>
            <footer className={s.footer}><span>DECOY::CONFIRMED</span><span>© Elliot Chin</span></footer>
        </div></main>
    </>
}
export async function getServerSideProps({ req, res }) {
    res.statusCode = 404
    res.setHeader("Cache-Control", "no-store")
    const decoyHits = await recordDecoyHit({ increment: req.method === "GET" })
    return { props: { decoyHits } }
}
