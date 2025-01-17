"use client";

export default function GlobalError({ error }: { error: Error }) {
    return (
        <html>
            <body>
                <h1>Global Error</h1>
            </body>
        </html>
    );
}
