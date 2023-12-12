$('#btnSave').on('click',function () {
    $.ajax({
        url:"/test",
        type:'POST',
        contentType:"application/json",
        data:{},
        success:function (res) {

        },
        error:function (err) {

        }
    })
});