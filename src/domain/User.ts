import faker from 'faker';
import { Markable } from './GoogleMap';

export class User {
    name: string;
    location: Markable['location']

    constructor() {
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }

    getMarkContent(): string{
        return `User is in ${faker.address.cityName()}`
    } 
}