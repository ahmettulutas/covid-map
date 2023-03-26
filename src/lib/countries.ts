export type CountryWithCode = {
	code: string,
	lat: number,
	long: number,
	name: string,
	flag: string
}

const	countriesLocation:CountryWithCode[] = [
  {
    code: "AD",
    lat: 42.546245,
    long: 1.601554,
    name: "Andorra",
    flag: "🇦🇩"
  },
  {
    code: "AE",
    lat: 23.424076,
    long: 53.847818,
    name: "UAE",
    flag: "🇦🇪"
  },
  {
    code: "AF",
    lat: 33.93911,
    long: 67.709953,
    name: "Afghanistan",
    flag: "🇦🇫"
  },
  {
    code: "AG",
    lat: 17.060816,
    long: -61.796428,
    name: "Antigua and Barbuda",
    flag: "🇦🇬"
  },
  {
    code: "AI",
    lat: 18.220554,
    long: -63.068615,
    name: "Anguilla",
    flag: "🇦🇮"
  },
  {
    code: "AL",
    lat: 41.153332,
    long: 20.168331,
    name: "Albania",
    flag: "🇦🇱"
  },
  {
    code: "AM",
    lat: 40.069099,
    long: 45.038189,
    name: "Armenia",
    flag: "🇦🇲"
  },
  {
    code: "AN",
    lat: 12.226079,
    long: -69.060087,
    name: "Netherlands Antilles",
    flag: "🇦🇲"
  },
  {
    code: "AO",
    lat: -11.202692,
    long: 17.873887,
    name: "Angola",
    flag: "🇦🇴"
  },
  {
    code: "AQ",
    lat: -75.250973,
    long: -0.071389,
    name: "Antarctica",
    flag: "🇦🇶"
  },
  {
    code: "AR",
    lat: -38.416097,
    long: -63.616672,
    name: "Argentina",
    flag: "🇦🇷"
  },
  {
    code: "AS",
    lat: -14.270972,
    long: -170.132217,
    name: "American Samoa",
    flag: "🇦🇸"
  },
  {
    code: "AT",
    lat: 47.516231,
    long: 14.550072,
    name: "Austria",
    flag: "🇦🇹"
  },
  {
    code: "AU",
    lat: -25.274398,
    long: 133.775136,
    name: "Australia",
    flag: "🇦🇺"
  },
  {
    code: "AW",
    lat: 12.52111,
    long: -69.968338,
    name: "Aruba",
    flag: "🇦🇼"
  },
  {
    code: "AZ",
    lat: 40.143105,
    long: 47.576927,
    name: "Azerbaijan",
    flag: "🇦🇿"
  },
  {
    code: "BA",
    lat: 43.915886,
    long: 17.679076,
    name: "Bosnia and Herzegovina",
    flag: "🇧🇦"
  },
  {
    code: "BB",
    lat: 13.193887,
    long: -59.543198,
    name: "Barbados",
    flag: "🇧🇧"
  },
  {
    code: "BD",
    lat: 23.684994,
    long: 90.356331,
    name: "Bangladesh",
    flag: "🇧🇩"
  },
  {
    code: "BE",
    lat: 50.503887,
    long: 4.469936,
    name: "Belgium",
    flag: "🇧🇪"
  },
  {
    code: "BF",
    lat: 12.238333,
    long: -1.561593,
    name: "Burkina Faso",
    flag: "🇧🇫"
  },
  {
    code: "BG",
    lat: 42.733883,
    long: 25.48583,
    name: "Bulgaria",
    flag: "🇧🇬"
  },
  {
    code: "BH",
    lat: 25.930414,
    long: 50.637772,
    name: "Bahrain",
    flag: "🇧🇭"
  },
  {
    code: "BI",
    lat: -3.373056,
    long: 29.918886,
    name: "Burundi",
    flag: "🇧🇮"
  },
  {
    code: "BJ",
    lat: 9.30769,
    long: 2.315834,
    name: "Benin",
    flag: "🇧🇯"
  },
  {
    code: "BM",
    lat: 32.321384,
    long: -64.75737,
    name: "Bermuda",
    flag: "🇧🇲"
  },
  {
    code: "BN",
    lat: 4.535277,
    long: 114.727669,
    name: "Brunei",
    flag: "🇧🇳"
  },
  {
    code: "BO",
    lat: -16.290154,
    long: -63.588653,
    name: "Bolivia",
    flag: "🇧🇴"
  },
  {
    code: "BR",
    lat: -14.235004,
    long: -51.92528,
    name: "Brazil",
    flag: "🇧🇷"
  },
  {
    code: "BS",
    lat: 25.03428,
    long: -77.39628,
    name: "Bahamas",
    flag: "🇧🇸"
  },
  {
    code: "BT",
    lat: 27.514162,
    long: 90.433601,
    name: "Bhutan",
    flag: "🇧🇹"
  },
  {
    code: "BV",
    lat: -54.423199,
    long: 3.413194,
    name: "Bouvet Island",
    flag: "🇧🇻"
  },
  {
    code: "BW",
    lat: -22.328474,
    long: 24.684866,
    name: "Botswana",
    flag: "🇧🇼"
  },
  {
    code: "BY",
    lat: 53.709807,
    long: 27.953389,
    name: "Belarus",
    flag: "🇧🇾"
  },
  {
    code: "BZ",
    lat: 17.189877,
    long: -88.49765,
    name: "Belize",
    flag: "🇧🇿"
  },
  {
    code: "CA",
    lat: 56.130366,
    long: -106.346771,
    name: "Canada",
    flag: "🇨🇦"
  },
  {
    code: "CC",
    lat: -12.164165,
    long: 96.870956,
    name: "Cocos [Keeling] Islands",
    flag: "🇨🇨"
  },
  {
    code: "CD",
    lat: -4.038333,
    long: 21.758664,
    name: "DRC",
    flag: "🇨🇩"
  },
  {
    code: "CF",
    lat: 6.611111,
    long: 20.939444,
    name: "Central African Republic",
    flag: "🇨🇫"
  },
  {
    code: "CG",
    lat: -0.228021,
    long: 15.827659,
    name: "Congo",
    flag: "🇨🇬"
  },
  {
    code: "CH",
    lat: 46.818188,
    long: 8.227512,
    name: "Switzerland",
    flag: "🇨🇭"
  },
  {
    code: "CI",
    lat: 7.539989,
    long: -5.54708,
    name: "Ivory Coast",
    flag: "🇨🇮"
  },
  {
    code: "CK",
    lat: -21.236736,
    long: -159.777671,
    name: "Cook Islands",
    flag: "🇨🇰"
  },
  {
    code: "CL",
    lat: -35.675147,
    long: -71.542969,
    name: "Chile",
    flag: "🇨🇱"
  },
  {
    code: "CM",
    lat: 7.369722,
    long: 12.354722,
    name: "Cameroon",
    flag: "🇨🇲"
  },
  {
    code: "CN",
    lat: 35.86166,
    long: 104.195397,
    name: "China",
    flag: "🇨🇳"
  },
  {
    code: "CO",
    lat: 4.570868,
    long: -74.297333,
    name: "Colombia",
    flag: "🇨🇴"
  },
  {
    code: "CR",
    lat: 9.748917,
    long: -83.753428,
    name: "Costa Rica",
    flag: "🇨🇷"
  },
  {
    code: "CU",
    lat: 21.521757,
    long: -77.781167,
    name: "Cuba",
    flag: "🇨🇺"
  },
  {
    code: "CV",
    lat: 16.002082,
    long: -24.013197,
    name: "Cape Verde",
    flag: "🇨🇻"
  },
  {
    code: "CX",
    lat: -10.447525,
    long: 105.690449,
    name: "Christmas Island",
    flag: "🇨🇽"
  },
  {
    code: "CY",
    lat: 35.126413,
    long: 33.429859,
    name: "Cyprus",
    flag: "🇨🇾"
  },
  {
    code: "CZ",
    lat: 49.817492,
    long: 15.472962,
    name: "Czechia",
    flag: "🇨🇿"
  },
  {
    code: "DE",
    lat: 51.165691,
    long: 10.451526,
    name: "Germany",
    flag: "🇩🇪"
  },
  {
    code: "DJ",
    lat: 11.825138,
    long: 42.590275,
    name: "Djibouti",
    flag: "🇩🇯"
  },
  {
    code: "DK",
    lat: 56.26392,
    long: 9.501785,
    name: "Denmark",
    flag: "🇩🇰"
  },
  {
    code: "DM",
    lat: 15.414999,
    long: -61.370976,
    name: "Dominica",
    flag: "🇩🇲"
  },
  {
    code: "DO",
    lat: 18.735693,
    long: -70.162651,
    name: "Dominican Republic",
    flag: "🇩🇴"
  },
  {
    code: "DZ",
    lat: 28.033886,
    long: 1.659626,
    name: "Algeria",
    flag: "🇩🇿"
  },
  {
    code: "EC",
    lat: -1.831239,
    long: -78.183406,
    name: "Ecuador",
    flag: "🇪🇨"
  },
  {
    code: "EE",
    lat: 58.595272,
    long: 25.013607,
    name: "Estonia",
    flag: "🇪🇪"
  },
  {
    code: "EG",
    lat: 26.820553,
    long: 30.802498,
    name: "Egypt",
    flag: "🇪🇬"
  },
  {
    code: "EH",
    lat: 24.215527,
    long: -12.885834,
    name: "Western Sahara",
    flag: "🇪🇭"
  },
  {
    code: "ER",
    lat: 15.179384,
    long: 39.782334,
    name: "Eritrea",
    flag: "🇪🇷"
  },
  {
    code: "ES",
    lat: 40.463667,
    long: -3.74922,
    name: "Spain",
    flag: "🇪🇸"
  },
  {
    code: "ET",
    lat: 9.145,
    long: 40.489673,
    name: "Ethiopia",
    flag: "🇪🇹"
  },
  {
    code: "FI",
    lat: 61.92411,
    long: 25.748151,
    name: "Finland",
    flag: "🇫🇮"
  },
  {
    code: "FJ",
    lat: -16.578193,
    long: 179.414413,
    name: "Fiji",
    flag: "🇫🇯"
  },
  {
    code: "FK",
    lat: -51.796253,
    long: -59.523613,
    name: "Falkland Islands [Islas Malvinas]",
    flag: "🇫🇰"
  },
  {
    code: "FM",
    lat: 7.425554,
    long: 150.550812,
    name: "Micronesia",
    flag: "🇫🇲"
  },
  {
    code: "FO",
    lat: 61.892635,
    long: -6.911806,
    name: "Faeroe Islands",
    flag: "🇫🇴"
  },
  {
    code: "FR",
    lat: 46.227638,
    long: 2.213749,
    name: "France",
    flag: "🇫🇷"
  },
  {
    code: "GA",
    lat: -0.803689,
    long: 11.609444,
    name: "Gabon",
    flag: "🇬🇦"
  },
  {
    code: "GB",
    lat: 55.378051,
    long: -3.435973,
    name: "UK",
    flag: "🇬🇧"
  },
  {
    code: "GD",
    lat: 12.262776,
    long: -61.604171,
    name: "Grenada",
    flag: "🇬🇩"
  },
  {
    code: "GE",
    lat: 42.315407,
    long: 43.356892,
    name: "Georgia",
    flag: "🇬🇪"
  },
  {
    code: "GF",
    lat: 3.933889,
    long: -53.125782,
    name: "French Guiana",
    flag: "🇬🇫"
  },
  {
    code: "GG",
    lat: 49.465691,
    long: -2.585278,
    name: "Guernsey",
    flag: "🇬🇬"
  },
  {
    code: "GH",
    lat: 7.946527,
    long: -1.023194,
    name: "Ghana",
    flag: "🇬🇭"
  },
  {
    code: "GI",
    lat: 36.137741,
    long: -5.345374,
    name: "Gibraltar",
    flag: "🇬🇮"
  },
  {
    code: "GL",
    lat: 71.706936,
    long: -42.604303,
    name: "Greenland",
    flag: "🇬🇱"
  },
  {
    code: "GM",
    lat: 13.443182,
    long: -15.310139,
    name: "Gambia",
    flag: "🇬🇲"
  },
  {
    code: "GN",
    lat: 9.945587,
    long: -9.696645,
    name: "Guinea",
    flag: "🇬🇳"
  },
  {
    code: "GP",
    lat: 16.995971,
    long: -62.067641,
    name: "Guadeloupe",
    flag: "🇬🇵"
  },
  {
    code: "GQ",
    lat: 1.650801,
    long: 10.267895,
    name: "Equatorial Guinea",
    flag: "🇬🇶"
  },
  {
    code: "GR",
    lat: 39.074208,
    long: 21.824312,
    name: "Greece",
    flag: "🇬🇷"
  },
  {
    code: "GS",
    lat: -54.429579,
    long: -36.587909,
    name: "South Georgia and the South Sandwich Islands",
    flag: "🇬🇸"
  },
  {
    code: "GT",
    lat: 15.783471,
    long: -90.230759,
    name: "Guatemala",
    flag: "🇬🇹"
  },
  {
    code: "GU",
    lat: 13.444304,
    long: 144.793731,
    name: "Guam",
    flag: "🇬🇺"
  },
  {
    code: "GW",
    lat: 11.803749,
    long: -15.180413,
    name: "Guinea-Bissau",
    flag: "🇬🇼"
  },
  {
    code: "GY",
    lat: 4.860416,
    long: -58.93018,
    name: "Guyana",
    flag: "🇬🇾"
  },
  {
    code: "GZ",
    lat: 31.354676,
    long: 34.308825,
    name: "Gaza Strip",
    flag: "🇬🇾"
  },
  {
    code: "HK",
    lat: 22.396428,
    long: 114.109497,
    name: "Hong Kong",
    flag: "🇭🇰"
  },
  {
    code: "HM",
    lat: -53.08181,
    long: 73.504158,
    name: "Heard Island and McDonald Islands",
    flag: "🇭🇲"
  },
  {
    code: "HN",
    lat: 15.199999,
    long: -86.241905,
    name: "Honduras",
    flag: "🇭🇳"
  },
  {
    code: "HR",
    lat: 45.1,
    long: 15.2,
    name: "Croatia",
    flag: "🇭🇷"
  },
  {
    code: "HT",
    lat: 18.971187,
    long: -72.285215,
    name: "Haiti",
    flag: "🇭🇹"
  },
  {
    code: "HU",
    lat: 47.162494,
    long: 19.503304,
    name: "Hungary",
    flag: "🇭🇺"
  },
  {
    code: "ID",
    lat: -0.789275,
    long: 113.921327,
    name: "Indonesia",
    flag: "🇮🇩"
  },
  {
    code: "IE",
    lat: 53.41291,
    long: -8.24389,
    name: "Ireland",
    flag: "🇮🇪"
  },
  {
    code: "IL",
    lat: 31.046051,
    long: 34.851612,
    name: "Israel",
    flag: "🇮🇱"
  },
  {
    code: "IM",
    lat: 54.236107,
    long: -4.548056,
    name: "Isle of Man",
    flag: "🇮🇲"
  },
  {
    code: "IN",
    lat: 20.593684,
    long: 78.96288,
    name: "India",
    flag: "🇮🇳"
  },
  {
    code: "IO",
    lat: -6.343194,
    long: 71.876519,
    name: "British Indian Ocean Territory",
    flag: "🇮🇴"
  },
  {
    code: "IQ",
    lat: 33.223191,
    long: 43.679291,
    name: "Iraq",
    flag: "🇮🇶"
  },
  {
    code: "IR",
    lat: 32.427908,
    long: 53.688046,
    name: "Iran",
    flag: "🇮🇷"
  },
  {
    code: "IS",
    lat: 64.963051,
    long: -19.020835,
    name: "Iceland",
    flag: "🇮🇸"
  },
  {
    code: "IT",
    lat: 41.87194,
    long: 12.56738,
    name: "Italy",
    flag: "🇮🇹"
  },
  {
    code: "JE",
    lat: 49.214439,
    long: -2.13125,
    name: "Jersey",
    flag: "🇯🇪"
  },
  {
    code: "JM",
    lat: 18.109581,
    long: -77.297508,
    name: "Jamaica",
    flag: "🇯🇲"
  },
  {
    code: "JO",
    lat: 30.585164,
    long: 36.238414,
    name: "Jordan",
    flag: "🇯🇴"
  },
  {
    code: "JP",
    lat: 36.204824,
    long: 138.252924,
    name: "Japan",
    flag: "🇯🇵"
  },
  {
    code: "DP",
    lat: 35,
    long: 140,
    name: "Diamond Princess",
    flag: "🛳️"
  },
  {
    code: "KE",
    lat: -0.023559,
    long: 37.906193,
    name: "Kenya",
    flag: "🇰🇪"
  },
  {
    code: "KG",
    lat: 41.20438,
    long: 74.766098,
    name: "Kyrgyzstan",
    flag: "🇰🇬"
  },
  {
    code: "KH",
    lat: 12.565679,
    long: 104.990963,
    name: "Cambodia",
    flag: "🇰🇭"
  },
  {
    code: "KI",
    lat: -3.370417,
    long: -168.734039,
    name: "Kiribati",
    flag: "🇰🇮"
  },
  {
    code: "KM",
    lat: -11.875001,
    long: 43.872219,
    name: "Comoros",
    flag: "🇰🇲"
  },
  {
    code: "KN",
    lat: 17.357822,
    long: -62.782998,
    name: "Saint Kitts and Nevis",
    flag: "🇰🇳"
  },
  {
    code: "KP",
    lat: 40.339852,
    long: 127.510093,
    name: "N. Korea",
    flag: "🇰🇵"
  },
  {
    code: "KR",
    lat: 35.907757,
    long: 127.766922,
    name: "S. Korea",
    flag: "🇰🇷"
  },
  {
    code: "KW",
    lat: 29.31166,
    long: 47.481766,
    name: "Kuwait",
    flag: "🇰🇼"
  },
  {
    code: "KY",
    lat: 19.513469,
    long: -80.566956,
    name: "Cayman Islands",
    flag: "🇰🇾"
  },
  {
    code: "KZ",
    lat: 48.019573,
    long: 66.923684,
    name: "Kazakhstan",
    flag: "🇰🇿"
  },
  {
    code: "LA",
    lat: 19.85627,
    long: 102.495496,
    name: "Laos",
    flag: "🇱🇦"
  },
  {
    code: "LB",
    lat: 33.854721,
    long: 35.862285,
    name: "Lebanon",
    flag: "🇱🇧"
  },
  {
    code: "LC",
    lat: 13.909444,
    long: -60.978893,
    name: "Saint Lucia",
    flag: "🇱🇨"
  },
  {
    code: "LI",
    lat: 47.166,
    long: 9.555373,
    name: "Liechtenstein",
    flag: "🇱🇮"
  },
  {
    code: "LK",
    lat: 7.873054,
    long: 80.771797,
    name: "Sri Lanka",
    flag: "🇱🇰"
  },
  {
    code: "LR",
    lat: 6.428055,
    long: -9.429499,
    name: "Liberia",
    flag: "🇱🇷"
  },
  {
    code: "LS",
    lat: -29.609988,
    long: 28.233608,
    name: "Lesotho",
    flag: "🇱🇸"
  },
  {
    code: "LT",
    lat: 55.169438,
    long: 23.881275,
    name: "Lithuania",
    flag: "🇱🇹"
  },
  {
    code: "LU",
    lat: 49.815273,
    long: 6.129583,
    name: "Luxembourg",
    flag: "🇱🇺"
  },
  {
    code: "LV",
    lat: 56.879635,
    long: 24.603189,
    name: "Latvia",
    flag: "🇱🇻"
  },
  {
    code: "LY",
    lat: 26.3351,
    long: 17.228331,
    name: "Libya",
    flag: "🇱🇾"
  },
  {
    code: "MA",
    lat: 31.791702,
    long: -7.09262,
    name: "Morocco",
    flag: "🇲🇦"
  },
  {
    code: "MC",
    lat: 43.750298,
    long: 7.412841,
    name: "Monaco",
    flag: "🇲🇨"
  },
  {
    code: "MD",
    lat: 47.411631,
    long: 28.369885,
    name: "Moldova",
    flag: "🇲🇩"
  },
  {
    code: "ME",
    lat: 42.708678,
    long: 19.37439,
    name: "Montenegro",
    flag: "🇲🇪"
  },
  {
    code: "MG",
    lat: -18.766947,
    long: 46.869107,
    name: "Madagascar",
    flag: "🇲🇬"
  },
  {
    code: "MH",
    lat: 7.131474,
    long: 171.184478,
    name: "Marshall Islands",
    flag: "🇲🇭"
  },
  {
    code: "MK",
    lat: 41.608635,
    long: 21.745275,
    name: "North Macedonia",
    flag: "🇲🇰"
  },
  {
    code: "ML",
    lat: 17.570692,
    long: -3.996166,
    name: "Mali",
    flag: "🇲🇱"
  },
  {
    code: "MM",
    lat: 21.913965,
    long: 95.956223,
    name: "Myanmar [Burma]",
    flag: "🇲🇲"
  },
  {
    code: "MN",
    lat: 46.862496,
    long: 103.846656,
    name: "Mongolia",
    flag: "🇲🇳"
  },
  {
    code: "MO",
    lat: 22.198745,
    long: 113.543873,
    name: "Macao",
    flag: "🇲🇴"
  },
  {
    code: "MP",
    lat: 17.33083,
    long: 145.38469,
    name: "Northern Mariana Islands",
    flag: "🇲🇵"
  },
  {
    code: "MQ",
    lat: 14.641528,
    long: -61.024174,
    name: "Martinique",
    flag: "🇲🇶"
  },
  {
    code: "MR",
    lat: 21.00789,
    long: -10.940835,
    name: "Mauritania",
    flag: "🇲🇷"
  },
  {
    code: "MS",
    lat: 16.742498,
    long: -62.187366,
    name: "Montserrat",
    flag: "🇲🇸"
  },
  {
    code: "MT",
    lat: 35.937496,
    long: 14.375416,
    name: "Malta",
    flag: "🇲🇹"
  },
  {
    code: "MU",
    lat: -20.348404,
    long: 57.552152,
    name: "Mauritius",
    flag: "🇲🇺"
  },
  {
    code: "MV",
    lat: 3.202778,
    long: 73.22068,
    name: "Maldives",
    flag: "🇲🇻"
  },
  {
    code: "MW",
    lat: -13.254308,
    long: 34.301525,
    name: "Malawi",
    flag: "🇲🇼"
  },
  {
    code: "MX",
    lat: 23.634501,
    long: -102.552784,
    name: "Mexico",
    flag: "🇲🇽"
  },
  {
    code: "MY",
    lat: 4.210484,
    long: 101.975766,
    name: "Malaysia",
    flag: "🇲🇾"
  },
  {
    code: "MZ",
    lat: -18.665695,
    long: 35.529562,
    name: "Mozambique",
    flag: "🇲🇿"
  },
  {
    code: "NA",
    lat: -22.95764,
    long: 18.49041,
    name: "Namibia",
    flag: "🇳🇦"
  },
  {
    code: "NC",
    lat: -20.904305,
    long: 165.618042,
    name: "New Caledonia",
    flag: "🇳🇨"
  },
  {
    code: "NE",
    lat: 17.607789,
    long: 8.081666,
    name: "Niger",
    flag: "🇳🇪"
  },
  {
    code: "NF",
    lat: -29.040835,
    long: 167.954712,
    name: "Norfolk Island",
    flag: "🇳🇫"
  },
  {
    code: "NG",
    lat: 9.081999,
    long: 8.675277,
    name: "Nigeria",
    flag: "🇳🇬"
  },
  {
    code: "NI",
    lat: 12.865416,
    long: -85.207229,
    name: "Nicaragua",
    flag: "🇳🇮"
  },
  {
    code: "NL",
    lat: 52.132633,
    long: 5.291266,
    name: "Netherlands",
    flag: "🇳🇱"
  },
  {
    code: "NO",
    lat: 60.472024,
    long: 8.468946,
    name: "Norway",
    flag: "🇳🇴"
  },
  {
    code: "NP",
    lat: 28.394857,
    long: 84.124008,
    name: "Nepal",
    flag: "🇳🇵"
  },
  {
    code: "NR",
    lat: -0.522778,
    long: 166.931503,
    name: "Nauru",
    flag: "🇳🇷"
  },
  {
    code: "NU",
    lat: -19.054445,
    long: -169.867233,
    name: "Niue",
    flag: "🇳🇺"
  },
  {
    code: "NZ",
    lat: -40.900557,
    long: 174.885971,
    name: "New Zealand",
    flag: "🇳🇿"
  },
  {
    code: "OM",
    lat: 21.512583,
    long: 55.923255,
    name: "Oman",
    flag: "🇴🇲"
  },
  {
    code: "PA",
    lat: 8.537981,
    long: -80.782127,
    name: "Panama",
    flag: "🇵🇦"
  },
  {
    code: "PE",
    lat: -9.189967,
    long: -75.015152,
    name: "Peru",
    flag: "🇵🇪"
  },
  {
    code: "PF",
    lat: -17.679742,
    long: -149.406843,
    name: "French Polynesia",
    flag: "🇵🇫"
  },
  {
    code: "PG",
    lat: -6.314993,
    long: 143.95555,
    name: "Papua New Guinea",
    flag: "🇵🇬"
  },
  {
    code: "PH",
    lat: 12.879721,
    long: 121.774017,
    name: "Philippines",
    flag: "🇵🇭"
  },
  {
    code: "PK",
    lat: 30.375321,
    long: 69.345116,
    name: "Pakistan",
    flag: "🇵🇰"
  },
  {
    code: "PL",
    lat: 51.919438,
    long: 19.145136,
    name: "Poland",
    flag: "🇵🇱"
  },
  {
    code: "PM",
    lat: 46.941936,
    long: -56.27111,
    name: "Saint Pierre and Miquelon",
    flag: "🇵🇲"
  },
  {
    code: "PN",
    lat: -24.703615,
    long: -127.439308,
    name: "Pitcairn Islands",
    flag: "🇵🇳"
  },
  {
    code: "PR",
    lat: 18.220833,
    long: -66.590149,
    name: "Puerto Rico",
    flag: "🇵🇷"
  },
  {
    code: "PS",
    lat: 31.952162,
    long: 35.233154,
    name: "Palestine",
    flag: "🇵🇸"
  },
  {
    code: "PT",
    lat: 39.399872,
    long: -8.224454,
    name: "Portugal",
    flag: "🇵🇹"
  },
  {
    code: "PW",
    lat: 7.51498,
    long: 134.58252,
    name: "Palau",
    flag: "🇵🇼"
  },
  {
    code: "PY",
    lat: -23.442503,
    long: -58.443832,
    name: "Paraguay",
    flag: "🇵🇾"
  },
  {
    code: "QA",
    lat: 25.354826,
    long: 51.183884,
    name: "Qatar",
    flag: "🇶🇦"
  },
  {
    code: "RE",
    lat: -21.115141,
    long: 55.536384,
    name: "Réunion",
    flag: "🇷🇪"
  },
  {
    code: "RO",
    lat: 45.943161,
    long: 24.96676,
    name: "Romania",
    flag: "🇷🇴"
  },
  {
    code: "RS",
    lat: 44.016521,
    long: 21.005859,
    name: "Serbia",
    flag: "🇷🇸"
  },
  {
    code: "RU",
    lat: 61.52401,
    long: 105.318756,
    name: "Russia",
    flag: "🇷🇺"
  },
  {
    code: "RW",
    lat: -1.940278,
    long: 29.873888,
    name: "Rwanda",
    flag: "🇷🇼"
  },
  {
    code: "SA",
    lat: 23.885942,
    long: 45.079162,
    name: "Saudi Arabia",
    flag: "🇸🇦"
  },
  {
    code: "SB",
    lat: -9.64571,
    long: 160.156194,
    name: "Solomon Islands",
    flag: "🇸🇧"
  },
  {
    code: "SC",
    lat: -4.679574,
    long: 55.491977,
    name: "Seychelles",
    flag: "🇸🇨"
  },
  {
    code: "SD",
    lat: 12.862807,
    long: 30.217636,
    name: "Sudan",
    flag: "🇸🇩"
  },
  {
    code: "SE",
    lat: 60.128161,
    long: 18.643501,
    name: "Sweden",
    flag: "🇸🇪"
  },
  {
    code: "SG",
    lat: 1.352083,
    long: 103.819836,
    name: "Singapore",
    flag: "🇸🇬"
  },
  {
    code: "SH",
    lat: -24.143474,
    long: -10.030696,
    name: "Saint Helena",
    flag: "🇸🇭"
  },
  {
    code: "SI",
    lat: 46.151241,
    long: 14.995463,
    name: "Slovenia",
    flag: "🇸🇮"
  },
  {
    code: "SJ",
    lat: 77.553604,
    long: 23.670272,
    name: "Svalbard and Jan Mayen",
    flag: "🇸🇯"
  },
  {
    code: "SK",
    lat: 48.669026,
    long: 19.699024,
    name: "Slovakia",
    flag: "🇸🇰"
  },
  {
    code: "SL",
    lat: 8.460555,
    long: -11.779889,
    name: "Sierra Leone",
    flag: "🇸🇱"
  },
  {
    code: "SM",
    lat: 43.94236,
    long: 12.457777,
    name: "San Marino",
    flag: "🇸🇲"
  },
  {
    code: "SN",
    lat: 14.497401,
    long: -14.452362,
    name: "Senegal",
    flag: "🇸🇳"
  },
  {
    code: "SO",
    lat: 5.152149,
    long: 46.199616,
    name: "Somalia",
    flag: "🇸🇴"
  },
  {
    code: "SR",
    lat: 3.919305,
    long: -56.027783,
    name: "Suriname",
    flag: "🇸🇷"
  },
  {
    code: "ST",
    lat: 0.18636,
    long: 6.613081,
    name: "São Tomé and Príncipe",
    flag: "🇸🇹"
  },
  {
    code: "SV",
    lat: 13.794185,
    long: -88.89653,
    name: "El Salvador",
    flag: "🇸🇻"
  },
  {
    code: "SY",
    lat: 34.802075,
    long: 38.996815,
    name: "Syria",
    flag: "🇸🇾"
  },
  {
    code: "SZ",
    lat: -26.522503,
    long: 31.465866,
    name: "Swaziland",
    flag: "🇸🇿"
  },
  {
    code: "TC",
    lat: 21.694025,
    long: -71.797928,
    name: "Turks and Caicos Islands",
    flag: "🇹🇨"
  },
  {
    code: "TD",
    lat: 15.454166,
    long: 18.732207,
    name: "Chad",
    flag: "🇹🇩"
  },
  {
    code: "TF",
    lat: -49.280366,
    long: 69.348557,
    name: "French Southern Territories",
    flag: "🇹🇫"
  },
  {
    code: "TG",
    lat: 8.619543,
    long: 0.824782,
    name: "Togo",
    flag: "🇹🇬"
  },
  {
    code: "TH",
    lat: 15.870032,
    long: 100.992541,
    name: "Thailand",
    flag: "🇹🇭"
  },
  {
    code: "TJ",
    lat: 38.861034,
    long: 71.276093,
    name: "Tajikistan",
    flag: "🇹🇯"
  },
  {
    code: "TK",
    lat: -8.967363,
    long: -171.855881,
    name: "Tokelau",
    flag: "🇹🇰"
  },
  {
    code: "TL",
    lat: -8.874217,
    long: 125.727539,
    name: "Timor-Leste",
    flag: "🇹🇱"
  },
  {
    code: "TM",
    lat: 38.969719,
    long: 59.556278,
    name: "Turkmenistan",
    flag: "🇹🇲"
  },
  {
    code: "TN",
    lat: 33.886917,
    long: 9.537499,
    name: "Tunisia",
    flag: "🇹🇳"
  },
  {
    code: "TO",
    lat: -21.178986,
    long: -175.198242,
    name: "Tonga",
    flag: "🇹🇴"
  },
  {
    code: "TR",
    lat: 38.963745,
    long: 35.243322,
    name: "Turkey",
    flag: "🇹🇷"
  },
  {
    code: "TT",
    lat: 10.691803,
    long: -61.222503,
    name: "Trinidad and Tobago",
    flag: "🇹🇹"
  },
  {
    code: "TV",
    lat: -7.109535,
    long: 177.64933,
    name: "Tuvalu",
    flag: "🇹🇻"
  },
  {
    code: "TW",
    lat: 23.69781,
    long: 120.960515,
    name: "Taiwan",
    flag: "🇹🇼"
  },
  {
    code: "TZ",
    lat: -6.369028,
    long: 34.888822,
    name: "Tanzania",
    flag: "🇹🇿"
  },
  {
    code: "UA",
    lat: 48.379433,
    long: 31.16558,
    name: "Ukraine",
    flag: "🇺🇦"
  },
  {
    code: "UG",
    lat: 1.373333,
    long: 32.290275,
    name: "Uganda",
    flag: "🇺🇬"
  },
  {
    code: "US",
    lat: 37.09024,
    long: -95.712891,
    name: "USA",
    flag: "🇺🇸"
  },
  {
    code: "UY",
    lat: -32.522779,
    long: -55.765835,
    name: "Uruguay",
    flag: "🇺🇾"
  },
  {
    code: "UZ",
    lat: 41.377491,
    long: 64.585262,
    name: "Uzbekistan",
    flag: "🇺🇿"
  },
  {
    code: "VA",
    lat: 41.902916,
    long: 12.453389,
    name: "Vatican City",
    flag: "🇻🇦"
  },
  {
    code: "VC",
    lat: 12.984305,
    long: -61.287228,
    name: "St. Vincent Grenadines",
    flag: "🇻🇨"
  },
  {
    code: "VE",
    lat: 6.42375,
    long: -66.58973,
    name: "Venezuela",
    flag: "🇻🇪"
  },
  {
    code: "VG",
    lat: 18.420695,
    long: -64.639968,
    name: "British Virgin Islands",
    flag: "🇻🇬"
  },
  {
    code: "VI",
    lat: 18.335765,
    long: -64.896335,
    name: "U.S. Virgin Islands",
    flag: "🇻🇮"
  },
  {
    code: "VN",
    lat: 14.058324,
    long: 108.277199,
    name: "Vietnam",
    flag: "🇻🇳"
  },
  {
    code: "VU",
    lat: -15.376706,
    long: 166.959158,
    name: "Vanuatu",
    flag: "🇻🇺"
  },
  {
    code: "WF",
    lat: -13.768752,
    long: -177.156097,
    name: "Wallis and Futuna",
    flag: "🇼🇫"
  },
  {
    code: "WS",
    lat: -13.759029,
    long: -172.104629,
    name: "Samoa",
    flag: "🇼🇸"
  },
  {
    code: "XK",
    lat: 42.602636,
    long: 20.902977,
    name: "Kosovo",
    flag: "🇼🇸"
  },
  {
    code: "YE",
    lat: 15.552727,
    long: 48.516388,
    name: "Yemen",
    flag: "🇾🇪"
  },
  {
    code: "YT",
    lat: -12.8275,
    long: 45.166244,
    name: "Mayotte",
    flag: "🇾🇹"
  },
  {
    code: "ZA",
    lat: -30.559482,
    long: 22.937506,
    name: "South Africa",
    flag: "🇿🇦"
  },
  {
    code: "ZM",
    lat: -13.133897,
    long: 27.849332,
    name: "Zambia",
    flag: "🇿🇲"
  },
  {
    code: "ZW",
    lat: -19.015438,
    long: 29.154857,
    name: "Zimbabwe",
    flag: "🇿🇼"
  }
];
export default countriesLocation;