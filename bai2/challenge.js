
function lucky(){
    let header = document.getElementById("header")
    let content = document.getElementById("content")
    let input = document.getElementById("input")
    let btn = document.getElementById("btn")
    let ketqua = document.getElementById("ketqua").textContent
    let dem = 0
    
    btn.addEventListener('click', function(){
        let input_value = document.getElementById("input").value
        let randomNUmber =  Math.floor(Math.random() * 10) + 1;
        
        if(input_value<1 || input_value>10 || isNaN(input_value)){
            alert("nhập lại số từ 1 đến 10")
            document.getElementById("input").value = ""
            document.getElementById("ketqua").textContent="KẾT QUẢ"
        }

        else{

        if(input_value != randomNUmber){
            document.getElementById("ketqua").textContent = `Sai rồi, kết quả là: `+randomNUmber
           dem = dem + 1
            if(dem == 3){
                content.remove()
                header.insertAdjacentHTML('beforeend', `<div id="end">Bạn đã hết cơ hội, chúc may mắn lần sau</div>`)
            }
        }
        else {document.getElementById("ketqua").textContent = "Chúc mừng bạn đã trúng thưởng"
      
    }
        document.getElementById("input").value = ""
        
    }
    })
    
}

lucky()