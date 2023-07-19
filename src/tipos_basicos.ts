let estaChovendo: boolean = false;

estaChovendo = true;

let altura:number = 1.80;

let idade:number = 2;

const nacionalidade:string = 'brasileiro';


//________________________________________________//

                 //Array//

const colegas:string[] = ['lucas', 'fernanda', 'tarcio', 'thiago', 'fernando']

const tecnologias:Array<string> = ['js', 'css', 'html', 'sass']

//Array de apenas leitura, este metodo não tem >>> push <<< não podemos adicionar novos itens.

const notas: ReadonlyArray<number> = [5, 7, 8, 9, 5, 4, 2, 1]

const lista:[string, number, boolean] = ['Tarcio', 28, true]

//_____________Union Type________________//


//podemos usar string ou number nessa variável
let idadedoTarcio: string|number = 25;

//________any___________//

//any aceita qualquer tipagem

let dadosDaApi:any;

dadosDaApi = 10;
dadosDaApi = true;
dadosDaApi = [1,2,3,4]
dadosDaApi = 'string'





