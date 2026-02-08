const fontawesomeIcons = {
    fontawesome: {
        name: 'Font Awesome',
        defaultVersion: '6',
        versions: {
            '7': {
                name: 'Font Awesome 7',
                prefix: 'fa',
                cdnLink: '<link rel="stylesheet" href="https://cdn.example.com/font-awesome/7.x/css/all.min.css">',
                categories: {
                    'getting-started': {
                        title: 'Getting Started',
                        items: [
                            { name: 'CDN Link (Placeholder)', code: '<link rel="stylesheet" href="https://cdn.example.com/font-awesome/7.x/css/all.min.css">', icon: 'undefined', description: 'Placeholder CDN link for Font Awesome 7' },
                            { name: 'Package Install (Placeholder)', code: 'npm i @fortawesome/fontawesome-free@7', icon: 'undefined', description: 'Placeholder install command for v7' }
                        ]
                    },
                    usage: {
                        title: 'Usage',
                        items: [
                            { name: 'Basic Icon (Placeholder)', code: '<i class="fa-solid fa-circle"></i>', icon: 'undefined', description: 'Example usage placeholder' },
                            { name: 'Brand Icon (Placeholder)', code: '<i class="fa-brands fa-github"></i>', icon: 'undefined', description: 'Brand icon placeholder' }
                        ]
                    },
                    styling: {
                        title: 'Styling',
                        items: [
                            { name: 'Sizing (Placeholder)', code: '<i class="fa-solid fa-circle fa-2x"></i>', icon: 'undefined', description: 'Sizing utility placeholder' },
                            { name: 'Animation (Placeholder)', code: '<i class="fa-solid fa-spinner fa-spin"></i>', icon: 'undefined', description: 'Animation utility placeholder' }
                        ]
                    },
                    examples: {
                        title: 'Icons',
                        items: []
                    }
                }
            },
            '6': {
                name: 'Font Awesome 6',
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
                        title: 'Icons',
                        items: []
                    }
                }
            },
            '5': {
                name: 'Font Awesome 5',
                prefix: 'fa',
                cdnLink: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">',
                categories: {
                    'getting-started': {
                        title: 'Getting Started',
                        items: [
                            { name: 'CDN Link', code: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">', icon: 'undefined', description: 'Include Font Awesome 5 via CDN' },
                            { name: 'Package Install (Placeholder)', code: 'npm i @fortawesome/fontawesome-free@5', icon: 'undefined', description: 'Placeholder install command for v5' }
                        ]
                    },
                    usage: {
                        title: 'Usage',
                        items: [
                            { name: 'Solid Icon (Placeholder)', code: '<i class="fas fa-heart"></i>', icon: 'undefined', description: 'v5 uses fas/far/fab prefixes' },
                            { name: 'Brand Icon (Placeholder)', code: '<i class="fab fa-github"></i>', icon: 'undefined', description: 'Brand icon placeholder for v5' }
                        ]
                    },
                    styling: {
                        title: 'Styling',
                        items: [
                            { name: 'Sizing (Placeholder)', code: '<i class="fas fa-heart fa-2x"></i>', icon: 'undefined', description: 'Sizing utility placeholder' },
                            { name: 'Animation (Placeholder)', code: '<i class="fas fa-spinner fa-spin"></i>', icon: 'undefined', description: 'Animation utility placeholder' }
                        ]
                    },
                    examples: {
                        title: 'Icons',
                        items: []
                    }
                }
            },
            '4': {
                name: 'Font Awesome 4',
                prefix: 'fa',
                cdnLink: '<link rel="stylesheet" href="https://cdn.example.com/font-awesome/4.x/css/font-awesome.min.css">',
                categories: {
                    'getting-started': {
                        title: 'Getting Started',
                        items: [
                            { name: 'CDN Link (Placeholder)', code: '<link rel="stylesheet" href="https://cdn.example.com/font-awesome/4.x/css/font-awesome.min.css">', icon: 'undefined', description: 'Placeholder CDN link for Font Awesome 4' },
                            { name: 'Package Install (Placeholder)', code: 'npm i font-awesome@4', icon: 'undefined', description: 'Placeholder install command for v4' }
                        ]
                    },
                    usage: {
                        title: 'Usage',
                        items: [
                            { name: 'Basic Icon (Placeholder)', code: '<i class="fa fa-heart"></i>', icon: 'undefined', description: 'v4 uses fa and fa-* classes' },
                            { name: 'Brand Icon (Placeholder)', code: '<i class="fa fa-github"></i>', icon: 'undefined', description: 'Brand icon placeholder for v4' }
                        ]
                    },
                    styling: {
                        title: 'Styling',
                        items: [
                            { name: 'Sizing (Placeholder)', code: '<i class="fa fa-heart fa-2x"></i>', icon: 'undefined', description: 'Sizing utility placeholder' },
                            { name: 'Animation (Placeholder)', code: '<i class="fa fa-spinner fa-spin"></i>', icon: 'undefined', description: 'Animation utility placeholder' }
                        ]
                    },
                    examples: {
                        title: 'Icons',
                        items: []
                    }
                }
            }
        }
    }
};
