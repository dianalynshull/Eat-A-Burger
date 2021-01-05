$('.monch-btn').on('click', function() {
    const id = $(this).data("id");
    $.ajax("/api/burgers/" + id, {
        type: "PUT"
    }).then(() => {
        location.reload();
    })
})

$('.create-btn').on('click', function(e) {
    e.preventDefault();
    const burgerName = $('.create-input').val();
    if (burgerName) {
        const newBurger = {
            burger_name: burgerName
        }
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(() => {
            location.reload();
        })
    }
})