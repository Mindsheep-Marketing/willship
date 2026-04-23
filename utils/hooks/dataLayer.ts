import React from "react";

declare global {
    interface Window {
        dataLayer?: any[];
    }
}

// Check if dataLayer exists, otherwise declare it
if (typeof window !== 'undefined' && !window.dataLayer) {
    window.dataLayer = [];
}

