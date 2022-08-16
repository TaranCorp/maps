import faker from 'faker';
import { Position } from './GoogleMap'

export class User {
    name: string;
    location: Position

    constructor() {
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }

    getMarkerContent(): string{
        return `User is in ${faker.address.cityName()}`
    } 
}