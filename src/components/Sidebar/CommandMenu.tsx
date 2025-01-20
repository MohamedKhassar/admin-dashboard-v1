import { Command, CommandItem } from 'cmdk'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { FiEye, FiLink, FiLogOut, FiPhone, FiPlus } from 'react-icons/fi'

export const CommandMenu = ({ open, setOpen }: { open: boolean, setOpen: Dispatch<SetStateAction<boolean>> }) => {
    // Toggle the menu when ⌘K is pressed
    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }

        document.addEventListener('keydown', down)
        return () => document.removeEventListener('keydown', down)
    }, [])
    const [value, setValue] = useState("")
    return (
        <Command.Dialog open={open} onOpenChange={setOpen} label="Global Command Menu"
            className='fixed inset-0 bg-stone-950/50 backdrop-blur'
            onClick={() => setOpen(false)}>
            <div onClick={(e) => e.stopPropagation()}
                className='bg-white rounded-lg shadow-xl border-stone-300  border overflow-hidden w-full max-w-lg mx-auto mt-12'
            >
                <Command.Input
                    value={value}
                    onValueChange={setValue}
                    placeholder='what you need?'
                    className='p-3 border-b border-stone-300 w-full text-lg focus:outline-none relative'
                />
                <Command.List className='p-3'>
                    <Command.Empty>No results found for
                        <span className='text-violet-500 font-bold'> "{value}"</span>
                    </Command.Empty>

                    <Command.Group
                        className='text-sm mb-3 text-stone-400'
                        heading="Team">
                        <Command.Item
                            className='flex cursor-pointer transition-colors p-2 text-sm text-stone-950 hover:bg-stone-200 rounded items-center gap-2'
                        >
                            <FiPlus />
                            Invite Member
                        </Command.Item>
                        <Command.Item
                            className='flex cursor-pointer transition-colors p-2 text-sm text-stone-950 hover:bg-stone-200 rounded items-center gap-2'
                        >
                            <FiEye />
                            See Org Chart
                        </Command.Item>
                    </Command.Group>
                    <Command.Group
                        className='text-sm mb-3 text-stone-400'
                        heading="Integration">
                        <Command.Item
                            className='flex cursor-pointer transition-colors p-2 text-sm text-stone-950 hover:bg-stone-200 rounded items-center gap-2'
                        >
                            <FiLink />
                            Link Services
                        </Command.Item>
                        <Command.Item
                            className='flex cursor-pointer transition-colors p-2 text-sm text-stone-950 hover:bg-stone-200 rounded items-center gap-2'
                        >
                            <FiPhone />
                            Contact Support
                        </Command.Item>
                    </Command.Group>
                    <CommandItem className='flex items-center gap-2 bg-stone-950 text-white text-sm p-2 rounded hover:bg-stone-700 transition-colors cursor-pointer font-medium'>
                        <FiLogOut className='size-4' />
                        Sign Out
                    </CommandItem>
                </Command.List>
            </div>
        </Command.Dialog>
    )
}