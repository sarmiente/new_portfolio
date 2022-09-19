import Header from '../Layout/Header';
import { ThemeProvider } from 'next-themes';
import Footer from '../Layout/Footer';

export default function Layout({ children }) {
  return (
    <>
      <ThemeProvider attribute="class">
        <Header />
        {children}
        <Footer />
      </ThemeProvider>
    </>
  );
}
