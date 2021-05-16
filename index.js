function myFunction(){

    var node = document.createElement('li');
    var text = prompt('Enter Your Task')


    if(text==null || text.length==0  ){
        alert("Not entered any text")
        console.log(text)
    }
    else if(text!==null){
               
            var textnode = document.createTextNode( ' --' + text )
            node.appendChild(textnode)
            document.getElementById('myList').appendChild(node)
            alert('Added')    
        
    }
    else{
        alert('Task not added')
    }  
   
}

//del
function myFunction2(){
      
    var node = document.querySelectorAll('li');
    if(node.length == 0){
        alert("Deletion not possible")
    }
    else {
            // console.log(node.length)
        var task = parseInt(prompt('Which one you want to del')) 
        if(task !==null){
            if((node.length)>=task){
            
                document.getElementById('myList').removeChild(node[task -1])
                alert('Deleted')
            }
            else{
                alert('enter number within length of list')
            }
        }

    }
      
}

//edit
function myFunction3(){

    var node = document.querySelectorAll('li');
    var newNode = document.createElement('li');

    if(node.length == 0){
        alert("Editing not possible")
    }
    
    else {
        
        var task = parseInt(prompt('Which one you want to Edit')) 

        if((node.length)<task){
            alert("enter number within length of list ")     
        }

        else if((node.length)>=task){    
    
            var text = prompt('Enter your task')

            if(text==null || text.length==0  ){
                alert("Not entered any text")
                console.log(text)
            }

            else {
                var textnode = document.createTextNode( ' --' + text)
                 newNode.appendChild(textnode)
                document.getElementById('myList').replaceChild(newNode,node[task -1])
                // document.getElementById('myList').removeChild(node[task -1])
                alert('Saved')
            }

            
        }
       

    }

  
}

