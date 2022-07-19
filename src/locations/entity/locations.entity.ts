import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity({ name: 'locations' })
export class Locations {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  city: string;
  @Column()
  state: string;
  @Column()
  country: string;
}
