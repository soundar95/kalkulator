import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateLocationDto } from './dto/createLocation.dto';
import { LocationsService } from './locations.service';

@Controller('locations')
export class LocationsController {
  constructor(private locationService: LocationsService) {}
  @Get()
  getAllLocations() {
    return this.locationService.getAllLocations();
  }
  @Post()
  createLocation(@Body() createLocationDto: CreateLocationDto) {
    return this.locationService.createLocation(createLocationDto);
  }

  @Get('/city')
  getLocationByCity() {
    return this.locationService.getLocationByCity();
  }
  @Get('/state')
  getLocationByState() {
    return this.locationService.getLocationByState();
  }
  @Get('/country')
  getLocationByCountry() {
    return this.locationService.getLocationByCountry();
  }
  @Get(':id')
  getLocationById(@Param('id') id: string) {
    return this.locationService.getLocationById(id);
  }
}
