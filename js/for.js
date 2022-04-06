
    function f_for(ITEM,html){
        let box = document.querySelector('[for="target"]')
        Object.values(ITEM).forEach(item => {
            box.innerHTML += html(item)    
        });

    }

    function f_for_reverse(ITEM,html){
        let box = document.querySelector('[for="target"]')
        Object.values(ITEM).reverse().forEach(item => {
            box.innerHTML += html(item)    
        });

    }