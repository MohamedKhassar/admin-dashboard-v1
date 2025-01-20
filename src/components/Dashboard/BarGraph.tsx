import { BsGraphUp } from 'react-icons/bs';
import { BarChart, Bar, ResponsiveContainer } from 'recharts';


const BarGraph = () => {
    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];
    return (
        <div className="lg:col-span-6  col-span-12 overflow-hidden rounded border border-stone-300">
            <div className="p-4">
                <h3 className="capitalize  flex items-center font-medium gap-1.5">
                    <BsGraphUp />
                    Bar graph
                </h3>
            </div>
            <div className="w-full h-96">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart width={150} height={40} data={data}>
                        <Bar className='rounded' dataKey="uv" fill="#2563EB" radius={10} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default BarGraph