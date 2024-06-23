import { Button } from '@nextui-org/react';
import Tilt from 'react-parallax-tilt'
import { ReactTyped } from 'react-typed';



export const SummaryCard = ({ summary, button, bg }) => {


    return (
        <Tilt tiltMaxAngleX={0} tiltMaxAngleY={10}>
            <div className={`shadow-lg ${bg || 'dark:bg-slate-600 bg-gray-600'} bg-opacity-20 rounded-md p-2 text-white flex`}>
                <div className='flex flex-col w-full p-2'>
                    <div className='flex justify-between px-3'>
                        <ReactTyped
                            startWhenVisible
                            strings={["About Me"]}
                            typeSpeed={40}
                            className='dark:text-slate-300 text-warning-600 bg-transparent text-4xl font-bold capitalize font-montserrat'
                            showCursor={false}
                        />
                        {button && <Button
                            size="md"
                            radius="lg"
                            variant="flat"
                            color='warning'
                            className={`font-oswald text-lg dark:text-white text-slate-950`}
                        >
                            {button}
                        </Button>}
                    </div>

                    <textarea
                        type='text'
                        rows={20}
                        cols={50}
                        disabled
                        className='mt-2 p-3 resize-none dark:text-slate-200 text-black text-wrap bg-transparent text-lg font-raleway '
                        value={summary}
                    />
                </div>
            </div>
        </Tilt>
    )
}