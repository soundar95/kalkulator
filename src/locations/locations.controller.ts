import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateLocationDto } from './dto/createLocation.dto';
import { FilterDto } from './dto/filterDto';
import { LocationsService } from './locations.service';

@Controller('locations')
export class LocationsController {
  constructor(private locationService: LocationsService) {}
  @Get()
  getTask(@Query() filterdto: FilterDto) {
    if (Object.keys(filterdto).length) {
      return this.locationService.getLocationwithFilter(filterdto);
    } else {
      return this.locationService.getAllLocations();
    }
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
