import { Injectable } from '@nestjs/common';
import * as printer from 'printer';
import { Printer } from './model/printer.model';
import { PrinterOptions } from './model/printer-options.model';
import * as wkhtmltopdf from 'wkhtmltopdf';
import * as fs from 'fs';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getPrinters(): Printer[] {
    return printer.getPrinters();
  }

  getPrinterOptions(forName: string): PrinterOptions | any {
    const printer = this.getPrinters().find(printer => printer.name === forName);

    if (printer && printer.options) {
      return printer.options;
    }

    return { 'error': 'No printer found for name:"' + name + '"' };
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async generatePDF(type = 'test') {
   return new Promise((resolve) => {
     wkhtmltopdf('http://localhost:3000/label?type=' + type, {
       output: '.labels/demo2.pdf',
     });

     setTimeout(() => {
       console.log('Resolving');
       resolve(true);
     }, 1000);
   })
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async testPrint(printerName: string) {
    return new Promise((resolve, reject) => {
      this.generatePDF().then(() => {
        console.log('Generated');
        fs.readFile('.labels/demo2.pdf', (err, data) => {
          printer.printDirect({
            data: data,
            type: 'PDF',
            printer: printerName,
            collate: true,
            success(jobId: number) {
              resolve(`Sent job to printer "${printerName}" with job ID "${jobId}"`);
            },
            error(err?: Error) {
              reject(`Could not job to printer "${printerName}" error "${err}"`);
            }
          })
        })
      })
    })

  }

  async print(printerName: string, type: string) {
    return new Promise((resolve, reject) => {
      this.generatePDF(type).then(() => {
        console.log('Generated');
        fs.readFile('.labels/demo2.pdf', (err, data) => {
          printer.printDirect({
            data: data,
            type: 'PDF',
            printer: printerName,
            collate: true,
            success(jobId: number) {
              resolve(`Sent job to printer "${printerName}" with job ID "${jobId}"`);
            },
            error(err?: Error) {
              reject(`Could not job to printer "${printerName}" error "${err}"`);
            }
          })
        })
      })
    })

  }
}
