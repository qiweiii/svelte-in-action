<script>
  import Flip from './Flip.svelte';
  import { tweened } from 'svelte/motion';
  import Pie from './Pie.svelte';
  import Tweened from './Tweened.svelte';
  import Transition from './Transition.svelte';

  let percent = 0;
  const store = tweened(0, { duration: 1000 });
  $: store.set(percent || 0);

  // fade transition + flip animation
  import ButtonList from './ButtonList.svelte';
  import CrossFade from './CrossFade.svelte';
  import Draw from './Draw.svelte';
  import Custom from './Custom.svelte';
  let left = ['red', 'orange', 'yellow', 'green'];
  let right = ['blue', 'purple'];

  function move(event, from, to) {
    const text = event.target.textContent.trim();
    to.push(text);
    return [from.filter((t) => t !== text), to];
  }
  function moveLeft(event) {
    [right, left] = move(event, right, left);
  }
  function moveRight(event) {
    [left, right] = move(event, left, right);
  }
</script>

<div class="chap">
  <h1>Chap 10: Animation</h1>

  <p>
    transition directives: The fact that they are CSS-based rather than
    JavaScript-based means they do not block the main thread, which is good for
    performance.
  </p>
  <p>
    Svelte supports two kinds of animations: adding/removing an element, and
    changing a value.
  </p>

  <div class="example">
    <h2><code>svelte/easing</code> easing functions</h2>
    <p>
      Each animation has a default easing function that can be overridden with
      the easing option.
    </p>
    <p>
      The <code>linear</code> easing function is the most basic. It provides a smooth,
      constant rate of animation. The easing functions sine, quad, cubic, quart,
      quint, expo, and circ are all simple curves with only minor differences in
      their acceleration in the middle of an animation. The most extreme of these
      is expo.
    </p>
    <p>
      The easing functions <code>back</code>, <code>elastic</code>, and
      <code>bounce</code> are more interesting because they move forward and backward.
    </p>
    <div>
      Visualise easing functions here:
      <a href="https://svelte.dev/examples#easing">svelte.dev/examples#easing</a
      >
    </div>
  </div>

  <div class="example">
    <h2><code>svelte/animate</code> package: flip example</h2>
    <p>
      The svelte/animate package provides the <code>flip</code> function, which
      stands for
      <code>first</code>, <code>last</code>, <code>invert</code>,
      <code>play</code>.
    </p>
    <Flip />
  </div>

  <div class="example">
    <h2><code>svelte/motion</code> package: Pie example</h2>
    <p>
      The svelte/motion package provides the <code>spring</code> and
      <code>tweened</code> functions. These create writable stores whose values animate
      from old to new values.
    </p>
    <label>
      Percent
      <input type="number" min="0" max="100" bind:value={percent} />
    </label>
    <Pie size={200} percent={$store} />
  </div>

  <div class="example">
    <h2><code>svelte/motion</code> package: Tweened example</h2>
    <Tweened />
  </div>

  <div class="example">
    <h2><code>svelte/transition</code> package</h2>
    <p>
      The svelte/transition package provides the <code>crossfade</code> function
      and the transition directive values
      <code>blur, draw, fade, fly, scale, and slide</code>.
    </p>
    <Transition />
  </div>

  <div class="example">
    <h2>The fade transition and flip animation</h2>
    <div>Click a button to move it to the other list.</div>
    <p>
      It uses the fade transition, so the clicked button fades out of its
      current list and fades into its new list. It also uses the flip animation
      so buttons below the button being moved slide up to fill the vacated
      space.
    </p>
    <ButtonList list={left} moveFn={moveRight} />
    <ButtonList list={right} moveFn={moveLeft} />
  </div>

  <div class="example">
    <h2><code>crossfade</code> example ⭐️</h2>
    <CrossFade />
  </div>

  <div class="example">
    <h2>The <code>draw</code> transition ⭐️</h2>
    Here’s a quick SVG refresher:

    <p>The M command moves to a given x and y location.</p>

    <p>The h command draws a horizontal line with a given dx.</p>

    <p>The v command draws a vertical line with a given dy.</p>

    <p>The l command draws a line with a given dx and dy.</p>

    <div>
      This example draws a house with a single SVG <code>path</code> element
      that uses <code>transition:draw</code>.
    </div>
    <Draw />
  </div>

  <div class="example" style="position: relative">
    <h2>Custom transition</h2>
    <Custom />
  </div>
</div>
