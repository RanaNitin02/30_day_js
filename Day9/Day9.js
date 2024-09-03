    // ++++++++++ Activity 1 +++++++++++

    let div1 = document.getElementById('uniDiv')
    div1.textContent = 'Kida'

    let div2 = document.getElementsByClassName('mydiv')
    div2[0].style.backgroundColor = 'red';
    console.log(div2[0]);


    // ++++++++++ Activity 2 +++++++++++

    let newDiv = document.createElement('div')
    newDiv.textContent = 'mai hun naya div'
    document.body.append(newDiv);

    const names = ['Doraemon', 'Nobita', 'Shizuka', 'Suneo', 'Gian'];
    const ul = document.querySelector('#myList');

    for (let name of names) {
        let li = document.createElement('li');
        li.textContent = name;
        ul.appendChild(li);   
    }



    // ++++++++++ Activity 3 +++++++++++

    const removeDiv = document.getElementById('remove');
    if (removeDiv) {
        removeDiv.remove();
        console.log('Div has been removed');
    } else {
        console.log('No element found with ID "remove"');
    }

    if( ul && ul.lastElementChild ){
        ul.removeChild(ul.lastElementChild);
        console.log('Last <li> element has been removed');
    } else {
        console.log('No <li> elements found in the list');
    }


    // ++++++++++ Activity 4 +++++++++++
    let source = 'https://th.bing.com/th/id/R.712dfd9a00dbfdfa8fd55e5f426acaed?rik=tquT6sUegYbhtA&riu=http%3a%2f%2fimages6.fanpop.com%2fimage%2fphotos%2f40900000%2fPuppy-dogs-40949099-1280-1115.jpg&ehk=OHQ5dncG%2b5%2bWSpZjjcRKF6oW9lHgy%2fF69yt4z4lESyg%3d&risl=&pid=ImgRaw&r=0'


    const image = document.getElementById('img');
    if (image) {
        image.src = source;
        image.height = 200;
        image.width = 200;
        console.log('Image attributes set');
    } else {
        console.log('No element found with ID "img"');
    }


    if (div2.length > 0) {
        let firstDiv = div2[0];
        firstDiv.classList.remove('mydiv');
        firstDiv.classList.add('newClass');
        console.log(firstDiv.className);
    } else {
        console.log('No element found with class "mydiv"');
    }


    // ++++++++++ Activity 4 +++++++++++

    let button = document.getElementById('btn');
        button.addEventListener('click', () => {
        button.textContent = 'Submit';
        console.log('Button text changed to Submit');
    });

    button.addEventListener('mouseover',()=>{
        button.style.borderColor = 'red';
    })
