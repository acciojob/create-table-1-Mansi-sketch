function insert_Row() {
	let table = document.getElementById('sampleTable');
	let insertAtTop = table.insertRow(0);
	insertAtTop.innerHTML +=  '<tr><td>New Cell1</td><td>New Cell2</td></tr>'
}
