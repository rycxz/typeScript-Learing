const saludarA = (fn) => {
    return fn('Hola mundo');
}
saludarA((name => {
    console.log(name);
}))
