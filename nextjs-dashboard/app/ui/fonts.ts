// next/font 대한 정보를 가져오는 코드입니다.
import { Inter, Lobster, Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });
export const lobster = Lobster({ weight: '400', subsets: ['latin'] });
export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});
