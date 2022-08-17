

async function search_email(data){

    if(data.length >= 3){//verifica se no input foi digitado mais de 3 caracteres
        
        let result = await fetch('teste.php?name=' + data);
        result_search = await result.json();
        //console.log(result_search);

        var html = "<ul class='list-group position-fixed'>";
        
        for(i=0;i<result_search.length;i++){
            //console.log(result_search[i].email);
            //html +=`<li class='list-group-item list-group-item-action' onclick="get_user_id(${result_search[i].email})">${result_search[i].email}</li>`;
            html +="<li class='list-group-item list-group-item-action' onclick='get_user_id("+JSON.stringify(result_search[i].email)+")'>"+result_search[i].email+"</li>";
        }
        
        html += "</ul>";

        document.getElementById("result_html").innerHTML = html;
    }
}

function get_user_id(email){
    //console.log(email);
    result = JSON.stringify(email);
    console.log(email);
    document.getElementById('result').value = email;
    document.getElementById('search').value = email;
}

const close = document.getElementById('search');

document.addEventListener('click', e =>{
    const valid = close.contains(e.target);
    if(!valid){
        document.getElementById("result_html").innerHTML = '';
    }
});
