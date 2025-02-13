import React, { useState } from 'react'
import styles from './StepForm.module.css'
import StepInput from '../../components/UI/StepInput/StepInput'

const StepForm = () => {
    const [formData, setFormData] = useState({
        formName: "",
        formAge: "",
        formCity: "",
        formEmail: "",
        formPassword: "",
        formConfirmPassword: "",
    });


    const handelSubmit = (event) => {
        event.preventDefault();
        if (formData.formPassword.length < 8) {
            console.log('Пароль должен состоять из 8 и более символов');

        } else if (!(formData.formPassword.valueOf() === formData.formConfirmPassword.valueOf())) {
            console.log("Пароли не совпадают");

        } else if (formData.formName.length > 0 && formData.formAge.length > 0 && formData.formCity.length > 0 && formData.formEmail.length > 0 && formData.formPassword.length > 0 && formData.formConfirmPassword.length > 0) {
            console.log("Data", { formData });
        } else {
            console.log("Заполните все поля");
        }
    }

    const handelChange = (event) => {
        // console.log(event.target.value);
        // console.log(event.target.name);
        setFormData((prev) => {
            console.log({ ...prev });
            return {
                ...prev,
                [event.target.name]: event.target.value
            }
        })
    }

    return (
        <div>
            <h3>StepForm</h3>

            <form className={styles.wrapper} onSubmit={handelSubmit}>
                <StepInput
                    labelText={"Имя"}
                    type={"text"}
                    id={"name"}
                    placeholder={"Введите ваше имя"}
                    onChange={handelChange}
                    name={"formName"}
                />
                <StepInput
                    labelText={"Возраст"}
                    type={"number"}
                    id={"age"}
                    placeholder={"Введите ваш возраст"}
                    onChange={handelChange}
                    name={"formAge"}
                />
                {formData.formName.length > 0 &&
                    formData.formAge.length > 0 &&
                    <StepInput
                        labelText={"Город проживания"}
                        type={"text"}
                        id={"city"}
                        placeholder={"Введите ваш город проживания"}
                        onChange={handelChange}
                        name={"formCity"}
                    />}
                {formData.formName.length > 0 &&
                    formData.formAge.length > 0 &&
                    <StepInput
                        labelText={"Почта"}
                        type={"email"}
                        id={"email"}
                        placeholder={"Введите вашу электронную почту"}
                        onChange={handelChange}
                        name={"formEmail"}
                    />}
                {formData.formCity.length > 0 &&
                    formData.formEmail.length > 0 &&
                    formData.formEmail.includes("@") &&
                    <StepInput
                        labelText={"Пароль"}
                        type={"password"}
                        id={"password"}
                        placeholder={"Придумайте пароль"}
                        onChange={handelChange}
                        name={"formPassword"}
                    />}
                {formData.formCity.length > 0 &&
                    formData.formEmail.length > 0 &&
                    formData.formEmail.includes("@") &&
                    <StepInput
                        labelText={"Подтвердите пароль"}
                        type={"password"}
                        id={"confirmPassword"}
                        placeholder={"Повторите придуманный ранее пароль"}
                        onChange={handelChange}
                        name={"formConfirmPassword"}
                    />}
                {formData.formCity.length > 0 &&
                    formData.formEmail.length > 0 &&
                    formData.formEmail.includes("@") &&
                    <button onClick={handelChange}>Отправить</button>
                }
            </form>
        </div>
    )
}

export default StepForm

/*
Создать компонент `StepForm`.

 Использовать `useState` для управления текущим шагом (`step`).

Создать три блока с инпутами

После того как заполнили все предыдущие инпуты, показывать следующие 

На последнем шаге добавить кнопку отправить

После отправки вывести данные формы в console.log

Добавить простую валидацию (например, проверку, что поля не пустые).

Поля:

`name: "",
email: "",
age: "",
city: "",
password: "",
confirmPassword: "",`
*/