// Сверстать макет из 2 страниц. Сконнектить ссылками 2 страницы.
// На каждое поле поставить валидацию (пароль не должен быть менее 8 символов,
// регулярные выражения для почты / номера, при регистрации pwd, confirm pwd идентичны).
// После нажатия на кнопку срабатывает валидация. Нсли валидация прошла успешно,
// то вывести alert “Вы успешно зарегистрированы / авторизованы в системе”, в зависимости 
// от страницы. Если проверки не прошли, то вывсти alert с соответствующим сообщением об ошибке

const btn = document.querySelector(`.login-btn`);
const inp1 = document.querySelector(`.input-1`);
const inp2 = document.querySelector(`.input-2`);

btn.addEventListener(`click`, function () {
    console.log(`test`);
    try {
        let mail = inp1.value;
        let pwd = inp2.value;

        if (!/^[a-z0-9_\.-]+@[a-z]+\.[a-z]{2,3}$/gm.test(mail) || !/^\+[0-9]+ \([0-9]+\)+ [0-9]+\-[0-9]+\-[0-9]+$/gm.test(mail)) {
            alert(`Неверный логин`);
            inp1.value = ``;            

        } else if (!/^[A-Za-z0-9!@#$%^&*()_+-=]{8,}$/gm.test(pwd)) {
            alert(`Неверный пароль`);
            inp2.value = ``;           

        } else if (/^[a-z0-9_\.-]+@[a-z]+.[a-z]{2,3}$/gm.test(mail) || /^\+[0-9]+ \([0-9]+\)+ [0-9]+\-[0-9]+\-[0-9]+$/gm.test(mail) && /^[A-Za-z0-9!@#$%^&*()_+-=]{8,}$/gm.test(pwd)) {
            alert(`Добро пожаловать!`);
        }

    } catch (error) {
        alert(error.message);
    }
})


