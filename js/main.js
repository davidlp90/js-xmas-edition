const $form=document.querySelector('[name=formulario]')
const usarName = $form.nombre.value;
const userCity = $form.ciudad.value;
const userBehavior = $form.comportamiento.value;
const giftDescription = $form['descripcion-regalo'].value;

console.log(usarName)
console.log(userCity)
console.log(userBehavior)
console.log(giftDescription)