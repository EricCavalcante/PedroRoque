export default function Sobre() {
    return (
        <div className="flex flex-col gap-4 items-center justify-center text-center">
            <h1 className="text-3xl font-Titulo p-2">Sobre mim</h1>
            <div className="flex flex-col justify-center items-center gap-6 text-xl m-4 sm:flex-row">
                <img className="sm:w-80 h-96 sm:shadow-xl object-cover" src="./images/FotoRoque.jpeg"></img>
                <div className="text-center flex w-full sm:flex flex-col gap-4 sm:text-left sm:w-1/2">
                    <p>Me chamo Pedro Roque, tenho 21 anos, sou morador de Diadema e apaixonado por fotografia e esportes.</p>
                    <p>Em 2022, passei a reunir os conhecimentos da faculdade de Jornalismo com o meu trabalho pela prefeitura da cidade para a cobertura fotográfica de eventos e retratos de grandes personagens de Diadema. E foi assim que, em 2023, na oportunidade de cobrir a jornada histórica do time do Água Santa até a final do Paulistão, descobri minha paixão: eternizar grandes momentos de atletas através de fotos! </p>
                    <p>Por aqui, você encontra meu portfólio no futebol e outros trabalhos.</p>
                </div>
            </div>
        </div>
    )
}