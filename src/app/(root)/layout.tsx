export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
    return (
        <div>
            <h1 className="text-3xl font-bold">ROOT LAYOUT</h1>
            {children}
        </div>
    );
}