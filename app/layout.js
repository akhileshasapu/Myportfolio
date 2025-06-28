import './globals.css';
import { Geist, Geist_Mono } from 'next/font/google';

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
});

export const metadata = {
  title: "Akhilesh Asapu | Portfolio",
  description: "Full Stack Developer | AI Enthusiast | Movie Director Aspirant",
  keywords: ["portfolio", "web developer", "akhilesh", "mern", "ai", "emotion"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
