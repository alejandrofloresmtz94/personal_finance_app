import React, { useMemo } from "react";
import { Card } from "primereact/card";
import { useNavigate } from "react-router-dom";
import { Go } from "../../../assets/icons";
import { Pie } from '@ant-design/plots';
import PotsMiniCard from "../potsMiniCard/PotsMiniCard";

const BudgetOverviewCard: React.FC = () => {
    const navigate = useNavigate();

    const cardPt = useMemo(() => ({
        content: {
            className: "p-0 flex flex-col gap-250"
        },
        body: {
            className: "p-0 w-full"
        }
    }), []);

    const donutConfig = useMemo(() => ({
        data: [
            { type: 'Entretainment', value: 50 },
            { type: 'Bills', value: 750 },
            { type: 'Dining Out', value: 75 },
            { type: 'Personal Care', value: 100 },
        ],
        angleField: 'value',
        colorField: 'type',
        innerRadius: 0.7,
        label: false,
        legend: false,
        tooltip: false,
        annotations: [
            {
                type: 'text',
                style: {
                    text: '$338\nof $975 limit',
                    x: '50%',
                    y: '50%',
                    textAlign: 'center',
                    fontSize: 30,
                    fontStyle: 'bold',
                },
            },
        ],
        scale: {
            color: {
                palette: 'spectral',
                offset: (t: number) => t * 0.8 + 0.1,
            },
        },
        autoFit: true,
    }), []);

    return <Card pt={cardPt} className="w-full h-auto bg-white p-400">
        <div className="flex flex-row justify-between">
            <span className="font-bold text-gray-900 text-preset-2">Budgets</span>
            <span className="flex flex-row items-center cursor-pointer gap-200 text-preset-4 text-grey-500" onClick={() => navigate('/budgets')} >
                See Details
                <Go />
            </span>
        </div>
        <div className="flex flex-row justify-around w-full gap-200">
            <div className="w-4/5">
                <Pie {...donutConfig} />
            </div>
            <div className="flex flex-col justify-around w-1/5">
                <PotsMiniCard barColor="bg-secondary-green" title="Entretainment" value={50} />
                <PotsMiniCard barColor="bg-secondary-cyan" title="Bills" value={750} />
                <PotsMiniCard barColor="bg-secondary-yellow" title="Dining Out" value={75} />
                <PotsMiniCard barColor="bg-secondary-navy" title="Personal Care" value={100} />
            </div>
        </div>
    </Card>;
}

export default BudgetOverviewCard;