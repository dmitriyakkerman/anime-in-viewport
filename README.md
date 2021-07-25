# anime-in-viewport

Simple example:

     AnimeInViewport.init('.item', (el, i) => ({
         translateX: 250,
         delay: () => i * 100
     }), '0px', 1.0)