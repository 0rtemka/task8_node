## Описание конечных точек API

### [GET] /users - получение всех пользователей

- Тело ответа:

        [
            {
                "id": string,
                "name": string,
                "email": string,
                "age": int
            },
            {
                "id": string,
                "name": string,
                "email": string,
                "age": int
            }, ...
        ]

- Пример запроса:

        fetch('http://localhost:5000/users').then(res => res.json())

- Пример ответа:

        [
            {
              id: 'b9a67743-378e-4434-8609-d73d6617ea5a',
              name: 'Eugen',
              email: 'eUgEn@mail.com',
              age: 30
            },
            {
              id: 'beb1c2ee-575e-42d9-971e-e627551e9f1b',
              name: 'Artem',
              email: 'ortemka@yandex.ru',
              age: 20
            }
        ]

### [GET] /users/sorted - получение пользователей, отсортированных по именам в алфавитном порядке

- Тело ответа:

        [
            {
                "id": string,
                "name": string,
                "email": string,
                "age": int
            },
            {
                "id": string,
                "name": string,
                "email": string,
                "age": int
            }, ...
        ]

- Пример запроса:

        fetch('http://localhost:5000/users/sorted').then(res => res.json())

- Пример ответа:

        [
            {
              id: 'beb1c2ee-575e-42d9-971e-e627551e9f1b',
              name: 'Artem',
              email: 'ortemka@yandex.ru',
              age: 20
            },
            {
              id: 'b9a67743-378e-4434-8609-d73d6617ea5a',
              name: 'Eugen',
              email: 'eUgEn@mail.com',
              age: 30
            }
        ]

### [GET] /users/:id - получение пользователя по id

- Параметры:
    - id: string - идентификатор пользователя, информацию о котором нужно вывести

- Тело ответа:

        {
            "id": string,
            "name": string,
            "email": string,
            "age": int
        }

- Пример запроса:

        fetch('http://localhost:5000/users/beb1c2ee-575e-42d9-971e-e627551e9f1b').then(res => res.json())

- Пример ответа:

        {
          id: 'beb1c2ee-575e-42d9-971e-e627551e9f1b',
          name: 'Artem',
          email: 'ortemka@yandex.ru',
          age: 20
        }

### [GET] /users/age/:age - получение пользователей, старше указанного возраста

- Параметры:
    - age: int - возраст, по которому будут определяться пользователи старше

- Тело ответа:

        [
            {
                "id": string,
                "name": string,
                "email": string,
                "age": int
            },
            {
                "id": string,
                "name": string,
                "email": string,
                "age": int
            }, ...
        ]

- Пример запроса:

        fetch('http://localhost:5000/users/age/20').then(res => res.json())

- Пример ответа:

        {
            id: 'b9a67743-378e-4434-8609-d73d6617ea5a',
            name: 'Eugen',
            email: 'eUgEn@mail.com',
            age: 30
        }

### [GET] /users/domain/:domain - получение пользователей с указанным доменом email

- Параметры:
    - domain: string - домен электронной почты (yandex, vk, mail и т. д.)

- Тело ответа:

        [
            {
                "id": string,
                "name": string,
                "email": string,
                "age": int
            },
            {
                "id": string,
                "name": string,
                "email": string,
                "age": int
            }, ...
        ]

- Пример запроса:

        fetch('http://localhost:5000/users/domain/yandex').then(res => res.json())

- Пример ответа:

        {
            id: 'beb1c2ee-575e-42d9-971e-e627551e9f1b',
            name: 'Artem',
            email: 'ortemka@yandex.ru',
            age: 20
        }

### [POST] /users - добавление пользователя

- Тело запроса: 

        {
            "name": string,
            "email": string,
            "age": int
        }

- Тело ответа:

        {
            "id": string
            "name": string,
            "email": string,
            "age": int
        }

- Пример запроса: 

        fetch("http://localhost:5000/users", {
            method: "POST",
            body: JSON.stringify({
              name: "user",
              email: "user@mail.com",
              age: 30
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
        }).then(res => res.json());

- Пример ответа: 

        {
            id: '4985b66e-dfeb-463e-80c9-beb74af673d9',
            name: 'user',
            email: 'user@mail.com',
            age: 30
        }

### [PUT] /users/:id - обновление пользователя по id 

- Параметры:
    - id: int - идентификатор пользователя, который будет обновлен

- Тело запроса: 

        {
            "name": string,
            "email": string,
            "age": int
        }

- Тело ответа:

        {
            "id": string,
            "name": string,
            "email": string,
            "age": int
        }

- Пример запроса: 

        fetch("http://localhost:5000/users/4985b66e-dfeb-463e-80c9-beb74af673d9", {
            method: "PUT",
            body: JSON.stringify({
              name: "user1",
              email: "user@yandex.ru",
              age: 30
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
        }).then(res => res.json());

- Пример ответа: 

        {
            id: '4985b66e-dfeb-463e-80c9-beb74af673d9',
            name: 'user1',
            email: 'user@yandex.ru',
            age: 30
        }


### [DELETE] /users/:id - удаление пользователя по id

- Параметры:
    - id: int - идентификатор пользователя, который будет удален

- Пример запроса: 

        fetch("http://localhost:5000/users/4985b66e-dfeb-463e-80c9-beb74af673d9", {
            method: "DELETE"
        })


 ## Валидация

 На запросы, которые имеют тело, предусмотрена базовая валидация - проверяется заполнения всех обязательных полей: name, email, age. Также проверяется корректность значений age (возможные значение от 1 до 150) и email (по регулярному выражению).

 - Пример запроса:

        fetch("http://localhost:5000/users", {
            method: "POST",
            body: JSON.stringify({
              name: "",
              email: "user%mail.com",
              age: -1
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
        }).then(res => res.json());


 - Пример ответа:

        {
            status: 400,
            message: 'name: field is empty; email: incorrect value; age: incorrect value'
        }

