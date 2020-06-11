import { ApiProperty } from '@nestjs/swagger';

export class PrinterOptions {
  @ApiProperty()
  copies: string;

  @ApiProperty()
  'device-uri': string;

  @ApiProperty()
  finishings: string;

  @ApiProperty()
  'job-cancel-after': string;

  @ApiProperty()
  'job-hold-until': string;

  @ApiProperty()
  'job-priority': string;

  @ApiProperty()
  'job-sheets': string;

  @ApiProperty()
  'marker-change-time': Date;

  @ApiProperty()
  'number-up': string;

  @ApiProperty()
  'printer-commands': string;

  @ApiProperty()
  'printer-info': string;

  @ApiProperty()
  'printer-is-accepting-jobs': string;

  @ApiProperty()
  'printer-is-shared': string;

  @ApiProperty()
  'printer-is-temporary': string;

  @ApiProperty()
  'printer-location': string;

  @ApiProperty()
  'printer-make-and-model': string;

  @ApiProperty()
  'printer-state': string;

  @ApiProperty()
  'printer-state-change-time': Date;

  @ApiProperty()
  'printer-state-reasons': string;

  @ApiProperty()
  'printer-type': string;

  @ApiProperty()
  'printer-uri-supported': string;
}
