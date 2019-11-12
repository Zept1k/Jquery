$(document).ready(function(){

    //Initializing a variables
    let pickedColor = "white";
    const $name = $("#itemDescribe");
    const $button = $("#addButton");
    const $radio = $('#colorPicker');
    const $list = $("#list");
    //not in DOM yet
    //const $checkbox = $('checkbox');

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
        if ($(this).css('background-color') != $(this).next().css('background-color')) {
        } else {
            $(this).css('background-color', pickedColor).next().css('background-color', pickedColor)
            // console.log($("input[type='checkbox']").attr('value'))
            // $(':checkbox').val(':checkbox'.checked = true )
        }
    }
// ============= Color picker (possible prob with css? - fixed)
    function colorPick(){
        let color =  $(this).attr('value');
        console.log(this,'XXXXXXXXXXXXXXXX',  $(this).attr('value'));
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

    // $('label').click(function(){
    //     console.log('We were here!');
    // });

//Main
    $button.on('click', CreateItem);
    $list.on('click', 'td', ClickHandler);
    $radio.on('click', 'label', colorPick);
});

// ========================= WORKS =================
// if ('content' in document.createElement('template')) {

//   // Instantiate the table with the existing HTML tbody and the row with the template
//   let newItem = document.querySelector('#newItem'),
//   td = newItem.content.querySelectorAll("td");
//   td[0].textContent = "TEST_CONTENT";

//   // клонируем новую строку и вставляем её в таблицу
//   let tb = document.getElementsByTagName("tbody");
//   let clone = document.importNode(newItem.content, true);
//   tb[0].appendChild(clone);

//   // создаём новую строку
//   td[0].textContent = "0384928528";

//  // клонируем новую строку и вставляем её в таблицу
//   clone = document.importNode(newItem.content, true);
//   tb[0].appendChild(clone);

// } else {
//   alert("Template doesn't support for your browser")
// }
// ====================== END OF WORKS BLOCK ==============