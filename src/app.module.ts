import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Locations } from './locations/entity/locations.entity';
import { LocationsModule } from './locations/locations.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '@Postgres123',
      database: 'locations',
      synchronize: true,
      logging: true,
      entities: [Locations],
      subscribers: [],
    }),
    LocationsModule,
  ],
})
export class AppModule {}
