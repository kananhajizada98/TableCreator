Select();
function Qur () {
let n = Number(document.getElementById("slc").value) ;
let cdv= "" ;
for(i=1 ; i<=n ; i++){
cdv += "<tr>";
    for(j=1 ; j<=n ; j++){
        let x = j==(n+1)/2 || i==(n+1)/2 ? "*" : "";
        cdv+= `<td> ${x} </td>`;
    }
    cdv += "</tr>";
    
}
document.getElementById("tbl").innerHTML = cdv ; 




}
function Select() {
    let slc = "";
    for (let i = 1 ; i <=99 ; i+=2) {
        slc += `<option value="${i}"> ${i}</option>` ;
    }
    document.getElementById("slc").innerHTML = slc ;
}
