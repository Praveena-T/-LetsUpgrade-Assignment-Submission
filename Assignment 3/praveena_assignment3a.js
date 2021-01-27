/*
 ===========================
 Question 01
 ===========================
 */
var library = [
    {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true
    },
    {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true
    },
    {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false
    }];

    for(var i = 0; i<library.length; i++){
        
        if(library[i].readingStatus == true){
             var read = "Already read ";
             console.log(read + "'" +library[i].title + "'" + " by " + library[i].author);
        
         }
         else{
             var unread = "You still need to read ";
             console.log(unread + "'" +library[i].title + "'" + " by " + library[i].author);
        
         }
    }

