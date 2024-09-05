function binarySearch(list, element) {
    let position = 0;
    if(list.length > 0){  
        for(i=0;i<list.length-1;i++){
            if(list[i] == element){
                position = i;
            }
        }
        return position;
    }else{
        return -1;
    }
}

//listy = [0,1,2,3,4,5,6,7];
//console.log(binarySearch(listy,3));
