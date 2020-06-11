import { Controller, Get, Param, Query, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { Printer } from './model/printer.model';
import { ApiResponse } from '@nestjs/swagger';
import { PrinterOptions } from './model/printer-options.model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get()
  @Render('index')
  root(@Query('type') type: string) {
    return { message: 'Hello world!', type, parkedDate: Date.now() };
  }

  @Get('printers')
  @ApiResponse({ type: Printer, isArray: true, status: 200 })
  getPrinters(): Printer[] {
    return this.appService.getPrinters();
  }

  @Get('printerOptions/:name')
  @ApiResponse({ type: PrinterOptions, status: 200 })
  getPrinterOptions(@Param('name') name: string) {
   return this.appService.getPrinterOptions(name);
  }

  @Get('/testGenerate')
  async testGenerate() {
    return this.appService.generatePDF();
  }

  @Get('/testPrint/:name')
  async testPrint(@Param('name') name: string) {
    return this.appService.testPrint(name);
  }

}
