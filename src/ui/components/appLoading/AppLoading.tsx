import { BlockUI } from "primereact/blockui";
import { ProgressSpinner } from "primereact/progressspinner";
import React from "react";

const AppLoading: React.FC = () => {
    return (
        <BlockUI blocked fullScreen template={
            <div className='flex flex-row items-center justify-center w-full h-full'>
                <ProgressSpinner />
            </div>
        } />
    );
};

export default AppLoading;