# Day 06 - Faces
The second week started with the task to creat something with faces.<br>
I thought about a robot that would talk in some sine wave chatter.

Since I never worked with sound in p5.js I explored a bit and found an oscilator in p5's separate sound library. The [example](https://p5js.org/reference/#/p5.Oscillator) in the resources became my baseline of controlling the pitch and volume of the sine wave.

### 1. Version

While clicking on the screen you should hear a sound depending on where your mouse cursor lies.

{% raw %}
<iframe src="content/day06/01/embed.html" width="800" height="800" frameborder="no"></iframe>
{% endraw %}

### 2. Mouth Movement

Next step was to give that face a fitting expression to the sound.
Also a couple of colleagues helped me with the square's shapes to make it look cuter.

{% raw %}
<iframe src="content/day06/01-2/embed.html" width="800" height="800" frameborder="no"></iframe>
{% endraw %}

### 3. Following Mouse Cursor - Eyes

After that I thought about making it follow my mouse cursor.
It took a bit of vector math to create that effect

{% raw %}
<iframe src="content/day06/01-3/embed.html" width="800" height="800" frameborder="no"></iframe>
{% endraw %}

### 4. Following Mouse Cursor - Mouth

Again feedback of my colleagues suggesting I should try having its mouth follow the cursor as well. Subtle effect but I liked it.

{% raw %}
<iframe src="content/day06/01-4/embed.html" width="800" height="800" frameborder="no"></iframe>
{% endraw %}

### 5. Eye Pinching

Lastly the suggestion came to make it pinch its eyes "in the effort" to make a louder sound. 

{% raw %}
<iframe src="content/day06/01-5/embed.html" width="800" height="800" frameborder="no"></iframe>
{% endraw %}

That was a fun project :) <br>
Amazing how expressive you can get with just 3 rectangles.

And there is so much more you could do with that cute little guy:
- Idle animation looking around
- Make it start to sweat, when it has to hold high volume note
- The initially planned random chatter
- A second one to create a choir
