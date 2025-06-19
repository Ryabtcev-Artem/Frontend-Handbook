import moon from './images/Header/moon.svg'
import sun from './images/Header/sun.svg'

export default function toggleTheme(): string {

  const currentTheme = document.documentElement.getAttribute('data-theme');
  const isDark = currentTheme === 'dark';
  if (isDark) {
    document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('user-theme', 'light');

    return sun
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('user-theme', 'dark');
    return moon
  }
}
