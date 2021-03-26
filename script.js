window.addEventListener('load', iniciar);
function iniciar() {
    var btn = document.getElementById('btn');
    btn.addEventListener('click', function() {
        var medida = prompt('Digite uma medida em metros');
        var km = medida / 1000;
        var hm = medida / 100;
        var dam = medida / 10;
        var dm = medida * 10;
        var cm = medida * 100;
        var mm = medida * 1000;
        document.getElementById('res01').textContent = (`${km} quilômetros(Km)`);
        document.getElementById('res02').textContent = (`${hm} qectômetros(Hm)`);
        document.getElementById('res03').textContent = (`${dam} decâmetros(Dam)`);
        document.getElementById('res04').textContent = (`${dm} decímetros(dm)`);
        document.getElementById('res05').textContent = (`${cm} centímetros(cm)`);
        document.getElementById('res06').textContent = (`${mm} milímetros(mm)`);
    })
}