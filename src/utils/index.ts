
const getFormatedDate = (dt: string | number | Date) => {
    let data = new Date(dt),
        dia = data.getDate().toString(),
        diaF = (dia.length === 1) ? '0' + dia : dia,
        mes = (data.getMonth() + 1).toString(),
        mesF = (mes.length === 1) ? '0' + mes : mes,
        anoF = data.getFullYear(),
        hour = ("0" + data.getHours()).slice(-2).toString(),
        minutes = ("0" + data.getMinutes()).slice(-2).toString(),
        seconds = ("0" + data.getSeconds()).slice(-2).toString();

    return   diaF +"/"+mesF +"/"+ anoF   + " às " + hour + ":" + minutes 

}

export default getFormatedDate