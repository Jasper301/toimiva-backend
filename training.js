$(document).ready(function () {
    // Function to add new input fields
    $("#rowAdder").click(function () {
        // Lisää uusi rivi välittömästi, vaikka "Sets and Reps" -kenttä ei olisi täytetty oikein
        const newRow = '<div class="row">' +
                        '<div class="col-lg-12">' +
                            '<div class="input-group m-3">' +
                                '<div class="input-group-prepend">' +
                                    '<button class="btn btn-danger delete-row" type="button">' +
                                        '<i class="bi bi-trash"></i> Delete' +
                                    '</button>' +
                                '</div>' +
                                '<input type="text" class="form-control m-input exerciseInput" placeholder="Exercise">' +
                                '<input type="text" class="form-control m-input setsRepsInput" placeholder="Sets and Reps">' +
                                '<input type="text" class="form-control m-input weightInput" placeholder="Weight">' +
                            '</div>' +
                        '</div>' +
                    '</div>';
        $('#newInputsContainer').append(newRow);
    });

    // Function to delete a row
    $("body").on("click", ".delete-row", function () {
        $(this).closest(".row").remove();
    });

    // Form submission validation
    $("form").submit(function (event) {
        // Exercise validation
        $(".exerciseInput").each(function () {
            var exerciseValue = $(this).val().trim();
            var regex = /^[a-zA-Z]+$/; // Regular expression for alphabetic characters

            if (!regex.test(exerciseValue)) {
                alert("Please enter Exercise using only alphabetic characters.");
                event.preventDefault(); // Stop form submission
                return false; // Stop further processing
            }
        });

        // Sets and Reps validation
        $(".setsRepsInput").each(function () {
            var setsRepsValue = $(this).val().trim();
            var regex = /^\d+x\d+$/; // Regular expression for "Sets and Reps" format (e.g., 3x10)

            if (!regex.test(setsRepsValue)) {
                alert("Please enter Sets and Reps in the correct format, e.g., '3x10'");
                event.preventDefault(); // Stop form submission
                return false; // Stop further processing
            }
        });

        // Weight validation
        $(".weightInput").each(function () {
            var weightValue = $(this).val().trim();
            var regex = /^\d+$/; // Regular expression for numeric characters

            if (!regex.test(weightValue)) {
                alert("Please enter Weight using only numeric characters.");
                event.preventDefault(); // Stop form submission
                return false; // Stop further processing
            }
        });
    });
});

$(document).ready(function() {
    // Function to handle logout
    function logout() {
        // Tässä voit toteuttaa kirjautumisen ulos
        // Esimerkiksi lähettämällä pyynnön palvelimelle kirjautumisen ulos käsittelemiseksi
        // tai poistamalla paikallisesti tallennetut kirjautumistiedot
        alert("Kirjauduttu ulos"); // Esimerkki ilmoitus
        // Voit ohjata käyttäjän esimerkiksi kirjautumissivulle
        // window.location.href = "kirjautumissivu.html";
    }

    // Lisää tapahtumankäsittelijä napille
    $("#logoutButton").click(function() {
        logout();
        window.location.href = 'index.html';
    });
});
