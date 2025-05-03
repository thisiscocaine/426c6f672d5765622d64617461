// Enhanced Security Module for Static Content (Use with server-side protections)
(function() {
    'use strict';

    // Self-protecting script initialization
    if (typeof window.trustedTypes !== 'undefined') {
        window.trustedTypes.createPolicy('default', {
            createHTML: (string) => string.replace(/script/gi, 'blocked')
        });
    }

    // Enhanced DevTools detection
    const devTools = {
        isOpen: false,
        threshold: 160,
        lastDate: Date.now(),
        checker: function() {
            const widthDiff = window.outerWidth - window.innerWidth;
            const heightDiff = window.outerHeight - window.innerHeight;
            const timeDiff = Date.now() - this.lastDate;

            if ((widthDiff > this.threshold || heightDiff > this.threshold) && 
                timeDiff > 1000) {
                this.isOpen = true;
                this.triggerResponse();
            }
            this.lastDate = Date.now();
        },
        triggerResponse: function() {
            document.body.innerHTML = '<div style="display:none"></div>';
            window.stop();
            window.location.replace('about:blank');
        }
    };

    setInterval(() => devTools.checker(), 500);
    window.addEventListener('resize', () => devTools.checker());

    // Advanced Event Blocking
    const blockEvents = ['cut', 'copy', 'paste', 'contextmenu', 
                        'keydown', 'selectstart', 'dragstart'];
    
    blockEvents.forEach(event => {
        document.addEventListener(event, function(e) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }, { capture: true, passive: false });
    });

    // Modern Key Binding Protection
    const blockedKeys = new Set([
        'F12', 'PrintScreen', 'Insert', 'Pause', 'ContextMenu',
        'F5', 'F11', 'Meta', 'OS', 'ScrollLock'
    ]);

    document.addEventListener('keydown', e => {
        const comboKeys = e.ctrlKey || e.altKey || e.metaKey;
        const blockedCombos = (e.shiftKey && e.key === 'F12') || 
                            (comboKeys && ['i','j','u','s','c'].includes(e.key.toLowerCase()));

        if (blockedKeys.has(e.key) || blockedCombos || e.code.includes('F12')) {
            e.preventDefault();
            e.stopImmediatePropagation();
            window.dispatchEvent(new Event('resize'));
        }
    }, true);

    // DOM Integrity Protection
    const domLock = {
        originalHTML: document.documentElement.outerHTML,
        checksum: null,
        init: function() {
            this.checksum = btoa(unescape(encodeURIComponent(this.originalHTML)));
            setInterval(() => this.verifyDOM(), 3000);
        },
        verifyDOM: function() {
            const currentHTML = document.documentElement.outerHTML;
            const currentChecksum = btoa(unescape(encodeURIComponent(currentHTML)));
            
            if (currentChecksum !== this.checksum) {
                document.documentElement.innerHTML = this.originalHTML;
                window.location.reload();
            }
        }
    };
    domLock.init();

    // Visual Protection Layer
    const cssLock = `
        * {
            -webkit-touch-callout: none !important;
            -webkit-user-drag: none !important;
            pointer-events: none !important;
        }
        
        @media print {
            * {
                display: none !important;
            }
        }
    `;
    
    const styleNode = document.createElement('style');
    styleNode.textContent = cssLock;
    styleNode.setAttribute('nonce', '{{server_generated_nonce}}');
    document.head.appendChild(styleNode);

    // Network Layer Protection
    Object.defineProperty(document, 'visibilityState', {
        get: () => 'hidden'
    });
    
    Object.defineProperty(document, 'hidden', {
        get: () => true
    });

    // Anti-Tampering Measures
    Object.freeze(document);
    Object.freeze(window);
    Object.seal(navigator);
})();
