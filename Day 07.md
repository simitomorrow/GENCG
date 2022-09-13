# Day 03

## Animating the grid of Day 02
Yesterday one of the other participants created a generative maze with the gird pattern. He talked about rotating the different pieces, but it seemed to complex/tedious in p5js for the remaining time.

I liked that idea and began implementing it myself

![Maze Idea](content/day02/pattern01.jpg)

## Maze


{% raw %}
<iframe src="content/day02/02/embed.html" width="100%" height="800" frameborder="no"></iframe>
{% endraw %}

The code for this is really straight forward: draw white circles with random size, scaling with the mouse cursor's location.

```js
function draw() {
  background(100, 100, 100, 250)
  strokeWeight(5)
  radius = 150/mouseX*width
  console.log(mouseX)
  for (let i = 0; i < gridYAmount; i++) {
    for (let j = 0; j < gridXAmount; j++) {
      circle(tileHeight*(j+0.5), tileWidth*(i+0.5), random(radius))
    }
  }
}
```


## Rotating Maze