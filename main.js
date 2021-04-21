const navItems = [
    {
        name:"Item 1",
        children:["Item 1.1", "Item 1.2", "Item 1.3"]
    },
    {
        name:"Item 2",
        children:[
            "Item 1.1",
            "Item 1.2",
            "Item 1.3",
            "Item 1.1",
            "Item 1.2",
            "Item 1.3"
        ]
    },
    {
        name:"Item 3",
    },
    {
        name:"Item 4",
    },
    {
        name:"Item 5",
    },
];

window.onload = function(){
    let i = 0;
    for(let a of navItems){
        document.getElementsByClassName("menu")[0].innerHTML +=`
            <span>` + a.name + `
                <div class="menu-block"></div>
            </span>`;
            if(a.children){
                for(let b of a.children){
                    document.getElementsByClassName("menu-block")[i].innerHTML +=`
                        <span>`+ b + `</span>
                    `;
                }
                i++;
            }
    }
}