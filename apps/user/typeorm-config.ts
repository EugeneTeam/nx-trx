import { DataSource, DataSourceOptions } from 'typeorm';

export const connectionSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: ['dist/apps/user**/*.entity{.ts,.js}'],
  migrations: ['dist/apps/user/db/migrations/*{.ts,.js}'],
  autoLoadEntities: true,
  synchronize: false,
} as DataSourceOptions);
