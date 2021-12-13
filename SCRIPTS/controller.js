function Click()
{
    var element = document.getElementById('NAME');
    element.focus();
}

function Send()
{
    let forma = document.getElementById('SUBMITION');
    let data = new FormData(forma);
    fetch('/', {
        method: 'POST',
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data).toString()
    }).then(() => console.log('Form successfully submitted')).catch((error) => alert(error))

}