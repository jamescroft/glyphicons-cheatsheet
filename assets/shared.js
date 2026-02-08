function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function copyToClipboard(text, button) {
    navigator.clipboard.writeText(text).then(() => {
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        button.classList.add('bg-green-100');
        setTimeout(() => {
            button.textContent = originalText;
            button.classList.remove('bg-green-100');
        }, 2000);
    });
}

function setupAutoLoadMore(target, onLoadMore, state) {
    if (state && state.loadMoreObserver) {
        state.loadMoreObserver.disconnect();
        state.loadMoreObserver = null;
    }

    const triggerLoadMore = () => {
        if (state && state.autoLoadInProgress) return;
        if (state) state.autoLoadInProgress = true;
        if (target) {
            target.classList.add('loading');
            const text = target.querySelector('.load-more-text');
            if (text) text.textContent = 'Loading next batch...';
        }
        setTimeout(() => {
            onLoadMore();
        }, 1000);
    };

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    triggerLoadMore();
                }
            });
        }, { root: null, rootMargin: '200px 0px', threshold: 0.01 });
        observer.observe(target);
        if (state) state.loadMoreObserver = observer;
    } else {
        const handler = () => {
            const rect = target.getBoundingClientRect();
            if (rect.top <= window.innerHeight + 200) {
                window.removeEventListener('scroll', handler);
                triggerLoadMore();
            }
        };
        window.addEventListener('scroll', handler, { passive: true });
        handler();
    }
}
