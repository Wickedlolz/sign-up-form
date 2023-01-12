const baseUrl = 'https://www.toptal.com/developers/postbin/api/bin';

export async function signUp(formData) {
    return await fetch(baseUrl, {
        method: 'POST',
        // set mode to no-cors because have cors error and still looking how to fix it
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    });
}
