<script>
  import HtmlPreview from './HtmlPreview.svelte';
  import MaskedInput from './MaskedInput.svelte';
  let phone = '';
  import Dialog from './Dialog.svelte';
  let dialog;
  import Dnd from './Dnd.svelte';
</script>

<div class="chap">
  <h1>chap7: DOM interactions</h1>

  <div class="example">
    <h2>HTML preview example</h2>
    <HtmlPreview />
  </div>

  <div class="example">
    <h2>The tick function</h2>
    <div>
      Phone
      <MaskedInput mask="(999)999-9999" bind:value={phone} />
    </div>
    <div>
      phone = {phone}
    </div>
    <p>
      tick() is super useful (base on my react experience), coz this can ensure
      some state changes to occur first
    </p>
  </div>

  <div class="example">
    <h2>Dialog example</h2>
    <div>
      <button on:click={() => dialog.showModal()}>Open Dialog</button>
    </div>
    <Dialog title="Test Dialog" bind:dialog>
      My dialog content is very, very long.<br />
      It will not wrap by default.
    </Dialog>
  </div>

  <div class="example">
    <h2>Drag and Drop example</h2>
    <Dnd />
  </div>
</div>
