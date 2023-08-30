console.log("Script running")
document.querySelector('.cross').style.display="none"
document.querySelector('.openClose').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.lines').style.display='inline'
        document.querySelector('.cross').style.display='none'
    }
    else{
        document.querySelector('.lines').style.display='none'
        document.querySelector('.cross').style.display='inline'

    }
})
