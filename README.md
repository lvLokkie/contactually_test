Contactually test task
=====================

### Installation

```
npm install
```

### Run the example

```
npm run start
```

Browser should open automatically. Otherwise, navigate to the URL reported in the terminal

### Credits

* [lvlokkie](http://github.com/lvlokkie)


### Task
Необходимо реализовать редактор маршрутов - одностраничное приложение, в котором пользователь в интерактивном режиме может создавать на карте маршрут, указывая начальную, конечную и промежуточные точки движения. Для каждой точки маршрута можно посмотреть её адрес. 
Приложение визуально состоит из:
- текстового поля ввода для новых точек маршрута;
- списка уже введены точек маршрута;
- интерактивной карты.
> Приложение должно адекватно вести себя при изменении размера окна браузера, взаимное расположение элементов не можно меняться.
##### Task Functional Requirements
- Новая точка маршрута добавляется с помощью ввода её в названия в текстовом поле и нажатия Enter, введенная точка маршрута отображается в конце списка уже добавленных точек;
в текущем центре карты появляется маркер, обозначающий новую точку маршрута. +
- Напротив каждой точки маршрута в списке находится кнопка удаления, при её нажатии точка маршрута пропадает из списка,
 а с карты пропадает её маркер. +
- Порядок точек маршрута в списке можно изменять перетаскиванием. +
- Маркеры, соответствующие точка маршрута, можно перемещать по карте перетаскиваем. 
- Маркеры на карте соединены прямыми линиями в том порядке, в котором они находятся в список. 
Полученная таким образом ломаная изображает маршрут, первая точка в списке - начало маршрута,.
 последняя - конец маршрута. +
- При изменении порядка точке в списке или их удалении,
 А также при перемещении маркеров маршрут на карте автоматически перерисовывается. +-
- При клике на маркер появляется балун, а в балуне отображается название соответствующей ему точки. +

##### Task Technical Requirements
- Яндекс.Карты или Google Maps +
- React.js (либо тот фреймворк, с которыми имеете опыт) +
- Покрытие полученного кода тестами
- Ссылка на страницу с результатом и git-репозиторий с исходниками
- Инструкция для запуска проекта
