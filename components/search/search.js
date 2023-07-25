import debounce from '../../libraries/debounce.js'

export default function search() {  
    const  search = document.getElementById('search');
    const btnSend = document.getElementById('btn-search');
    const modal = document.getElementById('modal-search');
    let value;
    function onChange(e) {
        console.log(e.target.value)
        value = e.target.value
    }

    function onFocus(e) {
        let value = e.target.value;
        console.log(e);

            document.getElementById('btn-search').classList.add('blur');
            document.getElementById('search').classList.add('blur');
            
        } 
    function onBlur(e) {
        let value = e.target.value;  
        if (!value) {
            document.getElementById('btn-search').classList.remove('blur');
            document.getElementById('search').classList.remove('blur');
        }               
    }

    onChange = debounce(onChange, 500)
    
    search.addEventListener('keyup',onChange); 
    search.addEventListener('focus',onFocus); 
    search.addEventListener('blur',onBlur); 

    btnSend.addEventListener('click', function () {
        console.log('Click');
        modal.querySelector('figcaption').textContent = 'Message send: ' + value;
    })
}