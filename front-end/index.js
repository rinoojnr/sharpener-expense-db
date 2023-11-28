let form = document.getElementById('expense-app');
let amount = document.getElementById('amount');
let description = document.getElementById('description');
let category = document.getElementById('category');
let ul = document.getElementById('expense-list');

let baseUrl = 'http://localhost:3000/';


window.addEventListener('DOMContentLoaded',()=>{
    axios.get(baseUrl)
    .then(resolve=>{
        for(let i=0;i<resolve.data.expense.length;i++){
            showOnScreen(resolve.data.expense[i]);
        }
    })
    .catch(err=>console.log(err));;
})


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let expenseData = {
        amount: amount.value,
        description: description.value,
        category: category.value
    }
    axios.post(`${baseUrl}add-expense`,{expenseData})
    .then((resolve)=>{
        showOnScreen(resolve.data);
    })
    .catch(err=>console.log(err));
    
});



function showOnScreen(data){
    let li = document.createElement('li');
    let text = document.createTextNode(`${data.amount} -- ${data.description} -- ${data.category}`)
    li.appendChild(text);

    let editButton = document.createElement('input');
    editButton.type = 'button';
    editButton.value = 'EDIT';
    li.appendChild(editButton);
    editButton.onclick = () =>{
        ul.removeChild(li);
        amount.value = data.amount;
        description.value = data.description;
        category.value = data.category;

        let upExpenseData = {
            amount: amount.value,
            description: description.value,
            category: category.value
        }
        axios.put(`${baseUrl}${data.id}`,{upExpenseData})
        .then((res)=>{

        })
        .catch(err=>console.log(err));
    }

    let deleteButton = document.createElement('input');
    deleteButton.type = 'button';
    deleteButton.value = 'DELETE';
    li.appendChild(deleteButton);
    deleteButton.onclick = () =>{
        ul.removeChild(li);
        axios.delete(`${baseUrl}${data.id}`).then((res)=>{
            console.log(res);
        }).catch((err)=>console.log(err));
        // axios.delete()
    }

    ul.appendChild(li);
}