function longest(s){

let maxlen=0;

for(let i =0; i <s.length;i++){

    for(let j =0; j < s.length;j++){

        let set=new set(s[k]){
            if(set.has(s[k])){
                unique=false;
                break;
            }
            set.add(s[k]);
        }
    }
    if(unique){
        maxlen=Math.max(maxlen,j-i+1);
    }
}


}