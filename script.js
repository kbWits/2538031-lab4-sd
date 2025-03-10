async function fetchData()
{
    try
    {
        
        const countryName= document.getElementById("inId").value;

        const response =await fetch(`https://restcountries.com/v3.1/name/${countryName}`);

        const info = await response.json();

        if (!response.ok)
        {
            throw new Error('Country not found')
        }
        const flag =info[0].flags.png;
        const imgElement = document.getElementById("countryFlag")


        imgElement.src=flag;
        imgElement.style.display="block"

        const capital = info[0].capital;
        document.getElementById("capital").textContent="Capital: " +capital;
        
        const pop =info[0].population;
        document.getElementById("pop").textContent="Population: "+ pop;

        const reg =info[0].region;
        document.getElementById("region").textContent="Region: "+ reg;
        

        let arr = info[0].borders;
        let list =document.getElementById("bList")

        for (let i =0; i< arr.length;i++)
        {
            const name= arr[i].name[0];
            let li = document.createElement('li');
            li.innerText=name;
            list.appendChild(li);
        }
    }

    catch(error)
    {
        console.error(error);
        alert("Error"+error.message)
    }
}