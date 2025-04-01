import { redirect } from 'next/navigation';
import { ReactNode } from 'react';
import { auth } from '../config';

export const ProtectedRoute = async ({ children }: { children: ReactNode }) => {
  const user = auth.currentUser;

  if (!user) {
    console.log('User is not authenticated, redirecting to signin');
    redirect('/signin');
  }

  return <>{children}</>;
};