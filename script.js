function convertToDollars(form) {
    form.rupee.value = form.dollar.value * 80
}
function convertToRs(form) {
    form.dollar.value = form.rupee.value / 80
}