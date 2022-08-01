function Loading() {
    return (
        <div className="m-auto flex items-center justify-center">
            <span className="relative inline-flex">
                <h2 className="pt-5 pr-10 font-semibold text-3xl">Loading</h2>
                <span className="flex absolute h-5 w-5 top-0 right-0 -mt-1 -mr-1">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-5 w-5 bg-sky-500"></span>
                </span>
            </span>
        </div>
    );
}

export default Loading;
