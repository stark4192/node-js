
const { URL } = require('url');

try {
    const absolute = new URL('https://static.pexels.com/photos/126407/pexels-photo-126407.jpeg');
    console.log(absolute);
}
catch (e) {
    if (e instanceof TypeError) {
        console.log('absolute is a relative path');
    } else {
        throw e;
    }
}

try {
    const relative = new URL('/images/picture.jpg');
    console.log(relative);
} catch (e) {
    if (e instanceof TypeError) {
        console.log('relative is a relative path');
    } else {
        throw e;
    }
}
