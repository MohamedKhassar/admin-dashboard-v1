import ActivityGraph from "./ActivityGraph"
import BarGraph from "./BarGraph"
import PieGraph from "./PieChart"
import StatCards from "./StatCards"
import UsageRadar from "./UsageRadar"

const Grid = () => {
    return (
        <div
            className="px-4 grid gap-3 grid-cols-12">
            <StatCards />
            <ActivityGraph />
            <UsageRadar />
            <BarGraph />
            <PieGraph />
        </div>
    )
}

export default Grid

