import { defaults } from "./defaults";

class AnimeInViewport {
    constructor(targets, options, rootMargin, threshold) {
        this.targets = [targets];
        this.options = options;
        this.rootMargin = rootMargin;
        this.threshold = threshold;
        this.init();
    }

    init() {
        this.initOnLoad();
        this.initOnScroll();
    }

    initOnLoad() {
        this.initBase();
    }

    initOnScroll() {
        let that = this;

        window.addEventListener('scroll', function () {
            that.initBase();
        });
    }

    initBase() {
        let that = this;

        that.targets.forEach(function(targetElement) {
            let observer = new IntersectionObserver(
                function(entries, observer) {
                    entries.forEach((entry, index) => {
                        if(entry.isIntersecting) {
                            if(!entry.target.classList.contains('animated')) {
                                that.mergeOptions(entry, index, entries.length);
                                entry.target.classList.add('animated');
                            }
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

        })
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