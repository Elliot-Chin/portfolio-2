// components/YouTubePlayer.js
import React, { useEffect, useState } from 'react';
import { Button, Progress } from '@nextui-org/react';
import YouTube from 'react-youtube';
import { PauseOutlined, PlayArrowOutlined, RestartAltOutlined } from '@mui/icons-material';

const YouTubePlayer = ({ videoId }) => {
    const playerRef = React.useRef(null);
    const [progress, setProgress] = useState(100);

    const videoDuration = 20; // Video length in seconds

    useEffect(() => {
        const interval = setInterval(() => {
            if (playerRef.current) {
                const currentTime = playerRef.current.getCurrentTime();
                setProgress((currentTime / videoDuration) * 100);
            }
        }, 100);

        return () => clearInterval(interval);
    }, []);

    const onReady = (event) => {
        playerRef.current = event.target;
    };

    const playVideo = () => {
        if (playerRef.current) {
            playerRef.current.playVideo();
        }
    };

    const pauseVideo = () => {
        if (playerRef.current) {
            playerRef.current.pauseVideo();
        }
    };

    const restartVideo = () => {
        if (playerRef.current) {
            playerRef.current.seekTo(0); // Seek to the beginning
            playerRef.current.playVideo(); // Play the video
            setProgress(0)
        }
    };

    const opts = {
        width: '0',
        height: '0',
        playerVars: {
            autoplay: 0,
            controls: 1,
            rel: 0,
            showinfo: 0,
        },
    };

    return (
        <div className='flex flex-col gap-2 mx-auto rounded-md overflow-hidden w-full glass-effect dark:bg-slate-950 bg-gray-700 bg-opacity-30 px-2 pb-3
                        '>
            <YouTube videoId={videoId} opts={opts} onReady={onReady} />

            <Progress
                aria-label='music bar'
                label='Example Composition - Whispering Sexy Viper Of Efficiency'
                value={progress}
                max={100}
                classNames={{
                    base: "max-w-md",
                    track: "bg-transparent",
                    indicator: "bg-gradient-to-r from-purple-500 to-blue-500",
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
                    className={`font-oswald text-lg text-white fade-in`}
                    onPress={() => playVideo()}
                >
                    <PlayArrowOutlined />
                </Button>

                <Button
                    isIconOnly
                    size="md"
                    radius="lg"
                    variant="ghost"
                    color='secondary'
                    className={`font-oswald text-lg text-white fade-in`}
                    onClick={() => pauseVideo()}
                >
                    <PauseOutlined />
                </Button>

                <Button
                    isIconOnly
                    size="md"
                    radius="lg"
                    variant="ghost"
                    color='secondary'
                    className={`font-oswald text-lg text-white fade-in`}
                    onClick={() => restartVideo()}
                >
                    <RestartAltOutlined />
                </Button>
            </div>
        </div>
    );
};

export default YouTubePlayer;
