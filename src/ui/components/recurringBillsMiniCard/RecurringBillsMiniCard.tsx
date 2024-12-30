import React from "react";
import clsx from "clsx";

interface RecurringBillsMiniCardProps {
    concept: string;
    value: number;
    color: string;
}

const RecurringBillsMiniCard: React.FC<RecurringBillsMiniCardProps> = ({ concept, value, color }) => {
    return <div className={clsx("flex flex-row justify-between w-full h-auto rounded-md bg-beige-100 px-200 py-250 border-l-8", `border-l-${color}`)}>
        <span className="text-preset-4 text-grey-500">{concept}</span>
        <span className="font-bold text-black text-preset-4">${value.toFixed(2)}</span>
    </div>
}

export default RecurringBillsMiniCard;