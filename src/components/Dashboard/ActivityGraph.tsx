import { FiUser } from "react-icons/fi"
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';
const ActivityGraph = () => {
    const data = [
        {
            name: "Jan",
            Returning: 275,
            New: 41,
        },
        {
            name: "Feb",
            Returning: 620,
            New: 96,
        },
        {
            name: "Mar",
            Returning: 202,
            New: 192,
        },
        {
            name: "Apr",
            Returning: 500,
            New: 50,
        },
        {
            name: "May",
            Returning: 355,
            New: 400,
        },
        {
            name: "Jun",
            Returning: 875,
            New: 200,
        },
        {
            name: "Jul",
            Returning: 700,
            New: 205,
        },
    ];
    return (
        <div className="lg:col-span-8  col-span-12 overflow-hidden rounded border border-stone-300">
            <div className="p-4">
                <h3 className="capitalize  flex items-center font-medium gap-1.5">
                    <FiUser />
                    activity
                </h3>
            </div>
            <div className="w-full h-96">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart width={500} height={300} data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis
                            className="text-xs"
                            dataKey="name" padding={{ left: 30, right: 30 }} />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="New" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="Returning" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default ActivityGraph