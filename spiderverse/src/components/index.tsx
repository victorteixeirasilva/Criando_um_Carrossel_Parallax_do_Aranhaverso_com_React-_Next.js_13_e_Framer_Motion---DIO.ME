import { IHeroData } from "@/interfaces/heroes";

interface IProps { 
    heroes: IHeroData[]; // Replace 'any' with the actual type of your hero objects
}


export default function HeroesList({ heroes }: IProps) { 
    return (
        <>
            <h1>Lista de Herois</h1>
        </>
    );
}