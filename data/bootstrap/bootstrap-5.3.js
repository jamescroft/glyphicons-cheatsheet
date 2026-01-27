const bootstrap53Data = {
    grid: {
        title: 'Grid System',
        items: [
            { name: 'Container', code: '<div class="container">...</div>', description: 'Fixed-width container with responsive breakpoints' },
            { name: 'Container Fluid', code: '<div class="container-fluid">...</div>', description: 'Full-width container spanning viewport' },
            { name: 'Row', code: '<div class="row">...</div>', description: 'Wrapper for columns with -12px margin' },
            { name: 'Columns', code: '<div class="col-md-6">...</div>', description: 'Responsive columns (breakpoints: sm, md, lg, xl, xxl)' },
            { name: 'Auto Layout', code: '<div class="col">...</div>', description: 'Equal-width columns without specifying size' },
            { name: 'Offset', code: '<div class="col-md-4 offset-md-4">...</div>', description: 'Offset columns to the right' }
        ]
    },
    typography: {
        title: 'Typography',
        items: [
            { name: 'Display 1', code: '<h1 class="display-1">Display 1</h1>', description: 'Largest display heading', preview: '<h1 class="display-1" style="font-size: 5rem; font-weight: 300; line-height: 1.2;">Display 1</h1>' },
            { name: 'Display 2', code: '<h1 class="display-2">Display 2</h1>', description: 'Large display heading', preview: '<h1 class="display-2" style="font-size: 4.5rem; font-weight: 300; line-height: 1.2;">Display 2</h1>' },
            { name: 'Display 3', code: '<h1 class="display-3">Display 3</h1>', description: 'Medium-large display heading', preview: '<h1 class="display-3" style="font-size: 4rem; font-weight: 300; line-height: 1.2;">Display 3</h1>' },
            { name: 'Display 4', code: '<h1 class="display-4">Display 4</h1>', description: 'Medium display heading', preview: '<h1 class="display-4" style="font-size: 3.5rem; font-weight: 300; line-height: 1.2;">Display 4</h1>' },
            { name: 'Display 5', code: '<h1 class="display-5">Display 5</h1>', description: 'Small-medium display heading', preview: '<h1 class="display-5" style="font-size: 3rem; font-weight: 300; line-height: 1.2;">Display 5</h1>' },
            { name: 'Display 6', code: '<h1 class="display-6">Display 6</h1>', description: 'Smallest display heading', preview: '<h1 class="display-6" style="font-size: 2.5rem; font-weight: 300; line-height: 1.2;">Display 6</h1>' },
            { name: 'Lead Text', code: '<p class="lead">Lead paragraph text</p>', description: 'Make paragraph stand out', preview: '<p style="font-size: 1.25rem; font-weight: 300;">This is a lead paragraph. It stands out from regular paragraphs.</p>' },
            { name: 'Heading 1', code: '<h1>Heading 1</h1>', description: 'Standard h1 heading', preview: '<h1 style="font-size: 2.5rem; font-weight: 500;">Heading 1</h1>' },
            { name: 'Heading 2', code: '<h2>Heading 2</h2>', description: 'Standard h2 heading', preview: '<h2 style="font-size: 2rem; font-weight: 500;">Heading 2</h2>' },
            { name: 'Heading 3', code: '<h3>Heading 3</h3>', description: 'Standard h3 heading', preview: '<h3 style="font-size: 1.75rem; font-weight: 500;">Heading 3</h3>' },
            { name: 'Heading 4', code: '<h4>Heading 4</h4>', description: 'Standard h4 heading', preview: '<h4 style="font-size: 1.5rem; font-weight: 500;">Heading 4</h4>' },
            { name: 'Heading 5', code: '<h5>Heading 5</h5>', description: 'Standard h5 heading', preview: '<h5 style="font-size: 1.25rem; font-weight: 500;">Heading 5</h5>' },
            { name: 'Heading 6', code: '<h6>Heading 6</h6>', description: 'Standard h6 heading', preview: '<h6 style="font-size: 1rem; font-weight: 500;">Heading 6</h6>' },
            { name: 'Text Alignment', code: '<p class="text-start">Left</p>\n<p class="text-center">Center</p>\n<p class="text-end">Right</p>', description: 'text-start, text-center, text-end', preview: '<div><p style="text-align: left;">Left aligned text</p><p style="text-align: center;">Center aligned text</p><p style="text-align: right;">Right aligned text</p></div>' },
            { name: 'Text Colors', code: '<p class="text-primary">Primary</p>\n<p class="text-secondary">Secondary</p>\n<p class="text-success">Success</p>\n<p class="text-danger">Danger</p>\n<p class="text-warning">Warning</p>\n<p class="text-info">Info</p>', description: 'Bootstrap contextual text colors', preview: '<div><span style="color: #0d6efd;">Primary </span><span style="color: #6c757d;">Secondary </span><span style="color: #198754;">Success </span><span style="color: #dc3545;">Danger </span><span style="color: #ffc107;">Warning </span><span style="color: #0dcaf0;">Info</span></div>' },
            { name: 'Font Weight', code: '<p class="fw-light">Light weight</p>\n<p class="fw-normal">Normal weight</p>\n<p class="fw-bold">Bold weight</p>\n<p class="fw-bolder">Bolder weight</p>', description: 'fw-light, fw-normal, fw-bold, fw-bolder', preview: '<div><p style="font-weight: 300;">Light weight text</p><p style="font-weight: 400;">Normal weight text</p><p style="font-weight: 700;">Bold weight text</p><p style="font-weight: 900;">Bolder weight text</p></div>' },
            { name: 'Font Style', code: '<p class="fst-italic">Italic text</p>\n<p class="fst-normal">Normal text</p>', description: 'fst-italic, fst-normal', preview: '<div><p style="font-style: italic;">Italic text style</p><p style="font-style: normal;">Normal text style</p></div>' },
            { name: 'Text Transform', code: '<p class="text-lowercase">LOWERCASE</p>\n<p class="text-uppercase">uppercase</p>\n<p class="text-capitalize">capitalize</p>', description: 'uppercase, lowercase, capitalize', preview: '<div><p style="text-transform: lowercase;">LOWERCASED TEXT</p><p style="text-transform: uppercase;">uppercased text</p><p style="text-transform: capitalize;">capitalized text</p></div>' },
            { name: 'Text Decoration', code: '<p class="text-decoration-underline">Underline</p>\n<p class="text-decoration-line-through">Strikethrough</p>\n<p class="text-decoration-none">No decoration</p>', description: 'underline, line-through, none', preview: '<div><p style="text-decoration: underline;">Underlined text</p><p style="text-decoration: line-through;">Strikethrough text</p><p><a href="#" style="text-decoration: none; color: #0d6efd;">Link with no underline</a></p></div>' },
            { name: 'Line Height', code: '<p class="lh-1">Line height 1</p>\n<p class="lh-sm">Small line height</p>\n<p class="lh-base">Base line height</p>\n<p class="lh-lg">Large line height</p>', description: 'lh-1, lh-sm, lh-base, lh-lg', preview: '<div style="font-size: 0.9rem;"><p style="line-height: 1; margin-bottom: 0.5rem;">Line height 1 - tighter spacing for compact text</p><p style="line-height: 1.25; margin-bottom: 0.5rem;">Small line height - slightly compact</p><p style="line-height: 1.5; margin-bottom: 0.5rem;">Base line height - default spacing</p><p style="line-height: 2;">Large line height - more spacious text</p></div>' },
            { name: 'Monospace', code: '<p class="font-monospace">Monospace font</p>', description: 'Use monospace font family', preview: '<p style="font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;">This text uses a monospace font</p>' },
            { name: 'Blockquote', code: '<blockquote class="blockquote">\n  <p>A well-known quote.</p>\n</blockquote>\n<figcaption class="blockquote-footer">\n  Someone famous\n</figcaption>', description: 'Styled blockquote with citation', preview: '<blockquote style="font-size: 1.25rem; margin: 0;"><p style="margin-bottom: 0.5rem;">"A well-known quote, contained in a blockquote element."</p></blockquote><figcaption style="font-size: 0.875rem; color: #6c757d;">Someone famous in <cite>Source Title</cite></figcaption>' },
            { name: 'Lists Unstyled', code: '<ul class="list-unstyled">\n  <li>Item 1</li>\n  <li>Item 2</li>\n</ul>', description: 'Remove list bullets and left margin', preview: '<ul style="list-style: none; padding-left: 0; margin: 0;"><li>Unstyled list item 1</li><li>Unstyled list item 2</li><li>Unstyled list item 3</li></ul>' },
            { name: 'Lists Inline', code: '<ul class="list-inline">\n  <li class="list-inline-item">Item 1</li>\n  <li class="list-inline-item">Item 2</li>\n</ul>', description: 'Horizontal list items', preview: '<ul style="list-style: none; padding-left: 0; margin: 0;"><li style="display: inline-block; padding-right: 0.5rem;">Item 1</li><li style="display: inline-block; padding-right: 0.5rem;">Item 2</li><li style="display: inline-block;">Item 3</li></ul>' },
            { name: 'Mark / Highlight', code: '<p>You can use the mark tag to <mark>highlight</mark> text.</p>', description: 'Highlight text with yellow background', preview: '<p>You can use the mark tag to <mark style="background-color: #fcf8e3; padding: 0.2em;">highlight</mark> text.</p>' },
            { name: 'Small Text', code: '<p><small>This is small text</small></p>\n<p class="small">Also small text</p>', description: 'Smaller, secondary text', preview: '<p><small style="font-size: 0.875em;">This is small text using the small tag</small></p><p style="font-size: 0.875em;">This is small text using the .small class</p>' },
            { name: 'Abbreviations', code: '<p><abbr title="HyperText Markup Language">HTML</abbr></p>\n<p><abbr title="HyperText Markup Language" class="initialism">HTML</abbr></p>', description: 'Abbreviation with tooltip on hover', preview: '<p><abbr title="HyperText Markup Language" style="text-decoration: underline dotted; cursor: help;">HTML</abbr> - hover to see full text</p><p><abbr title="HyperText Markup Language" style="font-size: 0.875em; text-decoration: underline dotted; cursor: help;">HTML</abbr> - initialism (smaller)</p>' }
        ]
    },
    components: {
        title: 'Components',
        items: [
            { name: 'Button', code: '<button class="btn btn-primary">Button</button>', description: 'Primary action button' },
            { name: 'Card', code: '<div class="card"><div class="card-body">...</div></div>', description: 'Flexible content container' },
            { name: 'Alert', code: '<div class="alert alert-warning">...</div>', description: 'Contextual feedback messages' },
            { name: 'Badge', code: '<span class="badge bg-primary">New</span>', description: 'Small count and labeling component' },
            { name: 'Navbar', code: '<nav class="navbar navbar-expand-lg">...</nav>', description: 'Responsive navigation header' },
            { name: 'Modal', code: '<div class="modal" tabindex="-1">...</div>', description: 'Dialog overlay component' }
        ]
    },
    utilities: {
        title: 'Utility Classes',
        items: [
            { name: 'Margin', code: '<div class="m-3">...</div>', description: 'm-{0-5}, mt-, mb-, ms-, me-, mx-, my-' },
            { name: 'Padding', code: '<div class="p-3">...</div>', description: 'p-{0-5}, pt-, pb-, ps-, pe-, px-, py-' },
            { name: 'Display', code: '<div class="d-flex">...</div>', description: 'd-none, d-block, d-flex, d-grid, d-inline' },
            { name: 'Flexbox', code: '<div class="d-flex justify-content-center">...</div>', description: 'justify-content-, align-items-, flex-direction-' },
            { name: 'Spacing', code: '<div class="gap-3">...</div>', description: 'Gap spacing for flex/grid containers' },
            { name: 'Borders', code: '<div class="border border-primary">...</div>', description: 'border, border-{top|end|bottom|start}' }
        ]
    },
    forms: {
        title: 'Forms',
        items: [
            { name: 'Form Control', code: '<input class="form-control" type="text">', description: 'Textual form input' },
            { name: 'Form Select', code: '<select class="form-select">...</select>', description: 'Custom select menu' },
            { name: 'Checkbox', code: '<input class="form-check-input" type="checkbox">', description: 'Checkbox input' },
            { name: 'Input Group', code: '<div class="input-group">...</div>', description: 'Extend form controls with text/buttons' },
            { name: 'Validation', code: '<input class="form-control is-valid">', description: 'is-valid, is-invalid states' },
            { name: 'Floating Label', code: '<div class="form-floating">...</div>', description: 'Floating label inputs' }
        ]
    },
    javascript: {
        title: 'JavaScript Components',
        items: [
            { name: 'Collapse', code: '<div class="collapse" id="example">...</div>', description: 'Toggle visibility with data-bs-toggle' },
            { name: 'Dropdown', code: '<div class="dropdown">...</div>', description: 'Toggleable contextual overlay' },
            { name: 'Toast', code: '<div class="toast">...</div>', description: 'Lightweight notification' },
            { name: 'Tooltip', code: 'data-bs-toggle="tooltip" title="..."', description: 'Requires JavaScript initialization' },
            { name: 'Offcanvas', code: '<div class="offcanvas offcanvas-start">...</div>', description: 'Hidden sidebar component' },
            { name: 'Carousel', code: '<div class="carousel slide">...</div>', description: 'Cycling slideshow component' }
        ]
    }
};
