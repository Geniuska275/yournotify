
class MySDK {
    constructor() {
        // You can initialize any configuration or settings here
    }

    createIframe(src, width, height) {
        const iframe = document.createElement('iframe');
        iframe.src = src;
        iframe.width = width;
        iframe.height = height;
        iframe.frameBorder = 0; // Remove border
        return iframe;
    }
}

module.exports = MySDK;
