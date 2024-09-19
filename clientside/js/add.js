document.getElementById("frm").addEventListener("submit",async(e)=>{
    e.preventDefault();
    const name=document.getElementById("name").value;
    const age=parseInt(document.getElementById("age").value)
    const dob=document.getElementById("dob").value;
    const place=document.getElementById("place").value;
    const phone=document.getElementById("phone").value;
    const blood_group=document.getElementById("blood_group").value;
    console.log(name,age,dob,place,phone,blood_group);
    
})