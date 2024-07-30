
const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const Button = document.getElementById("search-btn");

Button.addEventListener("click", ()=>{
    let inputWord = document.getElementById("inp-word").value;
   fetch(`${url}${inputWord}`)
    .then((response)=> response.json())
    .then((data)=>{
        console.log(data);
        result.innerHTML = `
        
        <div class="word">
        <h3>${inputWord}</h3>
        <button>
            <i class="fa-sharp fa-solid fa-volume"></i>
        </button>
    </div>
</div>

<div class="details">
    <p>${data[1].meanings[0].synonyms}</p>
    <p>/${data[1].meanings[0].partOfSpeech}/</p>
</div>

<p class="word-meaning">
   ${data[1].meanings[0].definitions[0].definition}
</p>

<p class="word-example">
    ${data[1].meanings[0].definitions[0].example};
</p>
        `;
    } )
    .catch(()=> {
        result.innerHTML = `<h3 class="error"> Couldn't find the Word </h3>`;
    })

});