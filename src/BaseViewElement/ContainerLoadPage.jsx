export default function ContainerLoadPage({zIndex, Class}) {
    return (
        <div className={`h-full w-full flex justify-center items-center z-[${zIndex}] ${Class}`}>
            <span className="loading loading-bars loading-lg">
            </span>
        </div>
    )
}