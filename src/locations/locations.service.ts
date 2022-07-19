import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLocationDto } from './dto/createLocation.dto';
import { Locations } from './entity/locations.entity';

@Injectable()
export class LocationsService {
  constructor(
    @InjectRepository(Locations)
    private locationRepository: Repository<Locations>,
  ) {}

  async getAllLocations(): Promise<Locations[]> {
    return this.locationRepository.find();
  }

  async getLocationById(id: string): Promise<Locations | string> {
    const found = await this.locationRepository.findOne({
      where: { id },
    });
    if (!found) {
      return `${id}not found`;
    }
    return found.country;
  }

  async createLocation(
    createlocationDto: CreateLocationDto,
  ): Promise<{ message: string; locations: Locations }> {
    const { city, state, country } = createlocationDto;
    const locations = this.locationRepository.create({
      city,
      state,
      country,
    });
    await this.locationRepository.save(locations);
    return { message: 'post created successfully', locations };
  }
  async getLocationByCountry(): Promise<Locations[]> {
    return this.locationRepository.find({
      select: {
        country: true,
      },
      order: {
        country: 'ASC',
      },
    });
  }
  async getLocationByState(): Promise<Locations[]> {
    return this.locationRepository.find({
      select: {
        state: true,
      },
      order: {
        state: 'ASC',
      },
    });
  }
  async getLocationByCity(): Promise<Locations[]> {
    return this.locationRepository.find({
      select: {
        city: true,
      },
      order: {
        city: 'ASC',
      },
    });
  }
}
