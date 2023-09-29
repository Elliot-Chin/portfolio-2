import MyButton from "./MyButton"




export default function NavMenu ({about, experience, skills, projects, contact, setLoading, verticle}) {

    return (
        <> 
            <div className={`gap-5 p-5 w-full relative ${verticle? ' sticky top-5 flex flex-col gap-7' : 'flex'}`}>
                <MyButton text={"🏡"}
                                title={'Home'}
                                background={!about? '#f2b749' : !experience? '#429bf5' : !skills? '#0da305' : !projects? '#6a08bf' : !contact? '#d907ab' : '#ffffff'}
                                shadowColor={!about? '#db8b2a' : !experience? '#1331f0' : !skills? '#1ae010' : !projects? '#c930f0' : !contact? '#940650' : '#ffffff'}
                                link={'/'}
                                bClassName={'text-3xl lg:w-16'}
                                onClick={() => setLoading(true)}/>

                {about && <MyButton text={"🧑‍💻"}
                                title={'About Me'}
                                background={'#f2b749'}
                                shadowColor={'#db8b2a'}
                                link={'/about'}
                                bClassName={'text-3xl lg:w-16'}
                                onClick={() => setLoading(true)}/>}
                                
                {experience && <MyButton text={"👔"}
                                title={'Experiences'}
                                background={'#429bf5'}
                                shadowColor={'#1331f0'}
                                link={'/experiences'}
                                bClassName={'text-3xl lg:w-16'}
                                onClick={() => setLoading(true)}/>}

                {skills && <MyButton text={"⚒️"}
                                title={'Skills'}
                                background={'#0da305'}
                                shadowColor={'#1ae010'}
                                link={'/skills'}
                                bClassName={'text-3xl lg:w-16'}
                                onClick={() => setLoading(true)}/>}

                {projects && <MyButton text={"📂"}
                                title={'Projects'}
                                background={'#6a08bf'}
                                shadowColor={'#c930f0'}
                                link={'/projects'}
                                bClassName={'text-3xl lg:w-16'}
                                onClick={() => setLoading(true)}/>}

                {contact && <MyButton text={"💬"}
                                title={'Contact'}
                                background={'#d907ab'}
                                shadowColor={'#940650'}
                                link={'/contact'}
                                bClassName={'text-3xl lg:w-16'}
                                onClick={() => setLoading(true)}/>}
            </div>
        </>
    )
}