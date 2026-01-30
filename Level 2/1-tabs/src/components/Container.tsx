"use client"

import Home from "./content/home";
import Profile from "./content/profile";
import Settings from "./content/settings";
import Tabs, { TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const tabs = [
    { label: "Home", value: "home", component: <Home /> },
    { label: "Profile", value: "profile", component: <Profile /> },
    { label: "Settings", value: "settings", component: <Settings />},
];

const Container = () => {
    return (
        <div className="max-w-md mx-auto mt-10">
            <Tabs defaultValue="home">
                <TabsList>
                    {/*
                        You are experts now, no need for this newbie way

                        <TabsTrigger value="home">Home</TabsTrigger>
                        <TabsTrigger value="profile">Profile</TabsTrigger>
                        <TabsTrigger value="settings">Settings</TabsTrigger>
                    */}
                    
                    {/* We use this way now */}
                    {tabs.map((tab, index) => (
                        <TabsTrigger key={index} value={tab?.value}>{tab?.label}</TabsTrigger>
                    ))}
                </TabsList>

                {/* 
                    There is a trick here
                    map() loop through all tabs, but only the active one will render.
                    because in TabsContent component we added a condition to check the active tab
                    if the current tab is not the same as the active one, it will return null
                    otherwise it will return the component
                    See the important note in tabs.tsx file, line 102, inside TabsContent component
                */}
                {/* {tabs.map((tab, index) => (
                    <TabsContent key={index} value={tab?.value}>
                        {tab?.component}
                    </TabsContent>
                ))} */}
                
                {/*
                    This is a newbie way too

                    A challenge for you:
                    create a reusable component that accepts
                    each tab’s content as a prop, and render it
                    dynamically with a single instance here.
                */}
                <TabsContent value="home">
                    <Home />
                </TabsContent>
                
                <TabsContent value="profile">
                    <Profile />
                </TabsContent>

                <TabsContent value="settings">
                    <Settings />
                </TabsContent>

            </Tabs>
        </div>
    )
}

export default Container;
