"use client";

import { useEffect } from "react";

export default function ThemeInit() {
    useEffect(() => {
        try {
            const theme = localStorage.getItem("theme");

            if (theme === "light") {
                document.documentElement.classList.add("light");
            } else {
                document.documentElement.classList.add("dark");
            }
        } catch (e) {}
    }, []);

    return null;
}