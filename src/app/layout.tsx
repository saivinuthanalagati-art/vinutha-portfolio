import "./globals.css";
import { ModeProvider } from "../lib/mode";

export const metadata = {
  title: "Sai Vinutha Nalagati | Portfolio",
  description: "Python • Full Satck • Systems • JavaScript • MySQL • Ruby",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ModeProvider>{children}</ModeProvider>
      </body>
    </html>
  );
}
