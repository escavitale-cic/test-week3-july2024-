const URL = "https://jsonplaceholder.typicode.com/posts";

fetch(URL)
.then(response =>response.json())
.then( data => {
    
    //console.log(data); //--> Array di 100 oggetti
    //ogni oggetto contiene:
    /*body, id, title, userid*/
    
    //console.log(posts[5]) --> restituisce correttamente il post con id 6.
let container = document.createElement("div");
container.className = "container-fluid";
container.style.maxWidth = "1250px";
container.style.display = "flex";
container.style.flexWrap = "wrap"; 
container.style.justifyContent = "center";
document.body.append(container);
data.forEach(element => {
    let card = document.createElement("div");
    card.className = "card text-center";
    card.style.width = "300px";
    card.style.height = "300px";
    card.style.border = "solid 1px black";
    card.style.borderRadius = "5%";
    card.style.justifyContent = "space-between";
    card.style.margin = "10px"
    
    let cardBody = document.createElement("div");
    cardBody.className = "card-body";

    let cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.style.fontWeight = "bold";
    cardTitle.textContent = element.title;

    let cardDescription = document.createElement("p");
    cardDescription.className = "card-text";
    cardDescription.textContent = element.body;

    card.addEventListener("click",
        function(){
        let docu_2 = document.open("index2.html");
        docu_2.write(
`<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
    </head>

    <style>

        .container-fluid{
            display: flex;
            justify-content: center;
        }
        .card {
            width: 18rem;
            height: 18rem;
            border: solid 1px black;
            border-radius: 5%;
            display: flex;

            text-align: center;
            background-color: #fff;
            padding: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .card-body {
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 100%;
        }
        .card-title {
            font-weight: bold;
            margin-bottom: 10px;
        }
        .card-text {
            margin-top: 10px;
        }

        .btn-primary{
            margin-left: auto;
            margin-right: auto;
        }

    </style>

    <body>
        <!--Header della pagina-->
        <header id="header-text" class="text-center">
            <h1>Post Details</h1>
        </header>
        
    <div class="container-fluid">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${element.title}</h5>
                    <p class="card-text">${element.body}</p>
                </div>
            </div>
            </div>
        <a class="btn btn-primary text-center" href="index.html" role="button">Go Back</a>


        

        
        <footer></footer>

    </body>
    <script src="" async defer></script>
</html>`

)
    }
    )
    
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardDescription);
    card.appendChild(cardBody);
    container.appendChild(card);
});

}

    
);




