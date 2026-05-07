const LOCATION = {
    center: [92.852572, 56.010563],
    zoom: 12
};

async function initMap() {
    await ymaps3.ready;

    const {
        YMap,
        YMapDefaultSchemeLayer,
        YMapDefaultFeaturesLayer,
        YMapMarker
    } = ymaps3;

    const map = new YMap(
        document.getElementById('map-test'),
        {
            location: LOCATION
        }
    );

    map.addChild(new YMapDefaultSchemeLayer());

    map.addChild(new YMapDefaultFeaturesLayer());

    const markerElement = document.createElement('div');
    markerElement.className = 'marker';
    markerElement.innerHTML = '⛽';

    const marker = new YMapMarker(
        {
            coordinates: [92.852572, 56.010563]
        },
        markerElement
    );

    map.addChild(marker);
}

initMap();
