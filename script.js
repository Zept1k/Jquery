$(document).ready(function(){

//Initializing a variables
    let pickedColor = 'white';
    const $name = $('#itemDescribe');
    const $button = $('#addButton');
    const $radio = $('#colorPicker');
    const $list = $('#list');
    const items = [];
    let checkedItems = [];
    let id = 0;

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
    function clickHandler(){
            if ($(this).is(':checked')) {
            items.push($(this).attr('id'))
            items.forEach((element) => {
                //Dancing with tambourine
                let curNmb = Number(element) + 1;
                toString(curNmb);
                $(`#${curNmb}`).css('background-color', pickedColor);
            });
            checkedItems = items.filter(function(item, pos, self) {
                return self.indexOf(item) == pos;
            })
        }
    }
//Color picker
    function colorPick() {
        pickedColor= $(this).attr('value');
        $('div').css('border', 'none');
        $(this).css('border', '2px groove');
        checkedItems.forEach((element) => {
            //Dancing with tambourine
            let curNmb = Number(element) + 1;
            toString(curNmb);
            $(`#${curNmb}`).css('background-color', pickedColor);
        });
    }
//Create new item
    function createItem(){
        const $tr = $('tr');
        let newColor = getRandomColor();
        $list.append("<tr id = '0'><td><input type='checkbox'></td><td></td></tr>");
        //Dancing with tambourine
        $tr.last().css('background-color', newColor);
        $tr.last().attr('id', id);
        $('input:checkbox').last().attr('id', id);
        $('td').last().text($name.val());
        ++id;
    }
//Main
    $button.on('click', createItem);
    $list.on('change', 'input:checkbox', clickHandler);
    $radio.on('click', 'div', colorPick);
});