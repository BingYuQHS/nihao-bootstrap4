$(document).ready(() => {
    // 配置使用bootstrap的组件
  

   $('.carousel').on('slide.bs.carousel',(event) => {
       console.log('slide: ',`
       方向：${ event.direction }
       从：${ event.from }
       到：${ event.to }
       `)
   })

   //监听slide
   $('.carousel').on('slid.bs.carousel',(event) => {
        console.log('slid: ',`
        方向：${ event.direction }
        从：${ event.from }
        到：${ event.to }
        `)
    })

    //让旋转木马动起来，放在此处有效果
    $('.carousel').carousel({
        interval: 3000
    })

})