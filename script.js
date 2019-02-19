$(document).ready(() => {
    // 配置使用bootstrap的组件
    $('#form-demo').submit(function (event) {
        const form = $(this)
        if(form[0].checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()
            console.log("表单验证未通过！")
        }

        form.addClass('was-validated')
    })
})