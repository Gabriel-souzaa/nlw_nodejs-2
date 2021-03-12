import {Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn} from 'typeorm';
import Image from './Image';

//Indentificar que a classe está associada a tabela.
@Entity('orphanages')
export default class Orphanage {

    //Tipo de dado gerado.
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    latitude: number;

    @Column()
    longitude: number;

    @Column()
    about: string;

    @Column()
    instructions: string;

    @Column()
    opening_hours: string;

    @Column()
    open_on_weekends: boolean;

    @OneToMany(() => Image, image => image.orphanage,{
        cascade: ['insert', 'update']
    })
    @JoinColumn({name: 'orphanage_id'})
    images: Image[];
}