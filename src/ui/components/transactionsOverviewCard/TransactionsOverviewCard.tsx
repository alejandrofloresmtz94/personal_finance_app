import React, { Fragment, useMemo } from "react";
import Transactions from "../../../assets/db/transactions.json";
import { Card } from "primereact/card";
import { Go } from "../../../assets/icons";
import TransactionRow from "../transactionRow/TransactionRow";
import { useNavigate } from "react-router-dom";

const TransactionsOverviewCard: React.FC = () => {
    const navigate = useNavigate();
    const slicedTransactions = useMemo(() => {
        return Transactions.slice(0, 5);
    }, []);

    const cardPt = useMemo(() => ({
        content: {
            className: "p-0 flex flex-col gap-400"
        },
        body: {
            className: "p-0 w-full"
        }
    }), []);

    return (
        <Card pt={cardPt} className="w-full h-auto bg-white p-400">
            <div className="flex flex-row justify-between">
                <span className="font-bold text-gray-900 text-preset-2">Transactions</span>
                <span className="flex flex-row items-center cursor-pointer gap-200 text-preset-4 text-grey-500" onClick={() => navigate('/transactions')} >
                    View All
                    <Go />
                </span>
            </div>
            {
                slicedTransactions.map((transaction, index) => (
                    <Fragment key={transaction.id}>
                        <TransactionRow transaction={transaction} index={index} />
                        {index !== slicedTransactions.length - 1 && <hr className="w-full border-gray-100" />}
                    </Fragment>
                ))
            }
        </Card>
    );
}

export default TransactionsOverviewCard;