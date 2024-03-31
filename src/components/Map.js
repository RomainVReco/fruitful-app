import React, { useEffect } from 'react';

const Map = ({ address }) => {
    useEffect(() => {
        // Load Google Maps API
        const loadMapScript = () => {
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
            script.async = true;
            document.body.appendChild(script);
        };

        // Initialize Google Map
        const initMap = () => {
            const geocoder = new window.google.maps.Geocoder();
            const map = new window.google.maps.Map(document.getElementById('map'), {
                zoom: 15,
                center: { lat: 48.840903, lng: 2.297020 } // Default coordinates (Paris)
            });

            geocoder.geocode({ address: address }, (results, status) => {
                if (status === 'OK') {
                    map.setCenter(results[0].geometry.location);
                    new window.google.maps.Marker({
                        map: map,
                        position: results[0].geometry.location
                    });
                } else {
                    console.error('Geocode was not successful for the following reason: ' + status);
                }
            });
        };

        loadMapScript();

        window.initMap = initMap;

        // Clean up function
        return () => {
            window.initMap = null;
        };
    }, [address]);

    return (
        <div id="map" style={{ width: '100%', height: '400px' }}></div>
    );
}

export default Map;
