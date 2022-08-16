import faker from 'faker';
import { Position } from './GoogleMap';

export class Company {
    name: string;
    catchPhrase: string;
    location: Position;

    constructor() {
        this.name = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }
}