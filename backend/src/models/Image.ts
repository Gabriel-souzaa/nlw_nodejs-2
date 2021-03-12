import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm';
import Orphanage from  './Orphanage';

//Indentificar que a classe está associada a tabela.
@Entity('images')
export default class Image {

    //Tipo de dado gerado.
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    path: string;

    @ManyToOne(() => Orphanage, orphanage => orphanage.images)
    @JoinColumn({name: 'orphanage_id'})
    orphanage: Orphanage;
}