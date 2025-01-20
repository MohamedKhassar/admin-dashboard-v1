import { FiChevronDown, FiChevronUp } from "react-icons/fi"

const AccountToggle = () => {
    return (
        <div className="border-b mb-4 mt-2 pb-4 border-stone-300">
            <button className="flex p-0.5 hover:bg-stone-200 rounded transition-colors relative gap-2 w-full items-center">
                <img src="https://api.dicebear.com/9.x/notionists/svg" alt="avatar"
                    className="size-8 bg-violet-500 shadow rounded shrink-0"
                />
                <div className="text-start">
                    <span className="text-sm capitalize font-bold block">Mohamed Khassar</span>
                    <span className="text-xs block text-stone-500">mohamedkh@gmail.com</span>
                </div>

                <FiChevronDown className="absolute right-2 top-1/2 text-xs translate-y-[calc(-50%+4px)]" />
                <FiChevronUp className="absolute right-2 top-1/2 text-xs translate-y-[calc(-50%-4px)]" />
            </button>
        </div>
    )
}

export default AccountToggle