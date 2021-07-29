# anime-in-viewport

**Usage**

```js 
    //Connect Anime.js
    <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js" integrity="sha512-z4OUqw38qNLpn1libAN9BsoDx6nbNFio5lA6CuTp9NlK83b89hgyCVq+N5FdBJptINztxn1Z3SaKSKUS5UP60Q==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    //Connect anime-in-viewport
    <script src="./dist/anime-in-viewport.min.js"></script>
```

**Example:**
```js 
    //Init your animation

    AnimeInViewport.init('.item', (el, i) => ({
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
Function which should return the object of Anime.js properties 

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
