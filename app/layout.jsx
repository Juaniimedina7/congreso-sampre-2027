import { Rubik } from 'next/font/google';
import './globals.css';

const rubik = Rubik({ subsets: ['latin'], weight: ['400', '500', '700'] });

export const metadata = {
  title: 'CIMP 2027 · Congreso Internacional de Medicina Prehospitalaria | SAMPRE',
  description:
    'El congreso oficial de la Sociedad Argentina de Medicina Prehospitalaria. Trauma, reanimación, despacho, desastres y rescate. 2027, Argentina.',
  openGraph: { images: ['/logo-sampre.jpg'], locale: 'es_AR' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-AR">
      <body className={rubik.className}>{children}</body>
    </html>
  );
}
