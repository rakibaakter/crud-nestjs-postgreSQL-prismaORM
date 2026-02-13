/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Get, HttpCode, Post, Req } from '@nestjs/common';
import type { Request } from 'express';

@Controller('cat')
export class CatController {
  @Post()
  @HttpCode(204)
  create(): string {
    return 'This action adds a cat';
  }

  @Get()
  findAll(@Req() request: Request): string {
    return 'This action will return all cats';
  }

  // @Get('abcd/*')
  // findAll() {
  //   return 'This route uses a wildcard';
  // }
}
