import React, { useMemo } from "react";
import { Card } from "primereact/card";
import { useNavigate } from "react-router-dom";
import { Go } from "../../../assets/icons";
import RecurringBillsMiniCard from "../recurringBillsMiniCard/RecurringBillsMiniCard";

const RecurringBillsOverviewCard: React.FC = () => {
    const navigate = useNavigate();

    const cardPt = useMemo(() => ({
        content: {
            className: "p-0 flex flex-col gap-250"
        },
        body: {
            className: "p-0 w-full"
        }
    }), []);

    return (
        <Card pt={cardPt} className="w-full h-auto bg-white p-400">
            <div className="flex flex-row justify-between">
                <span className="font-bold text-gray-900 text-preset-2">Recurring Bills</span>
                <span className="flex flex-row items-center cursor-pointer gap-200 text-preset-4 text-grey-500" onClick={() => navigate('/recurring-bills')} >
                    See Details
                    <Go />
                </span>
            </div>
            <div className="flex flex-col w-full gap-150">
                <RecurringBillsMiniCard concept="Paid Bills" value={190} color="secondary-green" />
                <RecurringBillsMiniCard concept="Total Upcoming" value={194.98} color="secondary-yellow" />
                <RecurringBillsMiniCard concept="Due Soon" value={59.98} color="secondary-cyan" />
            </div>
        </Card>
    )
}

export default RecurringBillsOverviewCard;