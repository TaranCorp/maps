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

    addMarker(customPosition: google.maps.LatLngLiteral): void {
        new google.maps.Marker({
            map: this.map,
            position: customPosition
        })
    }
}