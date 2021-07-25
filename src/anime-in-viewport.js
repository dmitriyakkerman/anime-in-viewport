class AnimeInViewport {
    constructor(targets, options) {
        this.targets = [targets];
        this.options = options;
        this.init();
    }

    init() {
        this.initOnLoad();
        this.initOnScroll();
    }

    initBase() {
        let that = this;

        that.targets.forEach(function(targetElement) {
            let observer = new IntersectionObserver(
                function(entries, observer) {
                    entries.forEach((entry, index) => {
                        if(entry.isIntersecting) {
                            if(!entry.target.classList.contains('animated')) {
                                anime(Object.assign({
                                    targets: entry.target
                                }, that.options(entry, index, entries.length)));
                                entry.target.classList.add('animated');
                            }
                        }
                    });
                },
                {
                    rootMargin: '0px',
                    threshold: 0
                });

            let targets = document.querySelectorAll(targetElement);
            targets.forEach(function(target) {
                observer.observe(target);
            });

        })
    }

    initOnLoad() {
        this.initBase();
    }

    initOnScroll() {
        let that = this;

        window.addEventListener('scroll', function () {
            that.initBase();
        })
    }
}

AnimeInViewport.init = function(targets, options) {
    return new AnimeInViewport(targets, options)
};

window.AnimeInViewport = AnimeInViewport;