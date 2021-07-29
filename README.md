# anime-in-viewport

**Usage**

```js 
    <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js" integrity="sha512-z4OUqw38qNLpn1libAN9BsoDx6nbNFio5lA6CuTp9NlK83b89hgyCVq+N5FdBJptINztxn1Z3SaKSKUS5UP60Q==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="./dist/anime-in-viewport.min.js"></script>
```

**Example:**
```js 
 AnimeInViewport.init('.item', (el, i) => ({
     translateY: ['100px', 0],
     opacity: [0, 1],
     easing: "easeOutExpo",
     duration: 1000,
     delay: () => {
         return i * 300
     }
 }), '0px', 1.0)
```
     
**Params**

##### `targets`
Target element.

*Type:* String  
*Required:* true

##### `options`
Function which should return the object of Anime.js properties 

*Type:* Function  
*Required:* true

##### `rootMargin`
Native Intersection Observer parameter for margin around the target element.

*Type:* String   
*Required:* `false`  
*Default:* `0px`  

##### `threshold`
Native Intersection Observer parameter which indicate at what percentage of the target's visibility the observer's callback should be executed.

*Type:* Number   
*Required:* `false`  
*Default:* `0`  