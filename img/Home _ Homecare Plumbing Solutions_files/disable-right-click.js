// JavaScript code
document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
    
    // Check if the right-clicked element is an image
    if (e.target.tagName === 'IMG' && typeof dr_custom_options !== 'undefined' && dr_custom_options.image_click_message !== '') {
        alert(dr_custom_options.image_click_message); // Display image-specific message
    } else if (typeof dr_custom_options !== 'undefined' && dr_custom_options.message !== '') {
        alert(dr_custom_options.message); // Display default message for other elements
    }
}, false);

document.addEventListener("dragstart", function(e) {
    // Prevent dragging of images
    if (e.target.tagName === 'IMG' && typeof dr_custom_options !== 'undefined' && dr_custom_options.disable_image_drag) {
        e.preventDefault();
    }
}, false);

document.onkeydown = function(e) {
    if (
        e.ctrlKey && 
        (
            (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 117) ||
            (dr_custom_options.disable_f12 && e.keyCode === 123) || // F12
            (dr_custom_options.disable_ctrl_u && e.keyCode === 85) || // Ctrl+U
            (dr_custom_options.disable_ctrl_i && e.keyCode === 73)    // Ctrl+I
        )
    ) {
        return false;
    } else if (e.keyCode === 123 && dr_custom_options.disable_f12) {
        e.preventDefault(); // Prevent F12 from opening developer tools
    } else if (typeof dr_custom_options !== 'undefined' && dr_custom_options.disable_keyboard) {
        e.preventDefault(); // Disable keyboard events if the option is enabled
    } else {
        return true;
    }
};

document.addEventListener("keydown", function(e) {
    if (e.ctrlKey && e.shiftKey && e.keyCode === 73 && dr_custom_options.disable_dev_tools) {
        e.preventDefault();
    }
}, false);



document.addEventListener('DOMContentLoaded', function () {
    const textSelectionOption = document.getElementById('dr_enable_text_selection');

    if (textSelectionOption) {
        textSelectionOption.addEventListener('change', function () {
            if (this.checked) {
                // Enable text selection protection
                document.body.classList.add('no-select');
            } else {
                // Disable text selection protection
                document.body.classList.remove('no-select');
            }
        });
    }

    // Check if text selection should be initially disabled
    if (typeof dr_custom_options !== 'undefined' && dr_custom_options.disable_text_selection) {
        // Disable text selection
        document.body.classList.add('no-select');
    }
});


document.addEventListener("keydown", function (e) {
    var dr_custom_options = window.dr_custom_options;

    if (dr_custom_options && dr_custom_options.disable_ctrl_a) {
        // Check if the key combination is Ctrl+A (Select All)
        if (e.ctrlKey && e.key === 'a') {
            e.preventDefault(); // Prevent the select all action
        }
    }
});
