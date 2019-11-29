var newPoker = (r) => {
    $img.attr('data-poker', r)
        // 當img被按到的時候
    $btn.on('click', (event) => {
        $obj = $(event.target)
        $obj.attr('src', 'hw1.html')
    })

    // 產生 div 的 jQuery 物件在變數 $div
    $div = $('<div>').addClass('col').addClass('poker')

    // 將 $img 插入到 $div 內
    $div.append($img)

    // 將 $div 插入到網頁 id=data 的html element 裡面
    $('#data').append($div)
}