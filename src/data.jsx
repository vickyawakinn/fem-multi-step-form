import React, { useState } from "react";

export const DataContext = React.createContext();
export const DataUpdateContext = React.createContext();

export function DataProvider({ children }) {
    const [data, setData] = useState({
        personalInfo: {
            name: undefined,
            email: undefined,
            phone: undefined,
        },
        plan: {
            plan: "arcade",
            time: "monthly",
        },
        addOns: [],
        active: {
            prev: undefined,
            current: "/",
            next: "/selectPlan",
        },
    });

    return (
        <DataContext.Provider value={data}>
            <DataUpdateContext.Provider value={setData}>
                {children}
            </DataUpdateContext.Provider>
        </DataContext.Provider>
    );
}
