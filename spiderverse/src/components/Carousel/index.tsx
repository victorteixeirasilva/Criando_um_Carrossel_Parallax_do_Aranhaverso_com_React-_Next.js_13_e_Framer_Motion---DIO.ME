"use client";

import { IHeroData } from "@/interfaces/heroes";
import HeroDetails from "../HeroDetails";
import styles from "./carousel.module.scss";
import { useEffect, useState } from "react";
import HeroesPicture from "../HeroesPicture";
import { AnimatePresence, motion, scale } from "framer-motion";
import { filter } from "framer-motion/client";

enum enPositon {
    FRONT = 0,
    MIDDLE = 1,
    BACK = 2
}

interface IProps {
    heroes: IHeroData[];
    activeId: string;
}

export default function Carousel({ heroes, activeId } : IProps) {
    const [visibleItem, setVisibleItems] = useState<IHeroData[] | null>(null);
    const [activeIndex, setActiveIndex] = useState<number>(
        heroes.findIndex(hero => hero.id === activeId)
    );

    useEffect(() => {
        const indexInArrayScope = ((activeIndex % heroes.length) + heroes.length) % heroes.length;
        
        const visibleItems = [...heroes, ...heroes].slice(indexInArrayScope, indexInArrayScope + 3);

        setVisibleItems(visibleItems);
    }, [heroes, activeIndex]);


    const handleChangeActiveIndex = (newDirection: number) => {
        setActiveIndex((prevActiveIndex) => prevActiveIndex + newDirection);
    }

    if (!visibleItem) {
        return null;
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.carousel}>
                    <div className={styles.wrapper} onClick={() => handleChangeActiveIndex(1)}>
                        <AnimatePresence mode="popLayout">    
                            {visibleItem?.map((item, position) => (
                                <motion.div 
                                    key={item.id} 
                                    className={styles.hero}
                                    initial={{ x: -1500, scale: 0.75}}
                                    animate={{x: 0, ...getItemStyles(position)}}
                                    exit={{ x: 0, opacity: 0, scale: 1, left:"-20%" }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <HeroesPicture hero={item} />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>

                <div className={styles.details}>
                    <HeroDetails data={heroes[0]}/>
                </div>
            </div>
        </>
    );
}

const getItemStyles = (position: enPositon) => {
    if (position === enPositon.FRONT) {
        return {
            zIndex: 3,
            filter: "blur(10px)",
            scale: 1.2,
        }
    }

    if (position === enPositon.MIDDLE) {
        return {
            zIndex: 2,
            left: 300,
            scale: 0.8,
            top: "-10%"
        }
    }

    if (position === enPositon.BACK) {
        return {
            zIndex: 1,
            filter: "blur(10px)",
            left: 160,
            top: "-20%",
            scale: 0.5,
            opacity: 0.6,
        }
    }

}

