function validarInput(input) {
    var regex = /[^a-z A-Z]/g;
    
    input.value = input.value.replace(regex, ""); 
    
    input.value = input.value.replace(/\b\w/g, function(l){ return l.toUpperCase() });
}