# l-utility
a utility for myself

## INSTALL
npm i l-utility -S

## Usage

### Setup
```javascript
const utils = require('l-utility');
```

### md5
```javascript
const md5 = utils.md5('content');
```

### sha256
```javascript
const sha256 = utils.sha256('content');
```

### objectId
```javascript
const objectId = utility.newObjectId();
```

### objectIdToDate
transform objenctId to date
```javascript
const date = utility.objectIdToDate(objectId);
```

### getDomain
get domain from host
```javascript
const domain = utility.getDomain(host);
```

### downloadFile
download file from souce url
```javascript
utility.downloadFile(souceUrl);
```

### loadFile
load file from souce
```javascript
const file = utility.loadFile(souceUrl);
```

