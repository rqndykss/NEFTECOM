let center1 = [56.05954224237073, 92.93911029702112];
let center2 = [56.010739, 92.841843];

function init() {

    let map1 = new ymaps.Map('map-test', {
        center: center1,
        zoom: 18
    });

    let placemark1 = new ymaps.Placemark(
        [56.05952840178217,92.93878026963759],
        {
            balloonContentHeader: 'Комсомольский просп., 2А'
        },
        {
            iconLayout: 'default#image',
            iconImageHref: 'images/marker.png',
            iconImageSize: [74, 74],
            iconImageOffset: [-20, -50]
        }
    );

    map1.geoObjects.add(placemark1);

    let map2 = new ymaps.Map('map-test-2', {
        center: center2,
        zoom: 16
    });

    let placemark2 = new ymaps.Placemark(
        [56.010739, 92.841843],
        {
            balloonContentHeader: 'Проспект Мира, 128'
        },
        {
            iconLayout: 'default#image',
            iconImageHref: 'images/marker-2.svg',
            iconImageSize: [74, 74],
            iconImageOffset: [-20, -50]
        }
    );

    map2.geoObjects.add(placemark2);

    [map1, map2].forEach(map => {
        map.controls.remove('geolocationControl');
        map.controls.remove('typeSelector');
        map.controls.remove('rulerControl');
        map.controls.remove('searchControl');
        map.controls.remove('fullscreenControl');
        map2.container.fitToViewport();
    });

}

ymaps.ready(init);