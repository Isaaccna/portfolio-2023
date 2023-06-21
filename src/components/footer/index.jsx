import './styles.css';
import { getYear } from 'date-fns';

export function Footer () {
  const currentYear = getYear(new Date());

  return (
    <footer>
<p>Isaac <span>Andrade</span> - {currentYear}</p>
    </footer>
  )
}