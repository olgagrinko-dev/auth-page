// Сверстать макет из 2 страниц. Сконнектить ссылками 2 страницы.
// На каждое поле поставить валидацию (пароль не должен быть менее 8 символов,
// регулярные выражения для почты / номера, при регистрации pwd, confirm pwd идентичны).
// После нажатия на кнопку срабатывает валидация. Нсли валидация прошла успешно,
// то вывести alert “Вы успешно зарегистрированы / авторизованы в системе”, в зависимости 
// от страницы. Если проверки не прошли, то вывсти alert с соответствующим сообщением об ошибке

class Test {
    constructor() {
        this.isValid();
    }

    isValid(mail, pwd) {
        if (!/^[a-z0-9_\.-]+@[a-z]+\.[a-z]{2,3}$/gm.test(mail) && !/^\+[0-9]+ \([0-9]+\)+ [0-9]+\-[0-9]+\-[0-9]+$/gm.test(mail)) throw new Error(`Некорректный ввод логина!`)
        if (!/^[A-Za-z0-9!@#$%^&*()_+-=]{8,}$/gm.test(pwd)) throw new Error(`Некорректный ввод пароля!`)
    }

    loginPage() {
        const btn = document.querySelector(`.login-btn`);
        const inp1 = document.querySelector(`.input-1`);
        const inp2 = document.querySelector(`.input-2`);
        btn.addEventListener(`click`, function () {
            try {
                let mail = inp1.value;
                let pwd = inp2.value;

                this.isValid(mail, pwd)

                alert(`Добро пожаловать!`);
                inp2.value = ``;

            } catch (error) {
                alert(error.message);
            }
        })
    }
}

const test = new Test();