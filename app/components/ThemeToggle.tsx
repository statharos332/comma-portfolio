'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
    const [light, setLight] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem('theme');
        if (stored === 'light') {
            document.documentElement.classList.add('light');
            setLight(true);
        }
    }, []);

    const toggle = () => {
        const next = !light;
        setLight(next);
        if (next) {
            document.documentElement.classList.add('light');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.classList.remove('light');
            localStorage.setItem('theme', 'dark');
        }
    };

    return (
        <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="w-[32px] h-[18px] rounded-full border relative transition-all duration-300 flex-shrink-0"
            style={{
                background: light ? 'var(--fg)' : 'transparent',
                borderColor: 'var(--border-mid)',
            }}
        >
            <span
                className="absolute top-[3px] w-[10px] h-[10px] rounded-full transition-all duration-300"
                style={{
                    left: light ? 'calc(100% - 13px)' : '3px',
                    background: light ? 'var(--bg)' : 'var(--fg-muted)',
                }}
            />
        </button>
    );
}
