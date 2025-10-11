// components/YouTubePlayer.js
import React, { useEffect, useState } from 'react'
import { Button, Progress } from '@nextui-org/react'
import YouTube from 'react-youtube'
import { PauseOutlined, PlayArrowOutlined, RestartAltOutlined } from '@mui/icons-material'

const YouTubePlayer = ({ videoId }) => {
    const playerRef = React.useRef(null)
    const intervalRef = React.useRef(null)
    const [progress, setProgress] = useState(0)
    const [ready, setReady] = useState(false)

    const onReady = (event) => {
        playerRef.current = event.target
        setProgress(0)
        setReady(true)
        // start polling only after ready
        intervalRef.current = setInterval(() => {
            const p = playerRef.current
            if (!p) return
            const dur = p.getDuration() || 0
            const cur = p.getCurrentTime() || 0
            setProgress(dur ? (cur / dur) * 100 : 0)
        }, 100)
    }

    const playVideo = () => {
        if (playerRef.current && ready) {
            // iOS requires the iframe not to be 0x0 and a direct user gesture (this handler)
            playerRef.current.playVideo()
        }
    }

    const pauseVideo = () => {
        if (playerRef.current) {
            playerRef.current.pauseVideo()
        }
    }

    const restartVideo = () => {
        if (playerRef.current) {
            playerRef.current.seekTo(0) // Seek to the beginning
            playerRef.current.playVideo() // Play the video
            setProgress(0)
        }
    }

    const opts = {
        // Use a minimal but non-zero size so mobile Safari will allow playback
        width: '1',
        height: '1',
        playerVars: {
            autoplay: 0,
            controls: 1,
            rel: 0,
            showinfo: 0,
            playsinline: 1,
        },
    }

    useEffect(() => {
        return () => clearInterval(intervalRef.current) // cleanup
    }, [])

    return (
        <div className='flex flex-col gap-2 mx-auto rounded-md overflow-hidden w-full glass px-2 pb-3'>
            <YouTube videoId={videoId} opts={opts} onReady={onReady} />

            <Progress
                aria-label='music bar'
                label='Example Composition - Whispering Sexy Viper Of Efficiency'
                value={progress}
                max={100}
                classNames={{
                    base: "p-2 max-w-md",
                    track: "bg-transparent",
                    indicator: "bg-gradient-to-r from-amber-700 to-yellow-300",
                    label: "tracking-wider text-white font-oswald",
                    value: "text-foreground/60",
                }}
            />

            <div className='flex gap-2'>
                <Button
                    isIconOnly
                    size="md"
                    radius="lg"
                    variant="ghost"
                    color='secondary'
                    className={`font-oswald text-lg text-white fade-in outline-none ring-0`}
                    onPress={playVideo}
                >
                    <PlayArrowOutlined />
                </Button>

                <Button
                    isIconOnly
                    size="md"
                    radius="lg"
                    variant="ghost"
                    color='secondary'
                    className={`font-oswald text-lg text-white fade-in outline-none ring-0`}
                    onPress={pauseVideo}
                >
                    <PauseOutlined />
                </Button>

                <Button
                    isIconOnly
                    size="md"
                    radius="lg"
                    variant="ghost"
                    color='secondary'
                    className={`font-oswald text-lg text-white fade-in outline-none ring-0`}
                    onPress={restartVideo}
                >
                    <RestartAltOutlined />
                </Button>
            </div>
        </div>
    )
}

export default YouTubePlayer
