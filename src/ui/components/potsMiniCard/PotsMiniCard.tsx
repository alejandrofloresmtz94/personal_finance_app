import React from "react";
import clsx from "clsx";

interface PotsMiniCardProps {
    barColor: string;
    title: string;
    value: number;
}

const PotsMiniCard: React.FC<PotsMiniCardProps> = ({ barColor, title, value }) => {
    return (
        <div className="flex flex-row w-full gap-200">
            <div className={clsx("w-1 h-auto rounded-full", barColor)} />
            <div className="flex flex-col gap-1">
                <span className="text-preset-5 text-grey-500">{title}</span>
                <span className="font-bold text-preset-5 text-grey-900">${value}</span>
            </div>
        </div>
    )
};

export default PotsMiniCard;