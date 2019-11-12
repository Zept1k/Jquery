$(document).ready(function(){

    //Initializing a variables
    let pickedColor = "white";
    const $name = $("#itemDescribe");
    const $button = $("#addButton");
    const $radio = $("#colorPicker");
    const $list = $("#list");

//Random color for new item
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

//Colorize item
    function ClickHandler(){
        console.log(this);
        if ($(this).css('background-color') == $(this).next().css('background-color')) {
            $(this).css('background-color', pickedColor).next().css('background-color', pickedColor)
        }
    }
//Color picker
    function colorPick(){
        let color =  $(this).attr('value');
        $('label').css('border', 'none');
        $(this).css('border', '2px groove');
        return pickedColor = color;
    }
//Create new item
    function CreateItem(){
        let newColor = getRandomColor();
        const newItemCheck = $("<td bgcolor=" + `${newColor} width="40px"` + "><input type='checkbox'></td>");
        const newItemText = $("<td bgcolor=" + `${newColor}` + "></td>").text($name.val());
        $list.append( $("<tr>"), newItemCheck, newItemText, $("</tr>"));
        return console.log('New item added to list: ', $name.val(), 'With color: ', newColor);
    }
//Main
    $button.on('click', CreateItem);
    $list.on('click', 'td', ClickHandler);
    $radio.on('click', 'label', colorPick);
});