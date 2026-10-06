import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getNexusPenguim(): string {
    return 'Nexus Peguim!';
  }
}
