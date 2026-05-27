'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
    const [theme, setTheme] = useState<'dark' | 'light'>('dark');

    useEffect(() => {
        const stored = localStorage.getItem('theme');
        if (stored === 'light') {
            document.documentElement.classList.add('light');
            setTheme('light');
        }
    }, []);

    const set = (t: 'dark' | 'light') => {
        setTheme(t);
        if (t === 'light') {
            document.documentElement.classList.add('light');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.classList.remove('light');
            localStorage.setItem('theme', 'dark');
        }
    };

    return (
        <div
            className="flex items-center rounded-full p-[3px] gap-[2px]"
            role="radiogroup"

        >
            {/* DARK */}
            <button
                role="radio"
                aria-checked={theme === 'dark'}
                onClick={() => set('dark')}
                title="Dark theme"
                className="w-[26px] h-[26px] rounded-full flex items-center justify-center transition-all duration-200"
                style={{
                    background: theme === 'dark' ? 'var(--fg)' : 'transparent',
                    color: theme === 'dark' ? 'var(--bg)' : 'var(--fg-muted)',
                }}
            >
                {/* moon — filled (active) */}
                <svg className={theme === 'dark' ? 'block' : 'hidden'} width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.142 14.2087C12.1568 14.2087 9.62556 11.7377 9.62556 7.77511C9.62556 6.90876 9.82896 5.75614 10.1002 5.14593C10.1906 4.95006 10.2132 4.81445 10.2132 4.70898C10.2132 4.46791 10.0399 4.23438 9.73103 4.23438C9.61802 4.23438 9.43722 4.26451 9.24888 4.33231C6.44643 5.4548 4.57812 8.41546 4.57812 11.5569C4.57812 15.9791 7.92299 19.1507 12.3301 19.1507C15.5243 19.1507 18.3192 17.2221 19.3061 14.7059C19.389 14.51 19.4116 14.3142 19.4116 14.2087C19.4116 13.9149 19.1855 13.719 18.9445 13.719C18.8164 13.719 18.6959 13.7492 18.5226 13.8245C17.9576 14.0204 17.046 14.2087 16.142 14.2087Z" fill="currentColor"/>
                </svg>
                {/* moon — outline (inactive) */}
                <svg className={theme === 'dark' ? 'hidden' : 'block'} width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.1656 14.0991C12.1804 14.0991 9.70187 11.7109 9.70187 7.84626C9.70187 6.76144 9.88267 5.78209 10.1614 5.24721C10.2895 4.9986 10.3271 4.84794 10.3271 4.6596C10.3271 4.34319 10.0635 4.01172 9.67174 4.01172C9.5738 4.01172 9.40053 4.04185 9.15946 4.13225C6.3344 5.28488 4.36816 8.23047 4.36816 11.4171C4.36816 15.9975 7.7055 19.3424 12.2859 19.3424C15.5554 19.3424 18.2524 17.5946 19.4879 14.762C19.5933 14.5285 19.6235 14.3326 19.6235 14.2121C19.6235 13.8278 19.3297 13.5868 19.0208 13.5868C18.8626 13.5868 18.7194 13.6094 18.501 13.7073C17.9209 13.9484 17.0319 14.0991 16.1656 14.0991ZM5.84473 11.3719C5.84473 9.24749 6.90695 7.19085 8.63965 6.02316C8.43624 6.62584 8.33078 7.29632 8.33078 8.02706C8.33078 12.6602 11.1784 15.4475 15.917 15.4475C16.5498 15.4475 17.0997 15.3722 17.6196 15.1914C16.5197 16.8638 14.5082 17.8733 12.3311 17.8733C8.57938 15.1311 5.84473 11.3719Z" fill="currentColor"/>
                </svg>
            </button>

            {/* LIGHT */}
            <button
                role="radio"
                aria-checked={theme === 'light'}
                onClick={() => set('light')}
                title="Light theme"
                className="w-[26px] h-[26px] rounded-full flex items-center justify-center transition-all duration-200"
                style={{
                    background: theme === 'light' ? 'var(--fg)' : 'transparent',
                    color: theme === 'light' ? 'var(--bg)' : 'var(--fg-muted)',
                }}
            >
                {/* sun icon */}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-5.5 4a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0Zm5.5 7.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75ZM2.25 12a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Zm17.25-.75a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1 0-1.5h1ZM5.636 5.636a.75.75 0 0 1 1.06 0l.708.707a.75.75 0 1 1-1.06 1.06l-.708-.707a.75.75 0 0 1 0-1.06Zm11.314 0a.75.75 0 0 1 0 1.06l-.707.707a.75.75 0 1 1-1.06-1.06l.707-.707a.75.75 0 0 1 1.06 0ZM5.636 18.364a.75.75 0 0 1 0-1.06l.708-.708a.75.75 0 1 1 1.06 1.06l-.707.708a.75.75 0 0 1-1.06 0Zm11.314 0a.75.75 0 0 1-1.06 0l-.707-.707a.75.75 0 1 1 1.06-1.06l.707.707a.75.75 0 0 1 0 1.06Z" fill="currentColor"/>
                </svg>
            </button>
        </div>
    );
}
