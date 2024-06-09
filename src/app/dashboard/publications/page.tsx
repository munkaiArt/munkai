"use client";
import BookCard from "@/components/BookCard";

import { books } from "@/constants/mockData";
import { motion } from "framer-motion";
import styles from "../../page.module.css";
export default function Dashboard() {
  return (
    <main className={styles.main}>
      <div>
        <div className={styles.grouper}>
          <h1 className={styles.title}>ALL PUBLICATIONS</h1>
          <ul className={styles.ulGroupStyle}>
            {books.map((book, i) => (
              <motion.li
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", damping: 50, mass: 0.75 }}
                initial={{ opacity: 0, x: 200 * (i + 1) }}
                animate={{ opacity: 1, x: 0 }}
                key={i}
              >
                <a
                  href={`/dashboard/book/${book.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <BookCard
                    title={book.title}
                    coverImage={book.image}
                    description={book.description}
                  />
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
