import { FiPieChart } from 'react-icons/fi';
import { PieChart, Pie, ResponsiveContainer } from 'recharts';


const PieGraph = () => {
    const data01 = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
    ];
    const data02 = [
        { name: 'A1', value: 100 },
        { name: 'A2', value: 300 },
        { name: 'B1', value: 100 },
        { name: 'B2', value: 80 },
        { name: 'B3', value: 40 },
        { name: 'B4', value: 30 },
        { name: 'B5', value: 50 },
        { name: 'C1', value: 100 },
        { name: 'C2', value: 200 },
        { name: 'D1', value: 150 },
        { name: 'D2', value: 50 },
    ];
    return (
        <div className="lg:col-span-6  col-span-12 overflow-hidden rounded border border-stone-300">
            <div className="p-4">
                <h3 className="capitalize  flex items-center font-medium gap-1.5">
                    <FiPieChart />
                    Pie graph
                </h3>
            </div>
            <div className="w-full h-96">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart width={400} height={400}>
                        <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                        <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default PieGraph