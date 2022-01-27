//1

const parseCount = (count) => {
    const parsed = Number.parseInt(count);
    if (Number.isNaN(parsed)) {
        const parsedError = new Error("Невалидное значение");
        throw parsedError;
    }
    return parsed;
};

const validateCount = (count) => {
    try {
        const parsed = parseCount(count);
        return parsed;
    } catch (err) {
        return err;
    }
};

//2

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

        if (a + b <= c || a + c <= b || b + c <= a) {
            const triangleError = new Error(
                "Треугольник с такими сторонами не существует"
            );
            throw triangleError;
        }
    }
    getPerimeter() {
        const perimeter = this.a + this.b + this.c;
        return perimeter;
    }

    getArea() {
        const demiPerimeter = this.getPerimeter() / 2;
        const area = Math.sqrt(
            demiPerimeter *
            (demiPerimeter - this.a) *
            (demiPerimeter - this.b) *
            (demiPerimeter - this.c)
        );
        return Number(area.toFixed(3));
    }
}

const getTriangle = (a, b, c) => {
    try {
        return new Triangle(a, b, c);
    } catch (err) {
        let textError = "Ошибка! Треугольник не существует";
        return new Object({
            getPerimeter() {
                return textError;
            },

            getArea() {
                return textError;
            },
        });
    }
};