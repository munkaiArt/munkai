"use client";
import React from "react";
import BookCard from "@/components/BookCard";

import { books } from "@/constants/mockData";
import { motion } from "framer-motion";
import styles from "../../page.module.css";
export default function Dashboard() {
  return (
    <main className={styles.main}>
      <div>
        <div className={styles.grouper}>
          <h1 className={styles.title}>MarketPlace Page</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur saepe aut, asperiores odio quibusdam rem ad eaque sunt
            voluptate eum sequi quidem impedit beatae praesentium totam incidunt
            ducimus iusto aperiam voluptates molestias, at obcaecati? Dolorum
            saepe accusamus optio illum quam natus aut asperiores autem quasi
            alias eos aperiam porro necessitatibus, hic ullam commodi nesciunt
            laboriosam tenetur. Velit deserunt maxime ad modi, impedit placeat.
            Repudiandae possimus vel molestiae ex quam eaque commodi quia harum
            ratione, iste quidem beatae nisi consectetur. Alias similique quia
            illum. Temporibus non sapiente suscipit veniam ex deserunt,
            voluptatum inventore officiis quasi ratione excepturi, explicabo,
            laborum nostrum soluta!
          </p>
        </div>
      </div>
    </main>
  );
}
