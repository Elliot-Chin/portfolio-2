import Link from "next/link";





export default function MyButton ({link, text, title, id, name, background, shadowColor, bClassName, aClassName, onClick}) {
    return (
        <div
        name={name}
        id={id}
        title={title}
        className={`btn ${bClassName} font-roboto-condensed`}
        style={{'--background': background? background : 'white',
                                    '--shadow-color': shadowColor? shadowColor : 'white'}}>
                <Link href={link} className={`${aClassName}`} onClick={onClick}>{text}</Link>
            </div>
    )
}