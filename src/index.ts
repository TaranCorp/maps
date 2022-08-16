import { User } from './domain/User';
import { Company } from './domain/Company';
import { GoogleMap } from './domain/GoogleMap';

const user = new User();
const company = new Company();

const googleMap = new GoogleMap('googleMap');

googleMap.addMarker(user.location);

googleMap.addMarker(company.location);



