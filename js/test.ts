declare var $:any;
function test(){
    let la='typescript';
    let mes=`  This is test for ${la}`;
    $('#container').append(mes);
}
export {test}