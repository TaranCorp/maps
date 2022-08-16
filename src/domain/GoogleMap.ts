export class GoogleMap {
    private map: google.maps.Map;

    constructor(elementId: string) {
        const mapProperties = {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        };

        this.map = new google.maps.Map(
            document.getElementById(elementId) as HTMLElement,
            mapProperties
        );
    }

    addMarker(markable: Markable): void {
        const marker = new google.maps.Marker({
            map: this.map,
            position: markable.location
        })

        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: markable.getMarkContent()
            });
            
            infoWindow.open(this.map, marker)
        })
    }
}

export interface Markable {
    location: {
        lat: number;
        lng: number;
    }
    getMarkContent(): string;
    color?: string;
}