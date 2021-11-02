<script>
  import { tick } from "svelte";
  export let mask;
  export let value;

  function getDigits(value) {
    let newValue = "";
    for (const char of value) {
      if (char >= "0" && char <= "9") newValue += char;
    }
    return newValue;
  }

  function maskValue(digits) {
    const { length } = digits;
    if (length === 0) return "";

    let value = "";
    let index = 0;
    for (const char of mask) {
      if (char === "9") {
        const nextChar = digits[index++];
        if (!nextChar) break;
        value += nextChar;
      } else if (index < length) {
        value += char;
      }
    }
    return value;
  }

  function handleKeydown(event) {
    if (event.key !== "Backspace") return;

    const { target } = event;
    let { selectionStart, selectionEnd } = target;

    setTimeout(async () => {
      value = maskValue(getDigits(target.value));

      await tick();

      if (selectionStart === selectionEnd) selectionStart--;
      target.setSelectionRange(selectionStart, selectionStart);
    });
  }

  function handleKeypress(event) {
    setTimeout(async () => {
      const { target } = event;
      let { selectionStart } = target;

      value = maskValue(getDigits(target.value));

      await tick();

      if (selectionStart === value.length - 1) selectionStart++;

      const maskChar = mask[selectionStart - 1];
      if (maskChar !== "9") selectionStart++;

      target.setSelectionRange(selectionStart, selectionStart);
    });
  }
</script>

<input
  maxlength={mask.length}
  on:keydown={handleKeydown}
  on:keypress={handleKeypress}
  placeholder={mask}
  bind:value
/>
