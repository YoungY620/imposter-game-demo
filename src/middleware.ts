import createMiddleware from 'next-intl/middleware';
import {locales, defaultLocale} from '@/navigation';

export default createMiddleware({
  // A list of all locales that are supported
  locales: locales,
 
  // Used when no locale matches
  defaultLocale: defaultLocale
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(zh|en)/:path*']
};