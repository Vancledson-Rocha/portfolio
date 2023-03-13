var navegacao = document.querySelectorAll('.naveg')
var listNav = Array.from(navegacao)



for(x = 0; x < listNav.length; x++){
    listNav[x].addEventListener('mouseenter', function (e){
        var i = listNav.indexOf(this)
        listNav[i].style.backgroundColor = '#3f3f3f97'
    })
}
for(x = 0; x < listNav.length; x++){
    listNav[x].addEventListener('mouseout', function (e){
        var i = listNav.indexOf(this)
        listNav[i].style.backgroundColor = '#000522'
    })
}
