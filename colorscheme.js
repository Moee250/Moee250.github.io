
document.addEventListener('DOMContentLoaded', function() {
    const lightButton = document.getElementById('lightScheme');
    const darkButton = document.getElementById('darkScheme');
    const body = document.body;

    // Function to remove all color scheme classes
    function removeAllColorSchemes() {
        body.classList.remove('light-scheme', 'dark-scheme');
    }

    lightButton.addEventListener('click', function() {
        removeAllColorSchemes();
        body.classList.add('light-scheme');
    });

    darkButton.addEventListener('click', function() {
        removeAllColorSchemes();
        body.classList.add('dark-scheme');
    });
});
