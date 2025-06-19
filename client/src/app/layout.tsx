import "./globals.css";
import { ToastContainer } from "react-toastify";
import ReduxProvider from "./ReduxProvider";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          {children}
          <ToastContainer />
        </ReduxProvider>
      </body>
    </html>
  );
}
