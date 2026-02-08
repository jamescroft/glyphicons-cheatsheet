const featherIcons = {
    feather: {
        name: 'Feather Icons',
        prefix: 'feather',
        cdnLink: '<script src="https://unpkg.com/feather-icons"></script>',
        categories: {
            'getting-started': {
                title: 'Getting Started',
                items: [
                    { name: 'CDN Link', code: '<script src="https://unpkg.com/feather-icons"></script>', icon: 'undefined', description: 'Include Feather Icons via CDN' },
                    { name: 'NPM Install', code: 'npm i feather-icons', icon: 'undefined', description: 'Install via npm for local projects' },
                    { name: 'Total Count', code: '280+ icons available', icon: 'undefined', description: 'Simply beautiful open source icons' }
                ]
            },
            usage: {
                title: 'Usage',
                items: [
                    { name: 'Data Attribute', code: '<i data-feather="heart"></i>', icon: 'undefined', description: 'Use data-feather attribute, then call feather.replace()' },
                    { name: 'Initialize', code: 'feather.replace()', icon: 'undefined', description: 'Call this after DOM loads to render icons' },
                    { name: 'JavaScript API', code: 'feather.icons.heart.toSvg()', icon: 'undefined', description: 'Generate SVG programmatically' }
                ]
            },
            styling: {
                title: 'Styling',
                items: [
                    { name: 'Icon Sizing', code: '<i data-feather="heart" width="32" height="32"></i>', icon: 'undefined', description: 'Set width and height attributes' },
                    { name: 'Icon Colors', code: '<i data-feather="heart" stroke="red"></i>', icon: 'undefined', description: 'Use stroke attribute for colors' },
                    { name: 'Stroke Width', code: '<i data-feather="heart" stroke-width="1"></i>', icon: 'undefined', description: 'Adjust line thickness with stroke-width' }
                ]
            },
            examples: {
                title: 'Examples',
                items: [
                    { name: 'Heart', code: '<i data-feather="heart"></i>', icon: 'heart', description: 'Love, favorite, like' },
                    { name: 'Star', code: '<i data-feather="star"></i>', icon: 'star', description: 'Rating, favorite, featured' },
                    { name: 'Search', code: '<i data-feather="search"></i>', icon: 'search', description: 'Search, find, lookup' },
                    { name: 'Home', code: '<i data-feather="home"></i>', icon: 'home', description: 'Home, dashboard, main page' },
                    { name: 'User', code: '<i data-feather="user"></i>', icon: 'user', description: 'User, profile, account' },
                    { name: 'Shopping Cart', code: '<i data-feather="shopping-cart"></i>', icon: 'shopping-cart', description: 'Shopping cart, checkout' },
                    { name: 'Settings', code: '<i data-feather="settings"></i>', icon: 'settings', description: 'Settings, preferences, config' },
                    { name: 'Bell', code: '<i data-feather="bell"></i>', icon: 'bell', description: 'Notifications, alerts' },
                    { name: 'Mail', code: '<i data-feather="mail"></i>', icon: 'mail', description: 'Email, message, contact' },
                    { name: 'Check', code: '<i data-feather="check"></i>', icon: 'check', description: 'Success, complete, verified' },
                    { name: 'X', code: '<i data-feather="x"></i>', icon: 'x', description: 'Close, cancel, remove' },
                    { name: 'Plus', code: '<i data-feather="plus"></i>', icon: 'plus', description: 'Add, create, new' },
                    { name: 'Minus', code: '<i data-feather="minus"></i>', icon: 'minus', description: 'Remove, subtract, less' },
                    { name: 'Trash', code: '<i data-feather="trash-2"></i>', icon: 'trash-2', description: 'Delete, remove, discard' },
                    { name: 'Edit', code: '<i data-feather="edit"></i>', icon: 'edit', description: 'Edit, write, modify' },
                    { name: 'Download', code: '<i data-feather="download"></i>', icon: 'download', description: 'Download, save, get' },
                    { name: 'Upload', code: '<i data-feather="upload"></i>', icon: 'upload', description: 'Upload, send, share' },
                    { name: 'File', code: '<i data-feather="file"></i>', icon: 'file', description: 'File, document, page' },
                    { name: 'Folder', code: '<i data-feather="folder"></i>', icon: 'folder', description: 'Folder, directory, category' },
                    { name: 'Image', code: '<i data-feather="image"></i>', icon: 'image', description: 'Image, photo, picture' },
                    { name: 'Camera', code: '<i data-feather="camera"></i>', icon: 'camera', description: 'Camera, photo, capture' },
                    { name: 'Video', code: '<i data-feather="video"></i>', icon: 'video', description: 'Video, recording, media' },
                    { name: 'Music', code: '<i data-feather="music"></i>', icon: 'music', description: 'Music, audio, sound' },
                    { name: 'Play', code: '<i data-feather="play"></i>', icon: 'play', description: 'Play, start, begin' },
                    { name: 'Pause', code: '<i data-feather="pause"></i>', icon: 'pause', description: 'Pause, hold, wait' },
                    { name: 'Lock', code: '<i data-feather="lock"></i>', icon: 'lock', description: 'Lock, secure, private' },
                    { name: 'Unlock', code: '<i data-feather="unlock"></i>', icon: 'unlock', description: 'Unlock, open, access' },
                    { name: 'Eye', code: '<i data-feather="eye"></i>', icon: 'eye', description: 'View, visible, show' },
                    { name: 'Eye Off', code: '<i data-feather="eye-off"></i>', icon: 'eye-off', description: 'Hide, invisible, private' },
                    { name: 'Calendar', code: '<i data-feather="calendar"></i>', icon: 'calendar', description: 'Calendar, date, schedule' },
                    { name: 'Clock', code: '<i data-feather="clock"></i>', icon: 'clock', description: 'Clock, time, schedule' },
                    { name: 'Map', code: '<i data-feather="map"></i>', icon: 'map', description: 'Map, location, directions' },
                    { name: 'Map Pin', code: '<i data-feather="map-pin"></i>', icon: 'map-pin', description: 'Location, pin, marker' },
                    { name: 'Phone', code: '<i data-feather="phone"></i>', icon: 'phone', description: 'Phone, call, contact' },
                    { name: 'Message Circle', code: '<i data-feather="message-circle"></i>', icon: 'message-circle', description: 'Comment, chat, message' },
                    { name: 'Share', code: '<i data-feather="share-2"></i>', icon: 'share-2', description: 'Share, forward, send' },
                    { name: 'Link', code: '<i data-feather="link"></i>', icon: 'link', description: 'Link, URL, chain' },
                    { name: 'Bookmark', code: '<i data-feather="bookmark"></i>', icon: 'bookmark', description: 'Bookmark, save, favorite' },
                    { name: 'Tag', code: '<i data-feather="tag"></i>', icon: 'tag', description: 'Tag, label, category' },
                    { name: 'GitHub', code: '<i data-feather="github"></i>', icon: 'github', description: 'GitHub, code, repository' },
                    { name: 'Twitter', code: '<i data-feather="twitter"></i>', icon: 'twitter', description: 'Twitter, social media' },
                    { name: 'Facebook', code: '<i data-feather="facebook"></i>', icon: 'facebook', description: 'Facebook, social media' },
                    { name: 'Instagram', code: '<i data-feather="instagram"></i>', icon: 'instagram', description: 'Instagram, social media' },
                    { name: 'LinkedIn', code: '<i data-feather="linkedin"></i>', icon: 'linkedin', description: 'LinkedIn, professional network' },
                    { name: 'YouTube', code: '<i data-feather="youtube"></i>', icon: 'youtube', description: 'YouTube, video platform' },
                    { name: 'Arrow Left', code: '<i data-feather="arrow-left"></i>', icon: 'arrow-left', description: 'Arrow left, back, previous' },
                    { name: 'Arrow Right', code: '<i data-feather="arrow-right"></i>', icon: 'arrow-right', description: 'Arrow right, forward, next' },
                    { name: 'Chevron Down', code: '<i data-feather="chevron-down"></i>', icon: 'chevron-down', description: 'Chevron down, expand, dropdown' },
                    { name: 'Menu', code: '<i data-feather="menu"></i>', icon: 'menu', description: 'Menu, hamburger, navigation' }
                ]
            }
        }
    }
};
