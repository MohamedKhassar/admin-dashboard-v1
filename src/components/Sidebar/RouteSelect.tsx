import { FC, useState } from "react"
import { IconType } from "react-icons"
import { FiDollarSign, FiHome, FiLink, FiPaperclip, FiUsers } from "react-icons/fi"
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    selected: boolean;
    Icon: IconType;
    title: string;
}
const RouteSelect = () => {
    const [btnData, setBtnData] = useState([{
        id: 1,
        name: "Dashboard",
        icon: FiHome,
        selected: true,
    },
    {
        id: 2,
        name: "Team",
        icon: FiUsers,
        selected: false,
    },
    {
        id: 3,
        name: "Invoices",
        icon: FiPaperclip,
        selected: false,
    },
    {
        id: 4,
        name: "Integrations",
        icon: FiLink,
        selected: false,
    },
    {
        id: 5,
        name: "Finances",
        icon: FiDollarSign,
        selected: false,
    }
    ])
    const handleSelect = (id: number) => {
        setBtnData((prevData) =>
            prevData.map((btn) =>
                btn.id === id
                    ? { ...btn, selected: true } // Set selected to true for the clicked button
                    : { ...btn, selected: false } // Set selected to false for all others
            )
        );
    }
    return (
        <div className="space-y-1">
            {btnData.map(btn => {
                return <Route onClick={() => handleSelect(btn.id)} key={btn.id} selected={btn.selected} Icon={btn.icon} title={btn.name} />
            })}
        </div>
    )
}

export default RouteSelect

const Route: FC<Props> = ({ selected, Icon, title, ...rest }: { selected: boolean, Icon: IconType, title: string }) => {
    return <button
        className={`flex items-center gap-2 p-1.5 justify-start text-sm rounded transition-[box-shadow,_background-color,_color] w-full px-2 ${selected ? "bg-white text-stone-950 shadow" : "hover:bg-stone-200 bg-transparent text-stone-500 shadow-none"
            }`}
        {...rest}
    >
        <Icon />
        <span>{title}</span>
    </button>
}