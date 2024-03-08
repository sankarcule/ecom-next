import {auth} from '@clerk/nextjs';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default function Home() {
  const {userId} = auth();
  if (userId) {
    redirect('/products');
  }
  return (
    <main>
      <Link href="/products">Click here to go to Products</Link>
    </main>
  )
}
