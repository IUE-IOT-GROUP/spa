import { Device } from "./device";
import {Fog} from "./fog";

export class Place {
    id: string;
    name: string;
    parent_id: string;
    places: Place[];
    devices: Device[];
    fogs: Fog[];
}
