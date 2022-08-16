export class GoogleMap {
    private map: google.maps.Map;

    constructor() {
        const googleMapDiv = document.getElementById('googleMap') as HTMLElement;
        const mapProperties = {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        };

        this.map = new google.maps.Map(
            googleMapDiv,
            mapProperties
        );
    }
}