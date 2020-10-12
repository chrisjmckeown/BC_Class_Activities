const dog = {
    raining: true,
    noise: "Woof!",
    makeNoise: function () {
        if (this.raining)
            console.log(this.noise);
    }
}

const cat = {
    raining: false,
    noise: "Meow!",
    makeNoise: function () {
        if (this.raining)
            console.log(this.noise);
    }
}

cat.raining = true;
cat.makeNoise();
dog.makeNoise();

function massHysteria (cat, dog) {
    if (cat.raining && dog.raining)
        console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
}

massHysteria(cat, dog);
