# Day 01 - Generative Computer Graphics

This is a documentation/journal about two weeks of creating generative computer graphics in a course at HSLU. Each day a topic got presented as well as different sources of already existing art for inspiration. On the first day we got an introduction and a bit of history how graphics were generated in the early days of computation. This is how we had to start as well: generate graphics on paper. 

The resources shared with us can be found ![here](https://github.com/digitalideation/gencg_h2101).

## 1. Generative Graphics on Paper

<br>

### Sprouts
![Sprouts](content/day01/sprouts.jpg)

Rules:
1. Start with any number of dots
2. Connect two dots without crossing a line
3. Create a dot in the middle of that new line
4. No dot is allowed to have more than 3 lines connecting it.

>I thought about implementing that in code. <br> I then thought about it a bit more and decided against it, haha. <br>An easy thing to do by hand but quite a difficult task to complete with non straight lines.

<br>

### [Networks](https://conditionaldesign.org/workshops/networks/)
![Networks](content/day01/dontremember.jpg)

Rules:
1. Each drawing consists of 4 elements: lines, circles, arrows and a title
2. Each person creates a drawing with one element and passes their drawing to the next
3. Continue this until every drawing consists of all 4 elements

>That one was fun
<br> Knowing how each drawing got completed with every step passing them around, I can appreciate the drawings quite a bit more. The top half started with the drawings first, the lower with titles.

<br>

### Beach
![Beach](content/day01/beach.jpg)

Rules:
1. Multiple people each with their own pen draw a dot on a piece of paper
2. The dots have to be placed as far apart from the others as possible

>The urge to break the rules was big in this one : )

## 2. Getting Comfortable with p5.js 
We already got a bit of experience p5.js last semester, the main library we would use the coming days to generate graphics. 

<br>

### Sollewit: Wall Drawing 118
To get back into the habit of coding with p5 most of us started by recreating this picture:

![Inspiration](content/day01/test.jpg)

<br>

### My Version
In my ![recreation](content/day01/embed.html) I also animated the circle to bounce within the window's border and played a bit with colors.

{% raw %}
<iframe src="content/day01/01/embed.html" width="800" height="800" frameborder="no"></iframe>
{% endraw %}

