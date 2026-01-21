'use client';

import styles from './layout.module.css';
import { useEffect, useCallback, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Layout ({ children }) {

  const [data, setData] = useState([]); 
    const {push} = useRouter();  

const onGetData = useCallback(async () => {
    try {
      const response = await axios.get('https://fooapi.com/api/movies');
      console.log('Fetched data:', response);
      setData(response.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, []);

  useEffect(() => {
    onGetData();
  }, [onGetData]);

  return (
    <div className={styles.container}>
      

      <aside className={styles.sidebar}>
        <div className={styles.logo}>
        </div>

        <nav className={styles.nav}>
          <a href="#" className={`${styles.navItem} ${styles.active}`}>
            <span className={styles.iconDot}></span>
            Daftar Film
          </a>
          
          <a href="#" className={styles.navItem}>
            <span className={styles.iconDot}></span>
            Tambah Film
          </a>
        </nav>

        <div className={styles.footerProfile}>
          N
        </div>
      </aside>


      <header className={styles.header}>
        <div className={styles.searchWrapper}>
          <input 
            type="text" 
            placeholder="Search..." 
            className={styles.searchInput} 
          />
        </div>

        <div className={styles.userAvatar}>
        </div>
      </header>

    <main className={styles.main}>
        <div className={styles.contentCard}>
        <div className={styles.tableContainer}>
        <table className={styles.myTable}>
            <thead>
                <tr>
                    <th>Nama Produk</th>
                    <th>Release Date</th>
                    <th>Rating</th>
                    <th>details</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item) => (
                    <tr key={item.id}>
                        <td>{item.title}</td>
                        <td>{item.year}</td>
                        <td>{item.rated}</td>
                      <td>
                      <div className={styles.tooltip}>details
                          <span className={styles.tooltiptext} onClick={() => push(`/axios/${item.id}`)}>go to details</span>
                      </div>
                      </td>
                        
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    </div>
  </main>
  </div>
  );
}