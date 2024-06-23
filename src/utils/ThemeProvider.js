import { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const root = document.documentElement;

        root.classList.add('theme-transition');
        
        if (savedTheme) {
            setTheme(savedTheme);
            root.classList.add(savedTheme);
        }

        const timer = setTimeout(() => {
            root.classList.remove('theme-transition');
        }, 300);
        
        return () => clearTimeout(timer);

    }, []);

    useEffect(() => {
        const root = document.documentElement;

        root.classList.add('theme-transition');

        if (theme === 'dark') {
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            root.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }

        const timer = setTimeout(() => {
            root.classList.remove('theme-transition');
        }, 300);
        
        return () => clearTimeout(timer);

    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
