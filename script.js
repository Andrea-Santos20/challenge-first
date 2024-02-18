function criptografar(text) {
  text = text.replace(/a/g, 'ai');
  text = text.replace(/e/g, 'enter');
  text = text.replace(/i/g, 'imes');  
  text = text.replace(/o/g, 'ober');
  text = text.replace(/u/g, 'ufat');
  return text;
}

function descriptografar(text) {
  text = text.replace(/ai/g, 'a');
  text = text.replace(/enter/g, 'e');
  text = text.replace(/imes/g, 'i');  
  text = text.replace(/ober/g, 'o');
  text = text.replace(/ufat/g, 'u');
  return text;
}

function cripto() {
  let textOriginal = document.querySelector('.container_textarea').value;
  let textEncrypted = criptografar(textOriginal);
  document.getElementById('response_textarea').value = textEncrypted;
}

function descripto() {
  let textEncrypted = document.querySelector('.container_textarea').value;
  let textDecrypted = descriptografar(textEncrypted);
  document.getElementById('response_textarea').value = textDecrypted;
}

function copyMessage() {
  let text = document.getElementById('response_textarea').value;
  navigator.clipboard.writeText(text)
    .then(() => alert('Texto copiado com sucesso!'))
    .catch(err => console.error('Erro ao copiar texto: ', err));
}
