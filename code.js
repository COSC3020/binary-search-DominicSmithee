function binarySearch(list, element){
    if(list.length == 1){
        var mid = list[0];
    }else{
        var mid = list[list.length/2];
    }
    console.log(mid);
    console.log(list);
    if(list.length > 0){
        if(mid == element && list.length == 2){
                
                console.log('case 1');
                //console.log(list);
                //console.log(binarySearch.count);
                return list.indexOf(mid);
              
        }else if(element < mid){
                console.log('case 2');
                return binarySearch(list.slice(0,list.length/2), element);
        }else if(element > mid){
                console.log('case 3');
                return binarySearch(list.slice(list.length/2, list.length), element);
        }else{
            return;
        }
        //console.log(list);
        return list.indexOf(mid);
        }else{
            console.log('case 4');
            return -1;
        }
}

listy = [7,8,9,10];
elementy = 10;
console.log(binarySearch(listy, elementy));
