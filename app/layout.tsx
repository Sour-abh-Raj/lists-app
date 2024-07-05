import "./globals.css";

export const metadata = {
  title: "Course List App",
  description: "A simple course list app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-light-gray flex flex-col min-h-screen">
        <div className="flex-grow">{children}</div>
        <footer className="text-center text-gray-400 mt-4 p-4">
          Made with ❤️ by Sourabh Raj
        </footer>
      </body>
    </html>
  );
}
