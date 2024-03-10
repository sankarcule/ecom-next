import {auth} from '@clerk/nextjs';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default function Home() {

  redirect('/products');
  
  return (
    <main>
      <Link href="/products">Click here to go to Products</Link>
    </main>
  )
}
