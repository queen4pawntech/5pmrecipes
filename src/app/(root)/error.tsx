"use client";

import React, { useEffect } from "react";

export default function Error({ error, reset }: { error: Error & {digest?: string}; reset: () => void }
) {
    useEffect(() => {
        console.log(error);
    }, [error]);
    return (
        <div>
            <h2 className="text-3xl font-bold">Something went wrong!</h2>
            <button onClick={() => reset()}>Try again</button>
        </div>
    );
}
