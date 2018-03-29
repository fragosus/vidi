const CACHE_NAME = 'vidi-static-cache';
const API_ROUTES_START = 'api';
const LOG = true;

let urlsToCache = [
    '/index.html',
    'https://netdna.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css',
    'https://netdna.bootstrapcdn.com/font-awesome/4.5.0/fonts/fontawesome-webfont.woff2?v=4.5.0',
    'https://cdn.polyfill.io/v2/polyfill.min.js?features=Element.prototype.classList,WeakMap,MutationObserver,URL,Array.from',
    'https://maps.google.com/maps/api/js?v=3&libraries=places&key=AIzaSyCjTXR2Tmg_Ok7u4S5dl6_Rgy3br_BQfPQ',
    'https://maps.google.com/maps-api-v3/api/js/31/8b/places_impl.js',
    'https://maps.google.com/maps-api-v3/api/js/31/8b/common.js',
    'https://maps.google.com/maps-api-v3/api/js/31/8b/util.js',
    'https://maps.google.com/maps-api-v3/api/js/31/8b/controls.js',
    'https://maps.gstatic.com/mapfiles/api-3/images/powered-by-google-on-white3.png',
    'https://maps.gstatic.com/mapfiles/api-3/images/autocomplete-icons.png',
    '/bower_components/momentjs/min/moment-with-locales.js',
    '/bower_components/Leaflet.awesome-markers/dist/leaflet.awesome-markers.js',
    '/bower_components/es5-shim/es5-shim.js',
    '/bower_components/d3/d3.js',
    '/bower_components/bootstrap-table/dist/extensions/export/bootstrap-table-export.min.js',
    '/bower_components/tableExport.jquery.plugin/tableExport.min.js',
    '/bower_components/bootstrap-table/dist/extensions/filter-control/bootstrap-table-filter-control.min.js',
    '/bower_components/bootstrap-table/dist/bootstrap-table-locale-all.min.js',
    '/bower_components/bootstrap-table/dist/bootstrap-table.js',
    '/bower_components/typeahead.js/dist/typeahead.jquery.min.js',
    '/bower_components/backbone/backbone.js',
    '/bower_components/raphael/raphael.min.js',
    '/bower_components/underscore/underscore.js',
    '/bower_components/jrespond/js/jRespond.js',
    '/bower_components/mustache.js/mustache.js',
    '/bower_components/jquery/dist/jquery.min.js',
    '/bower_components/q-cluster/src/clustering.js',
    '/bower_components/Leaflet.GridLayer.GoogleMutant/Leaflet.GoogleMutant.js',
    '/bower_components/q-cluster/src/utils.js',
    '/bower_components/Leaflet.awesome-markers/dist/leaflet.awesome-markers.js',
    '/bower_components/bootstrap-colorpicker/dist/js/bootstrap-colorpicker.js',
    '/bower_components/bootstrap-select/js/bootstrap-select.js',
    '/bower_components/leaflet-plugins/layer/tile/Bing.js',
    '/bower_components/bootstrap-colorpicker/dist/css/bootstrap-colorpicker.css',
    '/bower_components/bootstrap-material-datetimepicker/js/bootstrap-material-datetimepicker.js',
    '/bower_components/Leaflet.utfgrid/dist/leaflet.utfgrid-src.js',
    '/bower_components/bootstrap-material-design/dist/js/material.js',
    '/bower_components/hogan.js/web/builds/3.0.2/hogan-3.0.2.js',
    '/bower_components/bootstrap-material-design/dist/css/bootstrap-material-design.css',
    '/bower_components/Leaflet.extra-markers/dist/js/leaflet.extra-markers.min.js',
    '/bower_components/leaflet-plugins/layer/tile/Yandex.js',
    '/bower_components/bootstrap-material-datetimepicker/css/bootstrap-material-datetimepicker.css',
    '/bower_components/bootstrap-table/dist/bootstrap-table.css',
    '/bower_components/bootstrap-material-design/dist/js/ripples.js',
    '/bower_components/bootstrap-select/dist/css/bootstrap-select.css',
    '/bower_components/leaflet-measure/dist/leaflet-measure.css',
    '/bower_components/leaflet-measure-path/leaflet-measure-path.css',
    '/bower_components/Leaflet.extra-markers/dist/css/leaflet.extra-markers.min.css',
    '/bower_components/bootstrap/dist/css/bootstrap.css',
    '/bower_components/bootstrap-material-design/dist/css/ripples.css',
    '/bower_components/q-cluster/css/q-cluster.css',
    '/bower_components/snackbarjs/dist/snackbar.css',
    '/bower_components/Leaflet.awesome-markers/dist/leaflet.awesome-markers.css',
    '/bower_components/leaflet-draw/dist/leaflet.draw.css',
    '/bower_components/leaflet.locatecontrol/dist/L.Control.Locate.css',
    '/bower_components/leaflet.toolbar/dist/leaflet.toolbar.css',
    '/bower_components/leaflet/dist/leaflet.css',
    '/bower_components/leaflet-measure/dist/leaflet-measure.js',
    '/bower_components/leaflet-measure-path/leaflet-measure-path.js',
    '/bower_components/leaflet.editable/src/Leaflet.Editable.js',
    '/bower_components/leaflet.locatecontrol/dist/L.Control.Locate.min.js',
    '/bower_components/leaflet.toolbar/dist/leaflet.toolbar-src.js',
    '/bower_components/leaflet-draw/dist/leaflet.draw-src.js',
    '/bower_components/Path.Drag.js/src/Path.Drag.js',
    '/bower_components/leaflet/dist/leaflet-src.js',
    '/bower_components/leaflet-measure/dist/images/rulers.png',
    '/bower_components/localforage/dist/localforage.min.js',
    '/js/templates.js',
    '/js/vidi.js',
    '/locale',
    '/api/config/vidi.json',
    '/fonts/fonts.css',
    '/icons/material-icons.css',
    '/js/leaflet-easybutton/easy-button.css',
    '/css/styles.css',
    '/fonts/roboto-v18-latin-300.woff2',
    '/js/point-clusterer.js',
    '/js/leaflet-easybutton/easy-button.js',
    '/js/proj4js-combined.js',
    '/js/gc2/gc2table.js',
    '/js/gc2/geocloud.js',
    '/js/jasny-bootstrap.js',
    '/js/point-clusterer.js',
    '/js/bundle.js',
    '/css/styles.css',
    '/css/jasny-bootstrap.css',
];

const urlSubstitution = [{
    requested: 'https://netdna.bootstrapcdn.com/font-awesome/4.5.0/fonts/fontawesome-webfont.ttf?v=4.5.0',
    local: '/fonts/fontawesome-webfont.ttf'
}, {
    requested: 'https://themes.googleusercontent.com/static/fonts/opensans/v8/cJZKeOuBrn4kERxqtaUH3bO3LdcAZYWl9Si6vvxL-qU.woff',
    local: '/fonts/cJZKeOuBrn4kERxqtaUH3bO3LdcAZYWl9Si6vvxL-qU.woff'
}, {
    requested: 'https://netdna.bootstrapcdn.com/font-awesome/4.5.0/fonts/fontawesome-webfont.woff?v=4.5.0',
    local: '/fonts/fontawesome-webfont.woff'
}, {
    requested: 'https://netdna.bootstrapcdn.com/font-awesome/4.5.0/fonts/fontawesome-webfont.woff2?v=4.5.0',
    local: '/fonts/fontawesome-webfont.woff2'
}, {
    requested: '/app/alexshumilov/public/favicon.ico',
    local: '/favicon.ico'
}, {
    requested: 'https://rsdemo.alexshumilov.ru/app/alexshumilov/public/favicon.ico',
    local: '/favicon.ico'
}, {
    requested: 'https://maps.google.com/maps/api/js',
    local: '/js/google-maps/index.js'
}, {
    requested: 'https://maps.google.com/maps-api-v3/api/js/31/8b/common.js',
    local: '/js/google-maps/common.js'
}, {
    requested: 'https://maps.google.com/maps-api-v3/api/js/31/8b/util.js',
    local: '/js/google-maps/util.js'
}, {
    requested: 'https://maps.google.com/maps-api-v3/api/js/31/8b/controls.js',
    local: '/js/google-maps/controls.js'
}, {
    requested: 'https://maps.google.com/maps-api-v3/api/js/31/8b/places_impl.js',
    local: '/js/google-maps/places_impl.js'
}, {
    requested: 'https://maps.google.com/maps-api-v3/api/js/31/8b/stats.js',
    local: '/js/google-maps/stats.js'
}, {
    requested: 'https://maps.googleapis.com/maps/api/js/AuthenticationService',
    local: '/js/google-maps/stats.js'
}, {
    regExp: true,
    requested: '/[\\w]*/[\\w]*/[\\w]*/#',
    local: '/index.html'
}, {
    requested: 'https://gc2.io/apps/widgets/gc2table/js/gc2table.js',
    local: '/js/gc2/gc2table.js'
}];


const normalizeTheURL = (URL) => {
    let cleanedRequestURL = URL;
    if (URL.indexOf('_=') !== -1) {
        cleanedRequestURL = URL.split("?")[0];
        if (LOG) console.log(`URL was cleaned up: ${cleanedRequestURL} (${URL})`);
    }

    urlSubstitution.map(item => {
        if (item.regExp) {
            let re = new RegExp(item.requested);
            if (re.test(URL)) {
                if (LOG) console.log(`Requested the ${cleanedRequestURL} but fetching the ${item.local} (regular expression)`);
                cleanedRequestURL = item.local;
            }
        } else if (item.requested.indexOf(cleanedRequestURL) === 0 || cleanedRequestURL.indexOf(item.requested) === 0) {
            if (LOG) console.log(`Requested the ${cleanedRequestURL} but fetching the ${item.local} (normal string rule)`);
            cleanedRequestURL = item.local;
        }
    });

    return cleanedRequestURL;
}

self.addEventListener('install', function(event) {
    if (LOG) console.log('Service worker was installed, caching specified resources');
    event.waitUntil(caches.open(CACHE_NAME).then((cache) => {
        let urlsToCacheAliased = urlsToCache;        
        for (let i = 0; i < urlsToCacheAliased.length; i++) {
            urlsToCacheAliased[i] = normalizeTheURL(urlsToCacheAliased[i]);
        }

        cache.addAll(urlsToCacheAliased).then(() => {
            if (LOG) console.log('All resources have been fetched and cached.');
        }).catch(error => {
            console.log(error);
        });
    }));
});

self.addEventListener('activate', event => {
    if (LOG) console.log('Service worker is ready to handle fetches now');
});
 
self.addEventListener('fetch', (event) => {
    if (LOG) console.log('Reacting to fetch event');
    let cleanedRequestURL = normalizeTheURL(event.request.url);
    event.respondWith(caches.match(cleanedRequestURL).then((response) => {
        if (response) {
            let apiCallDetectionRegExp = new RegExp(self.registration.scope + API_ROUTES_START);
            if (apiCallDetectionRegExp.test(cleanedRequestURL)) {
                if (LOG) console.log('API call detected', cleanedRequestURL);
                const apiRequest = new Request(cleanedRequestURL);
                return fetch(apiRequest).then(apiResponse => {
                    if (LOG) console.log('API request was performed despite the existance of cached request');
                    return cache.put(cleanedRequestURL, apiResponse.clone()).then(() => {
                        return apiResponse;
                    });
                }).catch(error => {
                    if (LOG) console.log('API request failed, using the cached request');
                    return response;
                });
            } else {
                if (LOG) console.log(`In cache ${event.request.url}`);
                return response;
            }
        } else {
            if (LOG) console.log(`Not in cache ${event.request.url}`);
            return caches.open(CACHE_NAME).then((cache) => {
                const request = new Request(cleanedRequestURL);
                return fetch(request).then(response => {
                    return cache.put(cleanedRequestURL, response.clone()).then(() => {
                        return response;
                    });
                });
            });
        }
    }));
});

function fetchAndCache(request) {
    if (LOG) console.log(`Before fetching`, request);
    fetch(request).then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }

      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(request.url, response.clone());
        return response;
      });
    }).catch((error) => {
      console.log('- Request failed:', error);
    });
}
