"use client";

import { IHeroData } from "@/interfaces/heroes";
import HeroDetails from "../HeroDetails";
import styles from "./carousel.module.scss";
import { useEffect, useState } from "react";
import HeroesPicture from "../HeroesPicture";

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
                        {visibleItem?.map((item) => (
                            <div key={item.id} className={styles.hero}>
                                <HeroesPicture hero={item} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.details}>
                    <HeroDetails data={heroes[0]}/>
                </div>
            </div>
        </>
    );
}       

