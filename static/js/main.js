window.onload = async function() {
    const resultsElement = document.getElementById('results');

    const numberElement = document.getElementById('number');
    const buttonElement = document.getElementById('button');

    buttonElement.onclick = async function() {
        const response = await fetch(`/api/isEven?number=${numberElement.value}`);
        const result = await response.json();
        resultsElement.innerHTML = `Result: ${result}`;
    };
};