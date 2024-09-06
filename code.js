function binarySearch(list, element){
    if(list.length == 1){
        var mid = list[0];
    }else if(list.length % 2 == 0){
        var mid = list[list.length/2];
    }else{
        var mid = list[Math.floor(list.length/2)];
    }
    count = 0;
    originalArray = list;
    while(list.length != 0){
        count++;
        //console.log(list);
        if(mid == element || list.length == 1){  
            //console.log('case 1');
            return originalArray.indexOf(element);
        }else if(element < mid){
            //console.log('case 2');
            //return binarySearch(list.slice(0,list.length/2), element);
            list = list.slice(0,list.length/2);
        }else if(element > mid){
            //console.log('case 3');
            //console.log(list.slice(list.length/2,list.length));
            //return binarySearch(list.slice(list.length/2, list.length), element);
            //console.log(list.slice(Math.floor(list.length/2), list.length));
            list = list.slice(Math.floor(list.length/2), list.length);
    }else{
        return -1;
    }
    }
}

//listy = [0,1,2,3,4,5,6,7,8,9];
//console.log('list one: ' +binarySearch(listy, 9));

//listB = [0,1,2,3,4];
//console.log('list two: ' + binarySearch(listB, 0));
