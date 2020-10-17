//入口函数
$(function () {
    //单击'注册账号',页面跳转到注册页面
    $('#link_reg').on('click', function () {
        $('.login-box').hide()
        $('.reg-box').show()
    })
    //单击'去登陆'页面舔砖到登录页面
    $('#link_login').on('click', function () {
        $('.login-box').show()
        $('.reg-box').hide()
    })
})   