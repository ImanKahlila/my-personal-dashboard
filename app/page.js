import Logo from './dashboard/LogoName/logo.jsx';
import NewsCarousel from './dashboard/News/news.jsx';
import styles from './page.module.css';

export default function Dashboard() { /*export default function is just normal vanilla JS* - export lets other files use it as a function - default means this is the main thing from this file so import it w/ no curly braces*/
  return ( /*return is just the body tag in HTML*/


<div className={styles.page}>
<div className={styles.surface}>
<div className={styles.navbar}>
  <Logo />
  

  <div className={styles.navlinks}>

    <a href="#" className={styles.login}>.login</a>
    <a href="#" className={styles.logout}>.logout</a>
  </div>
    </div>

{/*Dashboard widgets go here */}

<div className={styles.news}>
  <NewsCarousel />
</div>
        {/* <Weather /> */}
        {/* <Music /> */}
      </div>
      </div>
  );
}
