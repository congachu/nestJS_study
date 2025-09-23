import {
  Controller,
  Get,
  Patch,
  Post,
  Put,
  Delete,
  UseFilters,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { HttpExceptionFilter } from 'src/http-exception.filter';

@Controller('cats')
@UseFilters(new HttpExceptionFilter())
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getAllCats(): string {
    return 'all cats';
  }

  @Get(':id')
  getOneCat(): string {
    return 'a cat';
  }

  @Post()
  createCat(): string {
    return 'create cat';
  }

  @Put(':id')
  updateCat(): string {
    return 'update cat';
  }

  @Patch(':id')
  updatePartialCat(): string {
    return 'update partial cat';
  }

  @Delete(':id')
  deleteCat(): string {
    return 'delete cat';
  }
}
