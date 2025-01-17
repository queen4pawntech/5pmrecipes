import React from "react";

export default function DashboardLayout({ children }: Readonly<{children: React.ReactNode}>) {
    return (
        <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            {children}
        </div>
    );
}