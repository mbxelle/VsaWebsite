import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext.jsx';
import { LocaleContext } from '../contexts/LocaleContext.jsx';

export default function NavBar() {
  const { dark, setDark } = useContext(ThemeContext);
  const { locale, setLocale } = useContext(LocaleContext);

  const links = [
    { path: '/', label: { en: 'Home', vi: 'Trang Chủ' }},
    { path: '/events', label: { en: 'Events', vi: 'Sự Kiện' }},
    { path: '/memories', label: { en: 'Memories', vi: 'Kỷ Niệm' }},
    { path: '/team', label: { en: 'Team', vi: 'Ban Điều Hành' }},
  ];

  return (
    <nav className="sticky top-0 bg-red-700 dark:bg-gray-800 p-4 flex flex-wrap justify-between items-center">
      <div className="font-bold text-white text-xl">VSA</div>
      <ul className="flex flex-wrap items-center space-x-4">
        {links.map(({ path, label }) => (
          <li key={path}>
            <NavLink
              to={path}
              className="text-white hover:underline"
            >
              {label[locale]}
            </NavLink>
          </li>
        ))}
        <li>
          <button
            onClick={() => setLocale(locale === 'en' ? 'vi' : 'en')}
            className="text-white border px-2 py-1 rounded"
          >
            {locale === 'en' ? 'VI' : 'EN'}
          </button>
        </li>
        <li>
          <button
            onClick={() => setDark(!dark)}
            className="text-white text-xl"
          >
            {dark ? '☀️' : '🌙'}
          </button>
        </li>
      </ul>
    </nav>
  );
}
