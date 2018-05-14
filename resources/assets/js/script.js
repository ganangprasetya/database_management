
// method to check has class using javascript
function hasClass(element, className) {
    return element.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(element.className);
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
    'use strict';
    window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false); })();

$(function(){

    $('[data-toggle="tooltip"]').tooltip()
    var $select = $('.selectize').selectize();
    $('.venobox').venobox();
    $('.input-selectize').selectize({
        persist: false,
        create: function(input){
            return {
                value: input,
                text: input
            }
        }
    });
    $(".datepicker").flatpickr({
        dateFormat: 'Y-m-d',
        wrap: true
    });

    $("#checkAll").click(function () {
        $("input[type='checkbox'].custom-control-input").prop('checked', $(this).prop('checked'));
    });

    $('button[type="submit"]').click(function(){
        validateSelectize();
    });
    $('.selectize').change(function(){
        validateSelectize();
    });
});

function validateSelectize()
{
    var is_required = $('.selectize').attr('required');
    if(typeof is_required !== false || is_required !== 'undefined')
    {
        var val_select = $('.selectize').val();
        if(val_select == '')
        {
            $('.selectize').addClass('is-invalid');
        }else{
            $('.selectize').removeClass('is-invalid');
        }
    }
}

function confirmButton(event, form, title='Are you sure?', text='Once deleted, you will not be able to recover this data', icon='warning'){
    swal({
        title: title,
        text: text,
        icon: icon,
        buttons: true,
        dangerMode: true,
    })
    .then((isConfirm) => {
        if (isConfirm) {
            $(form).submit();
        }
    });
}

function clickMenu(val){
    let navmiddle = $('.nav-middle');
    let navbottom = $('.nav-bottom');

    $(".menu-top").each(function(index){
        if($(this).data('key') == val){
            $(this).addClass('active');
        }else{
            $(this).removeClass('active');
        }
    });
    $(".menu-dropdown").each(function(index){
        if($(this).data('pair') == val){
            showDropdown($(this));
        }else{
            hideDropdown($(this));
        }
    });

    showDropdown(navmiddle);
    hideDropdown(navbottom);
    resetMenu();
}

function clickSubmenu(val)
{
    let navbottom = $('.nav-bottom');

    $(".menu-middle").each(function(index){
        if($(this).data('key') == val){
            $(this).addClass('active');
        }else{
            $(this).removeClass('active');
        }
    });
    $(".submenu-dropdown").each(function(index){
        if($(this).data('pair') == val){
            showDropdown($(this));
        }else{
            hideDropdown($(this));
        }
    });

    showDropdown(navbottom);
}

function resetMenu(){
    hideDropdown($(".submenu-dropdown"));
    notActiveMenu($(".menu-middle"));
    notActiveMenu($(".menu-bottom"));
}

function showDropdown(val){
    val.removeClass('d-none');
}
function hideDropdown(val){
    val.addClass('d-none');
}

function activeMenu(val){
    val.addClass('active');
}
function notActiveMenu(val){
    val.removeClass('active');
}

function checkAll()
{
    var checkboxes = document.getElementsByTagName('input'), val = null;
    for (var i = 0; i < checkboxes.length; i++)
    {
        if (checkboxes[i].type == 'checkbox')
        {
            if (val === null) val = checkboxes[i].checked;
            checkboxes[i].checked = val;
        }
    }
}

function toggleChecked(nilai){
    var elm = document.getElementById("checkedValues"+nilai);
    elm.checked = !elm.checked;
}
