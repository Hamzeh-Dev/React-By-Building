"use client"

import React, { createContext, useContext, useState } from "react";

type TabsContextType = {
    activeTab: string,
    setActiveTab: (value: string) => void,
};

type TabsProps = {
    defaultValue: string,
    children: React.ReactNode,
};

const TabsContext = createContext<TabsContextType | null>(null);

const useTabs = () => {
    const context = useContext(TabsContext);
    if (!context) throw new Error("Tabs components must be used inside <Tabs />");
    return context;
};

const Tabs = ({ defaultValue, children }: TabsProps) => {
    const [activeTab, setActiveTab] = useState(defaultValue);

    return (
        <TabsContext.Provider value={{ activeTab, setActiveTab }}>
            <div className="w-full flex flex-col gap-2">{children}</div>
        </TabsContext.Provider>
    );
};

const TabsList = ({
    children,
    className,
}: {
    children: React.ReactNode,
    className?: string,
}) => (
    <div className={`w-full inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-gray-800 p-1 ${className}`}>
        {children}
    </div>
);

const TabsTrigger = ({
    value,
    children,
    className,
}: {
    value: string,
    children: React.ReactNode,
    className?: string,
}) => {
    const { activeTab, setActiveTab } = useTabs();
    const isActive = activeTab === value;

    return (
        <button
            onClick={() => setActiveTab(value)}
            className={`
                px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg cursor-pointer flex-1
                ${
                isActive
                    ? "bg-gray-700 text-white shadow-inner"
                    : "text-gray-400 hover:text-white hover:bg-gray-700/30"
                }
                
                ${className}
            `}
        >
            {children}
        </button>
    );
};

const TabsContent = ({
    value,
    children,
    className,
}: {
    value: string,
    children: React.ReactNode,
    className?: string,
}) => {
    const { activeTab } = useTabs();
    /*
        Important note:
        This condition render only the active tab's content
        If the tab isn't active, it will return null
        To avoid render more than one tab
    */
    if (activeTab !== value) return null;

    return (
        <div className={`mt-2 rounded-lg border border-gray-700 bg-gray-900 p-4 text-gray-200 shadow-sm ${className}`}>
            {children}
        </div>
    );
};

Tabs.List = TabsList;
Tabs.Trigger = TabsTrigger;
Tabs.Content = TabsContent;

export { Tabs, TabsList, TabsTrigger, TabsContent };
export default Tabs;
