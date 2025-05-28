import { spidermanFont } from "@/fonts";
import { IHeroData } from "@/interfaces/heroes";
import styles from "./heroesList.module.scss"
import HeroesPicture from "../HeroesPicture";

interface IProps { 
    heroes: IHeroData[]; // Replace 'any' with the actual type of your hero objects
}


export default function HeroesList({ heroes }: IProps) { 
    return (
        <>
            <h1 className={`${spidermanFont.className} ${styles.title}`}>Personagens</h1>
            <section className={styles.heroes}>
                {heroes.map((hero) => (
                    <div key={hero.id} className={`${styles.imageContainer} ${styles[hero.id]}`}>
                        <HeroesPicture hero={hero} />
                    </div>
                ) )}
            </section>
        </>
    );
}