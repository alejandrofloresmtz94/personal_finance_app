import React, { useMemo } from "react";
import clsx from "clsx";
import { Card } from "primereact/card";

interface OverviewCardProps {
    title: string;
    value: number;
    darkMode?: boolean;
}

const OverviewCard: React.FC<OverviewCardProps> = ({ title, value, darkMode = false }) => {

    const pt = useMemo(() => ({
        content: {
            className: "flex flex-col gap-200 p-0"
        },
        body: {
            className: "p-0"
        }
    }), []);

    return (
        <Card className={clsx("w-4/12 h-[120px] p-300", darkMode ? "bg-grey-900" : "bg-white")} pt={pt}>
            <span className={clsx("text-preset-4", darkMode ? "text-white" : "text-black")}>{title}</span>
            <span className={clsx("text-preset-1", darkMode ? "text-white" : "text-black")}>$ {value.toFixed(2)}</span>
        </Card>
    );
}

export default OverviewCard;
