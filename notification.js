// notification.js
document.addEventListener('DOMContentLoaded', function() {
    
    function showNotification(message, type) {
        const notification = document.getElementById('notification');
        notification.textContent = message;
        notification.classList.add(type);

        // Automatically hide the notification after 3 seconds
        setTimeout(() => {
            notification.textContent = '';
            notification.classList.remove(type);
        }, 3800);
    }

    showNotification('This is a notification ! ', 'success');
});
