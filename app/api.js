
const call = (url,name,data, callback) => {
	fetch(url+name+'.json',
		{
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json,text/plain'
			},
			body:JSON.stringify(data)
		})
		.then(resp => resp.json())
		.then(json => {
			if (callback) {
				console.log('API success', name, data, json);
				callback(json, null);
			}
		}).catch(error => {
		if (callback) {
			console.log('API FAIL', name, data, error);
			callback(null, error);
		}
	});
}

export default call;