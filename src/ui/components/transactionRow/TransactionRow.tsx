import React, { useMemo } from "react";
import clsx from "clsx";
import { Transaction } from "../../../core/interfaces/overview.interfaces";

interface TransactionRowProps {
    transaction: Transaction;
    index: number;
}

const TransactionRow: React.FC<TransactionRowProps> = ({ transaction, index }) => {

    const colors = useMemo(() => ["bg-secondary-green", "bg-secondary-yellow", "bg-secondary-cyan", "bg-secondary-navy", "bg-secondary-red"], []);

    return (
        <div className="flex flex-row justify-between w-full">
            <div className="flex flex-row items-center gap-200">
                <span className={clsx("w-10 h-10 text-center text-white rounded-full text-preset-2 place-content-center", colors[index])}>{transaction.person.charAt(0)}</span>
                <span className="font-bold text-preset-4 text-grey-900">{transaction.person}</span>
            </div>
            <div className="flex flex-col">
                <span className={clsx("font-bold", transaction.transactionType === "income" ? "text-secondary-green" : "text-black")}>{transaction.transactionType === 'income' ? "+" : "-"} ${transaction.amount.toFixed(2)}</span>
                <span className="text-gray-500 text-preset-5">{transaction.date}</span>
            </div>
        </div>
    );
}

export default TransactionRow;