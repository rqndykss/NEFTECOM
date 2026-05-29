const mapsConfig = [
    {
        id: 'map-test',
        center: [56.05954224237073, 92.93911029702112],
        zoom: 18,
        placemark: {
            coords: [56.05952840178217, 92.93878026963759],
            text: 'Комсомольский просп., 2А',
            icon: 'images/marker.png'
        }
    },

    {
        id: 'map-test-2',
        center: [56.010739, 92.841843],
        zoom: 16,
        placemark: {
            coords: [56.010739, 92.841843],
            text: 'Проспект Мира, 128',
            icon: 'images/marker-2.svg'
        }
    },

    {
        id: 'map-test-3',
        center: [56.010739, 92.841843],
        zoom: 16,
        placemark: {
            coords: [56.010739, 92.841843],
            text: 'Проспект Мира, 128',
            icon: 'images/marker-2.svg'
        }
    },

    {
        id: 'map-test-4',
        center: [56.010739, 92.841843],
        zoom: 16,
        placemark: {
            coords: [56.010739, 92.841843],
            text: 'Проспект Мира, 128',
            icon: 'images/marker-2.svg'
        }
    },

    {
        id: 'map-test-5',
        center: [56.010739, 92.841843],
        zoom: 16,
        placemark: {
            coords: [56.010739, 92.841843],
            text: 'Проспект Мира, 128',
            icon: 'images/marker-2.svg'
        }
    },

    {
        id: 'map-test-6',
        center: [56.05954224237073, 92.93911029702112],
        zoom: 18,
        placemark: {
            coords: [56.05952840178217, 92.93878026963759],
            text: 'Комсомольский просп., 2А',
            icon: 'images/marker.png'
        }
    },

    {
        id: 'map-test-7',
        center: [56.010739, 92.841843],
        zoom: 16,
        placemark: {
            coords: [56.010739, 92.841843],
            text: 'Проспект Мира, 128',
            icon: 'images/marker-2.svg'
        }
    }
];

function init() {

    mapsConfig.forEach(config => {

        const mapElement = document.getElementById(config.id);

        if (!mapElement) return;

        const map = new ymaps.Map(config.id, {
            center: config.center,
            zoom: config.zoom
        });

        const placemark = new ymaps.Placemark(
            config.placemark.coords,
            {
                balloonContentHeader: config.placemark.text
            },
            {
                iconLayout: 'default#image',
                iconImageHref: config.placemark.icon,
                iconImageSize: [74, 74],
                iconImageOffset: [-20, -50]
            }
        );

        map.geoObjects.add(placemark);

        map.controls.remove('geolocationControl');
        map.controls.remove('typeSelector');
        map.controls.remove('rulerControl');
        map.controls.remove('searchControl');
        map.controls.remove('fullscreenControl');

        map.container.fitToViewport();
    });

}


window.addEventListener('load', () => {

    if (typeof ymaps !== 'undefined') {
        ymaps.ready(init);
    } else {
        console.error('Yandex Maps API not loaded');
    }

});