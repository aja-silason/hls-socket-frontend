export function HomePage(){

    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen">
            <p className="font-semibold">This is my home</p>
            <video id="local-video" controls autoPlay muted ></video>
            <video id="remote-video" autoPlay></video>
        </div>
    )
} 