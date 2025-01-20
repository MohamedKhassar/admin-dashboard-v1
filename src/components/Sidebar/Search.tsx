import { useState } from "react"
import { FiCommand, FiSearch } from "react-icons/fi"
import { CommandMenu } from "./CommandMenu"

const Search = () => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <div onClick={() => {
                setOpen(true);
            }} className="bg-stone-200 mb-4 relative rounded flex items-center px-2 py-1.5 text-sm cursor-pointer">
                <FiSearch className="mr-2" />
                <input type="text"
                    onFocus={(e) => {
                        e.target.blur();
                        setOpen(true);
                    }}
                    placeholder="Search..."
                    className="w-full bg-transparent placeholder:text-stone-400 focus:outline-none"
                />
                <span className="flex bg-stone-50/80 gap-0.5 absolute right-1.5 top-1/2 backdrop-blur-md p-1 text-xs font-medium rounded-md -translate-y-1/2 items-center shadow">
                    {navigator.userAgent.includes("Windows") ? "Ctrl+" :
                        <FiCommand />
                    }
                    K
                </span>
            </div>
            <CommandMenu open={open} setOpen={setOpen} />
        </>
    )
}

export default Search