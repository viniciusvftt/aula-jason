$("#btlogin").click(
    function(){


        $.ajax({
            type: 'GET',
            url: 'http://jsonplaceholder.typicode.com/users',
            success:function(data){
                console.log(data);

            

        },
        error:function(data){

        }
    })  
    }) 
