
namespace casting {
    
    let idade:any = 28;
    //toFixed é aapenas para numero
    //como nesse caso não sabemos o que a idade é usaremos o >>>> as <<<<
    (idade as number).toFixed();
    (idade as string).length;
    (idade as string[]).forEach(x => {
        console.log(x);
    })


    let nome:string = 35 as unknown as string;
    
}