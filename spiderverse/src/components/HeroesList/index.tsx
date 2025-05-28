"use client";

import { spidermanFont } from "@/fonts";
import { IHeroData } from "@/interfaces/heroes";
import styles from "./heroesList.module.scss"
import HeroesPicture from "../HeroesPicture";
import { motion } from "framer-motion";
import Link from "next/link";

interface IProps { 
    heroes: IHeroData[]; // Replace 'any' with the actual type of your hero objects
}


export default function HeroesList({ heroes }: IProps) { 
    return (
        <>
            <motion.h1 
                className={`${spidermanFont.className} ${styles.title}`} 
                initial={{ opacity: 0}}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 2 }}
            >
                Personagens
            </motion.h1>
            <motion.section 
                className={styles.heroes}
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2}}
            >
                {heroes.map((hero) => (
                    <motion.div 
                        key={hero.id} 
                        className={`${styles.imageContainer} ${styles[hero.id]}`}
                        whileHover={{ scale: 1.3 }}
                        whileTap={{ scale: 0.8}}
                        transition={{ duration: 0.5 }}
                    >
                        <Link href={`/hero/${hero.id}`}>
                            <HeroesPicture hero={hero} />
                        </Link>
                    </motion.div>
                ) )}
            </motion.section>
        </>
    );
}