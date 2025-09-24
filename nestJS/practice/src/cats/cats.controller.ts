import {
  Controller,
  Get,
  Patch,
  Post,
  Put,
  Delete,
  UseFilters,
  Param,
  ParseIntPipe,
  UseInterceptors,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { HttpExceptionFilter } from 'src/common/exceptions/http-exception.filter';
import { PositiveIntPipe } from 'src/common/pipes/positiveInt.pipe';
import { SuccessInterceptor } from 'src/common/interceptor/success.interceptor';

@Controller('cats')
@UseInterceptors(new SuccessInterceptor())
@UseFilters(new HttpExceptionFilter())
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getAllCats(): string {
    return 'all cats';
  }

  @Get(':id')
  getOneCat(@Param('id', ParseIntPipe, PositiveIntPipe) param: number): string {
    console.log(param);
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
