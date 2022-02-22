let year = prompt("Введите год", "");
if (year % 4 == 0)
{
    if (year % 100 == 0)
    {
        alert('True');
    }
    else{
        alert('False');
    }
}
else{
    alert('False');
}