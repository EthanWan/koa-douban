module.exports = `
doctype html
html
    head
        meta(charset="utf-8")
        meta(name="viewport" content="width=device-width, initail-scale=1")
        title Koa Server html
        link(href="https://cdn.bootcss.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" rel="stylesheet")
        script(src="https://cdn.bootcss.com/bootstrap/4.0.0-beta.2/js/bootstrap.bundle.min.js")
        script(src="https://cdn.bootcss.com/jquery/3.2.0/jquery.min.js")
    body
        .container
            .col-md-8
                h1 Hi #{you}
                p This is #{me}
            .col-md-4
                p 测试静态 Pug 页面
`