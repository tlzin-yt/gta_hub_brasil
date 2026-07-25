import './globals.css';

export const metadata = {
  title: 'GTA Hub Brasil',
  description: 'Portal completo sobre GTA Online',
};

export default function RootLayout({
  children,
}, {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
