
import { redirect } from 'next/navigation';

export default async function Home() {
  redirect('/dashboard');
  return null; // This line is never reached due to redirect
}
