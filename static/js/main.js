$('#btnSave').on('click',function () {
    $.ajax({
        url:"/test",
        type:"POST",
        data:{
            cusId: $('#cusId').val(),
            name: $('#name').val(),
            address: $('#address').val(),
            salary: $('#salary').val()
        },
        success:function (res) {
            if (res.state==='200'){
                alert("successfully saved !")
            }else {
                alert("bad request !")
            }
        },
        error:function (err) {

        }
    })
});

$('#btnSave').on('click',function () {
    $.ajax({
        url:"/test",
        type:"POST",
        data:{
            cusId: $('#cusId').val(),
            name: $('#name').val(),
            address: $('#address').val(),
            salary: $('#salary').val()
        },
        success:function (res) {
            if (res.state==='200'){
                alert("successfully saved !")
            }else {
                alert("bad request !")
            }
        },
        error:function (err) {

        }
    })
});

$('#btnSave').on('click',function () {
    $.ajax({
        url:"/test",
        type:"POST",
        data:{
            cusId: $('#cusId').val(),
            name: $('#name').val(),
            address: $('#address').val(),
            salary: $('#salary').val()
        },
        success:function (res) {
            if (res.state==='200'){
                alert("successfully saved !")
            }else {
                alert("bad request !")
            }
        },
        error:function (err) {

        }
    })
});