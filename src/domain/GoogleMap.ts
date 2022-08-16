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

    addMarker(customPosition: Position, markerContent: string): void {
        const marker = new google.maps.Marker({
            map: this.map,
            position: customPosition
        })

        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: markerContent
            });
            
            infoWindow.open(this.map, marker)
        })
    }
}

export interface Position {
    lat: number;
    lng: number;
}