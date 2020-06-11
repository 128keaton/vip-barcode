import { Body, Controller, Get, Param, Post, Query, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { Printer } from './model/printer.model';
import { ApiResponse } from '@nestjs/swagger';
import { PrinterOptions } from './model/printer-options.model';
import { PrintFormOptions } from './model/print-form-options.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get()
  @Render('index')
  root() {
    return { printers: this.appService.getPrinters() };
  }

  @Get('/label')
  @Render('label')
  label(@Query('type') type: string) {
    return {type, parkedDate: new Date()}
  }

  @Post('/print')
  print(@Body() options: PrintFormOptions) {
    return this.appService.print(options.printer, options.type);
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
