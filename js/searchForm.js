window.addEventListener('load', function () {
    
    var results = document.getElementById('results');
    var searchBtn = document.getElementById('searchBtn');
    searchBtn.addEventListener('click', function() {
        results.innerHTML = 'Hola<br/>mundo <div style="background-color:blue;">como estas</div>';

        /*var statusField = document.getElementById('status');
        var status = statusField.options[statusField.selectedIndex].value;*/

        var locationField = document.getElementById('location');
        var selectedLocation = locationField.selectedIndex;
        var location = locationField.options[selectedLocation].value;
        console.log(location);
    });
});