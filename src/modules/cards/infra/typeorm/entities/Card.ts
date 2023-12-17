import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('cards')
class Card {
  @PrimaryColumn()
  id: string;

  @Column()
  titulo: string;

  @Column()
  conteudo: string;

  @Column()
  lista: string;

  @CreateDateColumn()
  criado_em: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Card };
