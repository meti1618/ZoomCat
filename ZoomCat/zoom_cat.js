
/*start modal*/
const startmd = document.getElementById('bgStartModal')
const startC = document.getElementById('startContent')
let strContent = ' Welcome to ZoomCat. I make this game because I think cats are better than humans. To prove this. You were chosen to compete with our best version . are You Ready ? '
const yes = document.getElementById('yesBtn')
const no = document.getElementById('noBtn')
const zSpan = document.createElement('span')
zSpan.innerText = 'z'
zSpan.classList.add('Zspan');
let nextLeveC = `okay. You must found this in BackGround  :  `
let forcingC = 'did you seen the Saw ? If you have seen, you know that.in Question:"do you want to play game ?" There was no negative answer... You must found this in BackGround :'
const letsGo = document.getElementById('letsGoBtn')
let index = 0 ;
let intervaTime = 40;

let strwriter = window.setInterval(function(){writer(startC , strContent , strwriter , yes , no )},intervaTime)



function nextLevel() {
    zSpan.style.textAlign = 'center'
    zSpan.style.marginTop = '10px'
    yes.style.display = 'none'
    no.style.display = 'none'
    startC.innerText = ''
    index = 0 ;
    let nextLwriter = window.setInterval(function(){writer( startC ,nextLeveC ,nextLwriter , letsGo , letsGo , zSpan )},intervaTime)
    
}
function Forcing() {
    zSpan.style.textAlign = 'center'
    zSpan.style.marginTop = '10px'
    yes.style.display = 'none'
    no.style.display = 'none'
    startC.innerText = ''
    index = 0 ;
    let forcingwriter = window.setInterval(function(){writer( startC, forcingC ,forcingwriter , letsGo , letsGo , zSpan )},intervaTime)
}


function writer(elemnt , content , interval ,btn1 , btn2 ,child){
    if(index < content.length ){
        index++
        Slcontent = content.slice(0 , index)
        elemnt.innerText = `${Slcontent}`;
        console.log(Slcontent)
    }else{
        clearInterval(interval)
        btn1.style.display = 'flex'
        btn2.style.display = 'flex'
        elemnt.appendChild(child)

    }
    } 

/*timer && gameover*/
    let timer = 0 ; 
    let textSeconds  = document.getElementById('Second')
    let textMinutes = document.getElementById('Minutes')
    let Seconds = 0;
    let Minutes = 1;
    let timeIndex = 0 ;
    const bgGM = document.getElementById('bgGM');
    const goContent = document.getElementById('GOcontent')
    let goContentC = 'HAHAHAHA My little pussy killed you. Advanced Monkey!'
    let indexGO = 0 ;
    console.log(Second , Minutes)


    function calcTimer(){

        if(Minutes === 0 && Seconds === 0 ){
            bgGM.style.display = 'flex'



            let goInterval = window.setInterval(function(){
                if (indexGO < goContentC.length){
                    indexGO++
                    SLgoContentC = goContentC.slice(0 , indexGO)
                    goContent.innerText = `${SLgoContentC}`
                }else{
                    clearInterval(goInterval);
                }
            },90)


        }

        if(Seconds === 0){
            Minutes--
            Seconds += 60
        }
        Seconds--
        textSeconds.innerText = Seconds ;
        textMinutes.innerText = Minutes ;
    }

   function startGame(){
    startmd.style.display = 'none'
    timer = window.setInterval(calcTimer , 1000);

   }

/*seting modal*/

const bgSettingMd = document.getElementById('bgSetting')
const dropdown = document.getElementById('dropdown')
const dropdownO = document.getElementById('dropdownO')
const settingModal = document.getElementById('settingModal')
const footer = document.getElementById('footer')
let SEindexToggler = 0 ;
 function SMopener(){
    bgSettingMd.style.display = 'flex'
    clearInterval(timer)
}
function Continue(){
    bgSettingMd.style.display = 'none'
    timer = window.setInterval(calcTimer , 1000);
}
function Restart(){
    window.location.reload()
}
function dropdownF() {
    if (SEindexToggler === 0){
        dropdown.style.display = 'flex'
        angleRoteter(dropdownO , SEindexToggler)
        SEindexToggler++
    }else{
        dropdown.style.display = 'none'
        angleRoteter(dropdownO , SEindexToggler)
        SEindexToggler--
    }
}

function pinkMode(){
    document.body.style.backgroundColor = '#E646C5'
    bgSettingMd.style.backgroundColor = '#E646C5'
    footer.style.backgroundColor = '#E646C5'
    footer.style.borderTopColor = 'white'
}
function darkMode(){
    document.body.style.backgroundColor = '#000'
    bgSettingMd.style.backgroundColor = '#000'
    footer.style.backgroundColor = '#000'
    footer.style.borderTopColor = '#0094FF'

}
/*footer*/
const hoverOpner = document.getElementById('hoverOpner')
const Ficon = document.getElementById('footerIcon')
let FOindexToggler = 0 ;

function Fopener() {
    if (FOindexToggler === 0){
        hoverOpner.classList.add('OhoverOpner')
        hoverOpner.classList.remove('hoveropner')
        angleRoteter(Ficon , FOindexToggler)
        FOindexToggler++
    }else{
        hoverOpner.classList.add('hoveropner')
        hoverOpner.classList.remove('OhoverOpner')
        angleRoteter(Ficon , FOindexToggler)
        FOindexToggler--
    }
}




function angleRoteter(icon , index){
    if(index === 0){
        icon.style.transform =' rotate(180deg)'
    }else{
        icon.style.transform =' rotate(0deg)'
    }
}




/*ZoomCat && win*/
const cat = document.createElement('span');
cat.innerText = 'z'
cat.classList.add('ZoomCat');
cat.addEventListener('click' , win )
document.body.appendChild(cat);
cat.style.top = `${Math.random() * 100 }%`
cat.style.left = `${Math.random() * 100 }%`
cat.style.transform =`rotate(${Math.random()*100}deg)`
cat.style.fontSize = `${Math.random()*3}em`;
const bgWin = document.getElementById('bgWin')
const wincontent = document.getElementById('wincontent')
let wincontentC = 'i have only one Question . HOW?'
let indexWin = 0 ;
let audio = new Audio("./cat.mp3");

function win(){
    audio.play();
    bgWin.style.display = 'flex'
    let winInterval = window.setInterval(function(){
        if (indexWin < wincontentC.length){
            indexWin++
            SLwincontent = wincontentC.slice(0 , indexWin)
            wincontent.innerText = `${SLwincontent}`
        }else{
            clearInterval(winInterval);
        }
    },90)


}