let index = 0;

function changeColors(){
    let colors = ["red", "blue", "green", "yellow", "tan", "orange" ];

    document.getElementsByTagName("body")[0].
    style.background = colors[index++];

    if (index > colors.length -1)
    index = 0;
}

