import './globals.css';

export const metadata = {
  title: "NJCCC Economic Impact Study",
  description: "The Economic Value of New Jersey Community Colleges",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}