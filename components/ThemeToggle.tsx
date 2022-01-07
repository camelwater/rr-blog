import { useEffect, useState } from "react";
import { useTheme } from 'next-themes';
import { FaSun } from 'react-icons/fa';
import { RiMoonFill } from 'react-icons/ri';
import { styled } from '@styles/stitches.config';

const StyledButton = styled('button', {
    background: 'none',
    outline: 'none',
    border: 'none',
    color: '$main',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: '0.1s linear',
    cursor: 'pointer',
    '&:hover': {
        color: '$hover',
        transform: 'scale(1.1, 1.1)'
    },
    '&:active': {
        transform: 'scale(0.9, 0.9)'
    },
    variants: {
        variant: {
            desktop: {
                '@media (max-width: 700px)': {
                    display: 'none',
                }
            },
            mobile: {
            }
        }
    }
})


export const ThemeToggle: React.FC<{ type }> = ({type}) => {
    const [mounted, setMounted] = useState(false);
    const { setTheme, resolvedTheme } = useTheme();
  
    useEffect(() => setMounted(true), []);
  
    if (!mounted) return null;
  
    const toggleTheme = () => {
      const targetTheme = resolvedTheme === "light" ? "dark" : "light";
  
      setTheme(targetTheme);
    };

    return (
      <StyledButton variant={type} onClick={toggleTheme}>
        { resolvedTheme === 'light'? <RiMoonFill size={25}/> : <FaSun size={25}/> }
      </StyledButton>
    );
}