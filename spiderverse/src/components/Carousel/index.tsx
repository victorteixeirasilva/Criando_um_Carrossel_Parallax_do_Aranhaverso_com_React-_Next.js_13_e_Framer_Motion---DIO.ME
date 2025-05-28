"use client";

import { IHeroData } from "@/interfaces/heroes";
import HeroDetails from "../HeroDetails";
import styles from "./carousel.module.scss";
import { useEffect, useState } from "react";

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


    return (
        <>
            <div className={styles.container}>
                <div className={styles.carousel}>
                    <div className={styles.wrapper}>Lista com os herois</div>
                </div>

                <div className={styles.details}>
                    <HeroDetails data={heroes[0]}/>
                </div>
            </div>
        </>
    );
}       

