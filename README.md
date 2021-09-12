# Timezone converter

Timezone converter is a webapplication where one can convert specfic time from one time zone to other timezone.

## Screenshots

_Web view_

<img src="./output/web-view.png" alt="Web view" width="80%" />

_Mobile view_

<img src="./output/mobile-view.png" alt="Mobile view" width="30%" />

## Live url

[Click here](https://time-zone-converter.vercel.app)

## Local setup

To run this application in local execute the following commands

### Clone the repo

```bash
git clone https://github.com/saketh-kowtha/time-zone-converter.git
```

#### Node modules installation

```bash
npm install
```

#### Running in local

```bash
npm run dev
# Hit http://localhost:3000 from your browser.
```

## API Usage

If you are running in local then DOMAIN url is `http://localhost:3000` otherwise `https://time-zone-converter.vercel.app/`

```bash
URL: <DOMAIN>/api/time-zone-converter?ts=1630760210003&from=asia%2FBangkok&to=zulu
Method: GET
Query params:
  ts: Timestramp
  *from: Timezone
  *to: Timezone
  format: Expected date format.

Sample Response:
{
  "ts": "1631440962290",
  "fromTz": "asia/kolkata",
  "toTz": "japan",
  "asia/kolkata": "12-09-2010",
  "japan": "12-09-2010",
  "ISODate": "2021-09-12T10:02:42.290Z",
  "format": "DD-MM-YYYY"
}
```

### Query params

| Param  | Mandatory | Description                                                                    | Example         | Default value                   |
| ------ | --------- | ------------------------------------------------------------------------------ | --------------- | ------------------------------- |
| ts     | NO        | This is optional if it didn't passed then API will consider current time as ts | 1630760210003   | Current timestramp              |
| from   | Yes       | From timezone                                                                  | Asia%2FCalcutta | -                               |
| to     | Yes       | To timezone                                                                    | Asia%2FCalcutta | -                               |
| format | No        | Date format (For formats you can use momentjs formats)                         | DD-MM-YYYY      | ISO 8601, no fractional seconds |

[Refer this link for formats (format query param)](https://momentjscom.readthedocs.io/en/latest/moment/04-displaying/01-format/)

### Using with cURL

```bash
curl 'https://time-zone-converter.vercel.app/api/time-zone-converter?ts=1630760210003&from=asia%2FBangkok&to=zulu'
```

### Using with Fetch

```javascript
fetch('https://time-zone-converter.vercel.app/api/time-zone-converter?ts=1630760210003&from=asia%2FBangkok&to=zulu', {
    body: null,
    method: 'GET',
})
    .then((response) => response.json())
    .then((data) => console.log(data))
```

### Using with Axios

```javascript
axios
    .get('https://time-zone-converter.vercel.app/api/time-zone-converter?ts=1630760210003&from=asia%2FBangkok&to=zulu')
    .then((response) => console.log(response.data))
    .catch(console.error)
```
