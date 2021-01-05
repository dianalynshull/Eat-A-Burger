$('.monch-btn').on('click', function(e) {
    const id = $(this).data("id");
    $.ajax("/api/burgers/" + id, {
        type: "PUT"
    }).then(() => {
        location.reload();
    })
})