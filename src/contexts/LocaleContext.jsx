import { createContext, useState } from 'react';
export const LocaleContext = createContext();
export function LocaleProvider({ children }) {
  const [locale, setLocale] = useState('en');
  return <LocaleContext.Provider value={{ locale, setLocale }}>{children}</LocaleContext.Provider>;
}
