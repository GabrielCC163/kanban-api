import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateCards1631050614089 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'cards',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'titulo',
            type: 'varchar',
          },
          {
            name: 'conteudo',
            type: 'text',
          },
          {
            name: 'lista',
            type: 'varchar',
          },
          {
            name: 'criado_em',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('cards');
  }
}
