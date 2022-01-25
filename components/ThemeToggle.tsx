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
    position: 'relative',
    cursor: 'pointer',
    '&:hover': {
        color: '$hover',
        transform: 'scale(1.05, 1.05)'
    },
    '&:active': {
        transform: 'scale(0.95, 0.95)'
    },
    variants: {
        variant: {
            desktop: {
                padding: '5px',
                border: '2px solid $cardBorder',
                background: '$lightBackground',
                borderRadius: '7.5px',
                '&:hover': {
                    border: '2px solid $hover',
                    // '$$glow': '$shadows$glow',
                    boxShadow: '$glow'
                },
                
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