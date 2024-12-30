import React, { useMemo } from "react";
import { Card } from "primereact/card";
import { useNavigate } from "react-router-dom";
import { Go, PotTotal } from "../../../assets/icons";
import PotsMiniCard from "../potsMiniCard/PotsMiniCard";

const PotsOverviewCard: React.FC = () => {

    const navigate = useNavigate();

    const mainCardPt = useMemo(() => ({
        content: {
            className: "p-0 flex flex-col gap-250"
        },
        body: {
            className: "p-0 w-full"
        }
    }), []);

    const totalSavedCardPt = useMemo(() => ({
        content: {
            className: "p-0 flex flex-row gap-200 p-200 items-center"
        },
        body: {
            className: "p-0 w-full"
        }
    }), []);

    return (
        <Card className="w-full h-[218px] p-400 gap-250 bg-white" pt={mainCardPt}>
            <div className="flex flex-row justify-between">
                <span className="font-bold text-gray-900 text-preset-2">Pots</span>
                <span className="flex flex-row items-center text-gray-500 cursor-pointer gap-200 text-preset-4" onClick={() => navigate('/pots')}>
                    See Details
                    <Go />
                </span>
            </div>
            <div className="flex flex-row gap-250">
                <Card className="w-1/2 bg-beige-100" pt={totalSavedCardPt}>
                    <PotTotal />
                    <div className="flex flex-col gap-150">
                        <span className="text-gray-500 text-preset-4">Total Saved</span>
                        <span className="text-gray-900 text-preset-1">$850</span>
                    </div>
                </Card>
                <div className="grid w-1/2 grid-cols-2 grid-rows-2 gap-y-200">
                    <PotsMiniCard barColor="bg-secondary-green" title="Savings" value={159} />
                    <PotsMiniCard barColor="bg-secondary-cyan" title="Gift" value={40} />
                    <PotsMiniCard barColor="bg-secondary-navy" title="Concert Ticket" value={110} />
                    <PotsMiniCard barColor="bg-secondary-yellow" title="New Laptop" value={10} />
                </div>
            </div>
        </Card>
    )
}

export default PotsOverviewCard;