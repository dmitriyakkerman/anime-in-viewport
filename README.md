# anime-in-viewport

**Simple example:**
```js 
 AnimeInViewport.init('.item', (el, i) => ({
     translateX: 250,
     delay: () => i * 100
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
Native Intersection Observer parameter which indicate at what percentage of the target's visibility the animation should be executed.

*Type:* Number   
*Required:* `false`  
*Default:* `0`  
