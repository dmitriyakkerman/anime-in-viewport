import { defaults } from "./defaults";

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.AnimeInViewport = factory();
    }
}(typeof self !== 'undefined' ? self : this, function () {

    class AnimeInViewport {
        constructor(targets, options, rootMargin, threshold) {

            if(typeof targets !== 'string') {
                throw new Error('Type of "targets" option should be a "string"');
            }

            if (typeof options !== 'function') {
                throw new Error('Specify animation options');
            }

            this.targets = [targets];
            this.options = options;
            this.rootMargin = rootMargin;
            this.threshold = threshold;
            this.init();
        }

        init() {
            let that = this;

            that.targets.forEach(function(targetElement) {
                let observer = new IntersectionObserver(
                    function(entries, observer) {
                        entries.forEach((entry, index) => {
                            if(entry.isIntersecting) {
                                that.mergeOptions(entry, index, entries.length);
                                observer.unobserve(entry.target);
                            }
                        });
                    },
                    {
                        rootMargin: that.rootMargin || defaults.rootMargin,
                        threshold: that.threshold || defaults.threshold,
                    });

                let targets = document.querySelectorAll(targetElement);
                targets.forEach(function(target) {
                    observer.observe(target);
                });
            });
        }

        mergeOptions(entry, index, length) {
            anime(
                Object.assign({ targets: entry.target }, this.options(entry, index, length))
            );
        }
    }

    AnimeInViewport.init = function(targets, options, rootMargin, threshold) {
        return new AnimeInViewport(targets, options, rootMargin, threshold)
    };

    window.AnimeInViewport = AnimeInViewport;

    return AnimeInViewport;
}));