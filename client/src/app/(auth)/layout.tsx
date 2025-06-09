import "../globals.css";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-lg">
          {children}
        </div>
      </body>
    </html>
  );
}
