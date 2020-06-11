import { PrinterOptions } from './printer-options.model';
import { ApiProperty } from '@nestjs/swagger';

export class Printer {
  @ApiProperty()
  name: string;

  @ApiProperty()
  isDefault: boolean;

  @ApiProperty()
  options: PrinterOptions;

  @ApiProperty()
  status: string;
}