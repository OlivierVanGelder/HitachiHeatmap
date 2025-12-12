const fs = require("fs");

// lees input JSON
const raw = fs.readFileSync("pc4.json", "utf8");
let data = JSON.parse(raw);

// als het een array is met één object erin
if (Array.isArray(data)) {
    data = data[0];
}

const result = [];

for (const [postcode, coords] of Object.entries(data)) {
    if (!Array.isArray(coords) || coords.length < 2) continue;

    result.push({
        postcode: postcode,
        lat: coords[0],
        lon: coords[1]
    });
}

// schrijf output
fs.writeFileSync(
    "pc4_converted.json",
    JSON.stringify(result, null, 2),
    "utf8"
);

console.log("Klaar: pc4_converted.json aangemaakt");
