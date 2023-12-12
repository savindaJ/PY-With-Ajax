$('#btnSave').on('click',function () {
    $.ajax({
        url:"/test",
        type:'POST',
        contentType:"application/json",
        data:{
            cusId: $('#cusId').val(),
            name: $('#name').val(),
            address: $('#address').val(),
            salary: $('#salary').val()
        },
        success:function (res) {

        },
        error:function (err) {

        }
    })
});