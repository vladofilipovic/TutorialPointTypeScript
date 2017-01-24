function prikaz2(): string[] {
    return new Array("Mary", "Tom", "Jack", "Jill")
}

var brojevi: string[] = prikaz2()
for (var indeks in brojevi) {
    console.log(brojevi[indeks])
}