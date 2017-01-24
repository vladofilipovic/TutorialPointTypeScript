function disp3(s1: string): void;
function disp3(n1: number, s1: string): void;
function disp3(x: any, y?: any): void {
    console.log(x);
    console.log(y);
}

disp3("abc")
disp3(1, "xyz");