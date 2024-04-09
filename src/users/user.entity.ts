import { Entity,AfterInsert,AfterRemove, AfterUpdate, Column, PrimaryColumn, BeforeInsert } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class User {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @BeforeInsert()
  generateId() {
    this.id = uuidv4();
  }

  @AfterInsert()
  logInsert(){
    console.log('am executed after insert haha', this.id)
  }


  @AfterUpdate()
  logUpdate(){
    console.log('am executed after update', this.id)
  }
  @AfterRemove()
  logRemove(){
    console.log('am executed after remove', this.id)
  }
}
