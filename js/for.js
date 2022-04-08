
    function f_for(ITEM,html){
        let container = document.querySelector('[for="target"]')
        Object.values(ITEM).forEach(item => {
            container.innerHTML += html(item)    
        });

    }

    function f_for_reverse(ITEM,html){
        let container = document.querySelector('[for="target"]')
        Object.values(ITEM).reverse().forEach(item => {
            container.innerHTML += html(item)    
        });

    }