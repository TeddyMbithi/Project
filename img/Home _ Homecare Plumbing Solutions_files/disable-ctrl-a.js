// document.addEventListener("keydown", function (e) {
//     var dr_custom_options = window.dr_custom_options;

//     if (dr_custom_options && dr_custom_options.disable_ctrl_a) {
//         // Check if the key combination is Ctrl+A (Select All)
//         if (e.ctrlKey && e.keyCode === 65) {
//             console.log("Ctrl+A was pressed.");
//             e.preventDefault(); // Prevent the select all action
//         }
//     }
// });


// document.addEventListener("keydown", function (e) {
//     var dr_custom_options = window.dr_custom_options;

//     if (dr_custom_options && dr_custom_options.disable_ctrl_a) {
//         // Check if the key combination is Ctrl+A (Select All)
//         if (e.ctrlKey && e.key === 'a') {
//             e.preventDefault(); // Prevent the select all action
//         }
//     }
// });
document.addEventListener("keydown", function (e) {
    if (e.ctrlKey && e.key === "a") {
        e.preventDefault();
        return false;
    }
});

//for browser menu selection
document.addEventListener("selectstart", function (e) {
    var dr_custom_options = window.dr_custom_options; // Get the options defined in the PHP code

    if (dr_custom_options && dr_custom_options.disable_ctrl_a) {
        e.preventDefault();
        return false;
    }
});