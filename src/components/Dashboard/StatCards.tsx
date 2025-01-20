import { FiTrendingDown, FiTrendingUp } from "react-icons/fi"

const StatCards = () => {
    return (
        <>
            <Card
                title="Gross Revenue"
                value="$120,054.24"
                pillText="2.75%"
                trend="up"
                period="From Jan 1st – Jul 31st"
            />

            <Card
                title="Avg Order"
                value="$27.97"
                pillText="1.01%"
                trend="down"
                period="From Jan 1st – Jul 31st"
            />

            <Card
                title="Trailing Year"
                value="$278,054.24"
                pillText="60.75%"
                trend="up"
                period="Previous 365 days"
            />

        </>
    )
}

export default StatCards

const Card = ({
    title,
    value,
    pillText,
    trend,
    period
}: {
    title: string,
    value: string,
    pillText: string,
    trend: "up" | "down",
    period: string
}) => {
    return (
        <div className="p-4 w-full rounded border border-stone-300  lg:col-span-4 md:col-span-6 col-span-12">
            <div className="flex mb-8 items-start justify-between">
                <div>
                    <h3 className="text-stone-500 mb-2 text-sm">{title}</h3>
                    <p className="text-3xl font-semibold">{value}</p>
                </div>
                <span className={`text-xs flex px-2 py-0.5 font-medium rounded items-center gap-1 ${trend === "down" ? "bg-red-100 text-red-950" : "bg-green-100 text-green-950"}`}>{trend == "up" ? <FiTrendingUp /> : <FiTrendingDown />}{pillText}</span>
            </div>
            <p className="text-xs text-stone-500">{period}</p>
        </div>
    )
}