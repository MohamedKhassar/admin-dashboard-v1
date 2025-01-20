const Plan = () => {
    return (
        <div className="flex sticky top-[calc(100vh-48px-16px)] flex-col h-12 border-t px-2 border-stone-300 justify-end text-xs">
            <div className="flex items-center justify-between">
                <div>
                    <p className="font-bold">Enterprise</p>
                    <p className="text-stone-500 first-letter:uppercase">pay as you go</p>
                </div>
                <button className="px-2 py-1.5 font-medium bg-stone-200 rounded hover:bg-stone-300 transition-colors">
                    Support
                </button>
            </div>
        </div>
    )
}

export default Plan