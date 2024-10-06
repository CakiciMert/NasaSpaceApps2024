import React from 'react';
import Modal from 'react-modal';
import Globe from 'react-globe.gl'; // Assuming you are using react-globe.gl
import { texture } from 'three/examples/jsm/nodes/ShaderNode.js';

/**
 * @typedef {Object} ContinentData
 * @property {string[]} population
 * @property {string} area
 * @property {string} gdp
 * @property {number[]} speciesCount
 * @property {string[]} agriculture // Tarım arazisi verileri
 * @property {string[]} watersources
 */

/**
  @type {Object.<string, ContinentData>} */
const continentData = {
    "Africa": {
        tempature: [1.0, 1.2, 1.1, 1.1, 1.2, 1.4, 1.3, 1.4, 1.5, 1.6, 1.8, 2.0, 2.3, 2.8, 3.1, 3.2],

        population: ["1.0 billion", "1.1 billion", "1.2 billion", "1.3 billion", "1.4 billion", "1.5 billion", "1.6 billion", "1.7 billion", "1.8 billion", "1.9 billion", "2.0 billion", "2.1 billion", "2.2 billion", "2.3 billion", "2.4 billion", "2.5 billion"],
        area: "30.37 million km²",
        gdp: "$2.58 trillion",
        speciesCount: [50000, 49500, 49000, 48500, 48000, 47500, 47000, 46500, 46000, 45500, 45000, 44500, 44000, 43500, 43000, 42500], // Example species counts from 2015 to 2030
        watersources:[   ],
        UAA: ["0.45 million ha", "0.46 million ha", "0.47 million ha", "0.48 million ha", "0.49 million ha", "0.50 million ha", "0.51 million ha", "0.52 million ha", "0.53 million ha", "0.54 million ha", "0.55 million ha", "0.56 million ha", "0.57 million ha", "0.58 million ha", "0.59 million ha", "0.60 million ha"] // Tarım arazisi verileri
    },
    "Asia": {
        tempature: [1.0, 1.2, 1.1, 1.1, 1.2, 1.4, 1.3, 1.4, 1.5, 1.6, 1.8, 2.0, 2.3, 2.8, 3.1, 3.2],

        population: ["4.0 billion", "4.2 billion", "4.4 billion", "4.6 billion", "4.8 billion", "5.0 billion", "5.2 billion", "5.4 billion", "5.6 billion", "5.8 billion", "6.0 billion", "6.2 billion", "6.4 billion", "6.6 billion", "6.8 billion", "7.0 billion"],
        area: "44.58 million km²",
        gdp: "$31.58 trillion",
        watersources:[   ],
        speciesCount: [100000, 99000, 98000, 97000, 96000, 95000, 94000, 93000, 92000, 91000, 90000, 89000, 88000, 87000, 86000, 85000],
        UAA: ["1.5 million ha", "1.55 million ha", "1.6 million ha", "1.65 million ha", "1.7 million ha", "1.75 million ha", "1.8 million ha", "1.85 million ha", "1.9 million ha", "1.95 million ha", "2.0 million ha", "2.05 million ha", "2.1 million ha", "2.15 million ha", "2.2 million ha", "2.25 million ha"] // Tarım arazisi verileri
    },
    "Europe": {
        population: ["744,237,035", "746,003,108", "747,429,212", "748,564,867", "749,504,127", "749,524,044", "748,613,505", "746,964,593", "745,602,875", "745,083,824", "744,186,894", "741,786,894", "738,736,124", "723,412,412", "712,213,742", "703,321,563"],
        area: "10.18 million km²",
        tempature: [1.0, 1.2, 1.1, 1.1, 1.2, 1.4, 1.3, 1.4, 1.5, 1.6, 1.8, 2.0, 2.3, 2.8, 3.1, 3.2],
        gdp: ["73-83 mm",
        "76-86 mm",
        "79-89 mm",
        "82-92 mm",
        "90-100 mm",
        "93-103 mm",
        "96-106 mm",
        "99-109 mm",
        "102-112 mm",
        "110-130 mm",
        "113-133 mm",
        "116-136 mm",
        "119-139 mm",
        "122-142 mm",
        "120-150 mm",
        "130-160 mm"],
        watersources:[   ],
        speciesCount: [200000, 198500, 189000, 178500, 162300, 147500, 145000, 142500, 136700, 129500, 121000, 114500, 113500, 111500, 107500, 103000],
        UAA: [
            "174.3 million ha", 
            "170.2 million ha", 
            "165.1 million ha", 
            "163.3 million ha", 
            "161.5 million ha", 
            "157.9 million ha", 
            "156.7 million ha", 
            "155.6 million ha", 
            "154.5 million ha", 
            "153.4 million ha", 
            "146.2 million ha", 
            "141.8 million ha", 
            "129.1 million ha", 
            "115.9 million ha", 
            "108.7 million ha", 
            "101.5 million ha"
          ]},
    "North America": {
        tempature: [1.0, 1.2, 1.1, 1.1, 1.2, 1.4, 1.3, 1.4, 1.5, 1.6, 1.8, 2.0, 2.3, 2.8, 3.1, 3.2],

        population: ["550 million", "560 million", "570 million", "580 million", "590 million", "600 million", "610 million", "620 million", "630 million", "640 million", "650 million", "660 million", "670 million", "680 million", "690 million", "700 million"],
        area: "24.71 million km²",
        gdp: ["73-83 mm",
        "76-86 mm",
        "79-89 mm",
        "82-92 mm",
        "90-100 mm",
        "93-103 mm",
        "96-106 mm",
        "99-109 mm",
        "102-112 mm",
        "110-130 mm",
        "113-133 mm",
        "116-136 mm",
        "119-139 mm",
        "122-142 mm",
        "120-150 mm",
        "130-160 mm"],
        watersources:[   ],
        speciesCount: [142000, 141500, 141000, 140500, 140000, 139500, 139000, 138500, 138000, 137500, 137000, 136500, 136000, 135500, 135000, 134500],
        tempature: [1.0, 1.2, 1.1, 1.1, 1.2, 1.4, 1.3, 1.4, 1.5, 1.6, 1.8, 2.0, 2.3, 2.8, 3.1, 3.2],

        UAA: [
            "174.3 million ha", 
            "170.2 million ha", 
            "165.1 million ha", 
            "163.3 million ha", 
            "161.5 million ha", 
            "157.9 million ha", 
            "156.7 million ha", 
            "155.6 million ha", 
            "154.5 million ha", 
            "153.4 million ha", 
            "146.2 million ha", 
            "141.8 million ha", 
            "129.1 million ha", 
            "115.9 million ha", 
            "108.7 million ha", 
            "101.5 million ha"
          ]},
    "South America": {
        tempature: [1.0, 1.2, 1.1, 1.1, 1.2, 1.4, 1.3, 1.4, 1.5, 1.6, 1.8, 2.0, 2.3, 2.8, 3.1, 3.2],

        population: ["400 million", "410 million", "420 million", "430 million", "440 million", "450 million", "460 million", "470 million", "480 million", "490 million", "500 million", "510 million", "520 million", "530 million", "540 million", "550 million"],
        area: "17.84 million km²",
        gdp: "$3.3 trillion",
        watersources:[   ],
        speciesCount: [2000000, 1998000, 1996000, 1994000, 1992000, 1990000, 1988000, 1986000, 1984000, 1982000, 1980000, 1978000, 1976000, 1974000, 1972000, 1970000],
        UAA: ["5.0 million ha", "5.1 million ha", "5.2 million ha", "5.3 million ha", "5.4 million ha", "5.5 million ha", "5.6 million ha", "5.7 million ha", "5.8 million ha", "5.9 million ha", "6.0 million ha", "6.1 million ha", "6.2 million ha", "6.3 million ha", "6.4 million ha", "6.5 million ha"] // Tarım arazisi verileri
    },
    "Oceania": {
        tempature: [1.0, 1.2, 1.1, 1.1, 1.2, 1.4, 1.3, 1.4, 1.5, 1.6, 1.8, 2.0, 2.3, 2.8, 3.1, 3.2],

        population: ["40 million", "41 million", "42 million", "43 million", "44 million", "45 million", "46 million", "47 million", "48 million", "49 million", "50 million", "51 million", "52 million", "53 million", "54 million", "55 million"],
        area: "8.5 million km²",
        gdp: "$1.6 trillion",
        watersources:[   ],
        speciesCount: [700000, 699500, 699000, 698500, 698000, 697500, 697000, 696500, 696000, 695500, 695000, 694500, 694000, 693500, 693000, 692500],
        UAA: ["0.3 million ha", "0.32 million ha", "0.34 million ha", "0.36 million ha", "0.38 million ha", "0.4 million ha", "0.42 million ha", "0.44 million ha", "0.46 million ha", "0.48 million ha", "0.5 million ha", "0.52 million ha", "0.54 million ha", "0.56 million ha", "0.58 million ha", "0.6 million ha"] // Tarım arazisi verileri
    },
    "Antarctica": {
        tempature: [1.0, 1.2, 1.1, 1.1, 1.2, 1.4, 1.3, 1.4, 1.5, 1.6, 1.8, 2.0, 2.3, 2.8, 3.1, 3.2],

        population: ["1,000", "1,050", "1,100", "1,150", "1,200", "1,250", "1,300", "1,350", "1,400", "1,450", "1,500", "1,550", "1,600", "1,650", "1,700", "1,750"],
        area: "14.0 million km²",
        gdp: "N/A",
        watersources:[   ],
        speciesCount: [500, 505, 510, 515, 520, 525, 530, 535, 540, 545, 550, 555, 560, 565, 570, 575],
        UAA: ["N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A"] // Tarım arazisi verileri
    }
};

export default function GlobeComponent() {
    const globeEl = React.useRef();
    const [globeData, setGlobeData] = React.useState({
        countries: {
            features: []
        }
    });
    const [loading, setLoading] = React.useState(true);
    const [modalIsOpen, setModalIsOpen] = React.useState(false);
    const [selectedContinent, setSelectedContinent] = React.useState(null);
    const [sliderValue, setSliderValue] = React.useState(9);

    const continentCenters = [
        { name: "Africa", lat: 1.5, lng: 17.3 },
        { name: "Asia", lat: 34.0, lng: 100.6 },
        { name: "Europe", lat: 54.5, lng: 15.3 },
        { name: "North America", lat: 54.5, lng: -105.3 },
        { name: "South America", lat: -15.6, lng: -56.1 },
        { name: "Oceania", lat: -22.0, lng: 133.0 },
        { name: "Antarctica", lat: -82.9, lng: 135.0 }
    ];

    React.useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await fetch(
                    "https://raw.githubusercontent.com/iamanas20/geojson/main/map11.geojson"
                );
                const data = await res.json();
                setGlobeData({
                    countries: data[0]
                });
            } catch (error) {
                console.error(error.message);
            }
            setLoading(false);
        };

        fetchData();
    }, []);

    React.useEffect(() => {
        if (globeEl.current) {
            globeEl.current.controls().autoRotate = true;
            globeEl.current.controls().autoRotateSpeed = 0.5;
            globeEl.current.controls().enableZoom = true;
        }
    }, [globeData]);

    const handleLabelClick = (continent) => {
        setSelectedContinent(continent);
        setModalIsOpen(true);
        const center = continentCenters.find(c => c.name === continent);
        if (center && globeEl.current) {
            globeEl.current.pointOfView({ lat: center.lat, lng: center.lng, altitude: 2 }, 1000);
        }
    };

    const handleSliderChange = (event) => {
        setSliderValue(event.target.value);
    };

    return (
        <div>
            {loading && <div>Loading...</div>}
            {!loading && (
                <>
                    <Globe
                        ref={globeEl}
                        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg" // Change globe image
                        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
                        labelsData={continentCenters}
                        labelLat={(d) => d.lat}
                        labelLng={(d) => d.lng}
                        labelText={(d) => d.name}
                        labelSize={(d) => 1.5}
                        labelDotRadius={(d) => 0.5}
                        labelColor={() => "rgba(255, 0, 0, 0.75)"} // Change label color to red
                        labelResolution={2}
                        labelLabel={(d) => {
                            return `
                                <div style="background: rgba(255, 255, 255, 0.8); padding: 5px; border-radius: 5px;">
                                    <b>${d.name}</b>
                                </div>
                            `;
                        }}
                        onLabelClick={(label) => handleLabelClick(label.name)}
                        labelDotAnimationDuration={300} // Noktaların animasyon süresi
                        labelDotAnimationEasing="ease-in-out" // Animasyon tipi
                        labelDotHoverColor={() => "blue"} // Change hover color to blue
                        labelDotHoverScale={1.5} // Üzerine gelindiğinde nokta ölçeği
                    />
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={() => setModalIsOpen(false)}
                        style={{
                            overlay: {
                                backgroundColor: 'rgba(0, 0, 0, 0.7)', // Change overlay color to black
                            },
                            content: {
                                top: '50%',
                                left: '50%',
                                right: 'auto',
                                bottom: 'auto',
                                marginRight: '-50%',
                                transform: 'translate(-50%, -50%)',
                                borderRadius: '10px',
                                padding: '20px',
                                backgroundColor: 'white', // Change modal content background to white
                                color: 'black', // Change modal text color to black
                                transition: 'opacity 0.5s ease',
                            },
                        }}
                    >
                        {selectedContinent && (
                            <div>
                                <h2 style={{ border: '2px solid white', padding: '10px' ,textAlign:'center'}}>{selectedContinent}</h2>
                                <p style={{ border: '2px solid white', padding: '10px',textAlign:'center' }}>
                                    Population: {continentData[selectedContinent].population[sliderValue]}
                                </p>
                                <p style={{ border: '2px solid red', padding: '10px' ,textAlign:'center'}}> Tempature*: {continentData[selectedContinent].tempature[sliderValue]}</p>
                            
                                <p style={{ border: '2px solid white', padding: '10px' ,textAlign:'center'}}>Area: {continentData[selectedContinent].area}</p>
                                <p style={{ border: '2px solid white', padding: '10px' ,textAlign:'center'}}>Sea Level Rise: {continentData[selectedContinent].gdp[sliderValue]}</p>
                                <p style={{ border: '2px solid white', padding: '10px' ,textAlign:'center'}}>Species Count: {continentData[selectedContinent].speciesCount[sliderValue]}</p>
                                <p style={{ border: '2px solid white', padding: '10px' ,textAlign:'center'}}>Utilised Agricultural Area: {continentData[selectedContinent].UAA[sliderValue]}</p>
                                
                                <p style={{ border: '2px solid red', padding: '10px' ,textAlign:'center'}}>European average near-surface temperature anomalies (relative to preindustrial period)</p>
                                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                                <input
                                    type="range"
                                    min="0"
                                    max={continentData[selectedContinent].population.length - 1}
                                    value={sliderValue}
                                    onChange={handleSliderChange}
                                />
                            </div>
                                <p style={{textAlign:'center'}}>Year: {parseInt(2015) + parseInt(sliderValue)}</p>
                                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                                <button 
                                    onClick={() => setModalIsOpen(false)}
                                    style={{
                                        padding: '10px 20px', // Increase padding for larger button
                                        fontSize: '16px', // Increase font size
                                        borderRadius: '5px', // Optional: Add border radius
                                        backgroundColor: '#007BFF', // Optional: Change background color
                                        color: 'white', // Optional: Change text color
                                        border: 'none', // Optional: Remove border
                                        cursor: 'pointer', // Optional: Change cursor on hover
                                    }}
                                >
                                    Close
                                </button>
                            </div>
                            </div>
                        )}
                    </Modal>
                </>
            )}
        </div>
    );
}