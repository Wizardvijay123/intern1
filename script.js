function getinput(){
    
    const name=document.getElementById("name").value;
    const num=document.getElementById("nofpack").value;
    const status=document.getElementById("status").value;
    if (name.trim() === '' || num.trim() === ''|| status.trim() ==='') {
        alert('Please fill out both fields.');
        return;
    }
    const tableBody = document.getElementById('table').querySelector('tbody');
    // Create a new row
    const newRow = tableBody.insertRow();

    // Insert cells for name and email
    const nameCell = newRow.insertCell(0);
    const statusCell = newRow.insertCell(1);
    const numCell = newRow.insertCell(2);
    const delcell = newRow.insertCell(3);

    const delbtn=document.createElement('button');
    delbtn.innerHTML = '<i class="fas fa-trash"></i>'; 
    delbtn.className='dbtn';
    delbtn.onclick=function(){
        deleteRow(newRow,status);
        updateRowCount();
    }
    function deleteRow(row,status){
        row.remove();
        if(status=="under control")
            {
                 a-=1;
                 document.getElementById('onctrl').textContent = a;
            }
        else if(status=="out of control")
            {
            b-=1;
            document.getElementById('notctrl').textContent = b;
        }
    }
    delcell.appendChild(delbtn);
    nameCell.textContent = name;
    statusCell.textContent = status;
    numCell.textContent=num;

     // Clear input fields
     document.getElementById('name').value = '';
     document.getElementById('status').value = '';
     document.getElementById('nofpack').value = '';    
     updateRowCount(status)
}
var a=0;
var b=0;
function updateRowCount(status) {
    
    const tableBody = document.getElementById('table').querySelector('tbody');
    const rowCount = tableBody.rows.length; // Get the number of rows
    document.getElementById('count').textContent = rowCount - 1; // Display the row count
    if(status=="under control")
        {
             a+=1;
             document.getElementById('onctrl').textContent = a;
        }
    else if(status=="out of control")
        {
        b+=1;
        document.getElementById('notctrl').textContent = b;
    }
}

