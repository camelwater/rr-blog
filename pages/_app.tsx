import '@components/Nav/NavMenu.css';
// import '@styles/atom-one-dark.css';
// import '@styles/styles.css';
import { ThemeProvider } from 'next-themes';
import { lightTheme } from '@styles/stitches.config';
// import { ParallaxProvider } from 'react-scroll-parallax';

export default function App({ Component, pageProps }) {
    return (
        <ThemeProvider
            attribute='class'
            defaultTheme='system'
            value={{
                light: lightTheme.className,
                dark: "dark",
            }}
        >   
          <Component {...pageProps} />
        </ThemeProvider>
    );
}

