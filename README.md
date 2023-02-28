# pair-game
Игра в пары.
Начальное состояние игры при открытии в браузере. На странице выводится поле 4 × 4 из квадратных карточек. Каждая карточка содержит цифру от 1 до 8. Пользователь не видит цифры — карточки расположены рубашкой вверх. На поле строго по две карточки с одинаковой цифрой, чтобы они могли образовать пару. Карточки расположены в случайном порядке.

Ход игры. Игрок может нажать на любую карточку. После нажатия карточка открывается — появляется цифра (карточка переворачивается). Далее игрок может открыть вторую карточку. Если открытые карточки содержат одинаковую цифру, они остаются открытыми до конца игры. Если вторая карточка содержит отличную от первой цифру, обе карточки закрываются, как только игрок откроет новую карточку. На поле остаются открытыми только найденные пары и 1-2 карточки, которые открывает игрок.

Конец игры. Как только игрок открыл все пары на поле, игра считается завершённой. Под полем с открытыми карточками появляется кнопка «Сыграть ещё раз», при нажатии на которую игра сбрасывается до начального состояния с заново перемешанными карточками.

В игре есть таймер 60 сек. Начальное значение таймера установлено в переменной currentCount = 60
