#shim layer with setTimeout fallback
@requestAnimFrame = window.requestAnimationFrame or 
                    window.webkitRequestAnimationFrame or 
                    window.mozRequestAnimationFrame or 
                    window.oRequestAnimationFrame or 
                    window.msRequestAnimationFrame or 
                    (callback, element) ->
                        window.setTimeout(callback, 1000 / 60)                          



amount = 60
colors = ['red', 'white', 'blue', 'white']

container = $('<div class="container">')

for num in [1..amount]  
    rect = $('<div>')
        .css({
            'border-radius': '5px'
            width: '20px'
            height: '20px'
            'background-color': colors[num % 4],
            'animation-iteration-count': 'infinite'
        })      

    container.append(rect)

container.appendTo document.body

items = container.find('div')

render = ->
    for item in items        
        angle = Math.sin((counter + _i) / 10) * 7 * 0.2
        scale = (1 - _i / amount) * 40

        #var delta = (mousePoint - item.position) / (i + 5);
        $(item).css({
            '-webkit-transform': "scale3d(#{scale},#{scale},1) rotate3d(0,0,1,#{angle}rad)"
        })

#       if (delta.length > 0.1)
#           item.position += delta;
#   }
# }

mouse_position = [100, 100]
$(document).on 'mousemove', (evt) ->    

counter = 0

animloop = ->
    counter++
    requestAnimFrame animloop
    render()

animloop()