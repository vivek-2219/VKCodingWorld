function toggleMenu(){
    let navigation = document.getElementById('navigation')
    if (navigation.style.height != '0vh') {
        navigation.style.height = '0vh';
    }
    else {
        navigation.style.height = '100vh'
    }
}