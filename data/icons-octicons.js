const octiconsIcons = {
    octicons: {
        name: 'Octicons',
        prefix: 'octicon',
        cdnLink: '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@primer/octicons@19/index.css">',
        categories: {
            'getting-started': {
                title: 'Getting Started',
                items: [
                    { name: 'CDN Link', code: '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@primer/octicons@19/index.css">', icon: 'undefined', description: 'Include Octicons via CDN' },
                    { name: 'NPM Install', code: 'npm i @primer/octicons', icon: 'undefined', description: 'Install via npm for local projects' },
                    { name: 'Total Count', code: '500+ icons available', icon: 'undefined', description: 'GitHub\'s icon set, scalable and accessible' }
                ]
            },
            usage: {
                title: 'Usage',
                items: [
                    { name: 'CSS Usage', code: '<span class="octicon octicon-heart"></span>', icon: 'undefined', description: 'Use octicon class prefix with icon name' },
                    { name: 'SVG Usage', code: '<svg class="octicon" viewBox="0 0 16 16">...</svg>', icon: 'undefined', description: 'Use inline SVG for more control' },
                    { name: 'Size Variants', code: 'octicon-heart-16, octicon-heart-24', icon: 'undefined', description: 'Icons available in 16px and 24px sizes' }
                ]
            },
            styling: {
                title: 'Styling',
                items: [
                    { name: 'Icon Sizing', code: '<span class="octicon octicon-heart" style="font-size: 24px;"></span>', icon: 'undefined', description: 'Scale icons using font-size' },
                    { name: 'Icon Colors', code: '<span class="octicon octicon-heart" style="color: red;"></span>', icon: 'undefined', description: 'Color icons with CSS color property' }
                ]
            },
            examples: {
                title: 'Examples',
                items: [
                    { name: 'Heart', code: '<span class="octicon octicon-heart"></span>', icon: 'octicon-heart', description: 'Love, favorite, like' },
                    { name: 'Star', code: '<span class="octicon octicon-star"></span>', icon: 'octicon-star', description: 'Rating, favorite, featured' },
                    { name: 'Search', code: '<span class="octicon octicon-search"></span>', icon: 'octicon-search', description: 'Search, find, lookup' },
                    { name: 'Home', code: '<span class="octicon octicon-home"></span>', icon: 'octicon-home', description: 'Home, dashboard, main page' },
                    { name: 'Person', code: '<span class="octicon octicon-person"></span>', icon: 'octicon-person', description: 'User, profile, account' },
                    { name: 'Gear', code: '<span class="octicon octicon-gear"></span>', icon: 'octicon-gear', description: 'Settings, preferences, config' },
                    { name: 'Bell', code: '<span class="octicon octicon-bell"></span>', icon: 'octicon-bell', description: 'Notifications, alerts' },
                    { name: 'Mail', code: '<span class="octicon octicon-mail"></span>', icon: 'octicon-mail', description: 'Email, message, contact' },
                    { name: 'Check', code: '<span class="octicon octicon-check"></span>', icon: 'octicon-check', description: 'Success, complete, verified' },
                    { name: 'X', code: '<span class="octicon octicon-x"></span>', icon: 'octicon-x', description: 'Close, cancel, remove' },
                    { name: 'Plus', code: '<span class="octicon octicon-plus"></span>', icon: 'octicon-plus', description: 'Add, create, new' },
                    { name: 'Dash', code: '<span class="octicon octicon-dash"></span>', icon: 'octicon-dash', description: 'Remove, subtract, less' },
                    { name: 'Trash', code: '<span class="octicon octicon-trash"></span>', icon: 'octicon-trash', description: 'Delete, remove, discard' },
                    { name: 'Pencil', code: '<span class="octicon octicon-pencil"></span>', icon: 'octicon-pencil', description: 'Edit, write, modify' },
                    { name: 'Download', code: '<span class="octicon octicon-download"></span>', icon: 'octicon-download', description: 'Download, save, get' },
                    { name: 'Upload', code: '<span class="octicon octicon-upload"></span>', icon: 'octicon-upload', description: 'Upload, send, share' },
                    { name: 'File', code: '<span class="octicon octicon-file"></span>', icon: 'octicon-file', description: 'File, document, page' },
                    { name: 'File Directory', code: '<span class="octicon octicon-file-directory"></span>', icon: 'octicon-file-directory', description: 'Folder, directory, category' },
                    { name: 'Image', code: '<span class="octicon octicon-image"></span>', icon: 'octicon-image', description: 'Image, photo, picture' },
                    { name: 'Device Camera', code: '<span class="octicon octicon-device-camera"></span>', icon: 'octicon-device-camera', description: 'Camera, photo, capture' },
                    { name: 'Play', code: '<span class="octicon octicon-play"></span>', icon: 'octicon-play', description: 'Play, start, begin' },
                    { name: 'Lock', code: '<span class="octicon octicon-lock"></span>', icon: 'octicon-lock', description: 'Lock, secure, private' },
                    { name: 'Unlock', code: '<span class="octicon octicon-unlock"></span>', icon: 'octicon-unlock', description: 'Unlock, open, access' },
                    { name: 'Eye', code: '<span class="octicon octicon-eye"></span>', icon: 'octicon-eye', description: 'View, visible, show' },
                    { name: 'Eye Closed', code: '<span class="octicon octicon-eye-closed"></span>', icon: 'octicon-eye-closed', description: 'Hide, invisible, private' },
                    { name: 'Calendar', code: '<span class="octicon octicon-calendar"></span>', icon: 'octicon-calendar', description: 'Calendar, date, schedule' },
                    { name: 'Clock', code: '<span class="octicon octicon-clock"></span>', icon: 'octicon-clock', description: 'Clock, time, schedule' },
                    { name: 'Location', code: '<span class="octicon octicon-location"></span>', icon: 'octicon-location', description: 'Location, pin, marker' },
                    { name: 'Comment', code: '<span class="octicon octicon-comment"></span>', icon: 'octicon-comment', description: 'Comment, chat, message' },
                    { name: 'Share', code: '<span class="octicon octicon-share"></span>', icon: 'octicon-share', description: 'Share, forward, send' },
                    { name: 'Link', code: '<span class="octicon octicon-link"></span>', icon: 'octicon-link', description: 'Link, URL, chain' },
                    { name: 'Bookmark', code: '<span class="octicon octicon-bookmark"></span>', icon: 'octicon-bookmark', description: 'Bookmark, save, favorite' },
                    { name: 'Tag', code: '<span class="octicon octicon-tag"></span>', icon: 'octicon-tag', description: 'Tag, label, category' },
                    { name: 'Mark GitHub', code: '<span class="octicon octicon-mark-github"></span>', icon: 'octicon-mark-github', description: 'GitHub, code, repository' },
                    { name: 'Repo', code: '<span class="octicon octicon-repo"></span>', icon: 'octicon-repo', description: 'Repository, code, project' },
                    { name: 'Git Branch', code: '<span class="octicon octicon-git-branch"></span>', icon: 'octicon-git-branch', description: 'Git branch, version control' },
                    { name: 'Git Commit', code: '<span class="octicon octicon-git-commit"></span>', icon: 'octicon-git-commit', description: 'Git commit, save, version' },
                    { name: 'Git Pull Request', code: '<span class="octicon octicon-git-pull-request"></span>', icon: 'octicon-git-pull-request', description: 'Pull request, merge, review' },
                    { name: 'Git Merge', code: '<span class="octicon octicon-git-merge"></span>', icon: 'octicon-git-merge', description: 'Git merge, combine, join' },
                    { name: 'Issue Opened', code: '<span class="octicon octicon-issue-opened"></span>', icon: 'octicon-issue-opened', description: 'Issue, bug, ticket' },
                    { name: 'Issue Closed', code: '<span class="octicon octicon-issue-closed"></span>', icon: 'octicon-issue-closed', description: 'Issue closed, resolved' },
                    { name: 'Code', code: '<span class="octicon octicon-code"></span>', icon: 'octicon-code', description: 'Code, programming, source' },
                    { name: 'Terminal', code: '<span class="octicon octicon-terminal"></span>', icon: 'octicon-terminal', description: 'Terminal, command line, shell' },
                    { name: 'CPU', code: '<span class="octicon octicon-cpu"></span>', icon: 'octicon-cpu', description: 'CPU, processor, hardware' },
                    { name: 'Database', code: '<span class="octicon octicon-database"></span>', icon: 'octicon-database', description: 'Database, storage, data' },
                    { name: 'Package', code: '<span class="octicon octicon-package"></span>', icon: 'octicon-package', description: 'Package, module, library' },
                    { name: 'Rocket', code: '<span class="octicon octicon-rocket"></span>', icon: 'octicon-rocket', description: 'Rocket, launch, deploy' },
                    { name: 'Zap', code: '<span class="octicon octicon-zap"></span>', icon: 'octicon-zap', description: 'Zap, lightning, fast' },
                    { name: 'Beaker', code: '<span class="octicon octicon-beaker"></span>', icon: 'octicon-beaker', description: 'Beaker, experiment, test' }
                ]
            }
        }
    }
};
