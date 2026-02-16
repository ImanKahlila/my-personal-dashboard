import styles from './logo.module.css';

export default function LogoText(){
    return (
        <div className={styles.logoText}>
            <span className={styles.dmsansfirst}>.93</span>
            <span className={styles.dmsansmiddle}>&</span>
            <span className={styles.dmsanslast}>company</span>

            
        </div>
    )
}