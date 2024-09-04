describe("Esta es una suite", function() {
    it("Descripción de lo que espero", function() {
    expect("x").toBe("x");
    });
    it("Descripción de lo que espero", function() {
        expect("true").toBe("true");
        });
    describe("Matchers", function() {
        it("toBe", function() {
            expect("Hola").toBe("Hola");
            expect(1).toBe(1);
        })
        it("toEqual", function() {
            const arr1 = [1, 2]
            const arr2 = [1, 2]
            const obj1 = {name: "Homero"};
            const obj2 = {name: "Homero"}
            expect(arr1).toEqual(arr2);
            expect(obj1).toEqual(obj2);
        })
        it("toBeDefined", function() {
            let variable1 = "";
            let variable2 = null;
            expect(variable1).toBeDefined();
            expect(variable2).toBeDefined();
        });
        it("toBeUndefined", function() {
            let variable1;
            let variable2 = undefined;
            let variable3 = 7;
            expect(variable1).toBeUndefined();
            expect(variable2).toBeUndefined();
            expect(variable3).not.toBeUndefined();
        })
        it("toContain", function(){
            const arr1 = [1, 2];
            expect(arr1).toContain(1);
            expect(arr1).toContain(2);
            expect(arr1).not.toContain(3);
        })
    })
});

//* [] === [] => false in JS ???
//* const arr1 = [1, 2]
//* const arr2 = [1, 2]