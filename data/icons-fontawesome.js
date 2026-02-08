const fontawesomeIcons = {
    fontawesome: {
        name: 'Font Awesome',
        prefix: 'fa',
        cdnLink: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">',
        categories: {
            'getting-started': {
                title: 'Getting Started',
                items: [
                    { name: 'CDN Link', code: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">', icon: 'undefined', description: 'Include Font Awesome via CDN' },
                    { name: 'NPM Install', code: 'npm i @fortawesome/fontawesome-free', icon: 'undefined', description: 'Install via npm for local projects' },
                    { name: 'Total Count', code: '2,000+ free icons available', icon: 'undefined', description: 'Massive icon library with solid, regular, and brand styles' }
                ]
            },
            usage: {
                title: 'Usage',
                items: [
                    { name: 'Solid Icon', code: '<i class="fa-solid fa-heart"></i>', icon: 'undefined', description: 'Use solid style icons with fa-solid prefix' },
                    { name: 'Regular Icon', code: '<i class="fa-regular fa-heart"></i>', icon: 'undefined', description: 'Use regular (outline) style icons' },
                    { name: 'Brand Icon', code: '<i class="fa-brands fa-github"></i>', icon: 'undefined', description: 'Use brand icons with fa-brands prefix' }
                ]
            },
            styling: {
                title: 'Styling',
                items: [
                    { name: 'Icon Sizing', code: '<i class="fa-solid fa-heart fa-2x"></i>', icon: 'undefined', description: 'Scale icons with fa-xs, fa-sm, fa-lg, fa-2x, fa-3x, etc.' },
                    { name: 'Icon Colors', code: '<i class="fa-solid fa-heart" style="color: red;"></i>', icon: 'undefined', description: 'Color icons with CSS color property' },
                    { name: 'Animations', code: '<i class="fa-solid fa-spinner fa-spin"></i>', icon: 'undefined', description: 'Add animations with fa-spin, fa-pulse, fa-beat, fa-bounce' }
                ]
            },
            examples: {
                title: 'Examples',
                items: [
                    { name: 'Heart', code: '<i class="fa-solid fa-heart"></i>', icon: 'fa-solid fa-heart', description: 'Love, favorite, like' },
                    { name: 'Star', code: '<i class="fa-solid fa-star"></i>', icon: 'fa-solid fa-star', description: 'Rating, favorite, featured' },
                    { name: 'Search', code: '<i class="fa-solid fa-magnifying-glass"></i>', icon: 'fa-solid fa-magnifying-glass', description: 'Search, find, lookup' },
                    { name: 'Home', code: '<i class="fa-solid fa-house"></i>', icon: 'fa-solid fa-house', description: 'Home, dashboard, main page' },
                    { name: 'User', code: '<i class="fa-solid fa-user"></i>', icon: 'fa-solid fa-user', description: 'User, profile, account' },
                    { name: 'Cart', code: '<i class="fa-solid fa-cart-shopping"></i>', icon: 'fa-solid fa-cart-shopping', description: 'Shopping cart, checkout' },
                    { name: 'Gear', code: '<i class="fa-solid fa-gear"></i>', icon: 'fa-solid fa-gear', description: 'Settings, preferences, config' },
                    { name: 'Bell', code: '<i class="fa-solid fa-bell"></i>', icon: 'fa-solid fa-bell', description: 'Notifications, alerts' },
                    { name: 'Envelope', code: '<i class="fa-solid fa-envelope"></i>', icon: 'fa-solid fa-envelope', description: 'Email, message, contact' },
                    { name: 'Check', code: '<i class="fa-solid fa-check"></i>', icon: 'fa-solid fa-check', description: 'Success, complete, verified' },
                    { name: 'X Mark', code: '<i class="fa-solid fa-xmark"></i>', icon: 'fa-solid fa-xmark', description: 'Close, cancel, remove' },
                    { name: 'Plus', code: '<i class="fa-solid fa-plus"></i>', icon: 'fa-solid fa-plus', description: 'Add, create, new' },
                    { name: 'Minus', code: '<i class="fa-solid fa-minus"></i>', icon: 'fa-solid fa-minus', description: 'Remove, subtract, less' },
                    { name: 'Trash', code: '<i class="fa-solid fa-trash"></i>', icon: 'fa-solid fa-trash', description: 'Delete, remove, discard' },
                    { name: 'Pen', code: '<i class="fa-solid fa-pen"></i>', icon: 'fa-solid fa-pen', description: 'Edit, write, modify' },
                    { name: 'Download', code: '<i class="fa-solid fa-download"></i>', icon: 'fa-solid fa-download', description: 'Download, save, get' },
                    { name: 'Upload', code: '<i class="fa-solid fa-upload"></i>', icon: 'fa-solid fa-upload', description: 'Upload, send, share' },
                    { name: 'File', code: '<i class="fa-solid fa-file"></i>', icon: 'fa-solid fa-file', description: 'File, document, page' },
                    { name: 'Folder', code: '<i class="fa-solid fa-folder"></i>', icon: 'fa-solid fa-folder', description: 'Folder, directory, category' },
                    { name: 'Image', code: '<i class="fa-solid fa-image"></i>', icon: 'fa-solid fa-image', description: 'Image, photo, picture' },
                    { name: 'Camera', code: '<i class="fa-solid fa-camera"></i>', icon: 'fa-solid fa-camera', description: 'Camera, photo, capture' },
                    { name: 'Video', code: '<i class="fa-solid fa-video"></i>', icon: 'fa-solid fa-video', description: 'Video, recording, media' },
                    { name: 'Music', code: '<i class="fa-solid fa-music"></i>', icon: 'fa-solid fa-music', description: 'Music, audio, sound' },
                    { name: 'Play', code: '<i class="fa-solid fa-play"></i>', icon: 'fa-solid fa-play', description: 'Play, start, begin' },
                    { name: 'Pause', code: '<i class="fa-solid fa-pause"></i>', icon: 'fa-solid fa-pause', description: 'Pause, hold, wait' },
                    { name: 'Stop', code: '<i class="fa-solid fa-stop"></i>', icon: 'fa-solid fa-stop', description: 'Stop, end, halt' },
                    { name: 'Lock', code: '<i class="fa-solid fa-lock"></i>', icon: 'fa-solid fa-lock', description: 'Lock, secure, private' },
                    { name: 'Unlock', code: '<i class="fa-solid fa-unlock"></i>', icon: 'fa-solid fa-unlock', description: 'Unlock, open, access' },
                    { name: 'Eye', code: '<i class="fa-solid fa-eye"></i>', icon: 'fa-solid fa-eye', description: 'View, visible, show' },
                    { name: 'Eye Slash', code: '<i class="fa-solid fa-eye-slash"></i>', icon: 'fa-solid fa-eye-slash', description: 'Hide, invisible, private' },
                    { name: 'Calendar', code: '<i class="fa-solid fa-calendar"></i>', icon: 'fa-solid fa-calendar', description: 'Calendar, date, schedule' },
                    { name: 'Clock', code: '<i class="fa-solid fa-clock"></i>', icon: 'fa-solid fa-clock', description: 'Clock, time, schedule' },
                    { name: 'Map', code: '<i class="fa-solid fa-map"></i>', icon: 'fa-solid fa-map', description: 'Map, location, directions' },
                    { name: 'Location', code: '<i class="fa-solid fa-location-dot"></i>', icon: 'fa-solid fa-location-dot', description: 'Location, pin, marker' },
                    { name: 'Phone', code: '<i class="fa-solid fa-phone"></i>', icon: 'fa-solid fa-phone', description: 'Phone, call, contact' },
                    { name: 'Comment', code: '<i class="fa-solid fa-comment"></i>', icon: 'fa-solid fa-comment', description: 'Comment, chat, message' },
                    { name: 'Share', code: '<i class="fa-solid fa-share"></i>', icon: 'fa-solid fa-share', description: 'Share, forward, send' },
                    { name: 'Link', code: '<i class="fa-solid fa-link"></i>', icon: 'fa-solid fa-link', description: 'Link, URL, chain' },
                    { name: 'Bookmark', code: '<i class="fa-solid fa-bookmark"></i>', icon: 'fa-solid fa-bookmark', description: 'Bookmark, save, favorite' },
                    { name: 'Tag', code: '<i class="fa-solid fa-tag"></i>', icon: 'fa-solid fa-tag', description: 'Tag, label, category' },
                    { name: 'GitHub', code: '<i class="fa-brands fa-github"></i>', icon: 'fa-brands fa-github', description: 'GitHub, code, repository' },
                    { name: 'Twitter', code: '<i class="fa-brands fa-twitter"></i>', icon: 'fa-brands fa-twitter', description: 'Twitter, social media' },
                    { name: 'Facebook', code: '<i class="fa-brands fa-facebook"></i>', icon: 'fa-brands fa-facebook', description: 'Facebook, social media' },
                    { name: 'Instagram', code: '<i class="fa-brands fa-instagram"></i>', icon: 'fa-brands fa-instagram', description: 'Instagram, social media' },
                    { name: 'LinkedIn', code: '<i class="fa-brands fa-linkedin"></i>', icon: 'fa-brands fa-linkedin', description: 'LinkedIn, professional network' },
                    { name: 'YouTube', code: '<i class="fa-brands fa-youtube"></i>', icon: 'fa-brands fa-youtube', description: 'YouTube, video platform' },
                    { name: 'Apple', code: '<i class="fa-brands fa-apple"></i>', icon: 'fa-brands fa-apple', description: 'Apple, brand, logo' },
                    { name: 'Google', code: '<i class="fa-brands fa-google"></i>', icon: 'fa-brands fa-google', description: 'Google, brand, search' },
                    { name: 'Amazon', code: '<i class="fa-brands fa-amazon"></i>', icon: 'fa-brands fa-amazon', description: 'Amazon, shopping, brand' },
                    { name: 'Spinner', code: '<i class="fa-solid fa-spinner fa-spin"></i>', icon: 'fa-solid fa-spinner', description: 'Loading, spinner, wait' }
                ]
            }
        }
    }
};
