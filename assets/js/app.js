// const secretKey = 'mySecretKey123';

function processText(mode) {
  const input = document.getElementById('input').value;

  // Validate input
  if (!validateInput(input)) {
    showToast('❌ Texto inválido. Use apenas letras minúsculas e sem acentos.');
    return;
  }

  let result;

  if (mode === 'encrypt') {
    result = encryptText(input);
  } else {
    result = decryptText(input);
  }

  document.getElementById('output').value = result;
}

function encryptText(text) {
  return text
    .replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat');
}

function decryptText(text) {
  return text
    .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ai/g, 'a')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u');
}

// function processText(mode) {
//   const input = document.getElementById('input').value;

//   // Validate input
//   if (!validateInput(input)) {
//     showToast('❌ Texto inválido. Use apenas letras minúsculas e sem acentos.');
//     return;
//   }

//   let result;

//   if (mode === 'encrypt') {
//     result = CryptoJS.AES.encrypt(input, secretKey).toString();
//   } else {
//     try {
//       result = CryptoJS.AES.decrypt(input, secretKey).toString(CryptoJS.enc.Utf8);
//       if (!result) {
//         throw new Error('Decryption failed');
//       }
//     } catch (error) {
//       result = 'Texto criptografado inválido ou chave incorreta';
//     }
//   }

//   document.getElementById('output').value = result;
// }

function validateInput(input) {
  // Regular expression to match only lowercase letters, numbers, and basic punctuation
  const regex = /^[a-z0-9 .,!?'-]*$/;
  return regex.test(input);
}

function copyToClipboard() {
  const output = document.getElementById('output');
  output.select();
  document.execCommand('copy');
  showToast('✨ Texto copiado com sucesso! ✨');
}

function clearInput() {
  document.getElementById('input').value = '';
}

function clearOutput() {
  document.getElementById('output').value = '';
}

function adjustTextareaHeights() {
  const input = document.getElementById('input');
  const output = document.getElementById('output');

  input.style.height = 'auto';
  output.style.height = 'auto';

  const maxHeight = Math.max(input.scrollHeight, output.scrollHeight);
  input.style.height = maxHeight + 'px';
  output.style.height = maxHeight + 'px';
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.innerText = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 4000);
}

window.addEventListener('load', adjustTextareaHeights);
window.addEventListener('resize', adjustTextareaHeights);
document.getElementById('input').addEventListener('input', adjustTextareaHeights);