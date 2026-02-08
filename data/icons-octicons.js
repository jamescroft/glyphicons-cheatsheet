const octiconsIcons = {
    octicons: {
        name: 'Octicons',
        prefix: 'octicon',
        cdnLink: '<script src="https://unpkg.com/@primer/octicons@19.8.0/build/static/octicons.min.js"></script>',
        categories: {
            'getting-started': {
                title: 'Getting Started',
                items: [
                    { name: 'NPM Install', code: 'npm i @primer/octicons', icon: 'undefined', description: 'Install via npm for local projects' },
                    { name: 'SVG Usage', code: '<svg class="octicon" viewBox="0 0 16 16"><path d="..."></path></svg>', icon: 'undefined', description: 'Use inline SVG for icons' },
                    { name: 'Total Count', code: '500+ icons available', icon: 'undefined', description: 'GitHub\'s icon set, scalable and accessible' }
                ]
            },
            usage: {
                title: 'Usage',
                items: [
                    { name: 'Inline SVG', code: '<svg class="octicon octicon-heart" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="..."></path></svg>', icon: 'undefined', description: 'Embed SVG directly in HTML' },
                    { name: 'Size Variants', code: 'heart-16.svg, heart-24.svg', icon: 'undefined', description: 'Icons available in 16px and 24px sizes' },
                    { name: 'React Usage', code: 'import {HeartIcon} from "@primer/octicons-react"', icon: 'undefined', description: 'Use React components for icons' }
                ]
            },
            styling: {
                title: 'Styling',
                items: [
                    { name: 'Icon Sizing', code: '<svg width="24" height="24">...</svg>', icon: 'undefined', description: 'Scale icons using width/height attributes' },
                    { name: 'Icon Colors', code: '<svg fill="red">...</svg>', icon: 'undefined', description: 'Color icons with fill attribute or CSS' }
                ]
            },
            examples: {
                title: 'Examples',
                items: [
                    { name: 'Heart', code: '<svg class="octicon octicon-heart">...</svg>', icon: 'heart', description: 'Love, favorite, like' },
                    { name: 'Star', code: '<svg class="octicon octicon-star">...</svg>', icon: 'star', description: 'Rating, favorite, featured' },
                    { name: 'Search', code: '<svg class="octicon octicon-search">...</svg>', icon: 'search', description: 'Search, find, lookup' },
                    { name: 'Home', code: '<svg class="octicon octicon-home">...</svg>', icon: 'home', description: 'Home, dashboard, main page' },
                    { name: 'Person', code: '<svg class="octicon octicon-person">...</svg>', icon: 'person', description: 'User, profile, account' },
                    { name: 'Gear', code: '<svg class="octicon octicon-gear">...</svg>', icon: 'gear', description: 'Settings, preferences, config' },
                    { name: 'Bell', code: '<svg class="octicon octicon-bell">...</svg>', icon: 'bell', description: 'Notifications, alerts' },
                    { name: 'Mail', code: '<svg class="octicon octicon-mail">...</svg>', icon: 'mail', description: 'Email, message, contact' },
                    { name: 'Check', code: '<svg class="octicon octicon-check">...</svg>', icon: 'check', description: 'Success, complete, verified' },
                    { name: 'X', code: '<svg class="octicon octicon-x">...</svg>', icon: 'x', description: 'Close, cancel, remove' },
                    { name: 'Plus', code: '<svg class="octicon octicon-plus">...</svg>', icon: 'plus', description: 'Add, create, new' },
                    { name: 'Dash', code: '<svg class="octicon octicon-dash">...</svg>', icon: 'dash', description: 'Remove, subtract, less' },
                    { name: 'Trash', code: '<svg class="octicon octicon-trash">...</svg>', icon: 'trash', description: 'Delete, remove, discard' },
                    { name: 'Pencil', code: '<svg class="octicon octicon-pencil">...</svg>', icon: 'pencil', description: 'Edit, write, modify' },
                    { name: 'Download', code: '<svg class="octicon octicon-download">...</svg>', icon: 'download', description: 'Download, save, get' },
                    { name: 'Upload', code: '<svg class="octicon octicon-upload">...</svg>', icon: 'upload', description: 'Upload, send, share' },
                    { name: 'File', code: '<svg class="octicon octicon-file">...</svg>', icon: 'file', description: 'File, document, page' },
                    { name: 'File Directory', code: '<svg class="octicon octicon-file-directory">...</svg>', icon: 'file-directory', description: 'Folder, directory, category' },
                    { name: 'Image', code: '<svg class="octicon octicon-image">...</svg>', icon: 'image', description: 'Image, photo, picture' },
                    { name: 'Device Camera', code: '<svg class="octicon octicon-device-camera">...</svg>', icon: 'device-camera', description: 'Camera, photo, capture' },
                    { name: 'Play', code: '<svg class="octicon octicon-play">...</svg>', icon: 'play', description: 'Play, start, begin' },
                    { name: 'Lock', code: '<svg class="octicon octicon-lock">...</svg>', icon: 'lock', description: 'Lock, secure, private' },
                    { name: 'Unlock', code: '<svg class="octicon octicon-unlock">...</svg>', icon: 'unlock', description: 'Unlock, open, access' },
                    { name: 'Eye', code: '<svg class="octicon octicon-eye">...</svg>', icon: 'eye', description: 'View, visible, show' },
                    { name: 'Eye Closed', code: '<svg class="octicon octicon-eye-closed">...</svg>', icon: 'eye-closed', description: 'Hide, invisible, private' },
                    { name: 'Calendar', code: '<svg class="octicon octicon-calendar">...</svg>', icon: 'calendar', description: 'Calendar, date, schedule' },
                    { name: 'Clock', code: '<svg class="octicon octicon-clock">...</svg>', icon: 'clock', description: 'Clock, time, schedule' },
                    { name: 'Location', code: '<svg class="octicon octicon-location">...</svg>', icon: 'location', description: 'Location, pin, marker' },
                    { name: 'Comment', code: '<svg class="octicon octicon-comment">...</svg>', icon: 'comment', description: 'Comment, chat, message' },
                    { name: 'Share', code: '<svg class="octicon octicon-share">...</svg>', icon: 'share', description: 'Share, forward, send' },
                    { name: 'Link', code: '<svg class="octicon octicon-link">...</svg>', icon: 'link', description: 'Link, URL, chain' },
                    { name: 'Bookmark', code: '<svg class="octicon octicon-bookmark">...</svg>', icon: 'bookmark', description: 'Bookmark, save, favorite' },
                    { name: 'Tag', code: '<svg class="octicon octicon-tag">...</svg>', icon: 'tag', description: 'Tag, label, category' },
                    { name: 'Mark GitHub', code: '<svg class="octicon octicon-mark-github">...</svg>', icon: 'mark-github', description: 'GitHub, code, repository' },
                    { name: 'Repo', code: '<svg class="octicon octicon-repo">...</svg>', icon: 'repo', description: 'Repository, code, project' },
                    { name: 'Git Branch', code: '<svg class="octicon octicon-git-branch">...</svg>', icon: 'git-branch', description: 'Git branch, version control' },
                    { name: 'Git Commit', code: '<svg class="octicon octicon-git-commit">...</svg>', icon: 'git-commit', description: 'Git commit, save, version' },
                    { name: 'Git Pull Request', code: '<svg class="octicon octicon-git-pull-request">...</svg>', icon: 'git-pull-request', description: 'Pull request, merge, review' },
                    { name: 'Git Merge', code: '<svg class="octicon octicon-git-merge">...</svg>', icon: 'git-merge', description: 'Git merge, combine, join' },
                    { name: 'Issue Opened', code: '<svg class="octicon octicon-issue-opened">...</svg>', icon: 'issue-opened', description: 'Issue, bug, ticket' },
                    { name: 'Issue Closed', code: '<svg class="octicon octicon-issue-closed">...</svg>', icon: 'issue-closed', description: 'Issue closed, resolved' },
                    { name: 'Code', code: '<svg class="octicon octicon-code">...</svg>', icon: 'code', description: 'Code, programming, source' },
                    { name: 'Terminal', code: '<svg class="octicon octicon-terminal">...</svg>', icon: 'terminal', description: 'Terminal, command line, shell' },
                    { name: 'CPU', code: '<svg class="octicon octicon-cpu">...</svg>', icon: 'cpu', description: 'CPU, processor, hardware' },
                    { name: 'Database', code: '<svg class="octicon octicon-database">...</svg>', icon: 'database', description: 'Database, storage, data' },
                    { name: 'Package', code: '<svg class="octicon octicon-package">...</svg>', icon: 'package', description: 'Package, module, library' },
                    { name: 'Rocket', code: '<svg class="octicon octicon-rocket">...</svg>', icon: 'rocket', description: 'Rocket, launch, deploy' },
                    { name: 'Zap', code: '<svg class="octicon octicon-zap">...</svg>', icon: 'zap', description: 'Zap, lightning, fast' },
                    { name: 'Beaker', code: '<svg class="octicon octicon-beaker">...</svg>', icon: 'beaker', description: 'Beaker, experiment, test' }
                ]
            }
        }
    }
};
