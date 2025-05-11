document.addEventListener("keydown", function (e) {
    var dr_custom_options = window.dr_custom_options; // Get the options defined in the PHP code

    // Check if the "Disable Copy" option is enabled
    if (dr_custom_options && dr_custom_options.disable_copy && dr_custom_options.copy_message.trim() !== '') { // && dr_custom_options.copy_message.trim() !== '' | if is not empty then show copy message
        // Check if the key combination is Ctrl+C (Copy)
        if (e.ctrlKey && e.keyCode === 67) {
            e.preventDefault(); // Prevent the copy action
            alert(dr_custom_options.copy_message); // Display a custom message (optional)
        }
    }
});


// document.addEventListener("copy", function (e) {
//     var dr_custom_options = window.dr_custom_options; // Get the options defined in the PHP code

//     // Check if the "Disable Copy" option is enabled
//     if (dr_custom_options && dr_custom_options.disable_copy) {
//         e.preventDefault(); // Prevent the default copy action
//         alert(dr_custom_options.copy_message); // Display a custom message
//     }
// });


document.addEventListener("copy", function (e) {
    console.log("Copy event triggered.");
    e.preventDefault(); // Prevent the default copy action
    var dr_custom_options = window.dr_custom_options;

    if (dr_custom_options && dr_custom_options.disable_copy && dr_custom_options.copy_message.trim() !== '') {
        console.log("Copy is disabled.");
        e.preventDefault(); // Prevent the default copy action
        alert(dr_custom_options.copy_message); // Display a custom message
    }
});

