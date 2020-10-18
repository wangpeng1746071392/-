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
    //从layui 中获取 form 对象
    var form = layui.form
    //通过form.verify幻术自定义校验规则
    form.verify({
        // 自定义了一个叫做 pwd 校验规则 \s
        pwd: [/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'],
        // 校验两次密码是否一致的规则
        repwd: function(value) {
          // 通过形参拿到的是确认密码框中的内容
          // 还需要拿到密码框中的内容
          // 然后进行一次等于的判断
          // 如果判断失败,则return一个提示消息即可
          var pwd = $('.reg-box [name=password]').val()
          if (pwd !== value) {
            return '两次密码不一致！'
          }
        }
    })

    var layer=layui.layer
    //监听注册表单的提交事件
    $('#form_reg').on('click', function (e) {
        //1.阻止默认提交事件
        e.preventDefault()
        var data = {
            username: $('#form_reg [name=username]').val(),
            password:$('#form_reg [name=password]').val()
        }
        $.post('http://ajax.frontend.itheima.net/api/reguser', data, function (res) {
            if (res.status !== 0) {
                return layer.msg(res.message)
            }
            layer.msg('注册成功,请登录!')
            //模拟人的点击事件
            $('#link_login').click()
        })
    })
})   

