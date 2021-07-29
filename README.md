# anime-in-viewport

![anime-in-viewport](/examples/example.gif)

**Usage**

1.Connect Anime.js and anime-in-viewport scripts.

```js 
<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js" integrity="sha512-z4OUqw38qNLpn1libAN9BsoDx6nbNFio5lA6CuTp9NlK83b89hgyCVq+N5FdBJptINztxn1Z3SaKSKUS5UP60Q==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="anime-in-viewport.min.js"></script>
```

2.Init your animation

```js
AnimeInViewport.init('.item', (el, i, l) => ({
    translateY: ['100px', 0],
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1000,
    delay: () => {
        return i * 300
    }
}), '0px', 0)
```
     
**Params**

##### `param1`
Target element.

*Type:* String  
*Required:* true

##### `param2`
Function which should return the object of Anime.js properties. Accepts 3 arguments: current target element, index of current target element and length of target elements. 

*Type:* Function  
*Required:* true

##### `param3`
RootMargin. Native [Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) parameter for margin around the target element.

*Type:* String   
*Required:* `false`  
*Default:* `0px`  

##### `param4`
Threshold. Native [Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) parameter which indicate at what percentage of the target's visibility the animation should be executed.

*Type:* Number   
*Required:* `false`  
*Default:* `0`  
