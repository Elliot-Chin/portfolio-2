import Head from "next/head";
import { useMemo, useEffect } from "react";
import { useRouter } from "next/router";
import Typewriter from "typewriter-effect";
import {
    FaceRetouchingNaturalOutlined,
    ApartmentOutlined,
    AssignmentOutlined,
} from "@mui/icons-material";
import { Model2 } from "@/components/avatar/Model_2";

export default function Home() {
    const facts = [
        "I'm Elliot — loves solving weird problems.",
        "If it works, don’t touch it — sacred code.",
        "I like quiet UIs and loud laughter.",
        "I code like I cook — messy, but it comes out great - usually.",
        "I’m not lazy, I’m just optimizing for efficiency.",
        "I like ice cream more than semicolons.",
        "I build because I'm bored.",
        "Powered by caffeine and bad ideas.",
        "Curiosity drives my dreams — sometimes my work too.",
        "I call it ‘agile’ when I change my mind mid-project.",

    ];

    const shuffledFacts = useMemo(() => {
        const arr = [...facts];
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }, []);

    const router = useRouter();
    const links = [
        { label: "About Me", href: "/about", Icon: FaceRetouchingNaturalOutlined },
        { label: "Experiences", href: "/experiences", Icon: ApartmentOutlined },
        { label: "Projects", href: "/projects", Icon: AssignmentOutlined },
    ];

    // optional: lock scroll only while on this page
    useEffect(() => {
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = prev;
        };
    }, []);

    return (
        <main className="h-screen overflow-hidden relative">
            <Head>
                <title>Elliot Chin — Portfolio</title>
                <meta name="description" content="Hey — I’m Elliot. I like making things that feel good to use." />
                {/* Favicon: PNG */}
            </Head>

            {/* Background model layer */}
            <div className="absolute inset-0 z-0">
                <Model2 modelScale={0.7} cameraZ={1.5} fov={38} dprMax={2} />
            </div>

            {/* Foreground overlay */}
            <div className="relative z-10 flex flex-col items-center h-full px-4">
                <div className="rounded-3xl p-6 sm:p-8 lg:p-10 text-center top-0">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 mb-4">
                        Hey! I’m Elliot.
                    </h1>

                    <div className="text-xl lg:text-3xl font-spacemono leading-relaxed text-slate-50 min-h-[6rem]">
                        <Typewriter
                            options={{
                                strings: shuffledFacts,
                                autoStart: true,
                                loop: true,
                                delay: 75,
                                deleteSpeed: 20,
                                pauseFor: 2200,
                                cursor: "▍",
                                wrapperClassName: "inline whitespace-pre-wrap align-baseline",
                                cursorClassName:
                                    "typewriter-cursor inline-block align-baseline ml-2 opacity-90",
                            }}
                        />
                    </div>

                    <div className="mt-4 flex flex-wrap gap-3 justify-center">
                        {links.map(({ label, href, Icon }) => (
                            <button
                                key={href}
                                onClick={() => router.push(href)}
                                className="glass px-4 py-3 rounded-xl flex items-center gap-2 transition transform hover:-translate-y-0.5 active:translate-y-0"
                                aria-label={label}
                            >
                                <Icon fontSize="small" />
                                <span className="text-sm sm:text-base font-medium">
                                    {label}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
