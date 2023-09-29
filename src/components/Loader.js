import { useEffect, useState } from "react"
import UseAnimations from 'react-useanimations'
import loading3 from 'react-useanimations/lib/loading3'


export default function Loader () {
    const [emoji, setEmoji] = useState('')
    const [color, setColor] = useState('')

    const list_of_emoji = ['🤔', '👀','💭', '☝️', '😶‍🌫️', '🧐','✨','🪄','⚙️','💡','🔦','📎','⌛','⏳','⌚','⏰','💫','🌐']

    useEffect(() => {
        setEmoji(list_of_emoji[Math.floor(Math.random() * list_of_emoji.length)])
        setColor(`#${Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')}`)
    }, [])


    return (
        <div className="glass-effect bg-transparent items-center justify-center flex fixed h-full w-full z-50">
            <div className="rounded-md flex gap-5 p-10 glass-effect font-lato glass-effect glass-shadow items-center bg-slate-300 bg-opacity-20">
                <p className="bg-transparent text-5xl lg:text-7xl">{emoji}</p>
                <p className="text-3xl lg:text-5xl">{emoji? 'Loading...' : ''}</p>
                <UseAnimations strokeColor={color} animation={loading3} size={48} className="trans"/>
            </div>
        </div>
    )
}