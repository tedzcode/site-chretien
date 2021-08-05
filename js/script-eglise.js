var bool=true;
function cache(id){
    if(bool==true){
        document.getElementById(id).style.display='none';
        bool=false;
    }else{
        document.getElementById(id).style.display='block';
        bool=true;
    }
}
cache('le-credo');