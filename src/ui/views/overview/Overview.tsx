import React from "react";
import OverviewCard from "../../components/overviewCard/OverviewCard";
import PotsOverviewCard from "../../components/potsOverviewCard/PotsOverviewCard";
import TransactionsOverviewCard from "../../components/transactionsOverviewCard/TransactionsOverviewCard";
import BudgetOverviewCard from "../../components/budgetOverviewCard/BudgetOverviewCard";
import RecurringBillsOverviewCard from "../../components/recurringBillsOverviewCard/RecurringBillsOverviewCard";

const Overview: React.FC = () => {
    return <div className="flex flex-col w-full h-full gap-400">
        <span className="text-preset-1 text-grey-900">Overview</span>
        <div className="flex flex-row w-full gap-300">
            <OverviewCard title="Current Balance" value={4836} darkMode />
            <OverviewCard title="Income" value={3814.25} />
            <OverviewCard title="Expenses" value={1700.50} />
        </div>
        <div className="flex flex-row w-full gap-300">
            <div className="flex flex-col w-7/12 gap-300">
                <PotsOverviewCard />
                <TransactionsOverviewCard />
            </div>
            <div className="flex flex-col w-5/12 gap-300">
                <BudgetOverviewCard />
                <RecurringBillsOverviewCard />
            </div>
        </div>
    </div>;
}

export default Overview;