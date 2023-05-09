// The value for 'accessToken' begins with 'pk...'
mapboxgl.accessToken =
  "pk.eyJ1Ijoib21rYXIyNjUiLCJhIjoiY2xlcW5lbm5hMG56ZDN1bzE1YWN0MzNkcSJ9.cCFrcF40FFfue9TNpCYj6w";
const map = new mapboxgl.Map({
  container: "map",
  // Replace YOUR_STYLE_URL with your style URL.
  style: "mapbox://styles/mapbox/navigation-night-v1",
  center: [77.219656, 28.632161],
  zoom: 10,
});

const directions = new MapboxDirections({
  accessToken: mapboxgl.accessToken,
  unit: "metric",
  profile: "mapbox/driving",
  alternatives: false,
  geometries: "geojson",
  controls: { instructions: true },
  flyTo: false,
});

map.addControl(directions, "top-right");
map.scrollZoom.enable();

const clear_5 = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.13276, 28.67441] },
      properties: { name: "PUNJABI BAGH", cluster: 3 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.22498, 28.63089] },
      properties: { name: "BARAKHAMBA ROAD", cluster: 3 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.06488, 28.62499] },
      properties: { name: "UTTAM NAGAR", cluster: 3 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.26018, 28.57835] },
      properties: { name: "SUNLIGHT COLONY", cluster: 3 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.31178, 28.59818] },
      properties: { name: "NEW ASHOK NAGAR", cluster: 3 },
    },
  ],
};
const clear_4 = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.20418, 28.52989] },
      properties: { name: "MALVIYA NAGAR", cluster: 2 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.29373, 28.65335] },
      properties: { name: "ANANDVIHAR", cluster: 2 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.26532, 28.53067] },
      properties: { name: "GOVIND PURI", cluster: 2 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.2676, 28.56234] },
      properties: { name: "NEW FRIENDS COLONY", cluster: 2 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.2242, 28.7072] },
      properties: { name: "TIMARPUR", cluster: 2 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.17376, 28.66004] },
      properties: { name: "ANAND PARBAT", cluster: 2 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.1159, 28.70236] },
      properties: { name: "ROHINI SOUTH", cluster: 2 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.19735, 28.73664] },
      properties: { name: "BURARI", cluster: 2 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.19606, 28.60337] },
      properties: { name: "CHANAKYAPURI", cluster: 2 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.20856, 28.70024] },
      properties: { name: "MUKHERJI NAGAR", cluster: 2 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.06081, 28.70965] },
      properties: { name: "AMAN VIHAR", cluster: 2 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.24093, 28.55914] },
      properties: { name: "AMAR COLONY", cluster: 2 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.16418, 28.72579] },
      properties: { name: "MAHENDRA PARK", cluster: 2 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.21428, 28.49893] },
      properties: { name: "NEB SARAI", cluster: 2 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.11933, 28.69784] },
      properties: { name: "RANI BAGH", cluster: 2 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.21432, 28.63] },
      properties: { name: "CONNAUGHT PLACE", cluster: 2 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.07856, 28.70265] },
      properties: { name: "SULTAN PURI", cluster: 2 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.2215, 28.68851] },
      properties: { name: "CIVIL LINES", cluster: 2 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.10143, 28.63896] },
      properties: { name: "TILAK NAGAR", cluster: 2 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.14659, 28.66013] },
      properties: { name: "MOTI NAGAR", cluster: 2 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [76.98269, 28.60975] },
      properties: { name: "NAJAFGARH", cluster: 2 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.14412, 28.68901] },
      properties: { name: "SUBHASH PLACE", cluster: 2 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.20774, 28.66917] },
      properties: { name: "SUBZIMANDI", cluster: 2 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.20652, 28.69251] },
      properties: { name: "MAURICE NAGAR", cluster: 2 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.20325, 28.63857] },
      properties: { name: "MANDIR MARG", cluster: 2 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.21117, 28.59827] },
      properties: { name: "TUGLAK ROAD", cluster: 2 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.31306, 28.65597] },
      properties: { name: "ANANDVIHAR", cluster: 2 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.1562, 28.75841] },
      properties: { name: "SWARUP NAGAR", cluster: 2 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.06698, 28.68199] },
      properties: { name: "NANGLOI", cluster: 2 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.10115, 28.67112] },
      properties: { name: "PASCHIM VIHAR", cluster: 2 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.24722, 28.6274] },
      properties: { name: "I.P. ESTATE", cluster: 2 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.11332, 28.65761] },
      properties: { name: "KHYALA", cluster: 2 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.2839, 28.64359] },
      properties: { name: "JAGATPURI", cluster: 2 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.30612, 28.62543] },
      properties: { name: "MADHUVIHAR", cluster: 2 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.15232, 28.53486] },
      properties: { name: "VASANT KUNJ NORTH", cluster: 2 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.30817, 28.69853] },
      properties: { name: "NANDNAGARI", cluster: 2 },
    },
  ],
};
const clear_3 = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.2492, 28.53632] },
      properties: { name: "CHITRANJAN PARK", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.086, 28.61268] },
      properties: { name: "DABRI", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.23608, 28.64361] },
      properties: { name: "CHANDNI MAHAL", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.19369, 28.70257] },
      properties: { name: "MODEL TOWN", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.22618, 28.66645] },
      properties: { name: "KASHMERE GATE", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.06618, 28.6091] },
      properties: { name: "BINDAPUR", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.12757, 28.71793] },
      properties: { name: "PRASHANT VIHAR", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.179, 28.57051] },
      properties: { name: "SOUTH CAMPUS", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.17532, 28.70984] },
      properties: { name: "ADRASH NAGAR", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.30265, 28.62038] },
      properties: { name: "PANDAV NAGAR", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.08879, 28.67965] },
      properties: { name: "MIANWALI NAGAR", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.21754, 28.64981] },
      properties: { name: "NABI KARIM", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.11992, 28.63969] },
      properties: { name: "RAJOURI GARDEN", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.17487, 28.73358] },
      properties: { name: "JAHANGIR PURI", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.29224, 28.66879] },
      properties: { name: "FARASH BAZAR", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.18053, 28.64784] },
      properties: { name: "PARSHAD NAGAR", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.12084, 28.62657] },
      properties: { name: "MAYA PURI", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.16574, 28.74286] },
      properties: { name: "BHALSWA DAIRY", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.13777, 28.63356] },
      properties: { name: "NARAINA", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.18285, 28.63505] },
      properties: { name: "RAJINDER NAGAR", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.15712, 28.71681] },
      properties: { name: "SHALIMAR BAGH", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.15977, 28.68423] },
      properties: { name: "KESHAV PURAM", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.20846, 28.66539] },
      properties: { name: "BARA HINDU RAO", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.17432, 28.69245] },
      properties: { name: "ASHOK VIHAR", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.09946, 28.60935] },
      properties: { name: "HARI NAGAR", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.20931, 28.64583] },
      properties: { name: "PAHARGANJ", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.30357, 28.49385] },
      properties: { name: "BADAR PUR", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.23372, 28.60415] },
      properties: { name: "PRASHANT VIHAR", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.29235, 28.56207] },
      properties: { name: "JAMIA NAGAR", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.2315, 28.66254] },
      properties: { name: "KASHMERE GATE", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.29099, 28.50165] },
      properties: { name: "PULPRAHLAD PUR", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.22548, 28.64335] },
      properties: { name: "HAUZQAZI", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.06744, 28.62046] },
      properties: { name: "BINDAPUR", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.23537, 28.61821] },
      properties: { name: "TILAK MARG", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.1196, 28.65151] },
      properties: { name: "RAJOURI GARDEN", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.15868, 28.64751] },
      properties: { name: "RANJIT NAGAR", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.03599, 28.65375] },
      properties: { name: "RANHOLA", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.29526, 28.63852] },
      properties: { name: "PREETVIHAR", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.20847, 28.54939] },
      properties: { name: "HAUZ KHAS", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.22514, 28.5759] },
      properties: { name: "KOTALA MUBARAK PUR", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.19326, 28.65258] },
      properties: { name: "D.B.G ROAD", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.15822, 28.65237] },
      properties: { name: "PATEL NAGAR", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.08849, 28.85321] },
      properties: { name: "NARELA", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.21366, 28.62473] },
      properties: { name: "PARLIAMENT STREET", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.0717, 28.665] },
      properties: { name: "NIHAL VIHAR", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.17851, 28.68062] },
      properties: { name: "BHARAT NAGAR", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.30612, 28.62543] },
      properties: { name: "MANDAWALI", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.14605, 28.70045] },
      properties: { name: "MAURYA ENCLAVE", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.08188, 28.62863] },
      properties: { name: "JANAK PURI", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.20265, 28.68499] },
      properties: { name: "ROOP NAGAR", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.11815, 28.70894] },
      properties: { name: "ROHINI NORTH", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.26855, 28.6743] },
      properties: { name: "SEELAMPUR", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.29856, 28.68277] },
      properties: { name: "MANSAROVAR PARK", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.31849, 28.70603] },
      properties: { name: "HARSH VIHAR", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.2644, 28.70128] },
      properties: { name: "BHAJANPURI", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.26207, 28.67202] },
      properties: { name: "NEW USMANPUR", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.25611, 28.71128] },
      properties: { name: "SONIA VIHAR", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.2745, 28.73284] },
      properties: { name: "KARAWAL NAGAR", cluster: 4 },
    },
  ],
};
const clear_2 = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.30617, 28.52299] },
      properties: { name: "SARITA VIHAR", cluster: 1 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.08644, 28.59139] },
      properties: { name: "SAGARPUR", cluster: 1 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.23362, 28.65284] },
      properties: { name: "JAMA MASJID", cluster: 1 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.22621, 28.64295] },
      properties: { name: "KAMLA MARKET", cluster: 1 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.20489, 28.56934] },
      properties: { name: "SAFDARJUNG ENCLAVE", cluster: 1 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.25743, 28.53321] },
      properties: { name: "KALKAJI", cluster: 1 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.25644, 28.54728] },
      properties: { name: "KALKAJI", cluster: 1 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.24047, 28.58744] },
      properties: { name: "LODHI COLONY", cluster: 1 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.14501, 28.63077] },
      properties: { name: "INDERPURI", cluster: 1 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.27462, 28.52678] },
      properties: { name: "OKHLA", cluster: 1 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.14219, 28.72516] },
      properties: { name: "SAMAYPURBADLI", cluster: 1 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.10186, 28.71003] },
      properties: { name: "VIJAY VIHAR", cluster: 1 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.15236, 28.53492] },
      properties: { name: "VASANT KUNJ SOUTH", cluster: 1 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.24417, 28.59238] },
      properties: { name: "H. N. DIN", cluster: 1 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.24062, 28.6419] },
      properties: { name: "DARYA GANJ", cluster: 1 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.09163, 28.69664] },
      properties: { name: "MANGOLPURI", cluster: 1 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.30662, 28.66676] },
      properties: { name: "VIVEKVIHAR", cluster: 1 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.21885, 28.65557] },
      properties: { name: "LAHORI GATE", cluster: 1 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.27642, 28.6554] },
      properties: { name: "GEETA COLONY", cluster: 1 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.08293, 28.58809] },
      properties: { name: "PALAM VILLAGE", cluster: 1 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.21115, 28.65399] },
      properties: { name: "SADAR BAZAR", cluster: 1 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.19913, 28.57449] },
      properties: { name: "SAROJINI NAGAR", cluster: 1 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.0872, 28.52958] },
      properties: { name: "KAPASHERA", cluster: 1 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.31708, 28.61363] },
      properties: { name: "KALYANPURI", cluster: 1 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.24052, 28.56843] },
      properties: { name: "LAJPAT NAGAR", cluster: 1 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.28072, 28.66699] },
      properties: { name: "KRISHNA NAGAR", cluster: 1 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.23278, 28.5541] },
      properties: { name: "GREATER KAILASH", cluster: 1 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.06834, 28.62997] },
      properties: { name: "VIKAS PURI", cluster: 1 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.23337, 28.56468] },
      properties: { name: "DEFENCE COLONY", cluster: 1 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.28196, 28.54046] },
      properties: { name: "SARITA VIHAR", cluster: 1 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.19855, 28.55848] },
      properties: { name: "SAFDARJUNG ENCLAVE", cluster: 1 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.24299, 28.50957] },
      properties: { name: "SANGAM VIHAR", cluster: 1 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.30367, 28.60733] },
      properties: { name: "MAYURVIHAR", cluster: 1 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.26733, 28.65955] },
      properties: { name: "GANDHI NAGAR", cluster: 1 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.22715, 28.52882] },
      properties: { name: "SAKET", cluster: 1 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.2703, 28.63775] },
      properties: { name: "SHAKARPUR", cluster: 1 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.13509, 28.64053] },
      properties: { name: "KIRTI NAGAR", cluster: 1 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.121, 28.73043] },
      properties: { name: "KN KATJU MARG", cluster: 1 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.16933, 28.55797] },
      properties: { name: "VASANT VIHAR", cluster: 1 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.1932, 28.65256] },
      properties: { name: "KAROL BAGH", cluster: 1 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.18368, 28.66837] },
      properties: { name: "SARAI ROHILLA", cluster: 1 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.19262, 28.67005] },
      properties: { name: "GULABIBAGH", cluster: 1 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.33267, 28.62486] },
      properties: { name: "GHAZIPUR", cluster: 1 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.31653, 28.67811] },
      properties: { name: "SEEMAPURI", cluster: 1 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.28518, 28.6742] },
      properties: { name: "SHAHDARA", cluster: 1 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.2561, 28.71113] },
      properties: { name: "KHAJURIKHAS", cluster: 1 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.2917, 28.69612] },
      properties: { name: "JYOTI NAGAR", cluster: 1 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.27297, 28.67909] },
      properties: { name: "ZAFRABAD", cluster: 1 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.27479, 28.67341] },
      properties: { name: "WELCOME", cluster: 1 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.316, 28.68496] },
      properties: { name: "G.T.B. ENCLAVE", cluster: 1 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.28085, 28.70225] },
      properties: { name: "GOKULPURI", cluster: 1 },
    },
  ],
};
const clear_1 = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.00361, 28.72582] },
      properties: { name: "KANJHAWALA", cluster: 0 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.01564, 28.60369] },
      properties: { name: "DWARKA NORTH", cluster: 0 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.15114, 28.46549] },
      properties: { name: "FATEHPUR BERI", cluster: 0 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [76.91555, 28.59572] },
      properties: { name: "JAFFARPUR KALAN", cluster: 0 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.13913, 28.79903] },
      properties: { name: "ALIPUR", cluster: 0 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.04254, 28.79654] },
      properties: { name: "BAWANA", cluster: 0 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.05179, 28.72449] },
      properties: { name: "BEGUM PUR", cluster: 0 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.06666, 28.57837] },
      properties: { name: "DWARKA SOUTH", cluster: 0 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.07894, 28.74766] },
      properties: { name: "SHAHBAD DAIRY", cluster: 0 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.05849, 28.56411] },
      properties: { name: "DWARKA SEC-23", cluster: 0 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.0228, 28.80659] },
      properties: { name: "BAWANA", cluster: 0 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.12437, 28.59872] },
      properties: { name: "DELHI CANTT", cluster: 0 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [76.96681, 28.62867] },
      properties: { name: "BABA HARI DAS NAGAR", cluster: 0 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [76.99466, 28.58691] },
      properties: { name: "CHHAWLA", cluster: 0 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [77.18019, 28.52149] },
      properties: { name: "MEHRAULI", cluster: 0 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [76.96085, 28.67042] },
      properties: { name: "MUNDKA", cluster: 0 },
    },
  ],
};

const obstacle_5 = turf.buffer(clear_5, 0.5, { units: "kilometers" });
const obstacle_4 = turf.buffer(clear_4, 0.4, { units: "kilometers" });
const obstacle_3 = turf.buffer(clear_3, 0.3, { units: "kilometers" });
const obstacle_2 = turf.buffer(clear_2, 0.2, { units: "kilometers" });
const obstacle_1 = turf.buffer(clear_1, 0.1, { units: "kilometers" });

let bbox = [0, 0, 0, 0];
let polygon = turf.bboxPolygon(bbox);

map.on("load", () => {
  map.addLayer({
    id: "clear_5",
    type: "fill",
    source: {
      type: "geojson",
      data: obstacle_5,
    },
    layout: {},
    paint: {
      "fill-color": "#fa0505",
      "fill-opacity": 0.8,
    },
  });
  map.addLayer({
    id: "clear_4",
    type: "fill",
    source: {
      type: "geojson",
      data: obstacle_4,
    },
    layout: {},
    paint: {
      "fill-color": "#fa9805",
      "fill-opacity": 0.8,
    },
  });
  map.addLayer({
    id: "clear_3",
    type: "fill",
    source: {
      type: "geojson",
      data: obstacle_3,
    },
    layout: {},
    paint: {
      "fill-color": "#f2fa05",
      "fill-opacity": 0.8,
    },
  });
  map.addLayer({
    id: "clear_2",
    type: "fill",
    source: {
      type: "geojson",
      data: obstacle_2,
    },
    layout: {},
    paint: {
      "fill-color": "#05f2fa",
      "fill-opacity": 0.8,
    },
  });
  map.addLayer({
    id: "clear_1",
    type: "fill",
    source: {
      type: "geojson",
      data: obstacle_1,
    },
    layout: {},
    paint: {
      "fill-color": "#05fa53",
      "fill-opacity": 0.8,
    },
  });

  map.addSource("theRoute", {
    type: "geojson",
    data: {
      type: "Feature",
    },
  });

  map.addLayer({
    id: "theRoute",
    type: "line",
    source: "theRoute",
    layout: {
      "line-join": "round",
      "line-cap": "round",
    },
    paint: {
      "line-color": "#cccccc",
      "line-opacity": 0.5,
      "line-width": 13,
      "line-blur": 0.5,
    },
  });

  // Source and layer for the bounding box
  map.addSource("theBox", {
    type: "geojson",
    data: {
      type: "Feature",
    },
  });
  map.addLayer({
    id: "theBox",
    type: "fill",
    source: "theBox",
    layout: {},
    paint: {
      "fill-color": "#FFC300",
      "fill-opacity": 0.5,
      "fill-outline-color": "#FFC300",
    },
  });
});

let counter = 0;
let dataCounter = 0;
let hit_obstacle;
const maxAttempts = 100;
let emoji = "";
let collision = "";
let detail = "";
const reports = document.getElementById("reports");

function addCard(id, element, clear, detail) {
  const card = document.createElement("div");
  card.className = "card";
  // Add the response to the individual report created above
  const heading = document.createElement("div");
  // Set the class type based on clear value
  heading.className =
    clear === true ? "card-header route-found" : "card-header obstacle-found";
  heading.innerHTML =
    id === 0
      ? `${emoji} This is ${collision}`
      : `${emoji} Route ${id} ${collision}`;

  const details = document.createElement("div");
  details.className = "card-details";
  details.innerHTML = `This ${detail}.`;

  card.appendChild(heading);
  card.appendChild(details);
  element.insertBefore(card, element.firstChild);
}

function noRoutes(element) {
  const card = document.createElement("div");
  card.className = "card";
  // Add the response to the individual report created above
  const heading = document.createElement("div");
  heading.className = "card-header no-route";
  emoji = "🛑";
  heading.innerHTML = `${emoji} Ending search.`;

  // Add details to the individual report
  const details = document.createElement("div");
  details.className = "card-details";
  details.innerHTML = `No Safe route found in ${counter} tries.`;

  card.appendChild(heading);
  card.appendChild(details);
  element.insertBefore(card, element.firstChild);
}

directions.on("clear", () => {
  map.setLayoutProperty("theRoute", "visibility", "none");
  map.setLayoutProperty("theBox", "visibility", "none");

  counter = 0;
  reports.innerHTML = "";
});

directions.on("route", (event) => {
  // Hide the route and box by setting the opacity to zero
  map.setLayoutProperty("theRoute", "visibility", "none");
  map.setLayoutProperty("theBox", "visibility", "none");

  if (counter >= maxAttempts) {
    noRoutes(reports);
    counter = 0;
    dataCounter = 0;
  } else {
    for (const route of event.route) {
      map.setLayoutProperty("theRoute", "visibility", "visible");
      map.setLayoutProperty("theBox", "visibility", "visible");

      const routeLine = polyline.toGeoJSON(route.geometry);

      bbox = turf.bbox(routeLine);
      polygon = turf.bboxPolygon(bbox);

      map.getSource("theRoute").setData(routeLine);

      map.getSource("theBox").setData(polygon);

      let clear = false;

      switch (dataCounter) {
        case 0:
          hit_obstacle = "all dangerous areas";
          if (turf.booleanDisjoint(obstacle_5, routeLine)) {
            if (turf.booleanDisjoint(obstacle_4, routeLine)) {
              if (turf.booleanDisjoint(obstacle_3, routeLine)) {
                if (turf.booleanDisjoint(obstacle_2, routeLine)) {
                  clear = turf.booleanDisjoint(obstacle_1, routeLine);
                }
              }
            }
          }
          console.log(clear);
          break;
        case 1:
          hit_obstacle = "all dangerous areas upto level 2";
          if (turf.booleanDisjoint(obstacle_5, routeLine)) {
            if (turf.booleanDisjoint(obstacle_4, routeLine)) {
              if (turf.booleanDisjoint(obstacle_3, routeLine)) {
                clear = turf.booleanDisjoint(obstacle_2, routeLine);
              }
            }
          }
          console.log(clear);
          break;
        case 2:
          hit_obstacle = "all dangerous areas upto level 3";
          if (turf.booleanDisjoint(obstacle_5, routeLine)) {
            if (turf.booleanDisjoint(obstacle_4, routeLine)) {
              clear = turf.booleanDisjoint(obstacle_3, routeLine);
            }
          }
          console.log(clear);
          break;
        case 3:
          hit_obstacle = "all dangerous areas upto level 4";

          if (turf.booleanDisjoint(obstacle_5, routeLine)) {
            clear = turf.booleanDisjoint(obstacle_4, routeLine);
          }
          console.log(clear);
          break;
        case 4:
          hit_obstacle = "only the most dangerous areas";
          clear = turf.booleanDisjoint(obstacle_5, routeLine);
          console.log(clear);

          break;
      }

      console.log(clear);

      if (clear === true) {
        collision = "the safest possible route !";
        detail = `takes ${(route.duration / 60).toFixed(
          0
        )} minutes and avoids ${hit_obstacle}`;
        emoji = "✔️";
        map.setPaintProperty("theRoute", "line-color", "#74c476");
        map.setLayoutProperty("theBox", "visibility", "none");
        counter = 0;
        dataCounter = 0;
        console.log(hit_obstacle);
      } else {
        counter = counter + 1;
        dataCounter = Math.floor(counter / 20);
        console.log(dataCounter);
        polygon = turf.transformScale(polygon, counter * 0.025);
        bbox = turf.bbox(polygon);
        collision = "is bad.";
        detail = `takes ${(route.duration / 60).toFixed(
          0
        )} minutes and hits some possibly dangerous areas`;
        emoji = "⚠️";
        map.setPaintProperty("theRoute", "line-color", "#de2d26");

        const randomWaypoint = turf.randomPoint(1, { bbox: bbox });
        directions.setWaypoint(
          0,
          randomWaypoint["features"][0].geometry.coordinates
        );
      }
      addCard(counter, reports, clear, detail);
    }
  }
});
