## Как добавить в код проекта изменения

0. Проверить в какой ветке
```bash
git checkout
```

1. Переместиться в ветку master: [git checkout] + [название ветки]
```bash
git checkout master
```

2. Обновить до состояния релиза: [git] + [pull]
```bash
git pull
```

3. Добавить ветку от той, в которой я был (от мастера): [git checkout -b] + [название ветки]
```bash
git checkout -b test
```

4. Изменить код в проекте.

5. Добавить все файлы: [git add] + [.]
```bash
git add .
```

6. Добавить комментарии: [git commit -m] + ['комментарии']
```bash
git commit -m 'тестовый комментарий'
```

7. Добавить изменения в ветку: [git push origin] + [название ветки]
```bash
git push origin test
```

8. Слить ветку локальную (test) с веткой master:
```bash
git checkout master
git merge test
```



	Добавить ssh ключ для доступа

Команды для git bush:
```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```

Ссылка на добавление:
[https://docs.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent](https://docs.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)



	Как лучше называть коммиты

1. [Название таска из jira] - [короткий комментарий, что было сделано]  
2. Полный комментарий в коммит, что сделано


	Команды Git

1. Клонировать проект себе в папку: [git clone] + [link из кнопки <clone> из git <ssh clone>]
```bash
git clone git@gitlab.com:test.io/test.git
```

2. Узнать в какой ветке я нахожусь: [git] + [checkout]
```bash
git checkout
```

3. Переместиться в ветку master: [git checkout] + [название ветки]
```bash
git checkout master
```

4. Удалить локальную ветку:
```bash
git branch -d <имя_ветки>
```

5. Удалить удалённую ветку:
```bash
git push origin --delete <имя_ветки>
```
или
```bash
git push origin :<имя_ветки>
```

6. Слить ветку локальную (news) с веткой master:
```bash
git checkout master
git merge news
```


По git посмотреть подробнее про github pages:
[https://pages.github.com/](https://pages.github.com/)

По git учебник: 
[https://git-scm.com/book/ru/v2](https://git-scm.com/book/ru/v2)
[https://habr.com/ru/post/233899/](https://habr.com/ru/post/233899/)
