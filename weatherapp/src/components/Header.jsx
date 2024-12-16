import styles from "./header.module.css";
export default function Header() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.divContainer}>
        <button className={styles.bbcName}>BBC</button>
        <div>
          <button>Sign in</button>
        </div>
      </div>

      <span>🔔</span>
      <div className={styles.nav}>
        <button>Home</button>
        <button>News</button>
        <button>Weather</button>
        <button>Iplayer</button>
        <button>Sounds</button>
        <button>Bitesize</button>
      </div>
    </div>
  );
}

{
  /* 
      <nav>
        <ul>
          <li>Home</li>
          <li>News</li>
          <li>Weather</li>
          <li>Iplayer</li>
          <li>Sounds</li>
          <li>Bitesize</li>
        </ul>
      </nav> */
}
