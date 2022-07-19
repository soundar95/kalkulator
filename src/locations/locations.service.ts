import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLocationDto } from './dto/createLocation.dto';
import { FilterDto } from './dto/filterDto';
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

  async getLocationwithFilter(filterdto: FilterDto): Promise<Locations | any> {
    const { state, city, country } = filterdto;
    let locations = await this.getAllLocations();
    if (state) {
      locations = locations.filter((a) => a.state === state);
    }
    if (city) {
      locations = locations.filter((a) => a.city === city);
    }
    if (country) {
      locations = locations.filter((a) => a.country === country);
    }
    return locations;
  }

  async getLocationById(id: string): Promise<Locations | string> {
    const found = await this.locationRepository.findOne({
      where: { id },
    });
    if (!found) {
      return `${id}not found`;
    }
    return found;
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
    });
  }
  async getLocationByCity(): Promise<Locations[]> {
    return this.locationRepository.find({
      select: {
        city: true,
      },
    });
  }
}
