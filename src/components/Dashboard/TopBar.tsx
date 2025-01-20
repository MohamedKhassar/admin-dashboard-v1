import { FiCalendar } from "react-icons/fi"

const TopBar = () => {
    return (
        <div className="border-b mb-4 mt-2 pb-4 px-4 border-stone-300">

            <div className="flex items-center justify-between p-0.5">
                <div>
                    <span className="text-sm font-bold capitalize block">🚀 good morning, Mohamed!</span>
                    <span className="text-stone-500 text-xs block">{new Date().toUTCString().split("14", 1)}</span>
                </div>
                <button className="flex items-center gap-2 capitalize text-sm bg-stone-100 px-3 py-1.5 rounded hover:bg-violet-100 hover:text-violet-700 font-semibold transition-colors">
                    <FiCalendar />
                    <span>prev 6 months</span>
                </button>
            </div>
        </div>
    )
}

export default TopBar