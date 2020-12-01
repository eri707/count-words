/*
    First solution 
*/
if(process.argv[2]){
    console.log(process.argv[2].split(' ').length);
}else {
    console.log('Please input some words');
}

/*
    Second solution 
*/
// early return if input missing
if(!process.argv[2]) return console.log('Please input some words');
// split input on spaces and report length 
console.log(process.argv[2].split(' ').length);
